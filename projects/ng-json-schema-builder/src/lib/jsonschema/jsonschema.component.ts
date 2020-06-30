import { Component, OnInit, Input, ViewEncapsulation, ViewChild, forwardRef } from '@angular/core';
import { JsonSchemaService } from '../jsonschema.service';
import { StateService } from '../state.service';
// import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
    //  tslint:disable-next-line: component-selector
    selector: 'ng-jsonschema',
    templateUrl: './jsonschema.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => JsonSchemaComponent),
        multi: true
    }],
    styleUrls: ['./jsonschema.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class JsonSchemaComponent implements OnInit, ControlValueAccessor {
    // public editorOptions: JsonEditorOptions;

    // @ViewChild(JsonEditorComponent) editor: JsonEditorComponent; // , { static: true }

    @Input()
    schema: any = null;

    @Input()
    models: any = [];

    propagateChange: any = () => { }
    propagateTouch: any = () => { }
    showSelectorModal = false;
    showAddModelForm = false;

    heading = 'Designer';



    configs: any = {
        showMoreOptn: '',
        currModelType: [],
        extraArrayOptn: '',
        menuOpen: true
    };
    modelRef: string = '';
    mode;
    readonly;
    entity;
    selectedEntity;
    JsonSchema = new JsonSchemaService();
    hasChild = ['Object', 'OneOf', 'AllOf', 'AnyOf'];
    singleChild = ['OneOf', 'AllOf', 'AnyOf'];

    constructor(private state: StateService) {
        // this.editorOptions = new JsonEditorOptions() // this.options.mode = 'code'; //set only one mode
        // this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
        this.state.getState().subscribe(
            res => {
                this.showSelectorModal = res.showSelectorModal;
            },
            err => {
                console.error(`An error occurred: ${err.message}`);
            }
        );
    }
    writeValue(value: any): void {
        if (value !== undefined) {
            this.schema = value;
            this.initRootElement(this.schema);
        }
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn
    }
    registerOnTouched(fn: any): void {
        this.propagateTouch = fn
    }
    setDisabledState?(isDisabled: boolean): void {
        alert('disable')
    }
    ngOnInit() {
        if (!this.schema) {
            this.schema = {
                "type": "object"
            };
            this.initRootElement(this.schema);
        }
    }

    refreshSchema() {
        setTimeout(() => {
            console.log('Updating ng-model.', this.models);
            this.schema = this.JsonSchema.obj2schema(this.entity, this.models);
            this.propagateChange(this.schema);
        })
    }

    str(data) {
        return JSON.stringify(data, function (k, v) { if (v === undefined) { return null; } return v; }, '     ');
    }

    initRootElement(schema) {
        //  initialize the root
        this.mode = this.mode ? this.mode : 'object';
        if (schema) {
            this.entity = this.JsonSchema.schema2obj(schema, undefined, undefined, true, this.models, undefined);
            this.entity.root$$ = true;
            //TODO: check if this is required
            // this.JsonSchema.MODELS._id_ = this.getLastModelId(this.entity, 0);
            return;
        }
        this.entity = this.JsonSchema.newObject('##ROOT##', null, '$response');
        this.entity.root$$ = true;
    }

    //  generates a model based on the type and key
    generateModel(type, key) {
        let newModel;
        switch (type) {
            case 'Array':
                newModel = this.JsonSchema.newArray(key);
                break;
            case 'Boolean':
                newModel = this.JsonSchema.newBoolean(key);
                break;
            case 'Integer':
                newModel = this.JsonSchema.newInteger(key);
                break;
            case 'Number':
                newModel = this.JsonSchema.newNumber(key);
                break;
            case 'Null':
                newModel = this.JsonSchema.newNull(key);
                break;
            case 'Object':
                newModel = this.JsonSchema.newObject(key);
                break;
            case 'String':
                newModel = this.JsonSchema.newString(key);
                break;
            case '$ref':
                newModel = this.JsonSchema.new$ref(key);
                break;
            case 'OneOf':
            case 'AnyOf':
            case 'AllOf':
                newModel = this.JsonSchema.newXOf(type, key);
        }
        return newModel;
    }


    // recursively fine the parent and add the entity
    addNewProp(entity, e) {
        var addTo = 'Object';
        if (entity._type.indexOf('Object') >= 0) {
            addTo = 'Object';
        } else if (this.singleChild.indexOf(entity._type[0]) >= 0) { //as oneOf,allOf,anyOf are single select, entity._type is array of 1
            addTo = 'XOf';
        } else if (entity._items[0] && this.hasChild.indexOf(entity._items[0]._type[0]) >= 0) {
            addTo = 'Array';
        }

        // this.$dirty = true;
        switch (addTo) {
            case 'Object':
                var apic = this.JsonSchema.newString('', false, entity._parent + '.' + entity._key.replace('##ROOT##', 'data'));
                entity._properties.push(apic);
                // $timeout(function () {
                //     angular.element(e.currentTarget).parents('.objCont').find('.propCont').last().find('.model-key').focus();
                // });
                break;
            case 'Array':
                this.addNewPropArrObj(entity, entity._items[0]._type[0], e);
                break;
            case 'XOf':
                var apic = this.JsonSchema.newString('', false, entity._parent + '.' + entity._key.replace('##ROOT##', 'data'));
                apic._hideKey = true;
                entity._properties.push(apic);
                break;
            // $timeout(function () {
            //     angular.element(e.currentTarget).parents('.objCont').find('.propCont').last().find('.model-key').focus();
            // });
        }

        this.refreshSchema();
    };

    // Add property when array type is Object
    addNewPropArrObj(entity, addTo, e) {
        // this.$dirty = true;
        if (!entity._items) {
            return;
        }
        var apic = this.JsonSchema.newString('', false, entity._parent + '.' + entity._key.replace('##ROOT##', 'data') + '[0]');
        if (this.singleChild.indexOf(addTo) >= 0) {
            apic._hideKey = true;
        }
        entity._items[0]._properties.push(apic);
        // $timeout(function () {
        //     angular.element(e.currentTarget).parents('.objCont').find('.propCont').last().find('.model-key').focus();
        // });
    };

    // callback after the model changed
    modelChangesCallback(entity) {
        this.configs.currModelType = entity._type;
        this.selectedEntity = entity;
        if (entity._type.indexOf('Array') >= 0) {
            this.configs.showMoreOptn = 'array';
            if (entity._type.indexOf('$ref') >= 0) {
                this.configs.showMoreOptn = 'Array$ref';
                this.modelRef = '';
            }
        } else if (entity._type.indexOf('$ref') >= 0) {
            this.configs.showMoreOptn = '$ref';
            this.modelRef = '';
        } else {
            this.configs.showMoreOptn = '';
        }
        this.configs.extraArrayOptn = false;
    };

    setArrayType(type, entity, e) {
        var newM = this.generateModel(type, 'arrayEle');
        entity = this.selectedEntity;
        entity._items[0] = newM;
        if (type === '$ref') {
            this.configs.extraArrayOptn = true;
            this.modelRef = '';
        } else {
            this.configs.extraArrayOptn = false;
        }
        e.stopPropagation();
        this.refreshSchema()
    };

    //Defined in selectschema.component
    // setModelFor$Ref() {
    //     if (this.configs.extraArrayOptn) {
    //         this.selectedEntity._items[0]._value = this.modelRef.model;
    //         console.log(this.selectedEntity);
    //     } else {
    //         this.selectedEntity._value = this.modelRef.model;
    //     }
    // }

    removeEntity(entity) {
        const res = this.removeModel(this.entity, entity.__ID__);
        if (res !== undefined) {
            // this.data._properties.splice(res, 1);
            this.entity._properties.splice(res, 1);
        }
        this.refreshSchema();
    }

    removeModel(data, id, i = null) {
        // this.$dirty = true;
        if (data.__ID__ === id)
            return i;
        var res;
        for (var j = 0; j < data._type.length; j++) {
            var type = data._type[j];
            switch (type) {
                case 'Object':
                case 'OneOf':
                case 'AnyOf':
                case 'AllOf':
                    for (var j = 0; j < data._properties.length; j++) {
                        var val = data._properties[j];
                        res = this.removeModel(val, id, j);
                        if (res !== undefined) {
                            data._properties.splice(j, 1);
                        }
                    }
                    break;
                case 'Array':
                    if (data._items[0] && data._items[0]._properties) {
                        for (var k = 0; k < data._items[0]._properties.length; k++) {
                            var val = data._items[0]._properties[k];
                            res = this.removeModel(val, id, k);
                            if (res !== undefined) {
                                data._items[0]._properties.splice(k, 1);
                            }
                        }
                    }
                    break;
            }
        }

    }

    convertObj2Schema() {
        const schema = this.JsonSchema.obj2schema(this.entity, this.models);
        console.log(this.entity);
        this.schema = {
            json: schema,
            text: JSON.stringify(schema, null, '    '),
            dup: JSON.stringify(schema, null, '    ')
        };
        this.heading = 'JSON Schema';

    }

    convertSchema2Obj() {
        if (this.schema && this.schema.original !== this.schema.dup) {
            this.entity = this.JsonSchema.schema2obj(this.schema.json, undefined, undefined, true, this.models, undefined);
        }
        this.heading = 'Designer';
    }

    // $watch(function() {
    //     return this.$data;
    // }, function() {
    //     initRootElement();
    // });

    getLastModelId(data, lastId) {
        var id = data.__ID__;
        var idNum = parseInt(id.substring(6, id.length));
        if (idNum >= lastId)
            lastId = idNum;
        switch (data._type) {
            case 'Object':
                for (var i = 0; i < data._properties.length; i++) {
                    var val = data._properties[i];
                    if (typeof val === 'object' && val.__ID__) {
                        lastId = this.getLastModelId(val, lastId);
                    }
                }
                break;
            case 'Array':
                if (data._items[0] && data._items[0]._properties) {
                    for (var i = 0; i < data._items[0]._properties.length; i++) {
                        var val = data._items[0]._properties[i];
                        if (typeof val === 'object' && val.__ID__) {
                            lastId = this.getLastModelId(val, lastId);
                        }
                    }
                } else if (data._items[0]) {
                    lastId = this.getLastModelId(data._items[0], lastId);
                }
                break;
        }

        return lastId;
    }

    toggleSelectorModal(entity = null, e = null) {
        if (entity) {
            this.modelChangesCallback(entity);
        }
        this.state.setSelectorModel(!this.showSelectorModal);
    }


    downloadJSON() {
        const filename = 'schema.json';
        const text = this.str(this.schema);
        this.download(filename, text)
    }

    download(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
