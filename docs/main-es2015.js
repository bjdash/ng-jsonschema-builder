(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/ng-json-schema-builder/__ivy_ngcc__/fesm2015/ng-json-schema-builder.js":
/*!*************************************************************************************!*\
  !*** ./dist/ng-json-schema-builder/__ivy_ngcc__/fesm2015/ng-json-schema-builder.js ***!
  \*************************************************************************************/
/*! exports provided: CustomDirectives, FieldJsonSchemaComponent, JsonSchemaComponent, MainJsonSchemaComponent, NgBrDirectives, NgJsonSchemaBuilder, SelectSchemaJsonSchemaComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDirectives", function() { return CustomDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldJsonSchemaComponent", function() { return FieldJsonSchemaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaComponent", function() { return JsonSchemaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainJsonSchemaComponent", function() { return MainJsonSchemaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBrDirectives", function() { return NgBrDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgJsonSchemaBuilder", function() { return NgJsonSchemaBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSchemaJsonSchemaComponent", function() { return SelectSchemaJsonSchemaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










function JsonSchemaComponent_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng-jsonschema-selectschema", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("refreshSchema", ctx_r2.refreshSchema.bind(ctx_r2))("selectedEntity", ctx_r2.selectedEntity)("openMenu", ctx_r2.toggleSelectorModal.bind(ctx_r2))("models", ctx_r2.models)("setArrayType", ctx_r2.setArrayType.bind(ctx_r2))("modelChangesCallback", ctx_r2.modelChangesCallback.bind(ctx_r2))("modelRef", ctx_r2.modelRef)("configs", ctx_r2.configs);
} }
function JsonSchemaComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "fieldset", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ng-jsonschema-main", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, JsonSchemaComponent_div_9_div_5_Template, 2, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("refreshSchema", ctx_r0.refreshSchema.bind(ctx_r0))("models", ctx_r0.models)("addNewProp", ctx_r0.addNewProp.bind(ctx_r0))("removeEntity", ctx_r0.removeEntity.bind(ctx_r0))("openMenu", ctx_r0.toggleSelectorModal.bind(ctx_r0))("entity", ctx_r0.entity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showSelectorModal);
} }
function JsonSchemaComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r1.schema.json), " ");
} }
function MainJsonSchemaComponent_div_0_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainJsonSchemaComponent_div_0_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainJsonSchemaComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainJsonSchemaComponent_div_0_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.ctrl.expanded = !ctx_r15.ctrl.expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainJsonSchemaComponent_div_0_span_4_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainJsonSchemaComponent_div_0_span_4_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.ctrl.expanded ? "glyphicon-triangle-bottom" : "glyphicon-triangle-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.ctrl.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.ctrl.expanded);
} }
function MainJsonSchemaComponent_div_0_span_9_span_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (#/definitions/", ctx_r21.models[ctx_r21.entity._items[0]._value].nameSpace, ")");
} }
function MainJsonSchemaComponent_div_0_span_9_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainJsonSchemaComponent_div_0_span_9_span_3_span_2_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " ] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r18.entity._items[0]._type[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[ ", ctx_r18.entity._items[0]._type[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.entity._items[0]._type[0] == "$ref");
} }
function MainJsonSchemaComponent_div_0_span_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "[Unspecified] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainJsonSchemaComponent_div_0_span_9_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(#/definitions/", ctx_r20.models[ctx_r20.entity._value] && ctx_r20.models[ctx_r20.entity._value].nameSpace, ")");
} }
function MainJsonSchemaComponent_div_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainJsonSchemaComponent_div_0_span_9_span_3_Template, 4, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainJsonSchemaComponent_div_0_span_9_span_4_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainJsonSchemaComponent_div_0_span_9_span_5_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", t_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", t_r17 === "Array" && ctx_r2.entity._items[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", t_r17 === "Array" && !ctx_r2.entity._items[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", t_r17 === "$ref" && ctx_r2.models);
} }
function MainJsonSchemaComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "[ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.entity._properties && ctx_r3.entity._properties.length || ctx_r3.entity._items && ctx_r3.entity._items[0]._properties && ctx_r3.entity._items[0]._properties.length || 0);
} }
function MainJsonSchemaComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainJsonSchemaComponent_div_0_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r22.showDetailsPan = false; return ctx_r22.refreshSchema(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainJsonSchemaComponent_div_0_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainJsonSchemaComponent_div_0_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.removeEntity(ctx_r24.entity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainJsonSchemaComponent_div_0_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 35);
} }
function MainJsonSchemaComponent_div_0_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainJsonSchemaComponent_div_0_span_19_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.entity._required = $event; })("ngModelChange", function MainJsonSchemaComponent_div_0_span_19_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.refreshSchema($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.entity._required);
} }
function MainJsonSchemaComponent_div_0_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.$msg);
} }
const _c0 = function () { return { standalone: true }; };
function MainJsonSchemaComponent_div_0_div_21_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainJsonSchemaComponent_div_0_div_21_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r32.entity._key = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r29.entity._key);
} }
function MainJsonSchemaComponent_div_0_div_21_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Common Validations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainJsonSchemaComponent_div_0_div_21_div_19_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r34.entity._required = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Required ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r30.entity._required)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
} }
function MainJsonSchemaComponent_div_0_div_21_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ng-jsonschema-field", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", type_r36, " Validations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", type_r36);
} }
function MainJsonSchemaComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Basic Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MainJsonSchemaComponent_div_0_div_21_div_6_Template, 5, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Desc: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "textarea", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainJsonSchemaComponent_div_0_div_21_Template_textarea_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r37.entity._description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Default:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainJsonSchemaComponent_div_0_div_21_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.entity._default = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MainJsonSchemaComponent_div_0_div_21_div_19_Template, 8, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MainJsonSchemaComponent_div_0_div_21_div_20_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.entity.root$$);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.entity._description)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.entity._default)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.entity.root$$);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.entity._type);
} }
function MainJsonSchemaComponent_div_0_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng-jsonschema-main", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prop_r41 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("refreshSchema", ctx_r40.refreshSchema)("addNewProp", ctx_r40.addNewProp)("models", ctx_r40.models)("removeEntity", ctx_r40.removeEntity)("openMenu", ctx_r40.openMenu)("entity", prop_r41);
} }
function MainJsonSchemaComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainJsonSchemaComponent_div_0_div_22_div_1_Template, 2, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.entity._properties);
} }
function MainJsonSchemaComponent_div_0_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng-jsonschema-main", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prop_r43 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("refreshSchema", ctx_r42.refreshSchema)("addNewProp", ctx_r42.addNewProp)("models", ctx_r42.models)("removeEntity", ctx_r42.removeEntity)("openMenu", ctx_r42.openMenu)("entity", prop_r43);
} }
function MainJsonSchemaComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainJsonSchemaComponent_div_0_div_23_div_1_Template, 2, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.entity._items[0]._properties);
} }
function MainJsonSchemaComponent_div_0_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainJsonSchemaComponent_div_0_button_24_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r44.addNewProp(ctx_r44.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u271A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r12.mode == "static");
} }
function MainJsonSchemaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainJsonSchemaComponent_div_0_span_4_Template, 3, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainJsonSchemaComponent_div_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.refreshSchema($event); })("ngModelChange", function MainJsonSchemaComponent_div_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.entity._key = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainJsonSchemaComponent_div_0_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.openMenu(ctx_r49.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MainJsonSchemaComponent_div_0_span_9_Template, 6, 5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MainJsonSchemaComponent_div_0_span_11_Template, 5, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainJsonSchemaComponent_div_0_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.showDetailsPan = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u270E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MainJsonSchemaComponent_div_0_div_15_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MainJsonSchemaComponent_div_0_button_16_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MainJsonSchemaComponent_div_0_span_18_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MainJsonSchemaComponent_div_0_span_19_Template, 3, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MainJsonSchemaComponent_div_0_span_20_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MainJsonSchemaComponent_div_0_div_21_Template, 21, 9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MainJsonSchemaComponent_div_0_div_22_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MainJsonSchemaComponent_div_0_div_23_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MainJsonSchemaComponent_div_0_button_24_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.entity.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.showDetailsPan ? "t_bg" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", (ctx_r0.mode == "list" || ctx_r0.mode == "static") && ctx_r0.entity.root$$);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canAddChild(ctx_r0.entity._type, ctx_r0.entity._items && ctx_r0.entity._items[0] && ctx_r0.entity._items[0]._type[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.entity.root$$);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx_r0.mode == "static")("ngModel", ctx_r0.entity._key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.entity._type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canAddChild(ctx_r0.entity._type, ctx_r0.entity._items && ctx_r0.entity._items[0] && ctx_r0.entity._items[0]._type[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.showDetailsPan);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showDetailsPan);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.entity.root$$ && ctx_r0.mode != "static");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.entity._description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.entity.root$$);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.mode == "list" || ctx_r0.mode == "static") && ctx_r0.entity.root$$);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showDetailsPan);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.ctrl.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.entity._items && ctx_r0.entity._items[0] && ctx_r0.entity._type.indexOf("Object") < 0 && ctx_r0.hasChild.indexOf(ctx_r0.entity._items[0]._type[0]) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canAddChild(ctx_r0.entity._type, ctx_r0.entity._items && ctx_r0.entity._items[0] && ctx_r0.entity._items[0]._type[0]) && !ctx_r0.entity.refTxt);
} }
function FieldJsonSchemaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.entity._disallowAdditional = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Disallow Additipnal Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "minProperties:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.entity._minProperties = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "maxProperties:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.entity._maxProperties = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.entity._disallowAdditional);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.entity._minProperties);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.entity._maxProperties);
} }
function FieldJsonSchemaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "minLength:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.entity._minLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "maxLength:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.entity._maxLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Pattern:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_1_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.entity._pattern = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Format:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_1_Template_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.entity._format = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "--no-format--");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "hostname");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "date-time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "ipv4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "ipv6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "uri");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Enum:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_1_Template_textarea_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.entity._enum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.entity._minLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.entity._maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.entity._pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.entity._format);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.entity._enum);
} }
function FieldJsonSchemaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_2_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.entity._uniqueItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Allow only unique items?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "minItems:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.entity._minItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "maxItems:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_2_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.entity._maxItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.entity._uniqueItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.entity._minItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.entity._maxItems);
} }
function FieldJsonSchemaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "minimum:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.entity._minimum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.entity._exclusiveMinimum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Exclude minimum ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "maximum:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.entity._maximum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_3_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.entity._exclusiveMaximum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Exclude maximum ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "multipleOf:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_3_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.entity._multipleOf = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Format:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_3_Template_select_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.entity._format = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "int32");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "int64");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Enum:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FieldJsonSchemaComponent_div_3_Template_textarea_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.entity._enum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.entity._minimum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.entity._exclusiveMinimum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.entity._maximum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.entity._exclusiveMaximum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.entity._multipleOf);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.entity._format);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.entity._enum);
} }
function FieldJsonSchemaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No validations for this type..\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FieldJsonSchemaComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No validations for this type..\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FieldJsonSchemaComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No validations for this type..\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectSchemaJsonSchemaComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_button_9_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.changeModelType("Array", ctx_r9.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Array");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.configs.currModelType.indexOf("Array") >= 0 ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_button_16_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.changeModelType("Null", ctx_r11.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.configs.currModelType.indexOf("Null") >= 0 ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_button_17_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.changeModelType("Object", ctx_r13.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Object");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.configs.currModelType.indexOf("Object") >= 0 ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_button_20_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.changeModelType("$ref", ctx_r15.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "$ref");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r3.configs.currModelType.indexOf("$ref") >= 0 ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_button_21_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.changeModelType("OneOf", ctx_r17.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "OneOf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r4.configs.currModelType.indexOf("OneOf") >= 0 ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_button_22_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.changeModelType("AnyOf", ctx_r19.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "AnyOf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r5.configs.currModelType.indexOf("AnyOf") >= 0 ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_button_23_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.changeModelType("AllOf", ctx_r21.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "AllOf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r6.configs.currModelType.indexOf("AllOf") >= 0 ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_div_24_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_div_24_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.setArrayType("Object", ctx_r24.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Object");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r23.selectedEntity._items[0] && ctx_r23.selectedEntity._items[0]._type[0] == "Object" ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Array Items Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_div_24_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.setArrayType("Unspecified", ctx_r26.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Unspecified");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_div_24_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.setArrayType("Integer", ctx_r28.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Integer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_div_24_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.setArrayType("Boolean", ctx_r29.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_div_24_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.setArrayType("Number", ctx_r30.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SelectSchemaJsonSchemaComponent_div_24_button_12_Template, 2, 1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_div_24_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.setArrayType("String", ctx_r31.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "String");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_div_24_Template_button_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.setArrayType("$ref", ctx_r32.entity, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "$ref");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.selectedEntity._items[0] && ctx_r7.selectedEntity._items[0]._type[0] ? "" : "t_bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.selectedEntity._items[0] && ctx_r7.selectedEntity._items[0]._type[0] == "Integer" ? "t_bg" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.selectedEntity._items[0] && ctx_r7.selectedEntity._items[0]._type[0] == "Boolean" ? "t_bg" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.selectedEntity._items[0] && ctx_r7.selectedEntity._items[0]._type[0] == "Number" ? "t_bg" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.mode != "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.selectedEntity._items[0] && ctx_r7.selectedEntity._items[0]._type[0] == "String" ? "t_bg" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.selectedEntity._items[0] && ctx_r7.selectedEntity._items[0]._type[0] == "$ref" ? "t_bg" : "");
} }
function SelectSchemaJsonSchemaComponent_div_25_select_4_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", id_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("#/definitions/", ctx_r35.models[id_r36].nameSpace, " (", ctx_r35.models[id_r36].name, ")");
} }
function SelectSchemaJsonSchemaComponent_div_25_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_div_25_select_4_Template_select_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); return $event.stopPropagation(); })("change", function SelectSchemaJsonSchemaComponent_div_25_select_4_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.setModelFor$Ref(); })("ngModelChange", function SelectSchemaJsonSchemaComponent_div_25_select_4_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r40.modelRef = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectSchemaJsonSchemaComponent_div_25_select_4_option_1_Template, 2, 3, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r33.modelRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r33.keys(ctx_r33.models));
} }
function SelectSchemaJsonSchemaComponent_div_25_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No models found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectSchemaJsonSchemaComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select model");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectSchemaJsonSchemaComponent_div_25_select_4_Template, 2, 2, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SelectSchemaJsonSchemaComponent_div_25_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.models);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.models);
} }
class JsonSchemaService {
    constructor() {
        this.xxxID = Math.random();
        this.MODELS = {
            Default: {
                _key: '',
                _title: '',
                _description: '',
                _$ref: '',
                _default: '',
                _enum: '',
                _type: '',
                _required: false,
                __ID__: '',
                _parent: '',
                _hideKey: false
            },
            _id_: 0
        };
        this.additional = {
            forObject: {
                _properties: [],
                _additionalProperties: [],
                _disallowAdditional: false,
                _maxProperties: undefined,
                _minProperties: undefined,
                _type: ['Object'],
                _hasChild: true
            },
            forString: {
                _format: '',
                _pattern: undefined,
                _maxLength: undefined,
                _minLength: undefined,
                _type: ['String']
            },
            forArray: {
                _items: [],
                _maxItems: undefined,
                _minItems: undefined,
                _uniqueItems: undefined,
                _type: ['Array']
            },
            forInteger: {
                _format: '',
                _maximum: undefined,
                _minimum: undefined,
                _exclusiveMaximum: undefined,
                _exclusiveMinimum: undefined,
                _multipleOf: undefined,
                _type: ['Integer']
            },
            forNumber: {
                _format: '',
                _maximum: undefined,
                _minimum: undefined,
                _exclusiveMaximum: undefined,
                _exclusiveMinimum: undefined,
                _multipleOf: undefined,
                _type: ['Number']
            },
            for$ref: {
                _type: ['$ref'],
                _value: '',
                _path: '#/definitions/'
            },
            forOneOf: {
                _type: ['OneOf'],
                _properties: [],
                _hasChild: true
            },
            forAnyOf: {
                _type: ['AnyOf'],
                _properties: [],
                _hasChild: true
            },
            forAllOf: {
                _type: ['AllOf'],
                _properties: [],
                _hasChild: true
            }
        };
        this.fields = this.additional;
        /*MODELS.copyCommonProperties = function (newModel, oldModel) {
            if (newModel === undefined || oldModel === undefined)
                return newModel;
            newModel._description = oldModel._description;
            newModel._required = oldModel._required;
            return newModel;
        };*/
    }
    deepCopy(x) {
        return JSON.parse(JSON.stringify(x));
    }
    newArray(key, parent) {
        var newArr = Object.assign(Object.assign({}, this.MODELS.Default), this.deepCopy(this.additional.forArray));
        this.MODELS._id_ += 1;
        newArr.__ID__ = '$model' + this.MODELS._id_;
        newArr._key = key;
        newArr._parent = (parent || '');
        return newArr;
    }
    ;
    ;
    newBoolean(key, parent) {
        var newBool = Object.assign(Object.assign({}, this.MODELS.Default), { _type: ['Boolean'] });
        this.MODELS._id_ += 1;
        newBool.__ID__ = '$model' + this.MODELS._id_;
        newBool._key = key;
        newBool._parent = (parent || '');
        return newBool;
    }
    ;
    newInteger(key, parent) {
        var newInt = Object.assign(Object.assign({}, this.MODELS.Default), this.deepCopy(this.additional.forInteger));
        this.MODELS._id_ += 1;
        newInt.__ID__ = '$model' + this.MODELS._id_;
        newInt._key = key;
        newInt._parent = (parent || '');
        return newInt;
    }
    ;
    newNumber(key, parent) {
        var newNum = Object.assign(Object.assign({}, this.MODELS.Default), this.deepCopy(this.additional.forNumber));
        this.MODELS._id_ += 1;
        newNum.__ID__ = '$model' + this.MODELS._id_;
        newNum._key = key;
        newNum._parent = (parent || '');
        return newNum;
    }
    ;
    newNull(key, parent) {
        var newNull = Object.assign(Object.assign({}, this.MODELS.Default), { _type: ['Null'] });
        this.MODELS._id_ += 1;
        newNull.__ID__ = '$model' + this.MODELS._id_;
        newNull._key = key;
        newNull._parent = (parent || '');
        return newNull;
    }
    ;
    newObject(key, props = null, parent) {
        var newObj = Object.assign(Object.assign({}, this.MODELS.Default), this.deepCopy(this.additional.forObject));
        this.MODELS._id_ += 1;
        newObj.__ID__ = '$model' + this.MODELS._id_;
        newObj._key = key;
        if (props) {
            newObj._properties = props;
        }
        newObj._parent = (parent || '');
        return newObj;
    }
    ;
    newString(key, required, parent) {
        var newStr = Object.assign(Object.assign({}, this.MODELS.Default), this.deepCopy(this.additional.forString));
        if (required) {
            newStr._required = true;
        }
        this.MODELS._id_ += 1;
        newStr.__ID__ = '$model' + this.MODELS._id_;
        newStr._key = key;
        newStr._parent = (parent || '');
        return newStr;
    }
    ;
    new$ref(key, value, parent, path) {
        var newRef = Object.assign({}, this.deepCopy(this.additional.for$ref));
        if (path)
            newRef._path = path;
        this.MODELS._id_ += 1;
        newRef.__ID__ = '$model' + this.MODELS._id_;
        newRef._key = key;
        newRef._value = value;
        newRef._parent = (parent || '');
        return newRef;
    }
    ;
    newXOf(type, key, props, parent) {
        var newXOf = Object.assign(Object.assign({}, this.MODELS.Default), this.deepCopy(this.additional['for' + type]));
        this.MODELS._id_ += 1;
        newXOf.__ID__ = '$model' + this.MODELS._id_;
        newXOf._key = key;
        if (props) {
            newXOf._properties = props;
        }
        newXOf._parent = (parent || '');
        return newXOf;
    }
    ;
    copy(data) {
        if (data)
            return JSON.parse(JSON.stringify(data));
        else
            return data;
    }
    getObjPropertyByKey(obj, key) {
        if (obj && obj._properties && obj._properties.length > 0) {
            var found = false;
            for (var i = 0; i < obj._properties.length; i++) {
                var prop = obj._properties[i];
                if (prop._key === key)
                    found = prop;
                if (found)
                    return found;
            }
        }
        return false;
    }
    ;
    obj2schema(entity, models) {
        var schema = {};
        schema.type = [];
        for (let x = 0; x < entity._type.length; x++) {
            const type = entity._type[x];
            switch (type) {
                case 'Object':
                    schema.type.push('object');
                    if (entity._description) {
                        schema.description = entity._description;
                    }
                    if (entity._minProperties >= 0) {
                        schema.minProperties = entity._minProperties;
                    }
                    if (entity._maxProperties >= 0) {
                        schema.maxProperties = entity._maxProperties;
                    }
                    if (entity._disallowAdditional) {
                        schema.additionalProperties = !entity._disallowAdditional;
                    }
                    if (entity._properties.length > 0) {
                        schema.properties = {};
                        schema.required = [];
                        for (var i = 0; i < entity._properties.length; i++) {
                            var val = entity._properties[i];
                            if (val && val._type) {
                                var res = this.obj2schema(val, models);
                                schema.properties[val._key] = res;
                                if (val._required) {
                                    schema.required.push(val._key);
                                }
                            }
                        }
                        if (schema.required.length === 0) {
                            delete schema.required;
                        }
                    }
                    break;
                case 'OneOf':
                case 'AnyOf':
                case 'AllOf':
                    delete schema.type;
                    schema[type[0].toLowerCase() + type.slice(1)] = [];
                    if (entity._description) {
                        schema.description = entity._description;
                    }
                    for (var i = 0; i < entity._properties.length; i++) {
                        var val = entity._properties[i];
                        if (val && val._type) {
                            var res = this.obj2schema(val, models);
                            schema[type[0].toLowerCase() + type.slice(1)].push(res);
                        }
                    }
                    break;
                case 'String':
                    schema.type.push('string');
                    if (entity._description) {
                        schema.description = entity._description;
                    }
                    if (entity._minLength >= 0) {
                        schema.minLength = entity._minLength;
                    }
                    if (entity._maxLength >= 0) {
                        schema.maxLength = entity._maxLength;
                    }
                    if (entity._pattern) {
                        schema.pattern = entity._pattern;
                    }
                    if (entity._format) {
                        schema.format = entity._format;
                    }
                    if (entity._default) {
                        schema.default = entity._default;
                    }
                    if (entity._enum) {
                        const _enum = '[' + entity._enum + ']';
                        try {
                            schema.enum = JSON.parse(_enum);
                        }
                        catch (e) {
                            delete schema.enum;
                        }
                    }
                    break;
                case 'Array':
                    schema.type.push('array');
                    if (entity._description) {
                        schema.description = entity._description;
                    }
                    if (entity._default) {
                        schema.default = entity._default;
                    }
                    if (entity._uniqueItems) {
                        schema.uniqueItems = entity._uniqueItems;
                    }
                    if (entity._minItems >= 0) {
                        schema.minItems = entity._minItems;
                    }
                    if (entity._maxItems >= 0) {
                        schema.maxItems = entity._maxItems;
                    }
                    if (entity._items && entity._items[0]) {
                        schema.items = this.obj2schema(entity._items[0], models);
                    }
                    break;
                case 'Integer':
                case 'Number':
                    schema.type.push(type === 'Integer' ? 'integer' : 'number');
                    if (entity._description) {
                        schema.description = entity._description;
                    }
                    if (entity._default) {
                        schema.default = entity._default;
                    }
                    if (entity._minimum >= 0) {
                        schema.minimum = entity._minimum;
                    }
                    if (entity._maximum >= 0) {
                        schema.maximum = entity._maximum;
                    }
                    if (entity._exclusiveMinimum) {
                        schema.exclusiveMinimum = entity._exclusiveMinimum;
                    }
                    if (entity._exclusiveMaximum) {
                        schema.exclusiveMaximum = entity._exclusiveMaximum;
                    }
                    if (entity._multipleOf >= 0) {
                        schema.multipleOf = entity._multipleOf;
                    }
                    if (entity._format) {
                        schema.format = entity._format;
                    }
                    if (entity._enum) {
                        const _enum = '[' + entity._enum + ']';
                        try {
                            schema.enum = JSON.parse(_enum);
                        }
                        catch (e) {
                            delete schema.enum;
                        }
                    }
                    break;
                case 'Boolean':
                    schema.type.push('boolean');
                    if (entity._description) {
                        schema.description = entity._description;
                    }
                    if (entity._default) {
                        try {
                            const bool = JSON.parse(entity._default);
                            if (typeof bool === 'boolean') {
                                schema.default = bool;
                            }
                        }
                        catch (e) {
                        }
                    }
                    break;
                case 'Null':
                    schema.type.push('null');
                    if (entity._description) {
                        schema.description = entity._description;
                    }
                    if (entity._default) {
                        schema.default = entity._default;
                    }
                    break;
                case '$ref':
                    let path = '';
                    if (models && models[entity._value] && models[entity._value].nameSpace) {
                        path = models[entity._value].nameSpace;
                    }
                    schema.$ref = (entity._path || '#/definitions/') + (path || entity._value);
                    delete schema.type;
            }
        }
        if (schema.type && schema.type.length === 1) {
            var t = schema.type[0];
            schema.type = t;
        }
        return schema;
    }
    copyProps(obj, newModel) {
        for (const key in newModel) {
            if (!key) {
                continue;
            }
            const val = newModel[key];
            if (!obj.hasOwnProperty(key)) {
                obj[key] = val;
            }
        }
        ;
    }
    schema2obj(schema, key, required, isRoot, modelObjs, parent) {
        //TODO: If schema has definitions defined, prepopulate modelObjs with that
        if (!schema) {
            schema = this.newObject('##ROOT##', null, '$response');
            schema.root$$ = true;
            return schema;
        }
        if (typeof schema === 'string') {
            try {
                schema = JSON.parse(schema);
            }
            catch (e) {
                return null;
            }
        }
        if (key === undefined)
            key = '##ROOT##';
        var parentDelim = '.';
        if (!key)
            parentDelim = '';
        if (!required)
            required = false;
        if (!parent)
            parent = '$response';
        var obj;
        //add type if missing
        if (!schema.type) {
            if (schema.properties)
                schema.type = 'object';
            else if (schema.items)
                schema.type = 'array';
            else if (schema.$ref)
                delete schema.type;
            else if (schema.oneOf)
                schema.type = 'OneOf';
            else if (schema.anyOf)
                schema.type = 'AnyOf';
            else if (schema.allOf)
                schema.type = 'AllOf';
            else
                schema.type = 'string';
        }
        if (!(schema.type instanceof Array)) {
            schema.type = [schema.type];
        }
        //var types = schema.type;
        for (var x = 0; x < schema.type.length; x++) {
            var type = schema.type[x];
            var newModel;
            switch (type) {
                case 'object':
                    newModel = Object.assign({}, this.deepCopy(this.newObject(key, null, parent)));
                    if (obj && obj._type && obj._type.length > 0) {
                        obj._type.push(newModel._type[0]);
                        this.copyProps(obj, newModel);
                    }
                    else {
                        obj = newModel;
                    }
                    if (schema.description) {
                        obj._description = schema.description;
                    }
                    if (schema.minProperties >= 0) {
                        obj._minProperties = schema.minProperties;
                    }
                    if (schema.maxProperties >= 0) {
                        obj._maxProperties = schema.maxProperties;
                    }
                    if (schema.hasOwnProperty('additionalProperties')) {
                        obj._disallowAdditional = !schema.additionalProperties;
                    }
                    schema.properties && Object.keys(schema.properties).forEach(_key => {
                        let entity = schema.properties[_key];
                        var req = false;
                        if (schema.required) {
                            req = schema.required.indexOf(_key) >= 0 ? true : false;
                        }
                        var childObj = {};
                        childObj = this.schema2obj(entity, _key, req, false, modelObjs, parent + parentDelim + key.replace('##ROOT##', 'data'));
                        obj._properties.push(childObj);
                    });
                    break;
                case 'OneOf':
                case 'AnyOf':
                case 'AllOf':
                    newModel = Object.assign({}, this.deepCopy(this.newXOf(type, key, null, parent)));
                    if (obj && obj._type && obj._type.length > 0) {
                        obj._type.push(newModel._type[0]);
                        this.copyProps(obj, newModel);
                    }
                    else {
                        obj = newModel;
                    }
                    if (schema.description) {
                        obj._description = schema.description;
                    }
                    if (schema.oneOf || schema.anyOf || schema.allOf) {
                        var fld = type[0].toLowerCase() + type.slice(1);
                        schema[fld].forEach((item, i) => {
                            var res = this.schema2obj(item, i.toString(), false, false, modelObjs, parent + parentDelim + key.replace('##ROOT##', 'data'));
                            res._hideKey = true;
                            obj._properties.push(res);
                        });
                    }
                    break;
                case 'array':
                    newModel = Object.assign({}, this.newArray(key, parent));
                    if (obj && obj._type && obj._type.length > 0) {
                        obj._type.push(newModel._type[0]);
                        this.copyProps(obj, newModel);
                    }
                    else {
                        obj = newModel;
                    }
                    if (schema.description) {
                        obj._description = schema.description;
                    }
                    if (schema.default) {
                        obj._default = schema.default;
                    }
                    if (schema.hasOwnProperty('uniqueItems')) {
                        obj._uniqueItems = obj.uniqueItems;
                    }
                    if (schema.hasOwnProperty('minItems')) {
                        obj._minItems = schema.minItems;
                    }
                    if (schema.hasOwnProperty('maxItems')) {
                        obj._maxItems = schema.maxItems;
                    }
                    if (schema.items) {
                        obj._items = [];
                        var req = false;
                        if (schema.required) {
                            req = schema.required.indexOf(key) >= 0 ? true : false;
                        }
                        obj._items.push(this.schema2obj(schema.items, '', req, false, modelObjs, parent + parentDelim + key.replace('##ROOT##', 'data') + '[0]'));
                    }
                    break;
                case 'string':
                    newModel = Object.assign({}, this.newString(key, false, parent));
                    if (obj && obj._type && obj._type.length > 0) {
                        obj._type.push(newModel._type[0]);
                        this.copyProps(obj, newModel);
                    }
                    else {
                        obj = newModel;
                    }
                    if (schema.description) {
                        obj._description = schema.description;
                    }
                    if (schema.minLength >= 0) {
                        obj._minLength = schema.minLength;
                    }
                    if (schema.maxLength >= 0) {
                        obj._maxLength = schema.maxLength;
                    }
                    if (schema.pattern) {
                        obj._pattern = schema.pattern;
                    }
                    if (schema.format) {
                        obj._format = schema.format;
                    }
                    if (schema.default) {
                        obj._default = schema.default;
                    }
                    if (schema.hasOwnProperty('enum') && schema.enum.length > 0) {
                        var _enum = JSON.stringify(schema.enum);
                        _enum = _enum.substr(1, _enum.length - 2);
                        _enum = _enum.replace(/,/g, ',\n');
                        obj._enum = _enum;
                    }
                    break;
                case 'integer':
                case 'number':
                    if (type === 'integer') {
                        newModel = Object.assign({}, this.newInteger(key, parent));
                    }
                    else {
                        newModel = Object.assign({}, this.newNumber(key, parent));
                    }
                    if (obj && obj._type && obj._type.length > 0) {
                        obj._type.push(newModel._type[0]);
                        this.copyProps(obj, newModel);
                    }
                    else {
                        obj = newModel;
                    }
                    if (schema.description) {
                        obj._description = schema.description;
                    }
                    if (schema.default) {
                        obj._default = schema.default;
                    }
                    if (schema.minimum >= 0) {
                        obj._minimum = schema.minimum;
                    }
                    if (schema.maximum >= 0) {
                        obj._maximum = schema.maximum;
                    }
                    if (schema.exclusiveMinimum) {
                        obj._exclusiveMinimum = schema.exclusiveMinimum;
                    }
                    if (schema.exclusiveMaximum) {
                        obj._exclusiveMaximum = schema.exclusiveMaximum;
                    }
                    if (schema.multipleOf >= 0) {
                        obj._multipleOf = schema.multipleOf;
                    }
                    if (schema.format) {
                        obj._format = schema.format;
                    }
                    if (schema.hasOwnProperty('enum') && schema.enum.length > 0) {
                        var _enum = JSON.stringify(schema.enum);
                        _enum = _enum.substr(1, _enum.length - 2);
                        _enum = _enum.replace(/,/g, ',\n');
                        obj._enum = _enum;
                    }
                    break;
                case 'boolean':
                    newModel = Object.assign({}, this.newBoolean(key, parent));
                    if (obj && obj._type && obj._type.length > 0) {
                        obj._type.push(newModel._type[0]);
                        this.copyProps(obj, newModel);
                    }
                    else {
                        obj = newModel;
                    }
                    if (schema.description) {
                        obj._description = schema.description;
                    }
                    if (schema.default) {
                        obj._default = schema.default;
                    }
                    break;
                case 'null':
                    newModel = Object.assign({}, this.newNull(key, parent));
                    if (obj && obj._type && obj._type.length > 0) {
                        obj._type.push(newModel._type[0]);
                        this.copyProps(obj, newModel);
                    }
                    else {
                        obj = newModel;
                    }
                    //schema.type = 'null';
                    if (schema.description) {
                        obj._description = schema.description;
                    }
                    if (schema.default) {
                        obj._default = schema.default;
                    }
                    break;
            }
            if (!type && schema.$ref) {
                var value = schema.$ref.substring(schema.$ref.indexOf('/', 2) + 1, schema.$ref.length); //find second /, #/definitions/ or #/responses/ etc
                var path = schema.$ref.substring(0, schema.$ref.indexOf('/', 2) + 1);
                var modelKey = '';
                if (modelObjs) {
                    Object.keys(modelObjs).forEach(_key => {
                        let model = modelObjs[_key];
                        if (model.nameSpace === value) {
                            // @ts-ignore
                            modelKey = _key;
                        }
                    });
                }
                obj = this.new$ref(key, modelKey || value, parent, path);
            }
        }
        obj._required = required;
        if (isRoot) {
            obj.root$$ = true;
        }
        return obj;
    }
    sanitizeModel(model) {
        if (model.type instanceof Array && model.type.length === 1) {
            model.type = model.type[0];
        }
        if (model.properties) {
            Object.keys(model.properties).forEach(key => {
                let value = model.properties[key];
                model.properties[key] = this.sanitizeModel(value);
            });
        }
        return model;
    }
    getModeldefinitions(models) {
        const modelRefs = {};
        for (const key in models) {
            if (!key) {
                continue;
            }
            const model = models[key];
            modelRefs[model.nameSpace] = model.data;
        }
        ;
        return modelRefs;
    }
}

let StateService = class StateService {
    constructor() {
        this.initialState = { showSelectorModal: false };
        this.stateTracker = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.initialState);
    }
    /** Allows subscription to the behavior subject as an observable */
    getState() {
        return this.stateTracker.asObservable();
    }
    /**
     * Allows updating the current value of the behavior subject
     * @param val a number representing the current value
     * @param delta a number representing the positive or negative change in current value
     */
    setSelectorModel(sel) {
        this.stateTracker.next({ showSelectorModal: sel });
    }
    /** Resets the count to the initial value */
    resetState() {
        this.stateTracker.next(this.initialState);
    }
};
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac });

var JsonSchemaComponent_1;
let JsonSchemaComponent = JsonSchemaComponent_1 = class JsonSchemaComponent {
    constructor(state) {
        this.state = state;
        // public editorOptions: JsonEditorOptions;
        // @ViewChild(JsonEditorComponent) editor: JsonEditorComponent; // , { static: true }
        this.schema = null;
        this.models = [];
        this.propagateChange = () => { };
        this.propagateTouch = () => { };
        this.showSelectorModal = false;
        this.showAddModelForm = false;
        this.heading = 'Designer';
        this.configs = {
            showMoreOptn: '',
            currModelType: [],
            extraArrayOptn: '',
            menuOpen: true
        };
        this.modelRef = '';
        this.JsonSchema = new JsonSchemaService();
        this.hasChild = ['Object', 'OneOf', 'AllOf', 'AnyOf'];
        this.singleChild = ['OneOf', 'AllOf', 'AnyOf'];
        // this.editorOptions = new JsonEditorOptions() // this.options.mode = 'code'; //set only one mode
        // this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
        this.state.getState().subscribe(res => {
            this.showSelectorModal = res.showSelectorModal;
        }, err => {
            console.error(`An error occurred: ${err.message}`);
        });
    }
    writeValue(value) {
        if (value !== undefined) {
            this.schema = value;
            this.initRootElement(this.schema);
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    setDisabledState(isDisabled) {
        alert('disable');
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
        });
    }
    str(data) {
        return JSON.stringify(data, function (k, v) { if (v === undefined) {
            return null;
        } return v; }, '     ');
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
        }
        else if (this.singleChild.indexOf(entity._type[0]) >= 0) { //as oneOf,allOf,anyOf are single select, entity._type is array of 1
            addTo = 'XOf';
        }
        else if (entity._items[0] && this.hasChild.indexOf(entity._items[0]._type[0]) >= 0) {
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
    }
    ;
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
    }
    ;
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
        }
        else if (entity._type.indexOf('$ref') >= 0) {
            this.configs.showMoreOptn = '$ref';
            this.modelRef = '';
        }
        else {
            this.configs.showMoreOptn = '';
        }
        this.configs.extraArrayOptn = false;
    }
    ;
    setArrayType(type, entity, e) {
        var newM = this.generateModel(type, 'arrayEle');
        entity = this.selectedEntity;
        entity._items[0] = newM;
        if (type === '$ref') {
            this.configs.extraArrayOptn = true;
            this.modelRef = '';
        }
        else {
            this.configs.extraArrayOptn = false;
        }
        e.stopPropagation();
        this.refreshSchema();
    }
    ;
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
                }
                else if (data._items[0]) {
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
        this.download(filename, text);
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
};
JsonSchemaComponent.ɵfac = function JsonSchemaComponent_Factory(t) { return new (t || JsonSchemaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StateService)); };
JsonSchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JsonSchemaComponent, selectors: [["ng-jsonschema"]], inputs: { schema: "schema", models: "models" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => JsonSchemaComponent_1),
                multi: true
            }])], decls: 11, vars: 2, consts: [[1, "json-schema"], ["active", "active"], [1, "w3-bar", "w3-black"], [3, "click"], ["index", "0", "heading", "Designer", 4, "ngIf"], ["index", "1", "heading", "JSON Schema", 4, "ngIf"], ["index", "0", "heading", "Designer"], [3, "disabled"], [1, "main"], [3, "refreshSchema", "models", "addNewProp", "removeEntity", "openMenu", "entity"], ["class", "model-type-selector", "id", "model-type-selector", 4, "ngIf"], ["id", "model-type-selector", 1, "model-type-selector"], [3, "refreshSchema", "selectedEntity", "openMenu", "models", "setArrayType", "modelChangesCallback", "modelRef", "configs"], ["index", "1", "heading", "JSON Schema"]], template: function JsonSchemaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JsonSchemaComponent_Template_button_click_3_listener() { return ctx.convertSchema2Obj(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JsonSchemaComponent_Template_button_click_5_listener() { return ctx.convertObj2Schema(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "JSON Schema");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JsonSchemaComponent_Template_button_click_7_listener() { return ctx.downloadJSON(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Download JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, JsonSchemaComponent_div_9_Template, 6, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, JsonSchemaComponent_div_10_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.heading === "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.heading === "JSON Schema");
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MainJsonSchemaComponent,
        SelectSchemaJsonSchemaComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]]; }, styles: ["input[type=checkbox].small:after{width:12px;height:12px;margin-top:-15px}input[type=checkbox].small:checked:before{top:-14px;left:3px;width:6px;height:8px}.json-schema pre{line-height:15px;margin:5px 5px 5px 20px}.json-schema .copy{font-size:18px;font-weight:700;position:absolute;top:7px;right:12px;z-index:20}.json-schema .ace_editor{height:250px}.model-type-selector{top:20%;left:20%;width:400px;padding:10px;position:fixed;text-align:left;background-color:#fff;border-radius:3px;box-shadow:0 1px 4px rgba(0,0,0,.3);z-index:4}.faint{color:#9e9e9e;font-size:12px}.json-schema .nav>li>a{padding:5px 15px}.json-schema .main{background:#fff;padding:5px 10px;border:1px dashed #eee;margin:5px 0}.json-schema .nav.nav-tabs{height:33px}.json-schema .tab-content>.tab-pane{position:relative}.model-type-selector-cont .model-edit-x{font-family:apic-font;font-weight:700;position:absolute;right:8px;top:3px;font-size:13px;cursor:pointer}.model-type-selector-cont .title{font-size:16px;font-family:apic-font;font-weight:700;border-bottom:1px solid rgba(0,0,0,.3)}.array-items,.model-types{padding:5px 0}.model-types .btn.btn-link{font-size:14px;margin:2px 3px;padding:4px 10px 3px}.model-types .btn.btn-link.t_bg{color:red;border:1px solid red}input.model-key{font-size:14px;font-family:apic-font;height:20px;width:110px;box-shadow:none;border:1px solid rgba(0,0,0,.05);padding:0 5px;margin-right:5px}.t_bg input.model-key{color:#666}input.model-key:active,input.model-key:focus{box-shadow:0 0 8px rgba(0,0,0,.1) inset;outline:0}input.model-key:hover{border:1px solid rgba(0,0,0,.2)}input.model-key[readonly]{background:#eee}.js-row.t_bg .btn.model-selector{background:#fff}.btn.model-selector .caret{display:none}.btn.model-selector:hover .caret{display:inline-block}.objCont{margin-left:20px;position:relative}.objProps{border-left:0 solid rgba(0,0,0,.2)}.js-row{padding:4px 15px 3px;position:relative}.js-row:hover{background:#eceff1}.js-row:hover .obj-add{background:#fff}.obj-add{position:absolute;left:-28px;top:2px}.obj-exp{position:absolute;left:2px;top:8px;font-size:12px;cursor:pointer}.js-row .model-remove{color:#bdbdbd;cursor:pointer;position:absolute;right:3px;top:5px;width:18px;height:18px;text-align:center;line-height:13px;border-radius:50%;font-size:12px;display:block;background:#fff;border:none;padding:0}.js-row:hover .model-remove{color:red}.js-row .model-detail{color:#bdbdbd;cursor:pointer;position:absolute;right:25px;top:3px;width:20px;height:20px;text-align:center;line-height:23px;font-size:15px}.js-row:hover .model-detail{color:#2093ef;opacity:1}.js-row .model-done{color:#2093ef;cursor:pointer;position:absolute;right:25px;top:3px;text-align:center;font-size:15px;background:#f5f5f5;height:24px;width:26px}.js-row .model-summary{position:absolute;top:2px;right:50px;min-width:5px;min-height:5px}.js-row.t_bg .model-summary{color:#fff}.js-row .model-summary>span{margin-right:10px;vertical-align:text-bottom}.js-row .model-summary .ico{font-size:22px}.Array{color:#009688!important}.Boolean{color:#ff9800!important}.Integer,.Number{color:#e91e63!important}.Null{color:#f44336!important}.String{color:#9c27b0!important}.Object{color:#2196f3!important}fieldset{border:none;padding:0}.unspecified{color:#9e9e9e}.btn-link.btn-href.model-selector{font-family:apic-font;line-height:19px;display:inline-block;margin-top:-3px}.model-det-cont{background:#f5f5f5;overflow:auto;padding:5px;box-shadow:2px 2px 3px rgba(0,0,0,.2);margin-bottom:5px}form.model-detail-form .control-label{padding:0 5px;font-size:12px;margin-bottom:0}form.model-detail-form .detail-ip{font-size:12px;font-family:apic-font;background-color:#fff;padding:0 0 0 5px;height:22px}form.model-detail-form select.detail-ip{padding-right:20px}form.model-detail-form textarea{font-size:13px;font-family:apic-font;background:#fff;padding:0 5px}form.model-detail-form textarea.detail-ip{min-height:80px;width:100%}label.model-label-x{width:90px}.form-compact.model-detail-form .form-group{margin-bottom:5px}.checkbox.padding{padding:2px 0}.selectmultiple{float:right;font-size:12px;margin-top:-20px}.setmodel{height:24px}.displaynone{display:none}.model-det-child{border-right:1px solid #9e9e9e}.model-det-child .t_color{margin-left:-10px}.col-xs-6{width:45%;float:left}"], encapsulation: 2 });
JsonSchemaComponent.ctorParameters = () => [
    { type: StateService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JsonSchemaComponent.prototype, "schema", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JsonSchemaComponent.prototype, "models", void 0);

let MainJsonSchemaComponent = class MainJsonSchemaComponent {
    constructor() {
        this.showDetailsPan = false;
        this.ctrl = {
            expanded: true
        };
        this.hasChild = ['Object', 'OneOf', 'AllOf', 'AnyOf'];
    }
    ngOnInit() {
        console.log(this);
    }
    // keys(obj) {
    //     return Object.keys(obj);
    // }
    checkTypeObject(entity) {
        return entity._items && entity._items[0] && entity._items[0]._type[0] && entity._items[0]._type[0] === 'Object';
    }
    canAddChild(types, arrType) {
        return (this.hasChild.indexOf(types) >= 0 || types.some((v) => {
            return this.hasChild.indexOf(v) >= 0;
        }) || this.hasChild.indexOf(arrType) >= 0);
    }
    log(ent) {
        console.log(ent);
    }
};
MainJsonSchemaComponent.ɵfac = function MainJsonSchemaComponent_Factory(t) { return new (t || MainJsonSchemaComponent)(); };
MainJsonSchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainJsonSchemaComponent, selectors: [["ng-jsonschema-main"]], inputs: { entity: "entity", openMenu: "openMenu", refreshSchema: "refreshSchema", mode: "mode", models: "models", $msg: "$msg", removeEntity: "removeEntity", addNewProp: "addNewProp" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([])], decls: 1, vars: 1, consts: [["class", "objCont", 4, "ngIf"], [1, "objCont"], [3, "disabled"], [1, "js-row", 3, "ngClass"], [3, "hidden"], ["class", "glyphicon t_color obj-exp", 3, "ngClass", "click", 4, "ngIf"], ["type", "text", 1, "model-key", 3, "readonly", "ngModel", "ngModelChange"], ["uib-dropdown", "", 1, "dropdown"], ["type", "button", 1, "btn", "btn-link", "btn-href", "model-selector", "dropdown-toggle", 3, "click"], [4, "ngFor", "ngForOf"], [1, "caret"], ["class", "faint", 4, "ngIf"], [1, "model-detail", 3, "hidden", "click"], [1, "glyphicon", "glyphicon-pencil"], ["class", " model-done", 3, "click", 4, "ngIf"], ["class", "model-remove", "type", "button", 3, "click", 4, "ngIf"], [1, "model-summary"], ["class", "icon bj-playlist_add_check ico", "uib-tooltip", "Description present", 4, "ngIf"], [4, "ngIf"], ["class", "model-det-cont", 4, "ngIf"], ["class", "objProps", 4, "ngIf"], ["type", "button", "class", "btn btn-link btn-href glyphicon glyphicon-plus obj-add", 3, "disabled", "click", 4, "ngIf"], [1, "glyphicon", "t_color", "obj-exp", 3, "ngClass", "click"], ["class", "", 4, "ngIf"], [1, ""], [3, "ngClass"], ["class", "unspecified", 3, "ngClass", 4, "ngIf"], ["ngClass", "Unspecified", "class", "unspecified", 4, "ngIf"], [1, "unspecified", 3, "ngClass"], ["ngClass", "Unspecified", 1, "unspecified"], [1, "faint"], [1, "model-done", 3, "click"], [1, "glyphicon", "glyphicon-ok"], ["type", "button", 1, "model-remove", 3, "click"], [1, "glyphicon", "glyphicon-remove"], ["uib-tooltip", "Description present", 1, "icon", "bj-playlist_add_check", "ico"], ["type", "checkbox", 1, "small", 3, "ngModel", "ngModelChange"], [1, "model-det-cont"], [1, "col-xs-6", "model-det-child"], [1, "t_color", "bold"], ["name", "detailForm", "role", "form", 1, "form-horizontal", "form-compact", "model-detail-form"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "control-label", "col-xs-2"], [1, "col-xs-9"], [1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", 1, "form-control", "sm", "detail-ip", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-xs-6"], ["name", "detailForm", "role", "form", 1, "form-inline", "model-detail-form"], ["type", "text", "id", "foldName", "placeholder", "Field Name", 1, "form-control", "sm", "detail-ip", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "t_color"], [1, "checkbox", "padding"], ["type", "checkbox", 1, "small", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "type"], [1, "objProps"], ["class", "propCont", 4, "ngFor", "ngForOf"], [1, "propCont"], [3, "refreshSchema", "addNewProp", "models", "removeEntity", "openMenu", "entity"], ["type", "button", 1, "btn", "btn-link", "btn-href", "glyphicon", "glyphicon-plus", "obj-add", 3, "disabled", "click"]], template: function MainJsonSchemaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MainJsonSchemaComponent_div_0_Template, 25, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.entity && ctx.entity._type);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], FieldJsonSchemaComponent,
        MainJsonSchemaComponent]; }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainJsonSchemaComponent.prototype, "entity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainJsonSchemaComponent.prototype, "openMenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainJsonSchemaComponent.prototype, "refreshSchema", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainJsonSchemaComponent.prototype, "mode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainJsonSchemaComponent.prototype, "models", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainJsonSchemaComponent.prototype, "$msg", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainJsonSchemaComponent.prototype, "removeEntity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainJsonSchemaComponent.prototype, "addNewProp", void 0);

let FieldJsonSchemaComponent = class FieldJsonSchemaComponent {
    constructor() {
        this.entity = {};
    }
};
FieldJsonSchemaComponent.ɵfac = function FieldJsonSchemaComponent_Factory(t) { return new (t || FieldJsonSchemaComponent)(); };
FieldJsonSchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FieldJsonSchemaComponent, selectors: [["ng-jsonschema-field"]], inputs: { entity: "entity", type: "type", openMenu: "openMenu" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([])], decls: 7, vars: 7, consts: [[4, "ngIf"], [1, "checkbox", "padding"], ["type", "checkbox", 1, "small", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-xs-12"], [1, "model-label-x"], ["type", "number", "min", "0", "placeholder", ">=0", 1, "form-control", "sm", "detail-ip", 3, "ngModel", "ngModelChange"], ["type", "text", "min", "0", 1, "form-control", "sm", "detail-ip", 3, "ngModel", "ngModelChange"], [1, "form-control", "sm", "detail-ip", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "email"], ["value", "hostname"], ["value", "date-time"], ["value", "ipv4"], ["value", "ipv6"], ["value", "uri"], ["placeholder", "'' abcd', 1 1.5,etc", 1, "form-control", "sm", "detail-ip", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", 1, "form-control", "sm", "detail-ip", 3, "ngModel", "ngModelChange"], ["value", "int32"], ["value", "int64"], ["placeholder", " abcd, 1,1.5,etc", 1, "form-control", "sm", "detail-ip", 3, "ngModel", "ngModelChange"]], template: function FieldJsonSchemaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FieldJsonSchemaComponent_div_0_Template, 14, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FieldJsonSchemaComponent_div_1_Template, 35, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FieldJsonSchemaComponent_div_2_Template, 14, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FieldJsonSchemaComponent_div_3_Template, 31, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FieldJsonSchemaComponent_div_4_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FieldJsonSchemaComponent_div_5_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FieldJsonSchemaComponent_div_6_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "String");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "Integer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "Boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "refSchema");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FieldJsonSchemaComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FieldJsonSchemaComponent.prototype, "openMenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FieldJsonSchemaComponent.prototype, "entity", void 0);

let SelectSchemaJsonSchemaComponent = class SelectSchemaJsonSchemaComponent {
    constructor() {
        this.JsonSchema = new JsonSchemaService();
    }
    // change the model type
    changeModelType(type, entity, event) {
        entity = this.selectedEntity;
        if (event.ctrlKey) {
            if (entity._type.indexOf(type) >= 0) {
                // unselect current type
                if (entity._type.length > 1) {
                    const index = entity._type.indexOf(type);
                    entity._type.splice(index, 1);
                    this.manageModelProps(type, entity, 'remove');
                }
            }
            else {
                entity._type.push(type);
                this.manageModelProps(type, entity, 'add');
            }
        }
        else {
            for (let i = 0; i < entity._type.length; i++) {
                this.manageModelProps(entity._type[i], entity, 'remove');
            }
            entity._type = [type];
            this.manageModelProps(type, entity, 'add');
        }
        this.modelChangesCallback(entity);
        if (event) {
            event.stopPropagation();
        }
        this.refreshSchema();
        // if (this.openMenu) {
        //     this.openMenu();
        // }
    }
    ;
    manageModelProps(type, entity, action) {
        let fieldsObj = {};
        fieldsObj = this.JsonSchema.copy(this.JsonSchema.fields['for' + type]);
        for (const key in fieldsObj) {
            if (!key) {
                continue;
            }
            const val = fieldsObj[key];
            if (action === 'remove') {
                if (entity.hasOwnProperty(key) && key !== '_type') {
                    console.log('removing: ', key);
                    delete entity[key];
                }
            }
            else if (action === 'add') {
                if (!entity.hasOwnProperty(key)) {
                    entity[key] = val;
                }
            }
        }
        ;
    }
    keys(obj) {
        return Object.keys(obj);
    }
    setModelFor$Ref() {
        var selectedEntity = this.configs.extraArrayOptn ? this.selectedEntity._items[0] : this.selectedEntity;
        var resPath = '#/responses/';
        if (this.modelRef.indexOf(resPath) === 0) {
            selectedEntity._path = resPath;
            selectedEntity._value = this.modelRef.substring(resPath.length);
        }
        else {
            selectedEntity._path = '#/definitions/';
            selectedEntity._value = this.modelRef;
        }
        this.refreshSchema();
    }
};
SelectSchemaJsonSchemaComponent.ɵfac = function SelectSchemaJsonSchemaComponent_Factory(t) { return new (t || SelectSchemaJsonSchemaComponent)(); };
SelectSchemaJsonSchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectSchemaJsonSchemaComponent, selectors: [["ng-jsonschema-selectschema"]], inputs: { configs: "configs", modelRef: "modelRef", modelChangesCallback: "modelChangesCallback", refreshSchema: "refreshSchema", openMenu: "openMenu", selectedEntity: "selectedEntity", setArrayType: "setArrayType", mode: "mode", models: "models", entity: "entity" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([])], decls: 26, vars: 13, consts: [[1, "model-type-selector-cont"], [1, "title", "t_color"], [1, "selectmultiple"], [3, "click"], [1, "model-types"], ["type", "button", "class", "btn btn-link btn-sm", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", "btn-sm", 3, "ngClass", "click"], [4, "ngIf"], [1, "array-items"], ["class", "setmodel", 3, "ngModel", "click", "change", "ngModelChange", 4, "ngIf"], [1, "setmodel", 3, "ngModel", "click", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectSchemaJsonSchemaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Model Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Hold Ctrl key to select multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_Template_button_click_6_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SelectSchemaJsonSchemaComponent_button_9_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_Template_button_click_10_listener($event) { return ctx.changeModelType("Boolean", ctx.entity, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_Template_button_click_12_listener($event) { return ctx.changeModelType("Integer", ctx.entity, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Integer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_Template_button_click_14_listener($event) { return ctx.changeModelType("Number", ctx.entity, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SelectSchemaJsonSchemaComponent_button_16_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SelectSchemaJsonSchemaComponent_button_17_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectSchemaJsonSchemaComponent_Template_button_click_18_listener($event) { return ctx.changeModelType("String", ctx.entity, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "String");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SelectSchemaJsonSchemaComponent_button_20_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SelectSchemaJsonSchemaComponent_button_21_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SelectSchemaJsonSchemaComponent_button_22_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SelectSchemaJsonSchemaComponent_button_23_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SelectSchemaJsonSchemaComponent_div_24_Template, 17, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SelectSchemaJsonSchemaComponent_div_25_Template, 6, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode != "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.configs.currModelType.indexOf("Boolean") >= 0 ? "t_bg" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.configs.currModelType.indexOf("Integer") >= 0 ? "t_bg" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.configs.currModelType.indexOf("Number") >= 0 ? "t_bg" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode != "list" && ctx.mode != "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode != "list" && ctx.mode != "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.configs.currModelType.indexOf("String") >= 0 ? "t_bg" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode != "list" && ctx.mode != "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode != "list" && ctx.mode != "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode != "list" && ctx.mode != "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode != "list" && ctx.mode != "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configs.showMoreOptn == "array");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configs.showMoreOptn == "$ref" || ctx.configs.extraArrayOptn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "configs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "modelRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "modelChangesCallback", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "refreshSchema", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "openMenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "selectedEntity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "setArrayType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "mode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "models", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectSchemaJsonSchemaComponent.prototype, "entity", void 0);

var NgJsonSchemaBuilder_1;
const CustomDirectives = [
    JsonSchemaComponent,
    MainJsonSchemaComponent,
    FieldJsonSchemaComponent,
    SelectSchemaJsonSchemaComponent
];
const NgBrDirectives = {
    JsonSchemaComponent,
    MainJsonSchemaComponent,
    FieldJsonSchemaComponent,
    SelectSchemaJsonSchemaComponent
};
let NgJsonSchemaBuilder = NgJsonSchemaBuilder_1 = class NgJsonSchemaBuilder {
    static forRoot() {
        return {
            ngModule: NgJsonSchemaBuilder_1
        };
    }
};
NgJsonSchemaBuilder.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgJsonSchemaBuilder });
NgJsonSchemaBuilder.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgJsonSchemaBuilder_Factory(t) { return new (t || NgJsonSchemaBuilder)(); }, providers: [
        StateService,
        {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => JsonSchemaComponent),
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JsonSchemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                //  tslint:disable-next-line: component-selector
                selector: 'ng-jsonschema',
                template: "<section class=\"json-schema\">\r\n    <div active=\"active\">\r\n        <!-- uib-tabset -->\r\n        <!-- uib-tab -->\r\n\r\n        <div class=\"w3-bar w3-black\">\r\n            <button (click)=\"convertSchema2Obj()\">Designer</button>\r\n            <button (click)=\"convertObj2Schema()\">JSON Schema</button>\r\n            <button (click)=\"downloadJSON()\">Download JSON</button>\r\n        </div>\r\n\r\n        <div index=\"0\" heading=\"Designer\" *ngIf=\"heading==='Designer'\">\r\n            <div>\r\n                <fieldset [disabled]=\"readonly\">\r\n                    <div class=\"main\">\r\n                        <ng-jsonschema-main [refreshSchema]=\"refreshSchema.bind(this)\" [models]=\"models\"\r\n                            [addNewProp]=\"addNewProp.bind(this)\" [removeEntity]=\"removeEntity.bind(this)\"\r\n                            [openMenu]=\"toggleSelectorModal.bind(this)\" [entity]=\"entity\"></ng-jsonschema-main>\r\n                    </div>\r\n                    <div *ngIf=\"showSelectorModal\" class=\"model-type-selector\" id=\"model-type-selector\">\r\n                        <ng-jsonschema-selectschema [refreshSchema]=\"refreshSchema.bind(this)\"\r\n                            [selectedEntity]=\"selectedEntity\" [openMenu]=\"toggleSelectorModal.bind(this)\"\r\n                            [models]=\"models\" [setArrayType]=\"setArrayType.bind(this)\"\r\n                            [modelChangesCallback]=\"modelChangesCallback.bind(this)\" [modelRef]=\"modelRef\"\r\n                            [configs]=\"configs\"></ng-jsonschema-selectschema>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n        <div index=\"1\" heading=\"JSON Schema\" *ngIf=\"heading==='JSON Schema'\">\r\n\r\n            <!-- <json-editor *ngIf=\"schema && schema.json\" [options]=\"editorOptions\" [data]=\"schema.json\">\r\n            </json-editor> -->\r\n            {{schema.json|json}}\r\n            <hr />\r\n\r\n\r\n            <!-- <pre ui-ace=\"{mode: 'json'}\" [(ngModel)]=\"schema.original\" class=\"highlight\">{{schema.original}}</pre> -->\r\n        </div>\r\n    </div>\r\n</section>",
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => JsonSchemaComponent_1),
                        multi: true
                    }],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: ["input[type=checkbox].small:after{width:12px;height:12px;margin-top:-15px}input[type=checkbox].small:checked:before{top:-14px;left:3px;width:6px;height:8px}.json-schema pre{line-height:15px;margin:5px 5px 5px 20px}.json-schema .copy{font-size:18px;font-weight:700;position:absolute;top:7px;right:12px;z-index:20}.json-schema .ace_editor{height:250px}.model-type-selector{top:20%;left:20%;width:400px;padding:10px;position:fixed;text-align:left;background-color:#fff;border-radius:3px;box-shadow:0 1px 4px rgba(0,0,0,.3);z-index:4}.faint{color:#9e9e9e;font-size:12px}.json-schema .nav>li>a{padding:5px 15px}.json-schema .main{background:#fff;padding:5px 10px;border:1px dashed #eee;margin:5px 0}.json-schema .nav.nav-tabs{height:33px}.json-schema .tab-content>.tab-pane{position:relative}.model-type-selector-cont .model-edit-x{font-family:apic-font;font-weight:700;position:absolute;right:8px;top:3px;font-size:13px;cursor:pointer}.model-type-selector-cont .title{font-size:16px;font-family:apic-font;font-weight:700;border-bottom:1px solid rgba(0,0,0,.3)}.array-items,.model-types{padding:5px 0}.model-types .btn.btn-link{font-size:14px;margin:2px 3px;padding:4px 10px 3px}.model-types .btn.btn-link.t_bg{color:red;border:1px solid red}input.model-key{font-size:14px;font-family:apic-font;height:20px;width:110px;box-shadow:none;border:1px solid rgba(0,0,0,.05);padding:0 5px;margin-right:5px}.t_bg input.model-key{color:#666}input.model-key:active,input.model-key:focus{box-shadow:0 0 8px rgba(0,0,0,.1) inset;outline:0}input.model-key:hover{border:1px solid rgba(0,0,0,.2)}input.model-key[readonly]{background:#eee}.js-row.t_bg .btn.model-selector{background:#fff}.btn.model-selector .caret{display:none}.btn.model-selector:hover .caret{display:inline-block}.objCont{margin-left:20px;position:relative}.objProps{border-left:0 solid rgba(0,0,0,.2)}.js-row{padding:4px 15px 3px;position:relative}.js-row:hover{background:#eceff1}.js-row:hover .obj-add{background:#fff}.obj-add{position:absolute;left:-28px;top:2px}.obj-exp{position:absolute;left:2px;top:8px;font-size:12px;cursor:pointer}.js-row .model-remove{color:#bdbdbd;cursor:pointer;position:absolute;right:3px;top:5px;width:18px;height:18px;text-align:center;line-height:13px;border-radius:50%;font-size:12px;display:block;background:#fff;border:none;padding:0}.js-row:hover .model-remove{color:red}.js-row .model-detail{color:#bdbdbd;cursor:pointer;position:absolute;right:25px;top:3px;width:20px;height:20px;text-align:center;line-height:23px;font-size:15px}.js-row:hover .model-detail{color:#2093ef;opacity:1}.js-row .model-done{color:#2093ef;cursor:pointer;position:absolute;right:25px;top:3px;text-align:center;font-size:15px;background:#f5f5f5;height:24px;width:26px}.js-row .model-summary{position:absolute;top:2px;right:50px;min-width:5px;min-height:5px}.js-row.t_bg .model-summary{color:#fff}.js-row .model-summary>span{margin-right:10px;vertical-align:text-bottom}.js-row .model-summary .ico{font-size:22px}.Array{color:#009688!important}.Boolean{color:#ff9800!important}.Integer,.Number{color:#e91e63!important}.Null{color:#f44336!important}.String{color:#9c27b0!important}.Object{color:#2196f3!important}fieldset{border:none;padding:0}.unspecified{color:#9e9e9e}.btn-link.btn-href.model-selector{font-family:apic-font;line-height:19px;display:inline-block;margin-top:-3px}.model-det-cont{background:#f5f5f5;overflow:auto;padding:5px;box-shadow:2px 2px 3px rgba(0,0,0,.2);margin-bottom:5px}form.model-detail-form .control-label{padding:0 5px;font-size:12px;margin-bottom:0}form.model-detail-form .detail-ip{font-size:12px;font-family:apic-font;background-color:#fff;padding:0 0 0 5px;height:22px}form.model-detail-form select.detail-ip{padding-right:20px}form.model-detail-form textarea{font-size:13px;font-family:apic-font;background:#fff;padding:0 5px}form.model-detail-form textarea.detail-ip{min-height:80px;width:100%}label.model-label-x{width:90px}.form-compact.model-detail-form .form-group{margin-bottom:5px}.checkbox.padding{padding:2px 0}.selectmultiple{float:right;font-size:12px;margin-top:-20px}.setmodel{height:24px}.displaynone{display:none}.model-det-child{border-right:1px solid #9e9e9e}.model-det-child .t_color{margin-left:-10px}.col-xs-6{width:45%;float:left}"]
            }]
    }], function () { return [{ type: StateService }]; }, { schema: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], models: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainJsonSchemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-jsonschema-main',
                template: "<div class=\"objCont\" *ngIf=\"entity && entity._type\">\r\n    <fieldset [disabled]=\"entity.disabled\">\r\n        <div class=\"js-row\" [ngClass]=\"showDetailsPan?'t_bg':''\">\r\n\r\n            <span [hidden]=\"(mode == 'list' || mode == 'static')&& entity.root$$\">\r\n                <span class=\"glyphicon t_color obj-exp\"\r\n                    [ngClass]=\"ctrl.expanded?'glyphicon-triangle-bottom':'glyphicon-triangle-right'\"\r\n                    (click)=\"ctrl.expanded=!ctrl.expanded\"\r\n                    *ngIf=\"canAddChild(entity._type, entity._items && entity._items[0] && entity._items[0]._type[0])\">\r\n                    <span class=\"\" *ngIf=\"ctrl.expanded\">-</span>\r\n                    <span *ngIf=\"!ctrl.expanded\">+</span>\r\n                </span>\r\n\r\n\r\n                <span [hidden]=\"entity.root$$\">\r\n                    <input [readonly]=\"mode == 'static'\" (ngModelChange)=\"refreshSchema($event)\" class=\"model-key\"\r\n                        type=\"text\" [(ngModel)]=\"entity._key\" />\r\n                    <!-- : -->\r\n                </span>\r\n                <span uib-dropdown class=\"dropdown\">\r\n\r\n                    <button type=\"button\" class=\"btn btn-link btn-href model-selector dropdown-toggle\"\r\n                        (click)=\"openMenu(entity,$event)\">\r\n                        <span *ngFor=\"let t of entity._type\">\r\n                            <span [ngClass]=\"t\">{{t}}</span>\r\n                            <span *ngIf=\"t==='Array' && entity._items[0]\" [ngClass]=\"entity._items[0]._type[0]\"\r\n                                class=\"unspecified\">[\r\n                                {{entity._items[0]._type[0]}}\r\n                                <span *ngIf=\"entity._items[0]._type[0]=='$ref'\">\r\n                                    (#/definitions/{{models[entity._items[0]._value].nameSpace}})</span> ]\r\n                            </span>\r\n                            <span *ngIf=\"t==='Array' && !entity._items[0]\" ngClass=\"Unspecified\"\r\n                                class=\"unspecified\">[Unspecified]\r\n                            </span>\r\n                            <!-- <span *ngIf=\"t==='$ref'\" class=\"faint\">(#/definitions/)</span> -->\r\n                            <span *ngIf=\"t==='$ref' && models\"\r\n                                class=\"faint\">(#/definitions/{{models[entity._value] && models[entity._value].nameSpace}})</span>\r\n                            <!-- <span *ngIf=\"!$last\" class=\"faint\"> or </span> -->\r\n                        </span>\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                </span>\r\n                <span *ngIf=\"canAddChild(entity._type, entity._items && entity._items[0] && entity._items[0]._type[0])\"\r\n                    class=\"faint\">[\r\n                    <span>{{(entity._properties && entity._properties.length) || (entity._items && entity._items[0]._properties && entity._items[0]._properties.length)||0}}</span>\r\n                    ]\r\n                </span>\r\n                <div class=\"model-detail\" [hidden]=\"showDetailsPan\" (click)=\"showDetailsPan=true\">\r\n                    <span class=\"glyphicon glyphicon-pencil\">&#9998;</span>\r\n                </div>\r\n                <div class=\" model-done\" *ngIf=\"showDetailsPan\" (click)=\"showDetailsPan=false; refreshSchema()\">\r\n                    <span class=\"glyphicon glyphicon-ok\">&#10003;</span>\r\n                </div>\r\n                <button class=\"model-remove\" *ngIf=\"!entity.root$$ && mode != 'static'\" type=\"button\"\r\n                    (click)=\"removeEntity(entity)\"><span class=\"glyphicon glyphicon-remove\">&#10006;</span>\r\n                </button>\r\n                <div class=\"model-summary\">\r\n                    <span *ngIf=\"entity._description\" class=\"icon bj-playlist_add_check ico\"\r\n                        uib-tooltip=\"Description present\"></span>\r\n                    <span *ngIf=\"!entity.root$$\"><input type=\"checkbox\" class=\"small\" [(ngModel)]=\"entity._required\"\r\n                            (ngModelChange)=\"refreshSchema($event)\" />Required</span>\r\n                </div>\r\n            </span>\r\n            <span *ngIf=\"(mode == 'list' || mode == 'static')&& entity.root$$\">{{$msg}}</span>\r\n        </div>\r\n        <div class=\"model-det-cont\" *ngIf=\"showDetailsPan\">\r\n            <div class=\"col-xs-6 model-det-child\">\r\n                <div class=\"t_color bold\">Basic Info</div>\r\n                <div class=\"\">\r\n                    <form class=\"form-horizontal form-compact model-detail-form\" name=\"detailForm\" role=\"form\">\r\n                        <div class=\"form-group\" *ngIf=\"!entity.root$$\">\r\n                            <label class=\"control-label col-xs-2\">Name:</label>\r\n                            <div class=\"col-xs-9\">\r\n                                <input type=\"text\" class=\"form-control sm detail-ip\" id=\"foldName\"\r\n                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"Field Name\"\r\n                                    [(ngModel)]=\"entity._key\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-xs-2\">Desc: </label>\r\n                            <div class=\"col-xs-9\">\r\n                                <textarea class=\"form-control\" [(ngModel)]=\"entity._description\"\r\n                                    [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-xs-2\">Default:</label>\r\n                            <div class=\"col-xs-9\">\r\n                                <input type=\"text\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._default\"\r\n                                    [ngModelOptions]=\"{standalone: true}\" />\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n                <form class=\"form-inline model-detail-form\" name=\"detailForm\" role=\"form\">\r\n                    <div *ngIf=\"!entity.root$$\">\r\n                        <div class=\"t_color\">Common Validations</div>\r\n                        <div>\r\n                            <div class=\"checkbox padding\">\r\n                                <label><input type=\"checkbox\" class=\"small\" [(ngModel)]=\"entity._required\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" /> Required\r\n                                    ?</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngFor=\"let type of entity._type\">\r\n                        <div class=\"t_color\">{{type}} Validations</div>\r\n                        <ng-jsonschema-field [type]=\"type\"></ng-jsonschema-field>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"ctrl.expanded\" class=\"objProps\">\r\n            <div *ngFor=\"let prop of entity._properties\" class=\"propCont\">\r\n                <ng-jsonschema-main [refreshSchema]=\"refreshSchema\" [addNewProp]=\"addNewProp\" [models]=\"models\"\r\n                    [removeEntity]=\"removeEntity\" [openMenu]=\"openMenu\" [entity]=\"prop\"></ng-jsonschema-main>\r\n            </div>\r\n        </div>\r\n        <!-- ITEMS: {{entity._items}} -->\r\n        <div\r\n            *ngIf=\"entity._items && entity._items[0] && entity._type.indexOf('Object')<0 && hasChild.indexOf(entity._items[0]._type[0])>=0\">\r\n            <div *ngFor=\"let prop of entity._items[0]._properties\" class=\"propCont\">\r\n                <ng-jsonschema-main [refreshSchema]=\"refreshSchema\" [addNewProp]=\"addNewProp\" [models]=\"models\"\r\n                    [removeEntity]=\"removeEntity\" [openMenu]=\"openMenu\" [entity]=\"prop\"></ng-jsonschema-main>\r\n            </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-link btn-href glyphicon glyphicon-plus obj-add\"\r\n            (click)=\"addNewProp(entity,$event)\" [disabled]=\"mode == 'static'\"\r\n            *ngIf=\"canAddChild(entity._type, entity._items && entity._items[0] && entity._items[0]._type[0]) && !entity.refTxt\">&#10010;</button>\r\n    </fieldset>\r\n</div>",
                providers: []
            }]
    }], function () { return []; }, { entity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], openMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], refreshSchema: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], models: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], $msg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], removeEntity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], addNewProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FieldJsonSchemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-jsonschema-field',
                template: "<!-- Object-schema.html -->\r\n<div *ngIf=\"type=='Object'\">\r\n    <div>\r\n        <div class=\"checkbox padding\">\r\n            <label><input type=\"checkbox\" class=\"small\" [(ngModel)]=\"entity._disallowAdditional\"> Disallow Additipnal\r\n                Properties</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">minProperties:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._minProperties\" min=\"0\"\r\n            placeholder=\">=0\" />\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">maxProperties:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._maxProperties\" min=\"0\"\r\n            placeholder=\">=0\" />\r\n    </div>\r\n</div>\r\n\r\n<!-- modelTypeSelector.html', modelTypeSelector); -->\r\n<!-- <div *ngIf=\"type=='modelTypeSelector'\">\r\n    <span uib-dropdownz class=\"dropdown\">\r\n        <button type=\"button\" uib-dropdown-togglez class=\"btn btn-link btn-href model-selector dropdown-toggle\"\r\n            (click)=\"openMenu(entity,$event)\">\r\n            <span *ngFor=\"let t of entity._type\">\r\n                <span [ngClass]=\"t\">{{t}}</span><span *ngIf=\"!$last\" class=\"faint\"> or </span>\r\n            </span>\r\n            <span class=\"caret\"></span>\r\n        </button>\r\n    </span>\r\n</div> -->\r\n\r\n<!-- String-schema.html -->\r\n<div *ngIf=\"type=='String'\">\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">minLength:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._minLength\" min=\"0\" placeholder=\">=0\" />\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">maxLength:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._maxLength\" min=\"0\" placeholder=\">=0\" />\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">Pattern:</label>\r\n        <input type=\"text\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._pattern\" min=\"0\" />\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">Format:</label>\r\n        <select class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._format\">\r\n            <option value=\"\">--no-format--</option>\r\n            <option value=\"email\">email</option>\r\n            <option value=\"hostname\">hostname</option>\r\n            <option value=\"date-time\">date-time</option>\r\n            <option value=\"ipv4\">ipv4</option>\r\n            <option value=\"ipv6\">ipv6</option>\r\n            <option value=\"uri\">uri</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">Enum:</label>\r\n        <textarea class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._enum\" placeholder=\"'' abcd', 1 1.5,etc\"></textarea>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Array-schema.html', ArraySchema); -->\r\n<div *ngIf=\"type=='Array'\">\r\n    <div>\r\n        <div class=\"checkbox padding\">\r\n            <label><input type=\"checkbox\" class=\"small\" [(ngModel)]=\"entity._uniqueItems\"> Allow only unique items?</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">minItems:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._minItems\" min=\"0\" placeholder=\">=0\" />\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">maxItems:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._maxItems\" min=\"0\" placeholder=\">=0\" />\r\n    </div>\r\n</div>\r\n\r\n<!-- Integer-schema.html', IntNumSchema); -->\r\n<div *ngIf=\"type=='Integer'\">\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">minimum:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._minimum\" min=\"0\" />\r\n        <label><input type=\"checkbox\" class=\"small\" [(ngModel)]=\"entity._exclusiveMinimum\"> Exclude minimum ?</label>\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">maximum:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._maximum\" min=\"0\" />\r\n        <label><input type=\"checkbox\" class=\"small\" [(ngModel)]=\"entity._exclusiveMaximum\"> Exclude maximum ?</label>\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">multipleOf:</label>\r\n        <input type=\"number\" class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._multipleOf\" min=\"0\" />\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">Format:</label>\r\n        <select class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._format\">\r\n            <option value=\"int32\">int32</option>\r\n            <option value=\"int64\">int64</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group col-xs-12\">\r\n        <label class=\"model-label-x\">Enum:</label>\r\n        <textarea class=\"form-control sm detail-ip\" [(ngModel)]=\"entity._enum\" placeholder=\" abcd, 1,1.5,etc\"></textarea>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='Boolean'\">\r\n    No validations for this type..\r\n</div>\r\n\r\n<div *ngIf=\"type=='Null'\">\r\n    No validations for this type..\r\n</div>\r\n\r\n<div *ngIf=\"type=='refSchema'\">\r\n    No validations for this type..\r\n</div>",
                providers: []
            }]
    }], function () { return []; }, { entity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], openMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectSchemaJsonSchemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-jsonschema-selectschema',
                template: "<!-- var modelSelectorSchema = ' -->\r\n\r\n<div class=\"model-type-selector-cont\">\r\n    <div class=\"title t_color\">Model Type\r\n        <small>Hold Ctrl key to select multiple</small>\r\n    </div>\r\n    <div class=\"selectmultiple\">\r\n        <button (click)=\"openMenu()\">x</button>\r\n    </div>\r\n    <div class=\"model-types\">\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('Array')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('Array', entity, $event)\" *ngIf=\"mode != 'static'\">Array</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('Boolean')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('Boolean', entity, $event)\">Boolean</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('Integer')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('Integer', entity, $event)\">Integer</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('Number')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('Number', entity, $event)\">Number</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\" [ngClass]=\"configs.currModelType.indexOf('Null')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('Null', entity, $event)\" *ngIf=\"mode != 'list' && mode != 'static'\">null</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('Object')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('Object', entity, $event)\"\r\n            *ngIf=\"mode != 'list' && mode != 'static'\">Object</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('String')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('String', entity, $event)\">String</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\" [ngClass]=\"configs.currModelType.indexOf('$ref')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('$ref', entity, $event)\" *ngIf=\"mode != 'list' && mode != 'static'\">$ref</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('OneOf')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('OneOf', entity, $event)\" *ngIf=\"mode != 'list' && mode != 'static'\">OneOf</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('AnyOf')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('AnyOf', entity, $event)\" *ngIf=\"mode != 'list' && mode != 'static'\">AnyOf</button>\r\n        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n            [ngClass]=\"configs.currModelType.indexOf('AllOf')>=0?'t_bg':''\"\r\n            (click)=\"changeModelType('AllOf', entity, $event)\" *ngIf=\"mode != 'list' && mode != 'static'\">AllOf</button>\r\n    </div>\r\n    <div *ngIf=\"configs.showMoreOptn == 'array'\">\r\n        <div class=\"title t_color\">Array Items Type</div>\r\n        <div class=\"array-items\">\r\n            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                [ngClass]=\"selectedEntity._items[0] && selectedEntity._items[0]._type[0]?'':'t_bg'\"\r\n                (click)=\"setArrayType('Unspecified', entity, $event)\">Unspecified</button>\r\n            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                [ngClass]=\"selectedEntity._items[0] && selectedEntity._items[0]._type[0]=='Integer'?'t_bg':''\"\r\n                (click)=\"setArrayType('Integer', entity, $event)\">Integer</button>\r\n            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                [ngClass]=\"selectedEntity._items[0] && selectedEntity._items[0]._type[0]=='Boolean'?'t_bg':''\"\r\n                (click)=\"setArrayType('Boolean', entity, $event)\">Boolean</button>\r\n            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                [ngClass]=\"selectedEntity._items[0] && selectedEntity._items[0]._type[0]=='Number'?'t_bg':''\"\r\n                (click)=\"setArrayType('Number', entity, $event)\">Number</button>\r\n            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                [ngClass]=\"selectedEntity._items[0] && selectedEntity._items[0]._type[0]=='Object'?'t_bg':''\"\r\n                (click)=\"setArrayType('Object', entity, $event)\" *ngIf=\"mode != 'list'\">Object</button>\r\n            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                [ngClass]=\"selectedEntity._items[0] && selectedEntity._items[0]._type[0]=='String'?'t_bg':''\"\r\n                (click)=\"setArrayType('String', entity, $event)\">String</button>\r\n            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                [ngClass]=\"selectedEntity._items[0] && selectedEntity._items[0]._type[0]=='$ref'?'t_bg':''\"\r\n                (click)=\"setArrayType('$ref', entity, $event)\">$ref</button>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"configs.showMoreOptn == '$ref' || configs.extraArrayOptn\">\r\n        <div class=\"title t_color\">Select model</div>\r\n        <div class=\"array-items\">\r\n            <select class=\"setmodel\" *ngIf=\"models\" (click)=\"$event.stopPropagation()\" (change)=\"setModelFor$Ref()\"\r\n                [(ngModel)]=\"modelRef\">\r\n                <option *ngFor=\"let id of keys(models)\" value=\"{{id}}\">#/definitions/{{models[id].nameSpace}}\r\n                    ({{models[id].name}})</option>\r\n            </select>\r\n\r\n            <span *ngIf=\"!models\">No models found</span>\r\n        </div>\r\n    </div>\r\n</div>",
                providers: []
            }]
    }], function () { return []; }, { configs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modelRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modelChangesCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], refreshSchema: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], openMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedEntity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], setArrayType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], models: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], entity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgJsonSchemaBuilder, { declarations: function () { return [JsonSchemaComponent,
        MainJsonSchemaComponent,
        FieldJsonSchemaComponent,
        SelectSchemaJsonSchemaComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]; }, exports: function () { return [JsonSchemaComponent,
        MainJsonSchemaComponent,
        FieldJsonSchemaComponent,
        SelectSchemaJsonSchemaComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgJsonSchemaBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                declarations: [
                    CustomDirectives
                ],
                exports: [
                    CustomDirectives
                ],
                providers: [
                    StateService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => JsonSchemaComponent),
                        multi: true
                    }
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-json-schema-builder
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-json-schema-builder.js.map

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_json_schema_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-json-schema-builder */ "./dist/ng-json-schema-builder/__ivy_ngcc__/fesm2015/ng-json-schema-builder.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class AppComponent {
    constructor() {
        this.title = 'apicNgJsonSchema';
        // schema = { "type": "object", "properties": { "id": { "type": "string", "description": "Todo id" }, "name": { "type": "string", "description": "Todo name" }, "completed": { "type": "boolean", "description": "Completion status of the todo", "default": false }, "created": { "type": "integer", "description": "Todo creation timestamp" } }, "required": ["id", "name"] }
        this.schema = {
            "type": "object",
            "properties": {
                "id": {
                    "$ref": "#/definitions/user"
                },
                "name": {
                    "type": "string",
                    "description": "Todo name"
                },
                "completed": {
                    "type": "boolean",
                    "description": "Completion status of the todo"
                },
                "created": {
                    "type": "integer",
                    "description": "Todo creation timestamp"
                }
            },
            "required": [
                "id",
                "name"
            ]
        };
        this.models = {
            m1: {
                'name': 'User',
                'nameSpace': 'user',
                'data': { "type": "object", "properties": { "id": { "type": "string", "description": "Todo id" }, "name": { "type": "string", "description": "Todo name" }, "completed": { "type": "boolean", "description": "Completion status of the todo", "default": false }, "created": { "type": "integer", "description": "Todo creation timestamp" } }, "required": ["id", "name"] }
            },
            m2: {
                'name': 'Address',
                'nameSpace': 'address',
                'data': {
                    "type": "object",
                    "properties": {
                        "asd": {
                            "type": "string"
                        },
                        "xxx": {
                            "type": "object",
                            "properties": {
                                "x1": {
                                    "type": [
                                        "null",
                                        "number"
                                    ]
                                }
                            }
                        },
                        "arr": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "ao1": {
                                        "type": [
                                            "integer",
                                            "boolean"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            m3: {
                'name': 'Person',
                'nameSpace': 'person',
                'data': {
                    'type': 'object',
                    'properties': {
                        'name': {
                            'type': 'string',
                            'minLength': 3,
                            'maxLength': 255
                        },
                        'age': {
                            'type': 'integer',
                            'minimum': 18
                        }
                    },
                    'required': [
                        'name',
                        'age'
                    ]
                }
            }
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 5, consts: [["form", "ngForm"], ["name", "data", 3, "models", "ngModel"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ng-jsonschema", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("models", ctx.models)("ngModel", ctx.schema);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, _r0.value.data));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], ng_json_schema_builder__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_json_schema_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-json-schema-builder */ "./dist/ng-json-schema-builder/__ivy_ngcc__/fesm2015/ng-json-schema-builder.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ng_json_schema_builder__WEBPACK_IMPORTED_MODULE_2__["NgJsonSchemaBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ng_json_schema_builder__WEBPACK_IMPORTED_MODULE_2__["NgJsonSchemaBuilder"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ng_json_schema_builder__WEBPACK_IMPORTED_MODULE_2__["NgJsonSchemaBuilder"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\BJ\apicNgJsonSchema\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map