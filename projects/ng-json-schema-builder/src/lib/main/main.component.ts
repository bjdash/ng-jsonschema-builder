import { Entity } from './../entity.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'ng-jsonschema-main',
    templateUrl: './main.component.html',
    providers: []
})
export class MainJsonSchemaComponent implements OnInit {
    @Input()
    entity: Entity;

    @Input()
    openMenu;

    @Input()
    refreshSchema;

    @Input()
    mode;

    @Input()
    models;

    @Input()
    $msg;

    @Input()
    removeEntity;

    @Input()
    addNewProp;

    showDetailsPan = false;
    ctrl = {
        expanded: true
    };

    ngOnInit() {
        console.log(this);
    }

    // keys(obj) {
    //     return Object.keys(obj);
    // }

    checkTypeObject(entity) {
        return entity._items && entity._items[0] && entity._items[0]._type[0] && entity._items[0]._type[0] === 'Object';
    }

    hasChild = ['Object', 'OneOf', 'AllOf', 'AnyOf']
    canAddChild(types, arrType) {
        return (this.hasChild.indexOf(types) >= 0 || types.some((v) => {
            return this.hasChild.indexOf(v) >= 0;
        }) || this.hasChild.indexOf(arrType) >= 0);
    }

    log(ent) {
        console.log(ent);
    }
}
