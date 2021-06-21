(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/J2p":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FilterComponent_section_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polyline", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", item_r2 + "-" + ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r2 + "-" + ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", item_r2)("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, item_r2));
} }
function FilterComponent_section_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterComponent_section_1_ng_container_3_div_1_Template, 10, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2);
} }
function FilterComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilterComponent_section_1_ng_container_3_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filterArr);
} }
class FilterComponent {
    constructor() {
        this.selectedFields = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    ngOnChanges() {
        this.filterArr.forEach(el => {
            this.filterForm.addControl(el, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
            // this.filterForm.addControl(el.di)
        });
        this.formSubscribe();
    }
    ngOnInit() {
        console.log(this.filterArr);
    }
    formSubscribe() {
        this.filterForm.valueChanges.subscribe(res => {
            const selected = Object.entries(res).filter(([key, val]) => val).map(([key, val]) => key);
            this.selectedFields.emit(selected);
        });
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], inputs: { filterArr: "filterArr", title: "title" }, outputs: { selectedFields: "selectedFields" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[1, "example-form", 3, "formGroup"], ["class", "example-section", 4, "ngIf"], [1, "example-section"], [4, "ngFor", "ngForOf"], ["class", "checkbox-first", 4, "ngIf"], [1, "checkbox-first"], [1, "checkbox-first__label", 3, "for"], ["type", "checkbox", 1, "checkbox-first__input", 3, "formControlName", "id", "value"], [1, "checkbox"], ["width", "20px", "height", "20px", "viewBox", "0 0 20 20"], ["d", "M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"], ["points", "4 11 8 15 16 6"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterComponent_section_1_Template, 4, 2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterArr.length > 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: ["h5[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-style: normal;\n  font-weight: 800;\n  line-height: normal;\n  font-size: 24px;\n  letter-spacing: 1px;\n  color: #000;\n  margin-bottom: 10px;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkbox[_ngcontent-%COMP%] {\n  border-color: #ef456a;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ef456a;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  stroke-dashoffset: 0;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]:hover   .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke-dashoffset: 0;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  float: left;\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  border-radius: 3px;\n  border: 2px solid #c8ccd4;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #ef456a;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 71px;\n  stroke-dashoffset: 71px;\n  transition: all 0.6s ease;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #fff;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 18px;\n  stroke-dashoffset: 18px;\n  transition: all 0.3s ease;\n}\n\n.checkbox-first__label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  pointer-events: none;\n  vertical-align: middle;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  float: left;\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  border-radius: 3px;\n  border: 2px solid #c8ccd4;\n}\n\n.checkbox-first__input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  z-index: -1;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jaGVja2JveC1maXJzdF9fbGFiZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmNoZWNrYm94LWZpcnN0X19sYWJlbCBpbnB1dDpjaGVja2VkKy5jaGVja2JveCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWY0NTZhO1xyXG59XHJcblxyXG4uY2hlY2tib3gtZmlyc3RfX2xhYmVsIC5jaGVja2JveCBzdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgbGVmdDogLTJweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWZpcnN0X19sYWJlbCBpbnB1dDpjaGVja2VkKy5jaGVja2JveCBzdmcgcGF0aCB7XHJcbiAgZmlsbDogI2VmNDU2YTtcclxufVxyXG5cclxuLmNoZWNrYm94LWZpcnN0X19sYWJlbCBpbnB1dDpjaGVja2VkKy5jaGVja2JveCBzdmcgcG9seWxpbmUge1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG59XHJcblxyXG4uY2hlY2tib3gtZmlyc3RfX2xhYmVsOmhvdmVyIC5jaGVja2JveCBzdmcgcGF0aCB7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbn1cclxuXHJcbi5jaGVja2JveC1maXJzdF9fbGFiZWwgLmNoZWNrYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYzhjY2Q0O1xyXG59XHJcblxyXG4uY2hlY2tib3gtZmlyc3RfX2xhYmVsIC5jaGVja2JveCBzdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgbGVmdDogLTJweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWZpcnN0X19sYWJlbCAuY2hlY2tib3ggc3ZnIHBhdGgge1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgc3Ryb2tlOiAjZWY0NTZhO1xyXG4gIHN0cm9rZS13aWR0aDogMjtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcclxuICBzdHJva2UtZGFzaGFycmF5OiA3MXB4O1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA3MXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XHJcbn1cclxuXHJcbi5jaGVja2JveC1maXJzdF9fbGFiZWwgLmNoZWNrYm94IHN2ZyBwb2x5bGluZSB7XHJcbiAgZmlsbDogbm9uZTtcclxuICBzdHJva2U6ICNmZmY7XHJcbiAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE4cHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE4cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmNoZWNrYm94LWZpcnN0X19sYWJlbD5zcGFuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDJweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjOGNjZDQ7XHJcbn1cclxuXHJcbi5jaGVja2JveC1maXJzdF9faW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG59Il19 */"] });


/***/ }),

/***/ "/RPv":
/*!*************************************************!*\
  !*** ./src/app/shared/models/carysel.models.ts ***!
  \*************************************************/
/*! exports provided: Carysel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carysel", function() { return Carysel; });
class Carysel {
    constructor(id, img, url) {
        this.id = id;
        this.img = img;
        this.url = url;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Игорь\Desktop\Apple new\src\main.ts */"zUnb");


/***/ }),

/***/ "0kC6":
/*!*****************************************************************************!*\
  !*** ./src/app/components/device-properties/device-properties.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DevicePropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePropertiesComponent", function() { return DevicePropertiesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navs/navs.service */ "livN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function DevicePropertiesComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", food_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", food_r1.nameEN, " ");
} }
class DevicePropertiesComponent {
    constructor(activeModal, formBolider, navsServices, dialog, data) {
        this.activeModal = activeModal;
        this.formBolider = formBolider;
        this.navsServices = navsServices;
        this.dialog = dialog;
        this.data = data;
        this.controls = [];
    }
    ngOnInit() {
        this.getNav();
        this.formGroup = this.formBolider.group({
            select: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
        this.form = this.formBolider.group({
            control: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
    }
    getNav() {
        this.navsServices.getNavs().then(res => {
            // console.log(res);
            this.arrNav = res;
        });
    }
    addDetali() {
        // this.navsServices.$obj.next(this.formGroup.value)
        // this.activeModal.close()
        this.activeModal.close(this.form.value);
        // console.log(this.data.form);
        const { select: id } = this.formGroup.value;
        console.log(id);
        const nav = this.arrNav.find(el => el.id === id);
        const body = Object.assign(Object.assign({}, nav), { props: Object.assign({}, this.formGroup.value) });
        console.log(this.arrNav);
        // this.navsServices.updateNavs(`navs ${id}` , body).then(res => {
        //   this.navsServices.getNavs()
        // })
    }
}
DevicePropertiesComponent.ɵfac = function DevicePropertiesComponent_Factory(t) { return new (t || DevicePropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_3__["NavsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DevicePropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DevicePropertiesComponent, selectors: [["app-device-properties"]], decls: 17, vars: 3, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["formControlName", "select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-form", 3, "formGroup"], [1, "example-full-width"], ["type", "text", "formControlName", "label", "matInput", "", "name", "price"], ["type", "text", "formControlName", "control", "matInput", "", "name", "price"], ["color", "primary", "type", "submit", "mat-raised-button", "", 3, "click"], [3, "value"]], template: function DevicePropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DevicePropertiesComponent_Template_form_ngSubmit_0_listener() { return ctx.addDetali(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Favorite food");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DevicePropertiesComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "InputEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DevicePropertiesComponent_Template_button_click_15_listener() { return ctx.addDetali(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2UtcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_carusel_carusel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/carusel/carusel.service */ "sghH");
/* harmony import */ var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order/order.service */ "zCCq");
/* harmony import */ var src_app_shared_services_gallery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/gallery.service */ "eU2y");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _carusel_carusel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carusel/carusel.component */ "nS89");
/* harmony import */ var _models_apple_models_apple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models-apple/models-apple.component */ "jAKP");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "mSj3");
/* harmony import */ var _short_text_short_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./short-text/short-text.component */ "n8ey");










class HomeComponent {
    constructor(caruselServices, order, galleryServices, aplel) {
        this.caruselServices = caruselServices;
        this.order = order;
        this.galleryServices = galleryServices;
        this.aplel = aplel;
        this.appleArr = [];
        this.arrOrder = [];
        this.arrGallery = [];
    }
    ngOnInit() {
        this.getApple();
        this.getOrder();
        this.getGalley();
        this.aplel.getNova().subscribe(res => {
            console.log(res);
        });
        aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();
    }
    getApple() {
        this.caruselServices.getApple().then(res => {
            this.appleArr = res;
            this.appleArr = this.appleArr.slice(-5);
            this.orderApple = res;
        });
    }
    getGalley() {
        this.galleryServices.getGallery().then(res => {
            this.arrGallery = res;
            this.arrGallery = this.arrGallery.slice(-12);
        });
    }
    getOrder() {
        this.order.getOrder().then(res => {
            const arr = res.map(el => el.orders);
            this.arrOrder = arr.flat().sort((a, b) => a.count - b.count).slice(-4);
            // this.arr =  this.orderApple.filter(el => !this.arrOrder.filter(elem => elem.uuid === el.uuid).length)
            this.arr = this.orderApple.filter(el => this.arrOrder.some(elem => elem.uuid === el.uuid));
            console.log(this.arr);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_carusel_carusel_service__WEBPACK_IMPORTED_MODULE_2__["CaruselService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_gallery_service__WEBPACK_IMPORTED_MODULE_4__["GalleryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_5__["AppleService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 5, consts: [[3, "arr", "name"], [3, "arrGallery"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-carusel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-models-apple", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-models-apple", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-gallery", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-short-text");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("arr", ctx.appleArr)("name", "\u041D\u043E\u0432\u0438\u043D\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("arr", ctx.arr)("name", "\u0422\u043E\u043F \u041F\u0440\u043E\u0434\u0430\u0436\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("arrGallery", ctx.arrGallery);
    } }, directives: [_carusel_carusel_component__WEBPACK_IMPORTED_MODULE_6__["CaruselComponent"], _models_apple_models_apple_component__WEBPACK_IMPORTED_MODULE_7__["ModelsAppleComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"], _short_text_short_text_component__WEBPACK_IMPORTED_MODULE_9__["ShortTextComponent"]], styles: ["@charset \"UTF-8\";\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, serif;\n  background-color: #c6c6c6;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\ndiv[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nfooter[_ngcontent-%COMP%] {\n  text-align: center;\n  flex-grow: 0;\n  padding: 20px 0;\n}\nmain[_ngcontent-%COMP%] {\n  height: 100vh;\n  flex: 1;\n}\na[_ngcontent-%COMP%] {\n  color: #b95995;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #b96f90;\n}\n.holder[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 1200px;\n  margin: 20px auto 0;\n  padding: 20px;\n}\n\n.limited[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow: hidden;\n  position: relative;\n}\n.limited.l-200[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n\n.limited.l-300[_ngcontent-%COMP%] {\n  max-height: 300px;\n}\n.limited[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white 80%);\n  width: 100%;\n  height: 60px;\n  opacity: 1;\n  transition: 0.3s;\n}\n.read-more-checker[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n}\n.read-more-checker[_ngcontent-%COMP%]:checked    ~ .limited[_ngcontent-%COMP%] {\n  max-height: none;\n}\n.read-more-checker[_ngcontent-%COMP%]:checked    ~ .limited[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: 0.3s;\n}\n.read-more-checker[_ngcontent-%COMP%]    ~ .read-more-button[_ngcontent-%COMP%]:before {\n  content: \"More \u00BB\";\n}\n.read-more-checker[_ngcontent-%COMP%]:checked    ~ .read-more-button[_ngcontent-%COMP%]:before {\n  content: \"Less \u00AB\";\n}\n.read-more-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  padding: 10px;\n  color: #777;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.styled-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  padding-left: 18px;\n  margin-bottom: 5px;\n  position: relative;\n}\n.styled-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #232323;\n  text-decoration: underline;\n}\n@media screen and (max-width: 768px) {\n  app-carusel[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n\n  .twrap[_ngcontent-%COMP%] {\n    display: flex;\n    \n    \n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixrQkFBQTtBQUNBOztFQUVFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRUY7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0RBQUE7RUFDQSx5QkFBQTtFQUNBLG1ZQUFBO0FBR0Y7QUFEQTs7OztFQUlFLHNCQUFBO0FBSUY7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLRjtBQUhBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUFNRjtBQUpBO0VBQ0UsY0FBQTtBQU9GO0FBTEE7RUFDRSxjQUFBO0FBUUY7QUFOQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBU0Y7QUFQQSx5Q0FBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVUY7QUFSQTtFQUNFLGlCQUFBO0FBV0Y7QUFUQSxnQ0FBQTtBQUNBO0VBQ0UsaUJBQUE7QUFZRjtBQVZBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUVBQUE7RUFLQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVNGO0FBUEE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFVRjtBQVJBO0VBQ0UsZ0JBQUE7QUFXRjtBQVRBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBWUY7QUFWQTtFQUNFLGlCQUFBO0FBYUY7QUFYQTtFQUNFLGlCQUFBO0FBY0Y7QUFaQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWVGO0FBWEE7RUFDSSxnQkFBQTtBQWNKO0FBWEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWNKO0FBWEE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFjSjtBQVhBO0VBQ0U7SUFDRSxnQkFBQTtFQWNGOztFQVpBO0lBQ0UsYUFBQTtJQUNBLGtDQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQkFBQTtFQWVGO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIENvbW1vbiBzdHlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2YzZjNjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHZpZXdCb3g9JzAgMCA2MCA2MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZjBmMGYwJyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NwYXRoIGQ9J00zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMlY2aDRWNGgtNHpNNiAzNHYtNEg0djRIMHYyaDR2NGgydi00aDR2LTJINnpNNiA0VjBINHY0SDB2Mmg0djRoMlY2aDRWNEg2eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG59XG5cbmRpdixcbmZvb3RlcixcbmhlYWRlcixcbm1haW4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMDtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleDogMTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjYjk1OTk1O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNiOTZmOTA7XG59XG5cbi5ob2xkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIFN0eWxlcyBmb3IgdGV4dCBib3ggd2l0aCBtb3JlIGJ1dHRvbiAqL1xuLmxpbWl0ZWQge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGltaXRlZC5sLTIwMCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4vKiBBZGQgeW91ciBzaXplcyBmb3IgdGV4dCBib3ggKi9cbi5saW1pdGVkLmwtMzAwIHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5saW1pdGVkIC5ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUgODAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnJlYWQtbW9yZS1jaGVja2VyIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmVhZC1tb3JlLWNoZWNrZXI6Y2hlY2tlZCB+IC5saW1pdGVkIHtcbiAgbWF4LWhlaWdodDogbm9uZTtcbn1cblxuLnJlYWQtbW9yZS1jaGVja2VyOmNoZWNrZWQgfiAubGltaXRlZCAuYm90dG9tIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnJlYWQtbW9yZS1jaGVja2VyIH4gLnJlYWQtbW9yZS1idXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCJNb3JlIMK7XCI7XG59XG5cbi5yZWFkLW1vcmUtY2hlY2tlcjpjaGVja2VkIH4gLnJlYWQtbW9yZS1idXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCJMZXNzIMKrXCI7XG59XG5cbi5yZWFkLW1vcmUtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zdHlsZWQtdGV4dCB1bCBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdHlsZWQtdGV4dCB1bCBsaSBhIHtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhcHAtY2FydXNlbCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4gIC50d3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyAqL1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-modal/login-modal.component */ "LdAs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/navs/navs.service */ "livN");
/* harmony import */ var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order/order.service */ "zCCq");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/login/login.service */ "EVec");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_basket_modal_basket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-basket/modal-basket.component */ "b9fz");
/* harmony import */ var _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/replacement.pipe */ "ezZm");










function HeaderComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.count);
} }
const _c0 = function (a0) { return [a0]; };
function HeaderComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.togle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "category/" + item_r4.nameEN + ""))));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.nameEN);
} }
function HeaderComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.count);
} }
const _c1 = function () { return ["home"]; };
class HeaderComponent {
    constructor(navServices, orderService, dialog, loginServices, router) {
        this.navServices = navServices;
        this.orderService = orderService;
        this.dialog = dialog;
        this.loginServices = loginServices;
        this.router = router;
        this.arrNav = [];
        this.count = 0;
    }
    ngOnInit() {
        this.getSubgict();
        this.getNav();
        this.loadLocalStorage();
        this.initSubscription();
    }
    openDialog() {
        if (this.loginServices.isLogin === false) {
            const dialogRef = this.dialog.open(_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_0__["LoginModalComponent"]);
            dialogRef.afterClosed().subscribe(result => {
                console.log(`Dialog result: ${result}`);
            });
        }
        else {
            this.loginServices.isLogin = true;
            this.router.navigate(['admin']);
        }
    }
    realod() {
    }
    getSubgict() {
        this.navServices.$arrNav.subscribe(res => {
            this.arrNav = res;
        });
    }
    getNav() {
        this.navServices.getNavs().then(res => {
            this.arrNav = res;
        });
    }
    togle() {
        this.hiden = !this.hiden;
    }
    initSubscription() {
        this.orderService.basket.subscribe(data => {
            this.loadLocalStorage();
        });
    }
    loadLocalStorage() {
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.localProducts = JSON.parse(localStorage.getItem('basket'));
        }
        this.totla();
    }
    totla() {
        var _a;
        this.count = (_a = this.localProducts) === null || _a === void 0 ? void 0 : _a.reduce((acum, el) => el ? acum + el.count : 0, 0);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_2__["NavsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 25, vars: 11, consts: [[1, "nav"], [1, "menu-header"], [1, "nav-item", "nav-iteam-hiden", "item"], ["routerLinkActive", "active", 1, "nav-link", "nav-link-apple", "img", "apple-mobile", 3, "routerLink"], [1, "nav-item", "apple-mob"], [1, "nav-link", "nav-link-bag", "cursor", "im1g", "apple-mob", 3, "click"], ["class", "header__cart-count", 4, "ngIf"], [1, "menu-btn", 3, "click"], [1, "menu"], [1, "nav-item", "nav-iteam-hiden"], ["routerLinkActive", "active", 1, "nav-link", "nav-link-apple", "img", 3, "routerLink", "click"], ["class", "nav-item ", 4, "ngFor", "ngForOf"], [1, "nav-item", "apple-mac"], [1, "nav-link", "nav-link-bag", "cursor", "im1g", "apple-mac", 3, "click"], [1, "nav-item"], [1, "nav-link", "nav-link-bag", "cursor", 2, "cursor", "pointer", 3, "click"], ["event", ""], [1, "header__cart-count"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24); return _r3.modal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_i_7_Template, 2, 1, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_9_listener() { return ctx.togle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.togle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 5, 8, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24); return _r3.modal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HeaderComponent_i_19_Template, 2, 1, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_21_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u041A\u0430\u0431\u0456\u043D\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-modal-basket", null, 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.count > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.hiden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.hiden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.arrNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.count > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _modal_basket_modal_basket_component__WEBPACK_IMPORTED_MODULE_8__["ModalBasketComponent"]], pipes: [_shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_9__["ReplacementPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LowerCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0%;\n  box-sizing: border-box;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-size: 100% 100%;\n  background-image: url(\"/assets/images/header/images/globalnav_apple_image__cxwwnrj0urau_large.svg\");\n}\n\n.im1g[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-size: 100% 100%;\n  background-image: url(\"/assets/images/header/images/globalnav_bag_image__bmix8075eg4i_small.svg\");\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  height: 40rem;\n}\n\n.menu-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3rem;\n  padding: 0.3rem;\n  background-color: #000;\n  transition: transform 0.5s;\n  z-index: 0;\n}\n\n.menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  color: white !important;\n  z-index: 1;\n}\n\ndl[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0rem;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 3rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  font-family: \"SF Pro Text\", \"Myriad Set Pro\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #afafaf;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.border-botom[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: red;\n  transition: all 0.6s;\n}\n\n.border-botom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  width: 50px;\n  height: 10px;\n  background-color: black;\n}\n\ni[_ngcontent-%COMP%] {\n  font-style: normal;\n  position: absolute;\n  width: 23px;\n  height: 22px;\n  border-radius: 50%;\n  background-color: #ef456a;\n  text-align: center;\n  line-height: 25px;\n  color: #fff;\n  font-size: 14px;\n  right: 0px;\n  top: 3px;\n  font-family: SF Pro Display;\n  font-weight: 700;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.28);\n}\n\n.apple-mobile[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 44%;\n}\n\n@media screen and (max-width: 768px) {\n  .menu-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    z-index: 18;\n  }\n\n  .apple-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .apple-mob[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 92%;\n  }\n\n  .apple-mac[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .item[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    height: 2.5rem;\n  }\n\n  .nav-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  header[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    z-index: 20;\n    position: absolute;\n    top: 0px;\n  }\n\n  .menu-btn[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    position: relative;\n    z-index: 19;\n    overflow: hidden;\n  }\n\n  .menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 2px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    transition: all 0.5s;\n  }\n\n  .menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n    top: calc(50% - 3px);\n  }\n\n  .menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n    top: calc(50% - 10px);\n  }\n\n  .menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n    top: calc(50% + 5px);\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 15px;\n    background-color: #131111;\n    transform: translateX(-100%);\n    transition: transform 0.5s;\n    display: block;\n    z-index: 18;\n  }\n\n  .menu.active[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    z-index: 18;\n  }\n  .menu.active[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n  }\n\n  .menu-btn.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n    transform: translateX(100%);\n  }\n\n  .menu-btn.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(45deg);\n  }\n\n  .menu-btn.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(-45deg);\n  }\n}\n\n@media screen and (max-width: 652px) {\n  .apple-mob[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 89%;\n  }\n}\n\n@media screen and (max-width: 534px) {\n  .apple-mob[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 87%;\n  }\n}\n\n@media screen and (max-width: 404px) {\n  .apple-mob[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 85%;\n  }\n}\n\n@media screen and (max-width: 340px) {\n  .apple-mob[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 83%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUdBQUE7QUFDRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpR0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnSEFBQTtBQU5GOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7QUFKRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FBTEo7O0FBWUE7RUFDRTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUFURjs7RUFZQTtJQUNFLGNBQUE7RUFURjs7RUFhQTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7RUFWRjs7RUFjQTtJQUNFLGFBQUE7RUFYRjs7RUFjQTtJQUNFLGNBQUE7RUFYRjs7RUFjQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUFYRjs7RUFjQTtJQUNFLGFBQUE7RUFYRjs7RUFjQTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VBWEY7O0VBY0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBWEY7O0VBY0E7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxnQ0FBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7RUFYRjs7RUFjQTtJQUNFLG9CQUFBO0VBWEY7O0VBY0E7SUFDRSxxQkFBQTtFQVhGOztFQWFBO0lBQ0Usb0JBQUE7RUFWRjs7RUFhQTtJQUNFLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwwQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VBVkY7O0VBYUE7SUFDRSx3QkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBVkY7RUFZRTtJQUNFLGtCQUFBO0VBVko7O0VBZUE7SUFDRSxxQkFBQTtFQVpGOztFQWVBO0lBQ0UsMkJBQUE7RUFaRjs7RUFlQTtJQUNFLFFBQUE7SUFDQSw4Q0FBQTtFQVpGOztFQWVBO0lBQ0UsUUFBQTtJQUNBLCtDQUFBO0VBWkY7QUFDRjs7QUFvQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7RUFsQkY7QUFDRjs7QUFvQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7RUFsQkY7QUFDRjs7QUFvQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7RUFsQkY7QUFDRjs7QUFvQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7RUFsQkY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaW1ne1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2hlYWRlci9pbWFnZXMvZ2xvYmFsbmF2X2FwcGxlX2ltYWdlX19jeHd3bnJqMHVyYXVfbGFyZ2Uuc3ZnJyk7XHJcbn1cclxuXHJcblxyXG5cclxuLmltMWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2hlYWRlci9pbWFnZXMvZ2xvYmFsbmF2X2JhZ19pbWFnZV9fYm1peDgwNzVlZzRpX3NtYWxsLnN2ZycpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG5cclxuLmNhcm91c2VsLWl0ZW17XHJcbiAgaGVpZ2h0OiA0MHJlbTtcclxufVxyXG5cclxuLm1lbnUtaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgcGFkZGluZzogMC4zcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7IFxyXG4gIHotaW5kZXg6IDA7XHJcbiAgXHJcbn1cclxuLm1lbnUgPiBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMTtcclxuICBcclxuICBcclxuXHJcbn1cclxuXHJcblxyXG5kbCwgb2wsIHVsIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG5he1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHRcIixcIk15cmlhZCBTZXQgUHJvXCIsXCJTRiBQcm8gSWNvbnNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsc2Fucy1zZXJpZjtcclxufVxyXG5hOmhvdmVye1xyXG4gIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gIGRpc3BsYXk6ICBub25lO1xyXG59XHJcbi5ib3JkZXItYm90b217XHJcbiAgd2lkdGg6IDEwcHggO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC42cztcclxufVxyXG5cclxuLmJvcmRlci1ib3RvbSA6aG92ZXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NTZhO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDNweDtcclxuICBmb250LWZhbWlseTogU0YgUHJvIERpc3BsYXk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYigwIDAgMCAvIDI4JSk7XHJcbn1cclxuXHJcblxyXG4uYXBwbGUtbW9iaWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogIDQ0JTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1lbnUtaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTg7XHJcbiAgfVxyXG5cclxuICAuYXBwbGUtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmFwcGxlLW1vYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA5MiU7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuYXBwbGUtbWFjIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaXRlbXtcclxuICAgIGRpc3BsYXk6ICBibG9jaztcclxuICB9XHJcblxyXG4gIC5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saXN0e1xyXG4gICAgZGlzcGxheTogbm9uZTsgIFxyXG4gIH1cclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWJ0biB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAubWVudS1idG4gc3BhbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIH1cclxuICBcclxuICAubWVudS1idG4gc3BhbjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gM3B4KTtcclxuICB9XHJcblxyXG4gIC5tZW51LWJ0biBzcGFuOm50aC1vZi10eXBlKDIpIHtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICB9XHJcbiAgLm1lbnUtYnRuIHNwYW46bnRoLW9mLXR5cGUoMykge1xyXG4gICAgdG9wOiBjYWxjKDUwJSArIDVweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE3LCAxNyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiAxODtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUuYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTg7XHJcblxyXG4gICAgLm1lbnUtaGVhZGVye1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICAubWVudSBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWJ0bi5hY3RpdmUgc3BhbjpmaXJzdC1vZi10eXBlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtYnRuLmFjdGl2ZSBzcGFuOm50aC1vZi10eXBlKDIpIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtYnRuLmFjdGl2ZSBzcGFuOm50aC1vZi10eXBlKDMpIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MnB4KSB7XHJcbiAgLmFwcGxlLW1vYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA4OSU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzNHB4KSB7XHJcbiAgLmFwcGxlLW1vYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA4NyU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwNHB4KSB7XHJcbiAgLmFwcGxlLW1vYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA4NSU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgLmFwcGxlLW1vYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA4MyU7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "36kR":
/*!*************************************************************************!*\
  !*** ./src/app/admin/admin-detali/description/description.component.ts ***!
  \*************************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_models_description_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/description,models */ "rxGk");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_description_description_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/description/description.service */ "tVP0");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/pipes/filter.pipe */ "UhSo");

















function DescriptionComponent_mat_optgroup_7_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DescriptionComponent_mat_optgroup_7_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.add(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", item_r4.title, " ", item_r4.memory, " ", item_r4.color, " ");
} }
function DescriptionComponent_mat_optgroup_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-optgroup", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DescriptionComponent_mat_optgroup_7_mat_option_1_Template, 2, 4, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", group_r2.nameEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, ctx_r0.arrApple, group_r2.nameEN));
} }
class DescriptionComponent {
    constructor(formBolider, descServices, storage, appleServices) {
        this.formBolider = formBolider;
        this.descServices = descServices;
        this.storage = storage;
        this.appleServices = appleServices;
        this.description = this.formBolider.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            textarea: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
        this.select = this.formBolider.group({
            select: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.getDescription();
        this.getApple();
    }
    getApple() {
        this.appleServices.getApple().then(res => {
            this.appleArrey = res;
        });
    }
    getDescription() {
        this.descServices.getDescription().then(res => {
            this.arrDescription = res;
        });
    }
    formGroup(value) {
        const { select } = this.select.value;
        const { title, textarea, img } = this.description.value;
        const description = Object.assign({}, new src_app_shared_models_description_models__WEBPACK_IMPORTED_MODULE_2__["Description"](this.apple.id, this.apple.uuid, select, title, textarea, this.img));
        const newDescription = Object.assign(Object.assign({}, this.apple), { description: Object.assign({}, description) });
        this.appleServices.updateApple(`apple ${this.apple.id}`, newDescription).then(res => {
            this.getApple();
        });
        // if(this.selectedItem && this.selectedItem.id) {
        //   const description = {... new Description(this.selectedItem.id, this.selectedItem.uuid,select , title ,textarea, this.img)}
        //     this.descServices.updateDescription(`description ${description.id}`,description).then(res => {
        //         this.getDescription()
        //       })
        // } else {
        //   const description = {... new Description(1,this.uuid ,select , title ,textarea , this.img)}
        //   if(this.arrDescription.length > 0) {
        //     description.id = this.arrDescription.slice(-1)[0].id +1
        //   }
        //   this.descServices.addDescription(description, `description ${description.id}`).then(res => {
        //     this.getDescription()
        //   }) 
        // }
        this.isdisabled = true;
    }
    add(item) {
        this.description.reset();
        this.selectedItem = this.appleArrey.find(el => el.category === item.category && el.uuid === item.uuid);
        this.isText = false;
        if (this.selectedItem.description) {
            this.isText = true;
            const { description: { title, description } } = this.selectedItem;
            this.description.patchValue({ title, textarea: description });
            this.img = this.selectedItem.description.img;
        }
        this.isdisabled = false;
        this.img = '';
        this.uploadProgress = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(0);
        this.uuid = item.uuid;
        this.apple = item;
    }
    uploadFile(event) {
        const myId = uuid__WEBPACK_IMPORTED_MODULE_3__["v4"]();
        // console.log(myId);
        console.log('description ============================');
        this.isdisabled = true;
        console.log(this.img, '2');
        this.description.value.img = '';
        if (this.img) {
            this.storage.refFromURL(this.img).delete();
            this.img = '';
        }
        const file = event.target.files[0];
        const filePath = `description/${myId}.${file.type.split('/')[1]}`;
        const task = this.storage.upload(filePath, file);
        console.log('dec', filePath);
        this.uploadProgress = task.percentageChanges();
        task.then(result => {
            this.storage.ref(`description/${result.metadata.name}`).getDownloadURL().subscribe(img => {
                this.img = img;
                this.uploadProgress.subscribe(res => {
                    if (res === 100) {
                        this.isdisabled = false;
                    }
                });
            });
        });
    }
}
DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) { return new (t || DescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_description_description_service__WEBPACK_IMPORTED_MODULE_5__["DescriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_7__["AppleService"])); };
DescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DescriptionComponent, selectors: [["app-description"]], inputs: { arrNav: "arrNav", arrApple: "arrApple" }, decls: 27, vars: 9, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "fill"], ["formControlName", "select"], [3, "label", 4, "ngFor", "ngForOf"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["formControlName", "title", "matInput", "", "name", "title"], ["formControlName", "textarea", "matInput", ""], ["for", "file", 1, "custom-file-upload"], ["formControlName", "img", "id", "file", "type", "file", 3, "change"], ["mode", "determinate", 3, "value"], ["id", ""], ["type", "submit", "mat-raised-button", "", 1, "margin", 3, "disabled", "color", "textContent"], [3, "label"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"]], template: function DescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DescriptionComponent_mat_optgroup_7_Template, 3, 5, "mat-optgroup", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DescriptionComponent_Template_form_ngSubmit_8_listener() { return ctx.formGroup(ctx.description.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DescriptionComponent_Template_input_change_19_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "mat-progress-bar", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.select);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 7, ctx.uploadProgress));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isdisabled || ctx.description.invalid)("color", ctx.isText ? "accent" : "primary")("textContent", ctx.isText ? "Save" : "Add");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptgroup"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "3kYD":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/routing.pipe.ts ***!
  \**********************************************/
/*! exports provided: RoutingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingPipe", function() { return RoutingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RoutingPipe {
    transform(value, memory, color) {
    }
}
RoutingPipe.ɵfac = function RoutingPipe_Factory(t) { return new (t || RoutingPipe)(); };
RoutingPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "routing", type: RoutingPipe, pure: true });


/***/ }),

/***/ "41zX":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-gallery/admin-gallery.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGalleryComponent", function() { return AdminGalleryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_models_gallery_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/gallery.models */ "4nj4");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_shared_services_gallery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/gallery.service */ "eU2y");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function AdminGalleryComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminGalleryComponent_tr_28_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.editGallery(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminGalleryComponent_tr_28_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.deleteGallery(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.name);
} }
class AdminGalleryComponent {
    constructor(formBolider, storage, galleryServices) {
        this.formBolider = formBolider;
        this.storage = storage;
        this.galleryServices = galleryServices;
        this.arrGallery = [];
        this.formGallery = this.formBolider.group({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
        this.getGallery();
    }
    getGallery() {
        this.galleryServices.getGallery().then(res => {
            this.arrGallery = res;
        });
    }
    addGallery(value) {
        const gallery = Object.assign({}, new src_app_shared_models_gallery_models__WEBPACK_IMPORTED_MODULE_2__["Gallery"](0, this.img, value.name));
        if (!this.isText) {
            if (this.arrGallery.length > 0) {
                gallery.id = this.arrGallery.slice(-1)[0].id + 1;
            }
            this.galleryServices.addGallery(gallery, `gallery ${gallery.id}`).then(res => {
                this.getGallery();
            });
        }
        if (this.isText) {
            gallery.id = this.idGallery;
            this.galleryServices.updateGallery(`gallery ${gallery.id}`, gallery).then(() => {
                this.getGallery();
            });
            this.isText = false;
        }
        this.img = '';
        this.uploadProgress = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(0);
        this.formGallery.reset();
        this.isdisabled = true;
    }
    uploadFile(event) {
        const myId = uuid__WEBPACK_IMPORTED_MODULE_3__["v4"]();
        this.isdisabled = true;
        this.formGallery.value.img = '';
        if (this.img) {
            this.storage.refFromURL(this.img).delete();
            this.img = '';
        }
        const file = event.target.files[0];
        const filePath = `gallery/${myId}.${file.type.split('/')[1]}`;
        console.log('gallery', filePath);
        const task = this.storage.upload(filePath, file);
        this.uploadProgress = task.percentageChanges();
        task.then(result => {
            this.storage.ref(`gallery/${result.metadata.name}`).getDownloadURL().subscribe(img => {
                this.img = img;
                this.uploadProgress.subscribe(res => {
                    if (res === 100) {
                        this.isdisabled = false;
                    }
                });
            });
        });
    }
    deleteGallery(item) {
        this.galleryServices.deleteGallery(`gallery ${item.id}`).then(() => {
            this.getGallery();
        });
        if (item.img) {
            this.storage.refFromURL(item.img).delete();
        }
    }
    editGallery(item) {
        this.idGallery = item.id;
        this.isText = true;
        this.formGallery.patchValue({ name: item.name });
        this.img = item.img;
        this.isdisabled = false;
    }
}
AdminGalleryComponent.ɵfac = function AdminGalleryComponent_Factory(t) { return new (t || AdminGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_gallery_service__WEBPACK_IMPORTED_MODULE_6__["GalleryService"])); };
AdminGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminGalleryComponent, selectors: [["app-admin-gallery"]], decls: 29, vars: 8, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["formControlName", "name", "matInput", "", "name", "name"], ["for", "file-gallery", 1, "custom-file-upload"], ["formControlName", "img", "id", "file-gallery", "type", "file", 3, "change"], ["mode", "determinate", 3, "value"], ["id", ""], ["type", "submit", "mat-raised-button", "", 1, "margin", 3, "disabled", "color", "textContent"], [1, "table", "block"], [4, "ngFor", "ngForOf"], ["alt", "", 2, "height", "50px", 3, "src"], ["mat-raised-button", "", "color", "accent", 1, "res", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function AdminGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminGalleryComponent_Template_form_ngSubmit_0_listener() { return ctx.addGallery(ctx.formGallery.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AdminGalleryComponent_Template_input_change_7_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "mat-progress-bar", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Img");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, AdminGalleryComponent_tr_28_Template, 13, 3, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGallery);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 6, ctx.uploadProgress));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isdisabled || ctx.formGallery.invalid)("color", ctx.isText ? "accent" : "primary")("textContent", ctx.isText ? "Save" : "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrGallery);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "4nj4":
/*!*************************************************!*\
  !*** ./src/app/shared/models/gallery.models.ts ***!
  \*************************************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
class Gallery {
    constructor(id, img, name) {
        this.id = id;
        this.img = img;
        this.name = name;
    }
}


/***/ }),

/***/ "6c9R":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/name-string.pipe.ts ***!
  \**************************************************/
/*! exports provided: NameStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameStringPipe", function() { return NameStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NameStringPipe {
    transform(value) {
        if (value)
            return value + 'gb';
    }
}
NameStringPipe.ɵfac = function NameStringPipe_Factory(t) { return new (t || NameStringPipe)(); };
NameStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "nameString", type: NameStringPipe, pure: true });


/***/ }),

/***/ "6hn5":
/*!****************************************************!*\
  !*** ./src/app/shared/services/map/map.service.ts ***!
  \****************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MapService {
    // sector1 = [ //прямокутник 1
    //   {lat: 49.844575, lng: 24.026266}, //верхня ліва
    //   {lat: 49.844575, lng: 24.038749}, //верхня права
    //   {lat: 49.839575, lng: 24.038749}, //нижня права
    //   {lat: 49.839575, lng: 24.026266} //нижня ліва
    // ];
    // sector2 = [ //прямокутник 2
    //   {lat: 49.849775, lng: 24.005900}, //верхня ліва
    //   {lat: 49.849775, lng: 24.041370}, //верхня права
    //   {lat: 49.832200, lng: 24.041370}, //нижня права
    //   {lat: 49.832200, lng: 24.005900} //нижня ліва
    // ];
    //  sector1Param = {
    //   paths: this.sector1,
    //   strokeColor: 'green',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: 'green',
    //   editable: false,
    //   fillOpacity: 0.25,
    //   geodesic: true
    //  }
    //  sector2Param = {
    //   paths: this.sector2,
    //   strokeColor: 'yellow',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: 'yellow',
    //   editable: false,
    //   fillOpacity: 0.25,
    //   geodesic: true
    //  }
    constructor() {
        // apiKey = 'AIzaSyDKmK_ZSFQkIEcNMAIB_NlQ4oZcxHnDPPQ';
        // apiKey = 'AIzaSyB4_MiFYsOQRTsDYhbsFqqp-vDSyyLy3x4';
        // apiKey = 'A  IzaSyB4_MiFYsOQRTsDYhbsFqqp-vDSyyLy3x4';
        this.apiKey = 'AIzaSyC8r1Rdnau0NpihEJXKEo4EaHwwtNdEQJo';
        this.mapLocation = { lat: 49.8232878828969, lng: 24.026186443972122 }; //пл.Ринок, 1
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7WFE":
/*!********************************************************!*\
  !*** ./src/app/shared/services/apple/apple.service.ts ***!
  \********************************************************/
/*! exports provided: AppleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppleService", function() { return AppleService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AppleService {
    constructor(firestory, http) {
        this.firestory = firestory;
        this.http = http;
        this.seach = '';
        this.key = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].NP_KEY;
        this.url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
        this.novaUrl = `https://api.novaposhta.ua/v2.0/json/${this.key}`;
    }
    getСurrency() {
        return this.http.get(this.url);
    }
    getNova() {
        console.log(this.seach);
        return this.http.post(this.novaUrl, {
            "modelName": "AddressGeneral",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "Language": "ua",
                "CityName": this.seach,
            },
            "apiKey": this.key
        });
    }
    getApple() {
        return this.firestory.collection('apple').ref.orderBy('id', 'asc').get().then(res => res.docs.map(el => el.data()));
        // return  this.firestory.collection('apple').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()))
        // return  this.firestory.collection('apple').ref.orderBy('id', 'asc').startAt(1).limit(5).get().then(res =>res.docs.map(el=> el.data()))
    }
    addApple(apple, num) {
        // delete (apple as any).details;
        // apple.description =  apple.description || 'ssss' as any;
        return this.firestory.collection('apple').doc(num).set(apple);
    }
    deleteApple(id) {
        return this.firestory.collection('apple').doc(id).delete();
    }
    updateApple(id, apple) {
        return this.firestory.collection('apple').doc(id).set(apple);
    }
    deleteComments(doc, apple) {
        return this.firestory.collection('apple').doc(apple).ref.update({
            "comments": firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.arrayRemove(doc)
        });
    }
}
AppleService.ɵfac = function AppleService_Factory(t) { return new (t || AppleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AppleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppleService, factory: AppleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8JtR":
/*!*************************************************************************!*\
  !*** ./src/app/admin/admin-category/admin-navs/admin-navs.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminNavsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavsComponent", function() { return AdminNavsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_models_category_navs_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/category-navs.models */ "L8Fw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/navs/navs.service */ "livN");
/* harmony import */ var src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/category/category.service */ "hmux");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function AdminNavsComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminNavsComponent_tr_25_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.editNavs(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminNavsComponent_tr_25_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.deleteNavs(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.nameUA, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.nameEN, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
} }
class AdminNavsComponent {
    constructor(navsServices, categoryServices, appleServices, storage, formBolider) {
        this.navsServices = navsServices;
        this.categoryServices = categoryServices;
        this.appleServices = appleServices;
        this.storage = storage;
        this.formBolider = formBolider;
        this.panelOpenState = false;
        this.arrCategory = [];
        this.arrNavs = [];
        this.formGroup = this.formBolider.group({
            nameEN: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            nameUA: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
        this.subscribe = this.navsServices.$arrNav.subscribe(res => {
            this.arrNavs = res;
        });
    }
    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }
    // getNavs(){
    //   this.navsServices.getNavs().then(res=>{
    //     this.navsServices.$arrNav.next(res)
    //     this.arrNavs = res
    //   })
    // }
    form(form) {
    }
    addNavs() {
        const navs = Object.assign({}, new src_app_shared_models_category_navs_models__WEBPACK_IMPORTED_MODULE_2__["Navs"](1, this.formGroup.value.nameEN, this.formGroup.value.nameUA));
        if (!this.isText) {
            if (this.arrNavs.length > 0) {
                navs.id = this.arrNavs.slice(-1)[0].id + 1;
            }
            this.navsServices.addNavs(navs, `navs ${navs.id}`).then(res => {
                this.navsServices.getNavs();
            });
        }
        if (this.isText) {
            navs.id = this.idNav;
            this.navsServices.updateNavs(`navs ${navs.id}`, navs).then(res => {
                this.navsServices.getNavs();
            });
            this.isText = false;
        }
        this.formGroup.reset();
    }
    deleteNavs(iteam) {
        this.navsServices.deleteNavs(`navs ${iteam.id.toString()}`).then(nav => {
            this.navsServices.getNavs();
            this.categoryServices.getCategory().then(category => {
                const targetCategory = category.filter(el => el.category.toLowerCase() === iteam.nameEN.toLowerCase());
                const deleteJoin = targetCategory.map(el => {
                    this.storage.refFromURL(el.img).delete();
                    return this.categoryServices.deleteCategory(el.doc);
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(deleteJoin).subscribe(res => {
                    this.categoryServices.getCategory().then(() => { });
                    this.appleServices.getApple().then(apple => {
                        const targetApple = apple.filter(el => el.category.toLowerCase() === iteam.nameEN.toLowerCase());
                        const deleteApple = targetApple.map(el => {
                            this.storage.refFromURL(el.img).delete();
                            return this.appleServices.deleteApple(`apple ${el.id}`);
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(deleteApple).subscribe(res => {
                        });
                    });
                });
            });
        });
    }
    editNavs(iteam) {
        this.idNav = iteam.id;
        this.formGroup.patchValue({
            nameEN: iteam.nameEN,
            nameUA: iteam.nameUA
        });
        this.isText = true;
    }
}
AdminNavsComponent.ɵfac = function AdminNavsComponent_Factory(t) { return new (t || AdminNavsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_4__["NavsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_6__["AppleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AdminNavsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdminNavsComponent, selectors: [["app-admin-navs"]], decls: 26, vars: 6, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["formControlName", "nameEN", "matInput", "", "name", "nameEn"], ["formControlName", "nameUA", "matInput", "", "name", "nameUA"], ["mat-raised-button", "", 1, "margin", 3, "disabled", "color", "textContent", "click"], [1, "table", "block"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "res", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"]], template: function AdminNavsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0417\u0440\u043E\u0431\u0438\u0432 \u0441\u0442\u0430\u0442\u0438\u0447\u043D\u0456 , \u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u044F\u0432 \u0431\u043E \u0445\u043E\u0447\u0443 \u043F\u043E\u0442\u0456\u043C \u044F\u043A\u043E\u0441\u044C \u0434\u043E\u0440\u043E\u0431\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminNavsComponent_Template_form_ngSubmit_2_listener() { return ctx.form(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "nameEn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "nameUa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminNavsComponent_Template_button_click_11_listener() { return ctx.addNavs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "nameUA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "nameEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AdminNavsComponent_tr_25_Template, 13, 5, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.formGroup.invalid)("disabled", true)("color", ctx.isText ? "accent" : "primary")("textContent", ctx.isText ? "Save" : "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.arrNavs);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: ["table[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 90%;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom-file-upload[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.papa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  color: \"red\";\n}\n\n.res[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tbmF2cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFFQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6ImFkbWluLW5hdnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hcmdpbntcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wYXBhICBwOm50aC1vZi10eXBlKDEpIHtcclxuICBjb2xvcjogJ3JlZCdcclxufVxyXG5cclxuLnJlc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "8ysZ":
/*!***********************************************************!*\
  !*** ./src/app/components/navigate/navigate.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateComponent", function() { return NavigateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/category/category.service */ "hmux");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lazy-load-images */ "V+U2");
/* harmony import */ var _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/replacement.pipe */ "ezZm");







const _c0 = function (a0) { return [a0]; };
function NavigateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "/category/" + item_r1.category + "/" + item_r1.title))));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-src", item_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
} }
class NavigateComponent {
    constructor(categoryServices, routerActivate, router) {
        this.categoryServices = categoryServices;
        this.routerActivate = routerActivate;
        this.router = router;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.getCategry();
            }
        });
    }
    ngOnInit() {
    }
    getCategry() {
        const category = this.routerActivate.snapshot.paramMap.get('category');
        // this.category = category
        this.categoryServices.getCategory().then(res => {
            this.arrCategory = res.filter(product => product.category.trim().replace(/ /g, '-') === category.trim().replace(/ /g, '-'));
        });
    }
}
NavigateComponent.ɵfac = function NavigateComponent_Factory(t) { return new (t || NavigateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
NavigateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigateComponent, selectors: [["app-navigate"]], decls: 2, vars: 1, consts: [[1, "block"], ["class", "card-apple", 4, "ngFor", "ngForOf"], [1, "card-apple"], ["lazy-load-images", "", 1, "image-list"], ["routerLinkActive", "active", 3, "routerLink"], ["src", "../../../assets/images/loader.png", "alt", "", 1, "img"], [1, "font-title"]], template: function NavigateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavigateComponent_div_1_Template, 8, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.arrCategory);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImagesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"]], pipes: [_shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplacementPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"]], styles: ["@font-face {\n  font-family: \"apple\";\n  src: url(\"/assets/font/9651.ttf\");\n}\n.block[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f8f8f8;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card-apple[_ngcontent-%COMP%] {\n  margin-right: 2%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.font-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n  text-align: center;\n  margin-top: 1rem;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.img[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}\n.active[_ngcontent-%COMP%] {\n  color: red;\n}\n.example-card[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.example-card[_ngcontent-%COMP%] {\n  transition: all 0.6s;\n}\n.width[_ngcontent-%COMP%] {\n  width: 220px;\n}\n.text-wigle[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.mat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.center[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.1s;\n}\nmat-card[_ngcontent-%COMP%]:hover   .center[_ngcontent-%COMP%] {\n  opacity: 100;\n}\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\nmat-slider[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.col-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 20%;\n}\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\nh5[_ngcontent-%COMP%] {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: 900;\n  line-height: normal;\n  font-size: 24px;\n  letter-spacing: 1.5px;\n  color: #000;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZpZ2F0ZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtaXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7RUFDQSxpQ0FBQTtBQUFGO0FBR0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VDUEEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURPSjtBQUdBO0VBQ0UsZ0JBQUE7RUNiRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRGFGLHNCQUFBO0FBRUY7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNERBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVGO0FBRUE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVGO0FBQUE7RUFDRSxvQkFBQTtBQUdGO0FBQUE7RUFDRSxZQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFBQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUdGO0FBQUE7RUFDRSxZQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBR0Y7QUFBQTtFQUNFLFlBQUE7QUFHRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFHRjtBQURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSUY7QUFEQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQUlGO0FBRkE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUtGIiwiZmlsZSI6Im5hdmlnYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vbWl4aW4uc2Nzcyc7XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcImFwcGxlXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnQvOTY1MS50dGZcIik7XHJcbn1cclxuXHJcbi5ibG9ja3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBAaW5jbHVkZSBjZW50ZXIoKVxyXG4gICBcclxufVxyXG5cclxuLmNhcmQtYXBwbGV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBAaW5jbHVkZSBjZW50ZXIoKTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9udC10aXRsZXtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi50ZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5leGFtcGxlLWNhcmR7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbn1cclxuXHJcbi53aWR0aHtcclxuICB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LXdpZ2xlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jZW50ZXJ7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xyXG59XHJcblxyXG5tYXQtY2FyZDpob3ZlciAuY2VudGVye1xyXG4gIG9wYWNpdHk6IDEwMDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5tYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5jb2wtMyB7XHJcbiAgZmxleDogMCAwIDI1JTtcclxuICBtYXgtd2lkdGg6IDIwJTtcclxufVxyXG4uZXhhbXBsZS1zZWN0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5oNSB7XHJcbiAgZm9udC1mYW1pbHk6IFNGIFBybyBEaXNwbGF5O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59IiwiXHJcbkBtaXhpbiBjZW50ZXIoKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "A95i":
/*!****************************************************************!*\
  !*** ./src/app/pages/apple-details/apple-details.component.ts ***!
  \****************************************************************/
/*! exports provided: AppleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppleDetailsComponent", function() { return AppleDetailsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_models_comments_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/comments.models */ "fUaZ");
/* harmony import */ var src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/snack-bar/snack-bar.component */ "rqfx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/order/order.service */ "zCCq");
/* harmony import */ var src_app_shared_services_detali_detali_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/detali/detali.service */ "GxZS");
/* harmony import */ var src_app_shared_services_description_description_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/description/description.service */ "tVP0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-lazy-load-images */ "V+U2");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_pipes_value_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/value.pipe */ "v/O3");
/* harmony import */ var _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/pipes/replacement.pipe */ "ezZm");
/* harmony import */ var _shared_pipes_name_string_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/pipes/name-string.pipe */ "6c9R");
/* harmony import */ var _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/pipes/fixed.pipe */ "ItGS");
/* harmony import */ var _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/pipes/kyrs.pipe */ "S8YT");
/* harmony import */ var _shared_pipes_memory_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/pipes/memory.pipe */ "JlZB");
/* harmony import */ var _shared_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/pipes/sort.pipe */ "aip8");
/* harmony import */ var _shared_pipes_object_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/pipes/object.pipe */ "QduQ");


























const _c0 = function (a0) { return [a0]; };
function AppleDetailsComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "meta", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "meta", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "nameString");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "meta", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "nameString");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 12, "/category/" + item_r5.category))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 16, "/category/" + item_r5.category + "/" + item_r5.categoryProduct))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.categoryProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", item_r5.title, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 18, item_r5.memory), " ", item_r5.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", item_r5.title, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 20, item_r5.memory), " ", item_r5.color, "");
} }
function AppleDetailsComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u041A\u043E\u043B\u0456\u0440: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppleDetailsComponent_div_2_mat_radio_group_6_ng_container_1_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", season_r13.color)("checked", item_r7.color === season_r13.color)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, "/category/" + item_r7.category + "/" + item_r7.categoryProduct + "/" + season_r13.uuid))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 8, season_r13.color), " ");
} }
function AppleDetailsComponent_div_2_mat_radio_group_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppleDetailsComponent_div_2_mat_radio_group_6_ng_container_1_mat_radio_button_1_Template, 5, 12, "mat-radio-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const season_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", season_r13.color);
} }
function AppleDetailsComponent_div_2_mat_radio_group_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-group", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppleDetailsComponent_div_2_mat_radio_group_6_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "memory");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 4, ctx_r10.arrColor, "abs"), "color"));
} }
function AppleDetailsComponent_div_2_div_7_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "/category/" + item_r7.category + "/" + item_r7.categoryProduct + "/" + el_r18.uuid))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](el_r18.memory);
} }
function AppleDetailsComponent_div_2_div_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppleDetailsComponent_div_2_div_7_ng_container_4_button_1_Template, 4, 8, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const el_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", el_r18.memory);
} }
function AppleDetailsComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u041F\u0430\u043C\u2019\u044F\u0442\u044C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AppleDetailsComponent_div_2_div_7_ng_container_4_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "memory");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 4, ctx_r11.arrMemory, "123"), "memory"));
} }
function AppleDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AppleDetailsComponent_div_2_div_4_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AppleDetailsComponent_div_2_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.addApple(ctx_r22.formGroup.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppleDetailsComponent_div_2_mat_radio_group_6_Template, 4, 7, "mat-radio-group", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AppleDetailsComponent_div_2_div_7_Template, 7, 7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u0412\u0441\u044C\u043E\u0433\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppleDetailsComponent_div_2_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const item_r7 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r24.addProduct(item_r7); return ctx_r24.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u041A\u0443\u043F\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.memory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 7, item_r7.price / item_r7.dollarPrice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 9, item_r7.price), " \u0433\u0440\u043D.");
} }
function AppleDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r25.description == null ? null : item_r25.description.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r25.description == null ? null : item_r25.description.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-src", item_r25.description == null ? null : item_r25.description.img);
} }
function AppleDetailsComponent_ng_container_11_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", el_r28.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", el_r28.value, " ");
} }
function AppleDetailsComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppleDetailsComponent_ng_container_11_tr_1_Template, 5, 2, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "object");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, item_r26.detalis)));
} }
function AppleDetailsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "meta", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "meta", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r29.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r29.description);
} }
class AppleDetailsComponent {
    constructor(appleServices, route, routerActivate, orderServices, detaliServices, descriptionServices, dialog) {
        this.appleServices = appleServices;
        this.route = route;
        this.routerActivate = routerActivate;
        this.orderServices = orderServices;
        this.detaliServices = detaliServices;
        this.descriptionServices = descriptionServices;
        this.dialog = dialog;
        this.localApple = [];
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            radio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
        this.formConnet = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            textArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
        this.routerActivate.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.getApple();
            }
        });
    }
    ngOnInit() {
        // this.getApple()
        this.getDescription();
        this.getDetali();
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["SnackBarComponent"], {
            width: '250px',
            data: { title: 'Добавлено в корзину' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    getDescription() {
        this.descriptionServices.getDescription().then(res => {
            const uuidRouring = this.route.snapshot.paramMap.get('id');
            this.arrDescription = res.filter(el => uuidRouring === el.uuid);
            // console.log(this.arrDescription);
        });
    }
    getDetali() {
        this.detaliServices.getDatali().then(res => {
            const uuidRouring = this.route.snapshot.paramMap.get('id');
            this.arrDetali = res.filter(el => {
                return uuidRouring === el.uuid;
            });
        });
    }
    getApple() {
        const uuidRouring = this.route.snapshot.paramMap.get('id');
        this.appleServices.getApple().then(apple => {
            this.arrApple = apple.filter(({ id, uuid, categoryProduct, color, memory }) => {
                return uuidRouring === uuid;
            });
            this.apple = this.arrApple.find(el => el);
            // console.log(this.apple);
            const newCategoryProduct = this.arrApple.find(el => el.categoryProduct);
            const newColor = this.arrApple.find(el => el.color);
            const newMemory = this.arrApple.find(el => el.memory);
            this.arrColor = apple.filter((category, i, arr) => {
                var _a, _b;
                if (newColor && ((_a = category.color) === null || _a === void 0 ? void 0 : _a.toLowerCase().trim()) === ((_b = newColor.color) === null || _b === void 0 ? void 0 : _b.toLowerCase().trim())) {
                    return uuidRouring === category.uuid && category.color.toLowerCase().trim() === newColor.color.toLowerCase().trim();
                }
                // console.log(uuidRouring , 'uuid');
                return (category === null || category === void 0 ? void 0 : category.categoryProduct) === (newCategoryProduct === null || newCategoryProduct === void 0 ? void 0 : newCategoryProduct.categoryProduct) && newMemory ? category.memory.toLowerCase().trim() === newMemory.memory.toLowerCase().trim() : category.uuid === uuidRouring;
            });
            // console.log(this.arrColor , 'COlor');
            console.log(newColor);
            this.arrMemory = apple.filter(({ id, uuid, categoryProduct, color, memory }, i, arr) => {
                var _a;
                if (newMemory && (memory === null || memory === void 0 ? void 0 : memory.toLowerCase().trim()) === ((_a = newMemory.memory) === null || _a === void 0 ? void 0 : _a.toLowerCase().trim())) {
                    return uuidRouring === uuid && memory.toLowerCase().trim() === newMemory.memory.toLowerCase().trim();
                }
                return categoryProduct === (newCategoryProduct === null || newCategoryProduct === void 0 ? void 0 : newCategoryProduct.categoryProduct) && newColor ? color.toLowerCase().trim() === newColor.color.toLowerCase().trim() : uuid === uuidRouring;
            });
            // console.log(this.arrMemory , 'memory');
        });
    }
    addProduct(apple) {
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.localApple = JSON.parse(localStorage.getItem('basket'));
            if (this.localApple.some(localApple => localApple.id === apple.id)) {
                const index = this.localApple.findIndex(localApple => localApple.id === apple.id);
                this.localApple[index].count += apple.count;
            }
            else {
                this.localApple.push(apple);
            }
            localStorage.setItem('basket', JSON.stringify(this.localApple));
        }
        else {
            this.localApple.push(apple);
            localStorage.setItem('basket', JSON.stringify(this.localApple));
        }
        this.orderServices.basket.next(apple);
    }
    formAdd(value) {
        const { name, textArea } = this.formConnet.value;
        const comments = Object.assign({}, new src_app_shared_models_comments_models__WEBPACK_IMPORTED_MODULE_2__["Comments"](1, this.apple.uuid, name, textArea, new Date().toLocaleString()));
        if (!this.apple.comments) {
            this.apple.comments = [];
        }
        if (this.apple.comments.length > 0) {
            comments.id = this.apple.comments.slice(-1)[0].id + 1;
        }
        this.apple.comments.push(comments);
        this.appleServices.updateApple(`apple ${this.apple.id}`, this.apple).then(() => {
            this.getApple();
        });
        this.formConnet.reset();
        // console.log(this.arrr);
        // let newComments 
        // const newComments = this.apple.comments
        // newComments.comments.push(comments)
        // this.appleServices.addApple(comments)
    }
}
AppleDetailsComponent.ɵfac = function AppleDetailsComponent_Factory(t) { return new (t || AppleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_5__["AppleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_detali_detali_service__WEBPACK_IMPORTED_MODULE_7__["DetaliService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_description_description_service__WEBPACK_IMPORTED_MODULE_8__["DescriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
AppleDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppleDetailsComponent, selectors: [["app-apple-details"]], decls: 27, vars: 8, consts: [[1, "container"], ["class", "breadcrumbs", "itemscope", "", "itemtype", "http://schema.org/BreadcrumbList", 4, "ngFor", "ngForOf"], ["class", "main", 4, "ngFor", "ngForOf"], [1, "product-info__icons", "d-flex", "flex-wrap"], [1, "center"], ["animationDuration", "0ms"], ["label", "\u041E\u041F\u0418\u0421", 1, "center"], [4, "ngFor", "ngForOf"], ["label", "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"], ["id", "product-features", 1, "features", 2, "margin-top", "1.5rem"], ["label", "\u0412\u0456\u0434\u0433\u0443\u043A\u0438"], [2, "overflow", "hidden", "margin-top", "1.5rem", "display", "block", 3, "formGroup"], ["data-provider", "guest", 1, "provider-fields", "date"], [1, "review-field"], ["formControlName", "name", "type", "text", "name", "name", "id", "review-name", "value", ""], ["for", "review-text"], ["formControlName", "textArea", "id", "review-text", "name", "text", "rows", "10", "cols", "45"], ["mat-raised-button", "", "color", "primary", 2, "width", "30%", 3, "click"], ["class", "review__bg", "style", "margin-top: 3rem;", 4, "ngFor", "ngForOf"], ["itemscope", "", "itemtype", "http://schema.org/BreadcrumbList", 1, "breadcrumbs"], [1, "nav"], ["routerLinkActive", "active", 3, "routerLink"], ["itemprop", "name", 1, "span", "newSpan"], ["itemprop", "position", "content", "2"], ["itemprop", "position", "content", "3"], ["itemprop", "position", "content", "4"], [1, "black"], [1, "main"], ["alt", "", 3, "src"], ["class", "h-product h-product_spacing", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", "formControlName", "radio", 4, "ngIf"], ["class", "example-button-row", 4, "ngIf"], [1, "product-info__price"], [1, "product-info__price-total"], [1, "price_usd", "mr-2"], ["data-price", "855", 1, "usd"], [1, "price_uah"], ["data-price", "23854.5", 1, "uah"], [1, "buy"], ["color", "primary", "mat-raised-button", "", 1, "posit", 3, "click"], [1, "h-product", "h-product_spacing"], ["aria-labelledby", "example-radio-group-label", "formControlName", "radio", 1, "example-radio-group"], ["class", "example-radio-button", "routerLinkActive", "active", 3, "value", "checked", "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "example-radio-button", 3, "value", "checked", "routerLink"], [1, "example-button-row"], [1, "btn-memory"], ["class", "nav-link margin btn", "mat-raised-button", "", "routerLinkActive", "active1", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", "routerLinkActive", "active1", 1, "nav-link", "margin", "btn", 3, "routerLink"], [1, "text"], ["lazy-load-images", "", 1, "center"], ["src", "../../../assets/images/loader.png", "mat-card-image", "", "alt", "", 1, "img"], [1, "name"], ["itemprop", "", 1, "value"], [1, "review__bg", 2, "margin-top", "3rem"], [1, "summary"], ["href", "https://google.com", "itemprop", "author", 1, "username", 2, "margin-right", "1rem"], ["itemprop", "itemReviewed", "content", "Apple iPhone XR 64GB Black"], ["itemprop", "datePublished", "content", "2020-09-25"], [1, "date"], ["itemprop", "description"]], template: function AppleDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppleDetailsComponent_nav_1_Template, 28, 26, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppleDetailsComponent_div_2_Template, 22, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AppleDetailsComponent_div_7_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AppleDetailsComponent_ng_container_11_Template, 4, 5, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u0406\u043C'\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0412\u0430\u0448 \u0432\u0456\u0434\u0433\u0443\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppleDetailsComponent_Template_button_click_23_listener() { return ctx.formAdd(ctx.formConnet.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AppleDetailsComponent_div_25_Template, 10, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrApple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrApple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrApple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrApple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formConnet);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 6, ctx.apple));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImagesDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardImage"]], pipes: [_shared_pipes_value_pipe__WEBPACK_IMPORTED_MODULE_16__["ValuePipe"], _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_17__["ReplacementPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["LowerCasePipe"], _shared_pipes_name_string_pipe__WEBPACK_IMPORTED_MODULE_18__["NameStringPipe"], _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_19__["FixedPipe"], _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_20__["KyrsPipe"], _shared_pipes_memory_pipe__WEBPACK_IMPORTED_MODULE_21__["MemoryPipe"], _shared_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_22__["SortPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"], _shared_pipes_object_pipe__WEBPACK_IMPORTED_MODULE_23__["ObjectPipe"]], styles: ["@font-face {\n  font-family: \"apple\";\n  src: url(\"/assets/font/9651.ttf\");\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.breadcrumbs[_ngcontent-%COMP%] {\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  font-size: 16px;\n  letter-spacing: 1px;\n  color: #c9c9c9;\n  margin: 20px 0 15px;\n}\n.breadcrumbs[_ngcontent-%COMP%] {\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  font-size: 16px;\n  letter-spacing: 1px;\n  color: #c9c9c9;\n  margin: 20px 0 15px;\n}\n.breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n}\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  font-size: 14px;\n  letter-spacing: 0.875px;\n  color: #ef456a;\n}\n.breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 700;\n}\n.span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\nimg[_ngcontent-%COMP%] {\n  width: 32%;\n}\n.example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 15px 0;\n}\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: #c50d4a !important;\n}\n.h-product[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  margin-bottom: 10px;\n}\n.act-memory[_ngcontent-%COMP%] {\n  background-color: #ef456a;\n  border: 2px solid #ef456a;\n  color: #fff;\n}\n.memory-wrap__item[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 0 7px;\n  min-height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #282836;\n  color: #282836;\n  font-weight: 900;\n  text-align: center;\n  border-radius: 7px;\n  text-transform: uppercase;\n  background-color: #fff;\n  margin-right: 17px;\n  letter-spacing: 0.8px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.product-info__price[_ngcontent-%COMP%] {\n  margin: 40px 0 20px;\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  font-size: 24px;\n  letter-spacing: 1.5px;\n  color: #000;\n}\n.product-info__name[_ngcontent-%COMP%], .product-info__price-total[_ngcontent-%COMP%] {\n  font-family: \"apple\";\n  font-style: normal;\n  line-height: normal;\n  color: #000;\n}\n.product-info__price-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.8125px;\n  margin-bottom: 15px;\n}\n.mr-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n.compare-at-price[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #c99 !important;\n  margin: 0 3px;\n}\n.product-info__price[_ngcontent-%COMP%]   .uah[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 16px;\n  font-weight: 400;\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 15%;\n  background-color: #3f51b5;\n}\nd-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.product-info__icons[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  max-width: 30%;\n  width: 18%;\n  font-size: 13px;\n  color: #666;\n  margin-bottom: 15px;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n}\n.product-info__icons[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  margin-right: 10px;\n  flex: 0 0 50px;\n  text-align: center;\n}\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.product-info__icons[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.center[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n}\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  height: 2rem;\n  margin-right: 1rem;\n}\n.active1[_ngcontent-%COMP%] {\n  background-color: #3f51b5 !important;\n  color: white;\n}\n.black[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\nh5[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  text-align: center;\n}\n.mat-tab-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.875px;\n  display: inline-block;\n  width: 50%;\n  color: #909090;\n  margin-bottom: 50px;\n}\n.mat-tab-list[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  position: relative;\n  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);\n  display: flex;\n  justify-content: center;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.product-info__description-text[_ngcontent-%COMP%] {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.875px;\n  display: inline-block;\n  width: 50%;\n  color: #909090;\n  margin-bottom: 50px;\n}\n.img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 450px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 2rem;\n}\ntable.features[_ngcontent-%COMP%] {\n  width: 490px;\n  max-width: 100%;\n}\ntable.features[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 60px;\n  vertical-align: middle !important;\n}\ntable.features[_ngcontent-%COMP%]   td.name[_ngcontent-%COMP%] {\n  min-width: 145px;\n  color: #777;\n  vertical-align: top;\n}\ntable.features[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.name[_ngcontent-%COMP%] {\n  min-width: 320px;\n}\ntable.features[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\ntable.features[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 0 2px;\n  border: none;\n}\n.width[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.review-form-fields[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n.review-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\np[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 16px;\n  line-height: 1.35;\n  font-weight: 400;\n}\nlabel[_ngcontent-%COMP%] {\n  width: 160px;\n  display: block;\n  float: left;\n  margin: 0 5px 0 0;\n  color: #aaa;\n}\ninput[type=text][_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 4px #aaa;\n  border: 1px solid #d6d6d6;\n  padding-left: 7px;\n  border-radius: 5px;\n  font-size: 16px !important;\n  width: 50%;\n  max-width: 100%;\n  height: 36px;\n  line-height: 1;\n  padding: 0 10px;\n}\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  overflow: visible;\n}\ntextarea[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 4px #aaa;\n  border: 1px solid #d6d6d6;\n  padding-left: 7px;\n  border-radius: 5px;\n  font-size: 16px !important;\n  width: 50%;\n  max-width: 100%;\n  height: 70px;\n  line-height: 1;\n  padding: 10px;\n  min-width: initial;\n}\n.date[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.review__bg[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  background: #f1f1f1;\n  padding: 15px;\n  border-radius: 18px;\n  max-width: 700px;\n  width: auto;\n}\n.review[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #777;\n}\n.review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  line-height: 1.3em;\n}\n.date[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.username[_ngcontent-%COMP%] {\n  color: #777;\n}\n.btn-memory[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  flex-direction: row;\n}\n@media all and (max-width: 994px) {\n  img[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n@media all and (max-width: 757px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n\n  .h-product[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 500;\n    color: #000;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n\n  .buy[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n\n  .btn-memory[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n    margin-right: 0px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    width: 20%;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    height: 2rem;\n  }\n\n  .example-button-row[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .product-info__price[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 40px 0 20px;\n    font-family: \"apple\";\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n    font-size: 24px;\n    letter-spacing: 1.5px;\n    color: #000;\n  }\n\n  .review__bg[_ngcontent-%COMP%] {\n    transition: 0.3s;\n    background: #f1f1f1;\n    padding: 15px;\n    border-radius: 18px;\n    max-width: 100%;\n    width: auto;\n  }\n}\n@media all and (max-width: 533px) {\n  .breadcrumbs[_ngcontent-%COMP%] {\n    font-family: \"apple\";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.5;\n    font-size: 12px;\n    letter-spacing: 1px;\n    color: #c9c9c9;\n    margin: 20px 0 15px;\n  }\n\n  #product-features[_ngcontent-%COMP%] {\n    width: 10%;\n    max-width: 10%;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n\n  td[_ngcontent-%COMP%] {\n    min-width: 150px !important;\n  }\n\n  .newSpan[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n    margin-right: 0rem !important;\n  }\n\n  input[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 4px #aaa;\n    border: 1px solid #d6d6d6;\n    padding-left: 7px;\n    border-radius: 5px;\n    font-size: 16px !important;\n    width: 10%;\n    max-width: 100%;\n    height: 36px;\n    line-height: 1;\n    padding: 0 10px;\n  }\n\n  .review__bg[_ngcontent-%COMP%] {\n    transition: 0.3s;\n    background: #f1f1f1;\n    padding: 15px;\n    border-radius: 18px;\n    max-width: 100%;\n    width: auto;\n  }\n}\n@media all and (max-width: 357px) {\n  span[_ngcontent-%COMP%] {\n    margin-left: 0rem;\n    margin-right: 0rem;\n  }\n\n  .apple-mobile[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 0px;\n    left: 44%;\n  }\n\n  .mat-tab-body[_ngcontent-%COMP%] {\n    top: 0px;\n    left: 26px;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    display: block;\n    overflow: hidden;\n    flex-basis: 100%;\n  }\n\n  td[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n}\n@media all and (max-width: 357px) {\n  td[_ngcontent-%COMP%] {\n    min-width: 150px !important;\n  }\n\n  .span[_ngcontent-%COMP%] {\n    margin-left: 0rem !important;\n    margin-right: 0.4rem !important;\n  }\n}\ntd[_ngcontent-%COMP%] {\n  min-width: 145px;\n  vertical-align: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxpQ0FBQTtBQUNKO0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFNQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSEo7QUFNQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSEo7QUFNQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFISjtBQU1BO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSEo7QUFNQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNQTtFQUNJLFVBQUE7QUFISjtBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0FBSEo7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUE7RUFDSSxvQ0FBQTtBQUhKO0FBTUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1BO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFISjtBQU9BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFFQSxtQkFBQTtFQUVBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQVFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFMSjtBQVFBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUxKO0FBUUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFRQTtFQUNJLCtCQUFBO0FBTEo7QUFTQTtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBTko7QUFTQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQU5KO0FBU0E7RUFHSSx3QkFBQTtBQU5KO0FBU0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVBO0VBRUksMEJBQUE7QUFQSjtBQVVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUEo7QUFVQTtFQUNJLFdBQUE7QUFQSjtBQVVBO0VBQ0ksZ0JBQUE7QUFQSjtBQVNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFOSjtBQVNBO0VBQ0ksb0NBQUE7QUFOSjtBQVNBO0VBQ0kseUhBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0FBTko7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUxKO0FBVUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBUEo7QUFZQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQVRKO0FBWUE7RUFLSSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBZEo7QUFtQkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtBQWpCSjtBQW9CQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQWpCSjtBQW9CQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFqQko7QUFvQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBakJKO0FBb0JBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFqQko7QUFvQkE7RUFDSSxZQUFBO0VBQ0EsaUNBQUE7QUFqQko7QUFvQkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWpCSjtBQW9CQTtFQUNJLGdCQUFBO0FBakJKO0FBb0JBO0VBQ0ksZ0JBQUE7QUFqQko7QUFvQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFqQko7QUFvQkE7RUFDSSxVQUFBO0FBakJKO0FBb0JBO0VBQ0ksZ0JBQUE7QUFqQko7QUFvQkE7RUFFSSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtBQWpCSjtBQXFCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFsQko7QUFxQkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFsQko7QUFxQkE7RUFDSSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFsQko7QUFxQkE7RUFDSSxpQkFBQTtBQWxCSjtBQXFCQTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbEJKO0FBcUJBO0VBQ0ksZ0JBQUE7QUFsQko7QUFxQkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbEJKO0FBcUJBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBbEJKO0FBcUJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFsQko7QUFxQkE7RUFDSSxXQUFBO0FBbEJKO0FBcUJBO0VBQ0ksV0FBQTtBQWxCSjtBQXFCQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWxCSjtBQXFCQTtFQUNJO0lBQ0ksVUFBQTtFQWxCTjtBQUNGO0FBdUJBO0VBQ0k7SUFDSSxpQkFBQTtFQXJCTjs7RUF1QkU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUFwQk47O0VBdUJFO0lBQ0ksVUFBQTtFQXBCTjs7RUF1QkU7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7RUFwQk47O0VBc0JFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFuQk47O0VBc0JFO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtFQW5CTjs7RUFzQkU7SUFDSSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtFQW5CTjs7RUFzQkU7SUFDSSw0QkFBQTtFQW5CTjs7RUFzQkU7SUFDSSxVQUFBO0lBQ0EseUhBQUE7SUFDQSxZQUFBO0VBbkJOOztFQXVCRTtJQUVJLHVCQUFBO0lBQ0Esc0JBQUE7RUFyQk47O0VBd0JFO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtFQXJCTjs7RUF3QkU7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUFyQk47QUFDRjtBQTBCQTtFQUNJO0lBQ0ksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUF4Qk47O0VBMEJFO0lBQ0MsVUFBQTtJQUNBLGNBQUE7RUF2Qkg7O0VBMEJFO0lBQ0kscUJBQUE7RUF2Qk47O0VBMEJFO0lBQ0ksMkJBQUE7RUF2Qk47O0VBMkJFO0lBQ0ksaUJBQUE7SUFDQSw2QkFBQTtFQXhCTjs7RUEyQkU7SUFDSSxnQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUVBLGVBQUE7RUF6Qk47O0VBMkJFO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VBeEJOO0FBQ0Y7QUFxQ0E7RUFFSTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUFwQ047O0VBd0NFO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUFyQ047O0VBd0NFO0lBQ0ksUUFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFyQ047O0VBd0NFO0lBQ0ksZ0JBQUE7RUFyQ047QUFDRjtBQXlDQTtFQUNJO0lBQ0ksMkJBQUE7RUF2Q047O0VBMENFO0lBQ0ssNEJBQUE7SUFDRCwrQkFBQTtFQXZDTjtBQUNGO0FBMkNBO0VBQ0ksZ0JBQUE7RUFFQSxrQ0FBQTtBQTFDSiIsImZpbGUiOiJhcHBsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJhcHBsZVwiO1xyXG4gICAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnQvOTY1MS50dGZcIik7XHJcbiAgfVxyXG5cclxuLy8gQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5icmVhZGNydW1icyB7XHJcbiAgICBmb250LWZhbWlseTogJ2FwcGxlJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjYzljOWM5O1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMTVweDtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYXBwbGUnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICNjOWM5Yzk7XHJcbiAgICBtYXJnaW46IDIwcHggMCAxNXB4O1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYnMgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIGEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdhcHBsZSc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuODc1cHg7XHJcbiAgICBjb2xvcjogI2VmNDU2YTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIHNwYW4ge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAzMiU7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4ubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4gIFxyXG4ubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNTBkNGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmgtcHJvZHVjdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYWN0LW1lbW9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NTZhO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VmNDU2YTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tZW1vcnktd3JhcF9faXRlbSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIycHg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI4MjgzNjtcclxuICAgIGNvbG9yOiAjMjgyODM2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC44cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mb19fcHJpY2Uge1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnYXBwbGUnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mb19fbmFtZSwgLnByb2R1Y3QtaW5mb19fcHJpY2UtdG90YWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdhcHBsZSc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm9fX3ByaWNlLXRvdGFsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjgxMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tci0yLCAubXgtMiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jb21wYXJlLWF0LXByaWNlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6ICNjOTkhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDNweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mb19fcHJpY2UgLnVhaCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm9fX2ljb25zIC5pdGVtIHtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mbGV4LXdyYXAge1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcCFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvX19pY29ucyAuaXRlbSAuaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZsZXg6IDAgMCA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvX19pY29uc3tcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuLmNlbnRlcntcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtaW5rLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAycHggMnB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDVweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmFjdGl2ZTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ibGFja3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5oNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC10YWItbGFiZWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHR7IFxyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAvLyBwbGFjZS1jb250ZW50OiBzcGFjZS1hcm91bmQgc3BhY2UtYmV0d2VlbjtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuODc1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY29sb3I6IHJnYigxNDQsIDE0NCwgMTQ0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC10YWItbGlzdCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mb19fZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIERpc3BsYXk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuODc1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY29sb3I6IHJnYigxNDQsIDE0NCwgMTQ0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxudGFibGUuZmVhdHVyZXMge1xyXG4gICAgd2lkdGg6IDQ5MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZS5mZWF0dXJlcyB0ciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUuZmVhdHVyZXMgdGQubmFtZSB7XHJcbiAgICBtaW4td2lkdGg6IDE0NXB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG50YWJsZS5mZWF0dXJlcyB0ciB0ZC5uYW1lIHtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbnRhYmxlLmZlYXR1cmVzIHRyIHRkLnZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnRhYmxlLmZlYXR1cmVzIHRkIHtcclxuICAgIHBhZGRpbmc6IDVweCAwIDJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLndpZHRoIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5yZXZpZXctZm9ybS1maWVsZHMgcCB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcblxyXG4ucmV2aWV3LWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgXHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCA1cHggMCAwO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4ICNhYWE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG5idXR0b24sIGlucHV0IHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggI2FhYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiBpbml0aWFsO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBvdmVyZmxvdzogIGhpZGRlbjtcclxufVxyXG5cclxuLnJldmlld19fYmcge1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ucmV2aWV3IC5zdW1tYXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4ucmV2aWV3IHAge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuLnVzZXJuYW1lIHtcclxuICAgIGNvbG9yOiAjNzc3XHJcbn1cclxuXHJcbi5idG4tbWVtb3J5e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5OTRweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzU3cHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuICAgIC5tYWluIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaC1wcm9kdWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnV5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbWVtb3J5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5leGFtcGxlLWJ1dHRvbi1yb3cgIHtcclxuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtaW5mb19fcHJpY2Uge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDQwcHggMCAyMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImFwcGxlXCI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXZpZXdfX2JnIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTMzcHgpIHtcclxuICAgIC5icmVhZGNydW1icyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiYXBwbGVcIjtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGNvbG9yOiAjYzljOWM5O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwIDE1cHg7XHJcbiAgICB9XHJcbiAgICAjcHJvZHVjdC1mZWF0dXJlcyB7XHJcbiAgICAgd2lkdGg6IDEwJTsgXHJcbiAgICAgbWF4LXdpZHRoOiAxMCU7IFxyXG5cclxuICAgIH1cclxuICAgIC5uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5uZXdTcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4ICNhYWE7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuICAgIC5yZXZpZXdfX2JnIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG4gICBcclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo2NTZweCkge1xyXG4gICBcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICBcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAzNTdweCkgIHtcclxuIFxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtOyBcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgLmFwcGxlLW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDQ0JTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXRhYi1ib2R5IHtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAyNnB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdGQge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMzU3cHgpICB7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuc3BhbiB7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC40cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG50ZCB7XHJcbiAgICBtaW4td2lkdGg6IDE0NXB4O1xyXG4gXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AeD1":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-detali/admin-detali.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDetaliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDetaliComponent", function() { return AdminDetaliComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_models_airpords_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/airpords.models */ "SsHg");
/* harmony import */ var src_app_shared_models_iphone_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/iphone.models */ "JbDz");
/* harmony import */ var src_app_shared_models_mac_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/mac.models */ "v8Oh");
/* harmony import */ var src_app_shared_models_watch_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/watch.models */ "dWnJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/navs/navs.service */ "livN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_detali_detali_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/detali/detali.service */ "GxZS");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./description/description.component */ "36kR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/pipes/filter.pipe */ "UhSo");



















function AdminDetaliComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminDetaliComponent_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.detali(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r3.nameEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r3.nameUa, " ");
} }
function AdminDetaliComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-description", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("arrNav", ctx_r1.arrNav)("arrApple", ctx_r1.arrApple);
} }
function AdminDetaliComponent_div_8_mat_optgroup_7_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminDetaliComponent_div_8_mat_optgroup_7_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const item_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r14.add(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r13.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", item_r13.title, " ", item_r13.memory, " ", item_r13.color, " ");
} }
function AdminDetaliComponent_div_8_mat_optgroup_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-optgroup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminDetaliComponent_div_8_mat_optgroup_7_mat_option_1_Template, 2, 4, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", group_r11.nameEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, ctx_r6.arrApple, group_r11.nameEN));
} }
function AdminDetaliComponent_div_8_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", item_r17);
} }
function AdminDetaliComponent_div_8_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminDetaliComponent_div_8_div_9_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r18.formGroup(ctx_r18.selection.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminDetaliComponent_div_8_div_9_div_2_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r7.iphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.arrIphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r7.iphone.invalid || ctx_r7.isdisabled)("color", ctx_r7.isBtn ? "accent" : "primary")("textContent", ctx_r7.isBtn ? "Save" : "Add");
} }
function AdminDetaliComponent_div_8_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", item_r21);
} }
function AdminDetaliComponent_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminDetaliComponent_div_8_div_10_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r22.formGroup(ctx_r22.selection.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminDetaliComponent_div_8_div_10_div_2_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r8.mac);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r8.arrMac);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r8.mac.invalid || ctx_r8.isdisabled)("color", ctx_r8.isBtn ? "accent" : "primary")("textContent", ctx_r8.isBtn ? "Save" : "Add");
} }
function AdminDetaliComponent_div_8_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", item_r25);
} }
function AdminDetaliComponent_div_8_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminDetaliComponent_div_8_div_11_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.formGroup(ctx_r26.selection.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminDetaliComponent_div_8_div_11_div_2_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r9.watch);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.arrWatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r9.watch.invalid || ctx_r9.isdisabled)("color", ctx_r9.isBtn ? "accent" : "primary")("textContent", ctx_r9.isBtn ? "Save" : "Add");
} }
function AdminDetaliComponent_div_8_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", item_r29);
} }
function AdminDetaliComponent_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminDetaliComponent_div_8_div_12_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r30.formGroup(ctx_r30.selection.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminDetaliComponent_div_8_div_12_div_2_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r10.airpods);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r10.arrAirpods);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r10.airpods.invalid || ctx_r10.isdisabled)("color", ctx_r10.isBtn ? "accent" : "primary")("textContent", ctx_r10.isBtn ? "Save" : "Add");
} }
function AdminDetaliComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "-- None --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminDetaliComponent_div_8_mat_optgroup_7_Template, 3, 5, "mat-optgroup", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminDetaliComponent_div_8_div_9_Template, 5, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AdminDetaliComponent_div_8_div_10_Template, 5, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AdminDetaliComponent_div_8_div_11_Template, 6, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AdminDetaliComponent_div_8_div_12_Template, 6, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.arrNav);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "iphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "mac");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "apple watch");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "airpods");
} }
class AdminDetaliComponent {
    constructor(navServices, dialog, formBolider, detaliServices, appleServices) {
        this.navServices = navServices;
        this.dialog = dialog;
        this.formBolider = formBolider;
        this.detaliServices = detaliServices;
        this.appleServices = appleServices;
        this.arr = [{ nameEN: 'description', nameUa: 'Опис' }, { nameEN: 'character', nameUa: 'Характеристика' }];
        this.arrIphone = ['weigh', 'battery', 'pixels', 'display', 'color', 'memory', 'processor', 'cell'];
        this.arrMac = ['processor', 'nuclei', 'cpu', 'videoCard', 'color', 'year', 'ram', 'display'];
        this.arrWatch = ['display', 'strap', 'housing', 'size', 'color'];
        this.arrAirpods = ['color', 'charging'];
        this.arrDetali = [];
        this.selection = this.formBolider.group({
            select: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            detali: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.iphone = this.formBolider.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            weigh: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            battery: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            pixels: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            display: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            memory: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            processor: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.mac = this.formBolider.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            processor: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            nuclei: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            cpu: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            videoCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            ram: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            display: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.watch = this.formBolider.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            display: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            strap: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            housing: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.airpods = this.formBolider.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            charging: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
        this.getNav();
        this.getDetali();
        this.getApple();
    }
    getDetali() {
        this.detaliServices.getDatali().then(res => {
            this.arrDetali = res;
            // console.log(this.arrDetali , 'Detali');
        });
    }
    getApple() {
        this.appleServices.getApple().then(res => {
            this.arrApple = res;
            console.log(res, 'Apple');
        });
    }
    getNav() {
        this.navServices.getNavs().then(res => {
            this.arrNav = res;
        });
    }
    formGroup(event) {
        const { select, detali } = this.selection.value;
        if (select === 'iphone') {
            const { weigh, battery, pixels, display, color, memory, processor, cell } = this.iphone.value;
            const iphone = Object.assign({}, new src_app_shared_models_iphone_models__WEBPACK_IMPORTED_MODULE_2__["Phone"](this.apple.id, weigh, battery, pixels, display, color, memory, processor, cell, select, this.apple.uuid));
            const newIphone = Object.assign(Object.assign({}, this.apple), { detalis: Object.assign({}, iphone) });
            this.appleServices.updateApple(`apple ${this.apple.id}`, newIphone).then(res => {
                this.getApple();
            });
        }
        if (select === 'mac') {
            const { processor, nuclei, cpu, videoCard, color, year, ram, display } = this.mac.value;
            const mac = Object.assign({}, new src_app_shared_models_mac_models__WEBPACK_IMPORTED_MODULE_3__["Mac"](this.apple.id, processor, nuclei, cpu, videoCard, color, year, ram, display, select, this.apple.uuid));
            const newMac = Object.assign(Object.assign({}, this.apple), { detalis: Object.assign({}, mac) });
            this.appleServices.updateApple(`apple ${this.apple.id}`, newMac).then(res => {
                this.getApple();
            });
        }
        if (select === 'apple watch') {
            const { display, strap, housing, size, color } = this.watch.value;
            const watch = Object.assign({}, new src_app_shared_models_watch_models__WEBPACK_IMPORTED_MODULE_4__["Watch"](this.apple.id, display, strap, housing, size, color, select, this.apple.uuid));
            const newWatch = Object.assign(Object.assign({}, this.apple), { detalis: Object.assign({}, watch) });
            this.appleServices.updateApple(`apple ${this.apple.id}`, newWatch).then(res => {
                this.getApple();
            });
        }
        if (select === 'airpods') {
            const { color, charging } = this.airpods.value;
            const airpods = Object.assign({}, new src_app_shared_models_airpords_models__WEBPACK_IMPORTED_MODULE_1__["Airpods"](this.apple.id, this.apple.uuid, color, charging, select));
            const newAirpods = Object.assign(Object.assign({}, this.apple), { detalis: Object.assign({}, airpods) });
            this.appleServices.updateApple(`apple ${this.apple.id}`, newAirpods).then(res => {
                this.getApple();
            });
        }
        // Робоча тема
        //
        //
        //   if(select === 'iphone') {
        //     const {weigh,battery,pixels,display,color, memory,processor ,cell} = this.iphone.value
        //     if(this.selectedItem && this.selectedItem.id) {
        //       const iphone = {...new Phone(this.selectedItem.id,weigh,battery,pixels,display,color,memory,processor,cell,select, this.selectedItem.uuid ) }
        //       this.detaliServices.updateDetali(`detali ${iphone.id}`,iphone).then(res => {
        //         this.getDetali()
        //       })
        //     } else {
        //       const iphone = {...new Phone(1,weigh,battery,pixels,display,color,memory,processor,cell,select, this.apple.uuid ) }
        //       if(this.arrDetali.length > 0) {
        //         iphone.id = this.arrDetali.slice(-1)[0].id +1
        //       }
        //       this.detaliServices.addDetali(iphone, `detali ${iphone.id}`).then(res => {
        //         this.getDetali()
        //       })
        //     }
        // }
        //   if(select === 'mac') {
        //     const {processor,nuclei,cpu,videoCard,color ,year, ram,display } = this.mac.value
        //     if(this.selectedItem && this.selectedItem.id) {
        //       const mac = {...new Mac(this.selectedItem.id,processor,nuclei,cpu,videoCard,color,year,ram,display,select , this.selectedItem.uuid )}
        //       this.detaliServices.updateDetali(`detali ${mac.id}`,mac).then(res => {
        //         this.getDetali()
        //       })
        //     } else {
        //       const mac = {...new Mac(1, processor,nuclei,cpu,videoCard,color ,year, ram,display, select, this.apple.uuid )}
        //       if(this.arrDetali.length > 0) {
        //         mac.id = this.arrDetali.slice(-1)[0].id +1
        //       }
        //       // const newMac = {...product, detail: {...mac}}
        //       this.detaliServices.addDetali(mac, `detali ${mac.id}`).then(res => {
        //         this.getDetali()
        //       })
        //     }
        //   }
        //   if(select === 'apple watch') {
        //     const {display,strap,housing,size,color  } = this.watch.value
        //       if(this.selectedItem && this.selectedItem.id) {
        //         const watch = {...new Watch(this.selectedItem.id,display,strap,housing,size,color,select , this.selectedItem.uuid)}
        //         this.detaliServices.updateDetali(`detali ${watch.id}`,watch).then(res => {
        //           this.getDetali()
        //         })
        //       } else {
        //         const watch = {...new Watch(1,display,strap,housing,size,color,select , this.apple.uuid)}
        //         if(this.arrDetali.length > 0) {
        //           watch.id = this.arrDetali.slice(-1)[0].id +1
        //         }
        //         this.detaliServices.addDetali(watch, `detali ${watch.id}`).then(res => {
        //           this.getDetali()
        //         })
        //       }
        //     }
        //     if(select === 'airpods') {
        //       const {color , charging  } = this.airpods.value
        //       if(this.selectedItem && this.selectedItem.id) {
        //         const airpods = {... new Airpods(this.selectedItem.id, this.selectedItem.uuid, color , charging , select)}
        //         this.detaliServices.updateDetali(`detali ${airpods.id}`,airpods).then(res => {
        //           this.getDetali()
        //         })
        //       } else {
        //         const airpods = {... new Airpods(1, this.apple.uuid, color , charging ,select)}
        //         if(this.arrDetali.length > 0) {
        //           airpods.id = this.arrDetali.slice(-1)[0].id +1
        //         }
        //         this.detaliServices.addDetali(airpods, `detali ${airpods.id}`).then(res => {
        //           this.getDetali()
        //         })
        //       }
        //     }
        this.isdisabled = true;
    }
    IphoneAdd(even) {
    }
    detali(item) {
        this.detal = item.nameEN;
    }
    add(item) {
        // const { select  , detali} = this.selection.value
        // console.log(select);
        this.selectedItem = this.arrApple.find(el => el.category === item.category && el.uuid === item.uuid);
        this.iphone.reset();
        this.mac.reset();
        this.watch.reset();
        this.airpods.reset();
        this.isBtn = false;
        this.isdisabled = false;
        if (this.selectedItem.detalis) {
            this.isBtn = true;
            const { detalis: { weigh, battery, pixels, display, color, memory, processor, cell } } = this.selectedItem;
            this.iphone.patchValue({ weigh, battery, pixels, display, color, memory, processor, cell });
            this.isdisabled = false;
        }
        if (this.selectedItem.detalis) {
            // this.isBtn = true
            const { detalis: { processor, nuclei, cpu, videoCard, color, year, ram, display } } = this.selectedItem;
            this.mac.patchValue({ processor, nuclei, cpu, videoCard, color, year, ram, display });
            this.isdisabled = false;
        }
        if (this.selectedItem.detalis) {
            // this.isBtn = true
            const { detalis: { display, strap, housing, size, color } } = this.selectedItem;
            this.watch.patchValue({ display, strap, housing, size, color });
            this.isdisabled = false;
        }
        if (this.selectedItem.detalis) {
            // this.isBtn = true
            const { detalis: { color, charging } } = this.selectedItem;
            this.airpods.patchValue({ color, charging });
            this.isdisabled = false;
        }
        this.category = item.category;
        this.apple = item;
    }
}
AdminDetaliComponent.ɵfac = function AdminDetaliComponent_Factory(t) { return new (t || AdminDetaliComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_6__["NavsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_detali_detali_service__WEBPACK_IMPORTED_MODULE_8__["DetaliService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_9__["AppleService"])); };
AdminDetaliComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdminDetaliComponent, selectors: [["app-admin-detali"]], decls: 9, vars: 5, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["formControlName", "detali"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "value", "click"], [3, "arrNav", "arrApple"], ["formControlName", "select"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [1, "example-form", "form", 3, "formGroup", "ngSubmit"], ["class", "col-6 form-group", 4, "ngFor", "ngForOf"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "margin", 3, "disabled", "color", "textContent"], [1, "col-6", "form-group"], [1, "example-full-width"], ["type", "text", "matInput", "", "name", "weigh", 3, "formControlName"], ["type", "submit", "mat-raised-button", "", 1, "margin", 3, "disabled", "color", "textContent"]], template: function AdminDetaliComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminDetaliComponent_Template_form_ngSubmit_0_listener() { return ctx.formGroup(ctx.selection.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Favorite food");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminDetaliComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminDetaliComponent_div_7_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminDetaliComponent_div_8_Template, 13, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.arr);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.detal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "character");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchCase"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _description_description_component__WEBPACK_IMPORTED_MODULE_14__["DescriptionComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOptgroup"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"]], pipes: [_shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipe"]], styles: ["table[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 90%;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom-file-upload[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.papa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  color: \"red\";\n}\n\n.res[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.col-6[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tY2F0ZWdvcnlcXGFkbWluLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFkbWluLWRldGFsaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFFQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FERUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBQWpDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBb0NKOztBQWhDQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBbUNKIiwiZmlsZSI6ImFkbWluLWRldGFsaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFyZ2lue1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnBhcGEgIHA6bnRoLW9mLXR5cGUoMSkge1xyXG4gIGNvbG9yOiAncmVkJ1xyXG59XHJcblxyXG4ucmVze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iLCJ0YWJsZSwgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogOTAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wYXBhIHA6bnRoLW9mLXR5cGUoMSkge1xuICBjb2xvcjogXCJyZWRcIjtcbn1cblxuLnJlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29sLTYge1xuICBmbGV4OiAwIDAgNTAlO1xuICBtYXgtd2lkdGg6IDUwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
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
    production: false,
    // firebaseConfig:  {
    //   apiKey: "AIzaSyABjIzoxKC-N7tHcm4glC79k2zeqSyAn_g",
    //   authDomain: "apple-e5946.firebaseapp.com",
    //   projectId: "apple-e5946",
    //   storageBucket: "apple-e5946.appspot.com",
    //   messagingSenderId: "936713525304",
    //   appId: "1:936713525304:web:a0975fa4e5033114706ecd"
    // },
    firebaseConfig: {
        apiKey: "AIzaSyB1CxgEPrpGf9Ei6zhN5yvuP_-2FxIL10s",
        authDomain: "apple-6e78d.firebaseapp.com",
        projectId: "apple-6e78d",
        storageBucket: "apple-6e78d.appspot.com",
        messagingSenderId: "828687542100",
        appId: "1:828687542100:web:a641ff82b984e49ca60ac1"
    },
    NP_KEY: 'f011b1cd05b8cb0ff9d69dd4bba65363'
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

/***/ "BRtY":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-comments/admin-comments.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCommentsComponent", function() { return AdminCommentsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function AdminCommentsComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCommentsComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r8.id, " ");
} }
function AdminCommentsComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " NameApple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCommentsComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", element_r9.title, " ", element_r9.color, " ", element_r9.memory, " ");
} }
function AdminCommentsComponent_td_8_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCommentsComponent_td_8_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r23.id, " ");
} }
function AdminCommentsComponent_td_8_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCommentsComponent_td_8_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r24.name, " ");
} }
function AdminCommentsComponent_td_8_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCommentsComponent_td_8_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r25.description, " ");
} }
function AdminCommentsComponent_td_8_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCommentsComponent_td_8_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r26.date, " ");
} }
function AdminCommentsComponent_td_8_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCommentsComponent_td_8_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCommentsComponent_td_8_td_17_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const element_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); $event.stopPropagation(); return ctx_r28.deleteComments(element_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCommentsComponent_td_8_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 19);
} }
function AdminCommentsComponent_td_8_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
} }
function AdminCommentsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminCommentsComponent_td_8_th_4_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminCommentsComponent_td_8_td_5_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdminCommentsComponent_td_8_th_7_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminCommentsComponent_td_8_td_8_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminCommentsComponent_td_8_th_10_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AdminCommentsComponent_td_8_td_11_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdminCommentsComponent_td_8_th_13_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminCommentsComponent_td_8_td_14_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AdminCommentsComponent_td_8_th_16_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AdminCommentsComponent_td_8_td_17_Template, 3, 0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminCommentsComponent_td_8_tr_18_Template, 1, 0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AdminCommentsComponent_td_8_tr_19_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r4.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@detailExpand", ctx_r4.selectedItemUUID === element_r10.uuid ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", element_r10.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
} }
function AdminCommentsComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 19);
} }
function AdminCommentsComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCommentsComponent_tr_10_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r32.expandedElement = ctx_r32.expandedElement === element_r31 ? null : element_r31; return ctx_r32.selectedItemUUID = ctx_r32.selectedItemUUID === element_r31.uuid ? null : element_r31.uuid; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("example-expanded-row", ctx_r6.expandedElement === element_r31);
} }
function AdminCommentsComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
const _c0 = function () { return ["expandedDetail"]; };
class AdminCommentsComponent {
    constructor(appleServices) {
        this.appleServices = appleServices;
        this.resultsLength = 0;
        this.columnsToDisplay = ['id', 'title'];
        this.displayedColumns = ['id', 'name', 'description', 'date', 'delete'];
        this.arrApple = [];
    }
    ngOnInit() {
        this.getApple();
    }
    getApple() {
        this.appleServices.getApple().then(res => {
            this.arrApple = res.filter(el => el.comments ? el.comments.length : false);
            // console.log(res);
        });
    }
    deleteComments(item) {
        console.log(item);
        const apple = this.arrApple.find(el => el.uuid === item.uuid);
        this.arrApple = this.arrApple.map(el => {
            if (el.uuid === item.uuid) {
                console.log(el);
                return Object.assign(Object.assign({}, el), { comments: el.comments.filter(elem => elem.id !== item.id) });
            }
            return el;
        });
        console.log(this.arrApple);
        // this.appleServices.deleteComments(item , `apple ${apple.id}`).then(res => {
        //   this.getApple()
        // })
    }
}
AdminCommentsComponent.ɵfac = function AdminCommentsComponent_Factory(t) { return new (t || AdminCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_2__["AppleService"])); };
AdminCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminCommentsComponent, selectors: [["app-admin-comments"]], decls: 12, vars: 5, consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", "witdh", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "example-element-detail", "di"], ["mat-table", "", 1, "mat-elevation-z8", "witdh", 3, "dataSource"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "date"], ["matColumnDef", "delete"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function AdminCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminCommentsComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminCommentsComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminCommentsComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminCommentsComponent_td_6_Template, 2, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminCommentsComponent_td_8_Template, 20, 5, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminCommentsComponent_tr_9_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminCommentsComponent_tr_10_Template, 1, 2, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AdminCommentsComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.arrApple);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 0;\n  overflow-y: scroll !important;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.witdh[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-raised-button[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi1jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFLRTtFQUNFLFNBQUE7QUFGSjs7QUFLRTtFQUNFLHNCQUFBO0FBRko7O0FBS0U7RUFDRSxtQkFBQTtBQUZKOztBQUtFO0VBQ0Usc0JBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0U7RUFDRSxhQUFBO0FBRko7O0FBS0U7RUFDRSxZQUFBO0FBRko7O0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFJRTtFQUNFLFdBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7QUFESiIsImZpbGUiOiJhZG1pbi1jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLndpdGRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgbWF0LXJhaXNlZC1idXR0b257XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ "EVec":
/*!********************************************************!*\
  !*** ./src/app/shared/services/login/login.service.ts ***!
  \********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class LoginService {
    constructor(firestory) {
        this.firestory = firestory;
        this.isLogin = false;
    }
    getDatali() {
        return this.firestory.collection('Admin').ref.get().then(res => res.docs.map(el => el.data()));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GxZS":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/detali/detali.service.ts ***!
  \**********************************************************/
/*! exports provided: DetaliService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaliService", function() { return DetaliService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class DetaliService {
    constructor(firestory) {
        this.firestory = firestory;
    }
    getDatali() {
        return this.firestory.collection('detali').ref.orderBy('id', 'asc').get().then(res => res.docs.map(el => el.data()));
    }
    addDetali(datali, num) {
        return this.firestory.collection('detali').doc(num).set(datali);
    }
    deleteDatali(id) {
        return this.firestory.collection('detali').doc(id).delete();
    }
    updateDetali(id, datali) {
        return this.firestory.collection('detali').doc(id).set(datali);
    }
}
DetaliService.ɵfac = function DetaliService_Factory(t) { return new (t || DetaliService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
DetaliService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetaliService, factory: DetaliService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "I7oR":
/*!***************************************************!*\
  !*** ./src/app/components/maps/maps.component.ts ***!
  \***************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "QnLe");
/* harmony import */ var src_app_mysor_mysor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/mysor/mysor */ "rNc0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_map_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/map/map.service */ "6hn5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










const _c0 = ["map"];
function MapsComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MapsComponent_mat_option_3_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const food_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.initMap(food_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", food_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", food_r2.name, " ");
} }
class MapsComponent {
    // formGroup  = this.formBolider.group({
    //   maps: new FormControl(this.mapLocation[0])
    // })
    constructor(router, cdr, mapService, formBolider) {
        this.router = router;
        this.cdr = cdr;
        this.mapService = mapService;
        this.formBolider = formBolider;
        this.gmarker = null;
        this.mapLocation = src_app_mysor_mysor__WEBPACK_IMPORTED_MODULE_1__["mysor"];
    }
    ngOnInit() {
        this.initMap();
    }
    initMap(item) {
        const { maps } = this.form.value;
        const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__["Loader"]({
            apiKey: this.mapService.apiKey
        });
        loader.load().then(() => {
            this.map = new google.maps.Map(this.divMap.nativeElement, {
                center: maps,
                zoom: 15,
                disableDefaultUI: true,
            });
            let map = new google.maps.Marker({
                position: maps,
                map: this.map
            });
        });
    }
}
MapsComponent.ɵfac = function MapsComponent_Factory(t) { return new (t || MapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
MapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MapsComponent, selectors: [["app-maps"]], viewQuery: function MapsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.divMap = _t.first);
    } }, inputs: { form: "form" }, decls: 6, vars: 2, consts: [[1, "example-form", 3, "formGroup"], ["appearance", "fill"], ["formControlName", "maps"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["id", "map", 1, "full"], ["map", ""], [3, "value", "click"]], template: function MapsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MapsComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.mapLocation);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: [".full[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n@media (max-width: 650px) {\n  section[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 400px;\n  }\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cartOS__list_shipping[_ngcontent-%COMP%]   .shipping-rates[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  margin-top: 10px;\n  padding: 3px;\n  width: calc(50% + 70px);\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBakJGOztBQW9CQTtFQUVJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFsQko7QUFDRjs7QUF5QkE7RUFDRSxXQUFBO0FBdkJGOztBQTBCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBdkJGOztBQTBCQTtFQUNFLG9CQUFBO0FBdkJGOztBQTBCQTtFQUNFLG1CQUFBO0FBdkJGIiwiZmlsZSI6Im1hcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZ20tbWFwIHtcclxuLy8gICAgIGhlaWdodDogMzAwcHg7XHJcbi8vICAgfVxyXG4gIFxyXG4gIFxyXG4vLyAgICoge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGEge1xyXG4vLyAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmZ1bGx7XHJcbi8vICAgICB3aWR0aDogNjAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4vLyAgIH1cclxuXHJcbi5mdWxse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIHNlY3Rpb257XHJcbiAgICAuZnVsbHtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7fVxyXG5cclxuXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmcgLnNoaXBwaW5nLXJhdGVzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgd2lkdGg6IGNhbGMoNTAlICsgNzBweCk7XHJcbn1cclxuXHJcbmJ1dHRvbiwgc2VsZWN0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjE4cHgpICB7XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "ItGS":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/fixed.pipe.ts ***!
  \********************************************/
/*! exports provided: FixedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPipe", function() { return FixedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FixedPipe {
    transform(value) {
        return value.toFixed();
    }
}
FixedPipe.ɵfac = function FixedPipe_Factory(t) { return new (t || FixedPipe)(); };
FixedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fixed", type: FixedPipe, pure: true });


/***/ }),

/***/ "JQyM":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-category/admin-category.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCategoryComponent", function() { return AdminCategoryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_models_category_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/category.models */ "ukUI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/category/category.service */ "hmux");
/* harmony import */ var src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/navs/navs.service */ "livN");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _admin_navs_admin_navs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-navs/admin-navs.component */ "8JtR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/pipes/filter.pipe */ "UhSo");





















function AdminCategoryComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", food_r5.nameEN.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", food_r5.nameEN, " ");
} }
function AdminCategoryComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoryComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r2.isdisabled || !ctx_r2.signInForm.valid || ctx_r2.signInForm.value.select.length === 0);
} }
function AdminCategoryComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoryComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.isdisabled);
} }
function AdminCategoryComponent_mat_accordion_26_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoryComponent_mat_accordion_26_tr_20_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const item_r12 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.edit(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoryComponent_mat_accordion_26_tr_20_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const item_r12 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r16.deleteCategory(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r13 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r12.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r12 == null ? null : item_r12.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r12.category);
} }
function AdminCategoryComponent_mat_accordion_26_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-expansion-panel", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("opened", function AdminCategoryComponent_mat_accordion_26_Template_mat_expansion_panel_opened_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.panelOpenState = true; })("closed", function AdminCategoryComponent_mat_accordion_26_Template_mat_expansion_panel_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AdminCategoryComponent_mat_accordion_26_tr_20_Template, 16, 4, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", col_r10, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 2, ctx_r4.arrCategory, col_r10));
} }
class AdminCategoryComponent {
    constructor(storage, categoryServices, navServices, appleServices) {
        this.storage = storage;
        this.categoryServices = categoryServices;
        this.navServices = navServices;
        this.appleServices = appleServices;
        this.categoriImage = '';
        this.panelOpenState = false;
        this.isdisabled = true;
        this.arrOpntio = [];
        this.arrCategory = [];
        this.destoy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            select: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.getCategory();
        this.categoryServices.arrCategory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destoy$)).subscribe(res => {
            // console.log(res);
            this.arrCategory = res;
        });
    }
    ngOnDestroy() {
        this.destoy$.next();
        this.destoy$.complete();
    }
    getCategory() {
        this.categoryServices.getCategory().then((r) => {
            //  console.log(r);
        });
        this.navServices.$arrNav.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((d) => d !== null)).subscribe(res => {
            this.arrOpntio = res;
            this.arrCate = res.map(el => el.nameEN);
            this.fillter = res.map(el => el.nameEN);
        });
    }
    signIn(form) {
    }
    add() {
        const category = Object.assign({}, new src_app_shared_models_category_models__WEBPACK_IMPORTED_MODULE_2__["Category"](1, this.signInForm.value.title, this.categoriImage, this.signInForm.value.select));
        console.log(this.categoriImage);
        if (this.arrCategory.length > 0) {
            category.id = this.arrCategory.slice(-1)[0].id + 1;
        }
        this.categoryServices.addCategory(category, `category ${category.id.toString()}`).then(res => {
            this.getCategory();
        });
        this.categoriImage = '';
        this.uploadProgress = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(0);
        this.signInForm.reset();
        this.isdisabled = true;
    }
    deleteCategory(iteam) {
        this.categoryServices.deleteCategory(iteam.doc).then(() => {
            this.arrCategory = this.arrCategory.filter((el) => el.doc !== iteam.doc);
            // this.getCategory()
        });
        this.appleServices.getApple().then(apple => {
            const targetApple = apple.filter(el => el.category.toLowerCase() === iteam.category.toLowerCase());
            const targetProduct = targetApple.filter(el => el.categoryProduct.toLowerCase() === iteam.title.toLowerCase());
            const deleteApple = targetProduct.map(el => {
                this.storage.refFromURL(el.img).delete();
                return this.appleServices.deleteApple(`apple ${el.id}`);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(deleteApple).subscribe(res => {
            });
        });
        if (iteam.img) {
            this.storage.refFromURL(iteam.img).delete();
        }
    }
    edit(iteam) {
        // this.signInForm.controls.title.value
        // this.signInForm.get('title')
        this.signInForm.patchValue({
            title: iteam.title,
            select: iteam.category
        });
        this.categoryDoc = iteam;
        this.categoriImage = iteam.img;
        this.isdisabled = false;
    }
    save(signInForm) {
        const body = {
            id: this.categoryDoc.id,
            title: this.signInForm.value.title,
            img: this.categoriImage,
            category: this.signInForm.value.select
        };
        this.categoryServices.updateCategory(this.categoryDoc.doc, body).then(res => {
            this.getCategory();
            this.categoryDoc = null;
            this.categoriImage = null;
        });
        this.uploadProgress = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(0);
        // this.signInForm.clearValidators()
        this.signInForm.reset();
        // signInForm.markAsUntouched()
        // signInForm.markAsPristine()
        // signInForm.updateValueAndValidity()
        // Object.keys(this.signInForm.controls).forEach(el=> {
        //   this.signInForm.controls[el].markAsUntouched()
        //   this.signInForm.controls[el].markAsDirty()
        //   this.signInForm.controls[el].markAsPristine()
        //   this.signInForm.controls[el].clearValidators()
        //   this.signInForm.controls[el].
        // })
    }
    uploadFile(event) {
        this.isdisabled = true;
        this.signInForm.value.img = '';
        if (this.categoriImage) {
            this.storage.refFromURL(this.categoriImage).delete();
            this.categoriImage = '';
        }
        const file = event.target.files[0];
        const filePath = `category/${this.uuid()}.${file.type.split('/')[1]}`;
        const task = this.storage.upload(filePath, file);
        this.uploadProgress = task.percentageChanges();
        task.then(result => {
            this.storage.ref(`category/${result.metadata.name}`).getDownloadURL().subscribe(img => {
                this.categoriImage = img;
                this.uploadProgress.subscribe(res => {
                    if (res === 100) {
                        this.isdisabled = false;
                    }
                });
            });
        });
    }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
AdminCategoryComponent.ɵfac = function AdminCategoryComponent_Factory(t) { return new (t || AdminCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_7__["NavsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_8__["AppleService"])); };
AdminCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminCategoryComponent, selectors: [["app-admin-category"]], decls: 27, vars: 9, consts: [["label", "\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044F"], ["label", "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["formControlName", "select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-full-width"], ["formControlName", "title", "matInput", "", "name", "title"], ["role", "alert", 1, "alert", "alert-danger", 3, "hidden"], ["for", "file-upload", 1, "custom-file-upload"], ["formControlName", "img", "id", "file-upload", "type", "file", 3, "change"], ["mode", "determinate", 3, "value"], ["id", ""], ["class", "margin", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["class", "margin", "mat-raised-button", "", "color", "accent", 3, "disabled", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "value"], ["mat-raised-button", "", "color", "primary", 1, "margin", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "margin", 3, "disabled", "click"], [3, "opened", "closed"], [1, "table", "block"], ["alt", "", 2, "height", "50px", 3, "src"], ["mat-raised-button", "", "color", "accent", 1, "res", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function AdminCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-admin-navs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminCategoryComponent_Template_form_ngSubmit_4_listener() { return ctx.signIn(ctx.signInForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Favorite food");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AdminCategoryComponent_mat_option_9_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u0417\u0430\u043F\u043E\u0432\u0456\u043D\u0441\u0442\u044C \u0424\u043E\u0440\u043C\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AdminCategoryComponent_Template_input_change_18_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "mat-progress-bar", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AdminCategoryComponent_button_24_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AdminCategoryComponent_button_25_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AdminCategoryComponent_mat_accordion_26_Template, 22, 5, "mat-accordion", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrOpntio);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.signInForm.valid || ctx.signInForm.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 7, ctx.uploadProgress));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.categoryDoc);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.categoryDoc);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrCate);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _admin_navs_admin_navs_component__WEBPACK_IMPORTED_MODULE_10__["AdminNavsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelTitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"]], styles: ["table[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 90%;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom-file-upload[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.papa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  color: \"red\";\n}\n\n.res[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFFQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6ImFkbWluLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogOTAlO1xyXG4gICAgLy8gbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYXJnaW57XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucGFwYSAgcDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgY29sb3I6ICdyZWQnXHJcbn1cclxuXHJcbi5yZXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufSJdfQ== */"], data: { animation: [] } });


/***/ }),

/***/ "JbDz":
/*!************************************************!*\
  !*** ./src/app/shared/models/iphone.models.ts ***!
  \************************************************/
/*! exports provided: Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
class Phone {
    constructor(id, weigh, battery, pixels, display, color, memory, processor, cell, category, uuid) {
        this.id = id;
        this.weigh = weigh;
        this.battery = battery;
        this.pixels = pixels;
        this.display = display;
        this.color = color;
        this.memory = memory;
        this.processor = processor;
        this.cell = cell;
        this.category = category;
        this.uuid = uuid;
    }
}


/***/ }),

/***/ "JlZB":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/memory.pipe.ts ***!
  \*********************************************/
/*! exports provided: MemoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryPipe", function() { return MemoryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MemoryPipe {
    transform(value, sto) {
        if (!value)
            return value;
        // console.log(value.memory);
        // console.log(value);
        switch (sto) {
            case 'color':
                return value.filter((v, i, a) => a.findIndex(t => t.color.toLowerCase().trim() === v.color.toLowerCase().trim()) === i);
            case 'memory':
                return value.filter((v, i, a) => a.findIndex(t => t.memory.toLowerCase() === v.memory.toLowerCase()) === i);
        }
    }
}
MemoryPipe.ɵfac = function MemoryPipe_Factory(t) { return new (t || MemoryPipe)(); };
MemoryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "memory", type: MemoryPipe, pure: true });


/***/ }),

/***/ "L8Fw":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/category-navs.models.ts ***!
  \*******************************************************/
/*! exports provided: Navs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navs", function() { return Navs; });
class Navs {
    constructor(id, nameEN, nameUA) {
        this.id = id;
        this.nameEN = nameEN;
        this.nameUA = nameUA;
    }
}


/***/ }),

/***/ "LdAs":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/login/login.service */ "EVec");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class LoginModalComponent {
    constructor(dialogRef, data, loginServices, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.loginServices = loginServices;
        this.router = router;
        this.adminArr = [];
        this.loginGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.loginServices.getDatali().then(res => {
            this.adminArr = res;
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    Login() {
        const admin = this.adminArr.find(el => el);
        const { login, password } = this.loginGroup.value;
        if (login == admin.login && password == admin.password) {
            this.loginServices.isLogin = true;
            this.router.navigate(['admin']);
            this.onNoClick();
            setTimeout(() => {
                this.router.navigate(['home']);
                this.loginServices.isLogin = false;
            }, 60000 * 5);
        }
    }
}
LoginModalComponent.ɵfac = function LoginModalComponent_Factory(t) { return new (t || LoginModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginModalComponent, selectors: [["app-login-modal"]], decls: 13, vars: 1, consts: [[1, "example-form", 3, "formGroup"], [1, "example-full-width"], ["matInput", "", "formControlName", "login"], ["matInput", "", "formControlName", "password"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function LoginModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loggin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginModalComponent_Template_button_click_11_listener() { return ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/category/iphone"]; };
const _c1 = function () { return ["/category/mac"]; };
const _c2 = function () { return ["/category/apple watch"]; };
const _c3 = function () { return ["/category/airpods"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 58, vars: 8, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-md-6", "col-lg-3"], ["href", "", 1, "footer__logo"], ["src", "../../../assets/images/logo_white.svg", "data-src", "/wa-data/public/shop/themes/appleroom/img/logo_white.svg", "alt", "", 1, "ls-is-cached", "lazyloaded"], [1, "footer__copyright", "d-none", "d-md-block"], [1, "footer__heading"], ["data-toggle", "collapse", "data-target", "#footer-collapse1", 1, "collapse-mobile-action"], [1, "fas"], ["id", "footer-collapse1", 1, "footer__menu", "collapse", "collapse-mobile"], ["routerLinkActive", "active", 3, "routerLink"], [1, "footer__phones"], ["href", "tel:0800338695"], ["href", "tel:+38(093)1707333"], [1, "fas", "fa-mobile-alt"], ["href", "tel:+38(067)3509635"], [1, "footer__subheading"], [1, "footer__socials"], ["href", "https://www.instagram.com/appleroom_official/", "rel", "nofollow", "target", "_blank"], [1, "icon", "icon-instagram"], ["href", "https://www.facebook.com/lviv.appleroom/", "rel", "nofollow", "target", "_blank"], [1, "icon", "icon-facebook"], ["href", "http://stream.brandradionetworks.com:8000/appleroom", "rel", "nofollow", "target", "_blank"], [1, "fas", "fa-play"], [1, "footer__copyright", "d-md-none"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2012 - 2021 Apple Room - \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0442\u0430 \u0441\u0435\u0440\u0432\u0456\u0441\u043D\u0438\u0439 \u0446\u0435\u043D\u0442\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "iPhone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Apple Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "AirPods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "0 800 338 695");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " (\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "+38 (093) 17 07 333");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "+38 (067) 35 09 635");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0413\u0440\u0430\u0444\u0456\u043A \u0440\u043E\u0431\u043E\u0442\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u041F\u043D - \u041D\u0434: 10:00 - 20:00 \u0433\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0421\u043B\u0456\u0434\u043A\u0443\u0439\u0442\u0435 \u0437\u0430 \u043D\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2012 - 2021 Apple Room - \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0442\u0430 \u0441\u0435\u0440\u0432\u0456\u0441\u043D\u0438\u0439 \u0446\u0435\u043D\u0442\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".footer[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  background: #000;\n  color: #fff;\n  padding: 30px 0;\n  font-size: 15px;\n  line-height: 1.4;\n  color: #fff;\n  font-family: SF Pro Display;\n  flex: 0 0 auto;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.footer__copyright[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14px;\n}\n\n.footer__copyright[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14px;\n}\n\n.footer__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 220px;\n  max-width: 100%;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #fff;\n  transition: 0.4s;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ef456a;\n}\n\n.footer__menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\nli[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.footer__heading[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFHSSxhQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBEaXNwbGF5O1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4uZm9vdGVyX19jb3B5cmlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mb290ZXJfX2xvZ28gaW1nIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvb3RlciBhIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLmZvb3RlciBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZWY0NTZhO1xyXG59XHJcblxyXG4uZm9vdGVyX19tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbn1cclxuXHJcbm9sLCB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyX19oZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "LvrJ":
/*!************************************************!*\
  !*** ./src/app/shared/config/loader.config.ts ***!
  \************************************************/
/*! exports provided: loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loader", function() { return loader; });
const loader = {
    fgsType: 'three-bounce',
    fgsColor: '#6e6e6e',
    pbThickness: 2,
    pbColor: '#6e6e6e',
    overlayColor: 'rgba(0,0,0, .8)',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
};


/***/ }),

/***/ "NWaZ":
/*!*************************************************************!*\
  !*** ./src/app/components/subscribe/subscribe.component.ts ***!
  \*************************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class SubscribeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscribeComponent.ɵfac = function SubscribeComponent_Factory(t) { return new (t || SubscribeComponent)(); };
SubscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscribeComponent, selectors: [["app-subscribe"]], decls: 11, vars: 0, consts: [[1, "b-subscribe"], [1, "b-subscribe__inner"], [1, "b-subscribe__heading", "text-center", "text-md-left"], [1, "js-subscribe-form"], [1, "row", "justify-content-between", "align-items-center", "flex-column", "flex-md-row"], [1, "col-md-7", "col-lg-8", "my-md-2", "my-2"], ["name", "email", "type", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448 email", "required", "", 1, "form-control", "form-control-lg"], [1, "col-md-5", "col-lg-4", "my-md-2", "my-2"], ["type", "submit", "id", "subscribe-btn", 1, "btn", "btn-primary", "btn-lg", "btn-block"]], template: function SubscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0430\u043A\u0446\u0456\u0439\u043D\u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".b-subscribe[_ngcontent-%COMP%] {\n  width: 70%;\n  border-radius: 0% 5% 10% 3%/10% 20% 0% 17%;\n  transform: skewY(1deg);\n  padding: 70px 50px;\n  box-shadow: 0 15px 39px 0 rgba(8, 18, 109, 0.1);\n  margin-top: 100px;\n}\n\n.b-subscribe__inner[_ngcontent-%COMP%] {\n  transform: skewY(-1deg);\n}\n\n.b-subscribe__heading[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 22px;\n  margin-bottom: 15px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.b-subscribe[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 45px;\n}\n\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.btn-block[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.btn-group-lg[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .btn-lg[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.b-subscribe[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdWJzY3JpYmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0YsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFHSSw4QkFBQTtBQURKOztBQUlBO0VBR0ksYUFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESiIsImZpbGUiOiJzdWJzY3JpYmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYi1zdWJzY3JpYmUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICBib3JkZXItcmFkaXVzOiAwJSA1JSAxMCUgMyUvMTAlIDIwJSAwJSAxNyU7XHJcbiAgdHJhbnNmb3JtOiBza2V3WSgxZGVnKTtcclxuICBwYWRkaW5nOiA3MHB4IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDM5cHggMCByZ2IoOCAxOCAxMDkgLyAxMCUpO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYi1zdWJzY3JpYmVfX2lubmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2tld1koXHJcbi0xZGVnXHJcbik7XHJcbn1cclxuXHJcbi5iLXN1YnNjcmliZV9faGVhZGluZyB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuLmItc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG5cclxuLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bi1ncm91cC1sZz4uYnRuLCAuYnRuLWxnIHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XHJcbn1cclxuXHJcbi5iLXN1YnNjcmliZSAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Q8VR":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/admin-products/modal-products/modal-products.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModalProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProductsComponent", function() { return ModalProductsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");













function ModalProductsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "descriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ModalProductsComponent_div_13_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.uploadFil($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-progress-bar", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 1, ctx_r0.upload));
} }
function ModalProductsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function ModalProductsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ModalProductsComponent {
    constructor(storage) {
        this.storage = storage;
        this.selected = 'option2';
        this.formGroupDescriptions = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            descriptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            imgDetali: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    addDetali(event) {
    }
    uploadFil(event) {
        const myId = uuid__WEBPACK_IMPORTED_MODULE_1__["v4"]();
        // this.isdisabled = true
        this.formGroupDescriptions.value.img = '';
        if (this.imgDetali) {
            this.storage.refFromURL(this.imgDetali).delete();
            this.imgDetali = '';
        }
        const file = event.target.files[0];
        const filePath = `detali/${myId}.${file.type.split('/')[1]}`;
        const task = this.storage.upload(filePath, file);
        this.upload = task.percentageChanges();
        task.then(result => {
            this.storage.ref(`detali/${result.metadata.name}`).getDownloadURL().subscribe(img => {
                this.imgDetali = img;
                this.upload.subscribe(res => {
                    if (res === 100) {
                        this.isdisabled = false;
                    }
                });
            });
        });
    }
}
ModalProductsComponent.ɵfac = function ModalProductsComponent_Factory(t) { return new (t || ModalProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"])); };
ModalProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalProductsComponent, selectors: [["app-modal-products"]], decls: 23, vars: 7, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], [1, "mat-typography"], ["appearance", "fill"], [3, "value", "valueChange"], ["value", "descriptions"], ["value", "characteristic"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["type", "submit", "mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], [1, "example-full-width"], ["formControlName", "title", "matInput", "", "name", "title"], ["formControlName", "descriptions", "matInput", "", "name", "title"], ["for", "file-uploa", 1, "custom-file-upload"], ["formControlName", "imgDetali", "id", "file-uploa", "type", "file", 3, "change"], ["mode", "determinate", 3, "value"], ["id", ""]], template: function ModalProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ModalProductsComponent_Template_form_ngSubmit_0_listener() { return ctx.addDetali(ctx.formGroupDescriptions.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function ModalProductsComponent_Template_mat_select_valueChange_5_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u041A\u0440\u0456\u0442\u0435\u0440\u0456\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ModalProductsComponent_div_13_Template, 17, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ModalProductsComponent_div_14_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ModalProductsComponent_div_15_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Succses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroupDescriptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "descriptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "characteristic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("You selected: ", ctx.selected, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "QduQ":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/object.pipe.ts ***!
  \*********************************************/
/*! exports provided: ObjectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectPipe", function() { return ObjectPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ObjectPipe {
    transform(value) {
        // delete value.category
        console.log(value);
        value === null || value === void 0 ? true : delete value.uuid;
        value === null || value === void 0 ? true : delete value.id;
        return value;
    }
}
ObjectPipe.ɵfac = function ObjectPipe_Factory(t) { return new (t || ObjectPipe)(); };
ObjectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "object", type: ObjectPipe, pure: true });


/***/ }),

/***/ "S8YT":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/kyrs.pipe.ts ***!
  \*******************************************/
/*! exports provided: KyrsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KyrsPipe", function() { return KyrsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class KyrsPipe {
    transform(value) {
        return value.toString().split('').map((x, index) => {
            if (index === value.toString().length - 3 - 1)
                x += ' ';
            return x;
        }).join('');
    }
}
KyrsPipe.ɵfac = function KyrsPipe_Factory(t) { return new (t || KyrsPipe)(); };
KyrsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "kyrs", type: KyrsPipe, pure: true });


/***/ }),

/***/ "SsHg":
/*!**************************************************!*\
  !*** ./src/app/shared/models/airpords.models.ts ***!
  \**************************************************/
/*! exports provided: Airpods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airpods", function() { return Airpods; });
class Airpods {
    constructor(id, uuid, color, charging, category) {
        this.id = id;
        this.uuid = uuid;
        this.color = color;
        this.charging = charging;
        this.category = category;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'Apple';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "page"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "TAK2":
/*!******************************************************************!*\
  !*** ./src/app/pages/gallery-ivybox/gallery-ivybox.component.ts ***!
  \******************************************************************/
/*! exports provided: GalleryIvyboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryIvyboxComponent", function() { return GalleryIvyboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_gallery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/gallery.service */ "eU2y");
/* harmony import */ var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @crystalui/angular-lightbox */ "k/Yu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GalleryIvyboxComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GalleryIvyboxComponent {
    constructor(galleryServices) {
        this.galleryServices = galleryServices;
        this.arrGallery = [];
    }
    ngOnInit() {
        this.getGalley();
    }
    getGalley() {
        this.galleryServices.getGallery().then(res => {
            this.arrGallery = res;
        });
    }
}
GalleryIvyboxComponent.ɵfac = function GalleryIvyboxComponent_Factory(t) { return new (t || GalleryIvyboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_gallery_service__WEBPACK_IMPORTED_MODULE_1__["GalleryService"])); };
GalleryIvyboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryIvyboxComponent, selectors: [["app-gallery-ivybox"]], decls: 5, vars: 1, consts: [[1, "section__block", "user-gallery"], [1, "container"], [1, "user-gallery__list"], ["lightbox-group", ""], ["class", "pointer", "lightbox", "", "backgroundOpacity", "0.9", "closeButtonText", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438", 3, "src", 4, "ngFor", "ngForOf"], ["lightbox", "", "backgroundOpacity", "0.9", "closeButtonText", "\u0417\u0430\u043A\u0440\u0438\u0442\u0438", 1, "pointer", 3, "src"]], template: function GalleryIvyboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleryIvyboxComponent_img_4_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrGallery);
    } }, directives: [_crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxDirective"]], styles: ["@font-face {\n  font-family: \"apple\";\n  src: url(\"/assets/font/9651.ttf\");\n}\n.section__block[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.user-gallery__title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: \"apple\";\n  color: #000;\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 26px;\n  letter-spacing: 1px;\n}\n.user-gallery__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.user-gallery__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  padding: 1.5px;\n}\n.user-gallery__list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16%;\n  height: auto;\n  vertical-align: top;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  height: auto;\n  vertical-align: top;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media screen and (max-width: 1524px) {\n  div[_ngcontent-%COMP%] {\n    padding: 1.5px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 19% !important;\n  }\n}\n@media screen and (max-width: 1032px) {\n  img[_ngcontent-%COMP%] {\n    width: 23% !important;\n  }\n}\n@font-face {\n  font-family: \"apple\";\n  src: url(\"/assets/font/9651.ttf\");\n}\n.section__block[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.user-gallery__title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: \"apple\";\n  color: #000;\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 26px;\n  letter-spacing: 1px;\n}\n.user-gallery__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.user-gallery__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  padding: 1.5px;\n}\n.user-gallery__list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16%;\n  height: auto;\n  vertical-align: top;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  height: auto;\n  vertical-align: top;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media screen and (max-width: 1524px) {\n  div[_ngcontent-%COMP%] {\n    padding: 1.5px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 19% !important;\n  }\n}\n@media screen and (max-width: 1032px) {\n  img[_ngcontent-%COMP%] {\n    width: 23% !important;\n  }\n}\n@media screen and (max-width: 532px) {\n  img[_ngcontent-%COMP%] {\n    width: 31% !important;\n  }\n}\n@media screen and (max-width: 450px) {\n  img[_ngcontent-%COMP%] {\n    width: 47% !important;\n  }\n}\n@media screen and (max-width: 366px) {\n  img[_ngcontent-%COMP%] {\n    width: 96% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYWxsZXJ5LWl2eWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBR0EsbUJBQUE7QUFGSjtBQU1BO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFISjtBQU1BO0VBQ0ksNkJBQUE7QUFISjtBQU1BO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBSEo7QUFNQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSEo7QUFNQTtFQUNJLDZCQUFBO0FBSEo7QUFNQTtFQUNJLGVBQUE7QUFISjtBQU9BO0VBR0k7SUFFRSxjQUFBO0VBUEo7O0VBU0M7SUFDQyxxQkFBQTtFQU5GO0FBQ0Y7QUFVQTtFQUNJO0lBQ0kscUJBQUE7RUFSTjtBQUNGO0FBVUE7RUFDSSxvQkFBQTtFQUNBLGlDQUFBO0FBUko7QUFXQTtFQUNJLGdCQUFBO0FBVEo7QUFZQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUdBLG1CQUFBO0FBWEo7QUFlQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBWko7QUFlQTtFQUNJLDZCQUFBO0FBWko7QUFlQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQVpKO0FBZUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVpKO0FBZUE7RUFDSSw2QkFBQTtBQVpKO0FBZUE7RUFDSSxlQUFBO0FBWko7QUFnQkE7RUFHSTtJQUVFLGNBQUE7RUFoQko7O0VBa0JDO0lBQ0MscUJBQUE7RUFmRjtBQUNGO0FBbUJBO0VBQ0k7SUFDSSxxQkFBQTtFQWpCTjtBQUNGO0FBbUJBO0VBQ0k7SUFDSSxxQkFBQTtFQWpCTjtBQUNGO0FBbUJBO0VBQ0k7SUFDSSxxQkFBQTtFQWpCTjtBQUNGO0FBbUJBO0VBQ0k7SUFDSSxxQkFBQTtFQWpCTjtBQUNGIiwiZmlsZSI6ImdhbGxlcnktaXZ5Ym94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJhcHBsZVwiO1xyXG4gICAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnQvOTY1MS50dGZcIik7XHJcbiAgfVxyXG5cclxuLnNlY3Rpb25fX2Jsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuXHJcbi51c2VyLWdhbGxlcnlfX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdhcHBsZSc7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxufVxyXG5cclxuLnVzZXItZ2FsbGVyeV9fbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZXItZ2FsbGVyeV9fbGlzdCBkaXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxLjVweDtcclxufVxyXG5cclxuLnVzZXItZ2FsbGVyeV9fbGlzdCBpbWcge1xyXG4gICAgd2lkdGg6IDE2JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MjRweCkge1xyXG4gICAgXHJcblxyXG4gICAgZGl2IHtcclxuICAgIC8vICAgZmxleDogMCAwIDQ5LjY2NjYlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDEuNXB4O1xyXG4gIH1cclxuICAgaW1ne1xyXG4gICAgd2lkdGg6IDE5JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDMycHgpIHtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMjMlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcImFwcGxlXCI7XHJcbiAgICBzcmM6IHVybChcIi9hc3NldHMvZm9udC85NjUxLnR0ZlwiKTtcclxuICB9XHJcblxyXG4uc2VjdGlvbl9fYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLnVzZXItZ2FsbGVyeV9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ2FwcGxlJztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG59XHJcblxyXG4udXNlci1nYWxsZXJ5X19saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci1nYWxsZXJ5X19saXN0IGRpdiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEuNXB4O1xyXG59XHJcblxyXG4udXNlci1nYWxsZXJ5X19saXN0IGltZyB7XHJcbiAgICB3aWR0aDogMTYlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUyNHB4KSB7XHJcbiAgICBcclxuXHJcbiAgICBkaXYge1xyXG4gICAgLy8gICBmbGV4OiAwIDAgNDkuNjY2NiUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMS41cHg7XHJcbiAgfVxyXG4gICBpbWd7XHJcbiAgICB3aWR0aDogMTklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMzJweCkge1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMyUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMnB4KSB7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMxJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNDclICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjZweCkge1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA5NiUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



const _c0 = function () { return ["category"]; };
const _c1 = function () { return ["products"]; };
const _c2 = function () { return ["detali"]; };
const _c3 = function () { return ["carusel"]; };
const _c4 = function () { return ["gallery"]; };
const _c5 = function () { return ["comments"]; };
const _c6 = function () { return ["order"]; };
class AdminComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 21, vars: 14, consts: [[1, "admin", "container-fluid", 2, "margin-top", "20px"], [1, "row"], [1, "col-3"], [1, "nav", "flex-column", "nav-pills"], ["routerLinkActive", "active", "mat-raised-button", "", 1, "nav-link", 3, "routerLink"], [1, "col-9"], [1, "tab-content"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Detali-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Carusel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".admin[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  transition: all 0.6s;\n}\n\n.col-3[_ngcontent-%COMP%] {\n  max-width: 10% !important;\n}\n\n.col-9[_ngcontent-%COMP%] {\n  flex: 0.5 0 91% !important;\n  max-width: 90% !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #3f51b5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFLQTtFQUVJLDBCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxvQ0FBQTtBQUZKIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWlue1xyXG4gICAgbWluLWhlaWdodDogNzB2aDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG59XHJcblxyXG4uY29sLTN7XHJcbiAgICBtYXgtd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLmNvbC05IHtcclxuICAgIC1tcy1mbGV4OiAxIDAgNzUlIDtcclxuICAgIGZsZXg6IDAuNSAwIDkxJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5re1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "UhSo":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(value, state) {
        if (!value)
            return value;
        if (!state)
            return '';
        return value.filter(category => category.category === state.toLowerCase());
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ "W6Sa":
/*!*************************************************************!*\
  !*** ./src/app/components/maps-nova/maps-nova.component.ts ***!
  \*************************************************************/
/*! exports provided: MapsNovaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsNovaComponent", function() { return MapsNovaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "QnLe");
/* harmony import */ var src_app_mysor_mysor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/mysor/mysor */ "rNc0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_map_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/map/map.service */ "6hn5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












const _c0 = ["map"];
function MapsNovaComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapsNovaComponent_mat_option_3_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const food_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.add(food_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r3, " ");
} }
function MapsNovaComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapsNovaComponent_mat_option_8_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const food_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.initMap(food_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r6.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r6.Description, " ");
} }
class MapsNovaComponent {
    constructor(router, cdr, mapService, formBolider, appleServices) {
        this.router = router;
        this.cdr = cdr;
        this.mapService = mapService;
        this.formBolider = formBolider;
        this.appleServices = appleServices;
        this.param = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gmarker = null;
        this.city = ['Львів', 'Київ', 'Одеса', 'Харків', 'Запоріжжя', 'Харків', 'Дніпро', 'Миколаїв', 'Луцьк'];
        this.arrNova = [];
        this.mapLocation = src_app_mysor_mysor__WEBPACK_IMPORTED_MODULE_2__["mysor"];
    }
    ngOnInit() {
        this.initMap();
        this.add();
        // this.form.valueChanges.subscribe(el =>{
        // this.appleServices.seach = el.nova;
        //   this.appleServices.getNova().subscribe(res => {
        //     return res
        //   })
        // })
    }
    ngOnChanges() {
    }
    add(value) {
        // console.log(value);
        if (!this.appleServices.seach) {
            this.appleServices.seach = 'Львів';
        }
        else {
            this.appleServices.seach = value;
        }
        this.appleServices.getNova().subscribe(res => {
            this.arrNova = res.data;
            this.arrNova.length = 50;
        });
    }
    initMap(item) {
        // const {maps}  = this.form.value
        let ob;
        if (!item) {
            ob = { lat: 49.8232878828969, lng: 24.026186443972122 };
        }
        else {
            ob = { lat: +(item === null || item === void 0 ? void 0 : item.Latitude), lng: +(item === null || item === void 0 ? void 0 : item.Longitude) };
        }
        const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__["Loader"]({
            apiKey: this.mapService.apiKey
        });
        loader.load().then(() => {
            this.map = new google.maps.Map(this.divMap.nativeElement, {
                center: ob,
                zoom: 15,
                disableDefaultUI: true,
            });
            let map = new google.maps.Marker({
                position: ob,
                map: this.map
            });
        });
    }
}
MapsNovaComponent.ɵfac = function MapsNovaComponent_Factory(t) { return new (t || MapsNovaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_6__["AppleService"])); };
MapsNovaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapsNovaComponent, selectors: [["app-maps-nova"]], viewQuery: function MapsNovaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divMap = _t.first);
    } }, inputs: { form: "form" }, outputs: { param: "param" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 3, consts: [[3, "formGroup"], ["appearance", "fill"], ["formControlName", "nova"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "novaMaps"], ["id", "map", 1, "full"], ["map", ""], [3, "value", "click"]], template: function MapsNovaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapsNovaComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0410\u0434\u0440\u0435\u0441\u0441\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MapsNovaComponent_mat_option_8_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrNova);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: [".full[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n@media (max-width: 650px) {\n  section[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 400px;\n  }\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cartOS__list_shipping[_ngcontent-%COMP%]   .shipping-rates[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  margin-top: 10px;\n  padding: 3px;\n  width: calc(50% + 70px);\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXBzLW5vdmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBRUk7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUFOO0FBQ0Y7O0FBT0U7RUFDRSxXQUFBO0FBTEo7O0FBUUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVFFO0VBQ0Usb0JBQUE7QUFMSjs7QUFRRTtFQUNFLG1CQUFBO0FBTEoiLCJmaWxlIjoibWFwcy1ub3ZhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgLmZ1bGx7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7fVxyXG4gIFxyXG4gIFxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcnRPU19fbGlzdF9zaGlwcGluZyAuc2hpcHBpbmctcmF0ZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgNzBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiwgc2VsZWN0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _components_nav_hover_nav_hover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-hover/nav-hover.component */ "qjlc");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var angular_material_fileupload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-material-fileupload */ "oqk0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/category/category.component */ "b7R5");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin-category/admin-category.component */ "JQyM");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "lRFV");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _shared_config_loader_config__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/config/loader.config */ "LvrJ");
/* harmony import */ var _admin_admin_category_admin_navs_admin_navs_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/admin-category/admin-navs/admin-navs.component */ "8JtR");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/pipes/filter.pipe */ "UhSo");
/* harmony import */ var _shared_pipes_color_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/pipes/color.pipe */ "kaia");
/* harmony import */ var _shared_pipes_lenght_numver_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/pipes/lenght-numver.pipe */ "sMq3");
/* harmony import */ var _pages_apple_apple_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/apple/apple.component */ "bmFq");
/* harmony import */ var _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/pipes/replacement.pipe */ "ezZm");
/* harmony import */ var _components_navigate_navigate_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/navigate/navigate.component */ "8ysZ");
/* harmony import */ var _shared_pipes_filter_products_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./shared/pipes/filter-products.pipe */ "kYDd");
/* harmony import */ var _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/basket/basket.component */ "zYrN");
/* harmony import */ var _components_modal_basket_modal_basket_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/modal-basket/modal-basket.component */ "b9fz");
/* harmony import */ var _pages_apple_details_apple_details_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/apple-details/apple-details.component */ "A95i");
/* harmony import */ var _admin_admin_detali_admin_detali_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/admin-detali/admin-detali.component */ "AeD1");
/* harmony import */ var _shared_pipes_memory_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shared/pipes/memory.pipe */ "JlZB");
/* harmony import */ var _shared_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./shared/pipes/sort.pipe */ "aip8");
/* harmony import */ var _shared_pipes_name_string_pipe__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shared/pipes/name-string.pipe */ "6c9R");
/* harmony import */ var _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shared/pipes/kyrs.pipe */ "S8YT");
/* harmony import */ var _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./shared/pipes/fixed.pipe */ "ItGS");
/* harmony import */ var _shared_pipes_routing_pipe__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./shared/pipes/routing.pipe */ "3kYD");
/* harmony import */ var _admin_admin_order_admin_order_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./admin/admin-order/admin-order.component */ "m4x3");
/* harmony import */ var _shared_pipes_arr_pipe__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./shared/pipes/arr.pipe */ "vGGw");
/* harmony import */ var _admin_admin_products_modal_products_modal_products_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./admin/admin-products/modal-products/modal-products.component */ "Q8VR");
/* harmony import */ var _components_device_properties_device_properties_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/device-properties/device-properties.component */ "0kC6");
/* harmony import */ var _shared_pipes_object_pipe__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./shared/pipes/object.pipe */ "QduQ");
/* harmony import */ var _admin_admin_detali_description_description_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./admin/admin-detali/description/description.component */ "36kR");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/filter/filter.component */ "/J2p");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ngx-hm-carousel */ "joFe");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _admin_admin_carusel_admin_carusel_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./admin/admin-carusel/admin-carusel.component */ "sJdk");
/* harmony import */ var _pages_home_carusel_carusel_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pages/home/carusel/carusel.component */ "nS89");
/* harmony import */ var _pages_home_models_apple_models_apple_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./pages/home/models-apple/models-apple.component */ "jAKP");
/* harmony import */ var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @crystalui/angular-lightbox */ "k/Yu");
/* harmony import */ var _pages_home_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/home/gallery/gallery.component */ "mSj3");
/* harmony import */ var _admin_admin_gallery_admin_gallery_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./admin/admin-gallery/admin-gallery.component */ "41zX");
/* harmony import */ var _pages_gallery_ivybox_gallery_ivybox_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./pages/gallery-ivybox/gallery-ivybox.component */ "TAK2");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _pages_home_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./pages/home/short-text/short-text.component */ "n8ey");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var _components_maps_maps_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/maps/maps.component */ "I7oR");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _shared_pipes_value_pipe__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./shared/pipes/value.pipe */ "v/O3");
/* harmony import */ var _admin_admin_comments_admin_comments_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./admin/admin-comments/admin-comments.component */ "BRtY");
/* harmony import */ var _components_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/subscribe/subscribe.component */ "NWaZ");
/* harmony import */ var _components_maps_nova_maps_nova_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/maps-nova/maps-nova.component */ "W6Sa");
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/login-modal/login-modal.component */ "LdAs");
/* harmony import */ var ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ngx-lazy-load-images */ "V+U2");
/* harmony import */ var _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/snack-bar/snack-bar.component */ "rqfx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @angular/core */ "fXoL");























































































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            [swiper_angular__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"]],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_31__["AngularFirestoreModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            angular_material_fileupload__WEBPACK_IMPORTED_MODULE_14__["MatFileUploadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_34__["NgxUiLoaderModule"].forRoot(_shared_config_loader_config__WEBPACK_IMPORTED_MODULE_35__["loader"]),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_34__["NgxUiLoaderRouterModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_61__["CarouselModule"],
            ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_62__["NgxHmCarouselModule"],
            [_crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_67__["CrystalLightboxModule"]],
            primeng_slider__WEBPACK_IMPORTED_MODULE_73__["SliderModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_75__["GoogleMapsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
            ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_81__["LazyLoadImagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _components_nav_hover_nav_hover_component__WEBPACK_IMPORTED_MODULE_6__["NavHoverComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
        _pages_category_category_component__WEBPACK_IMPORTED_MODULE_24__["CategoryComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
        _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_26__["AdminCategoryComponent"],
        _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_33__["AdminProductsComponent"],
        _admin_admin_category_admin_navs_admin_navs_component__WEBPACK_IMPORTED_MODULE_36__["AdminNavsComponent"],
        _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_37__["FilterPipe"],
        _shared_pipes_color_pipe__WEBPACK_IMPORTED_MODULE_38__["ColorPipe"],
        _shared_pipes_lenght_numver_pipe__WEBPACK_IMPORTED_MODULE_39__["LenghtNumverPipe"],
        _pages_apple_apple_component__WEBPACK_IMPORTED_MODULE_40__["AppleComponent"],
        _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_41__["ReplacementPipe"],
        _components_navigate_navigate_component__WEBPACK_IMPORTED_MODULE_42__["NavigateComponent"],
        _shared_pipes_filter_products_pipe__WEBPACK_IMPORTED_MODULE_43__["FilterProductsPipe"],
        _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_44__["BasketComponent"],
        _components_modal_basket_modal_basket_component__WEBPACK_IMPORTED_MODULE_45__["ModalBasketComponent"],
        _pages_apple_details_apple_details_component__WEBPACK_IMPORTED_MODULE_46__["AppleDetailsComponent"],
        _admin_admin_detali_admin_detali_component__WEBPACK_IMPORTED_MODULE_47__["AdminDetaliComponent"],
        _shared_pipes_memory_pipe__WEBPACK_IMPORTED_MODULE_48__["MemoryPipe"],
        _shared_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_49__["SortPipe"],
        _shared_pipes_name_string_pipe__WEBPACK_IMPORTED_MODULE_50__["NameStringPipe"],
        _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_51__["KyrsPipe"],
        _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_52__["FixedPipe"],
        _shared_pipes_routing_pipe__WEBPACK_IMPORTED_MODULE_53__["RoutingPipe"],
        _admin_admin_order_admin_order_component__WEBPACK_IMPORTED_MODULE_54__["AdminOrderComponent"],
        _shared_pipes_arr_pipe__WEBPACK_IMPORTED_MODULE_55__["ArrPipe"],
        _admin_admin_products_modal_products_modal_products_component__WEBPACK_IMPORTED_MODULE_56__["ModalProductsComponent"],
        _components_device_properties_device_properties_component__WEBPACK_IMPORTED_MODULE_57__["DevicePropertiesComponent"],
        _shared_pipes_object_pipe__WEBPACK_IMPORTED_MODULE_58__["ObjectPipe"],
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_60__["FilterComponent"],
        _admin_admin_detali_description_description_component__WEBPACK_IMPORTED_MODULE_59__["DescriptionComponent"],
        _admin_admin_carusel_admin_carusel_component__WEBPACK_IMPORTED_MODULE_64__["AdminCaruselComponent"],
        _pages_home_carusel_carusel_component__WEBPACK_IMPORTED_MODULE_65__["CaruselComponent"],
        _pages_home_models_apple_models_apple_component__WEBPACK_IMPORTED_MODULE_66__["ModelsAppleComponent"],
        _pages_home_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_68__["GalleryComponent"],
        _admin_admin_gallery_admin_gallery_component__WEBPACK_IMPORTED_MODULE_69__["AdminGalleryComponent"],
        _pages_gallery_ivybox_gallery_ivybox_component__WEBPACK_IMPORTED_MODULE_70__["GalleryIvyboxComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_71__["FooterComponent"],
        _pages_home_short_text_short_text_component__WEBPACK_IMPORTED_MODULE_72__["ShortTextComponent"],
        _components_maps_maps_component__WEBPACK_IMPORTED_MODULE_74__["MapsComponent"],
        _shared_pipes_value_pipe__WEBPACK_IMPORTED_MODULE_76__["ValuePipe"],
        _admin_admin_comments_admin_comments_component__WEBPACK_IMPORTED_MODULE_77__["AdminCommentsComponent"],
        _components_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_78__["SubscribeComponent"],
        _components_maps_nova_maps_nova_component__WEBPACK_IMPORTED_MODULE_79__["MapsNovaComponent"],
        _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_80__["LoginModalComponent"],
        _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_82__["SnackBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__["AngularFireStorageModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_31__["AngularFirestoreModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        angular_material_fileupload__WEBPACK_IMPORTED_MODULE_14__["MatFileUploadModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_34__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_34__["NgxUiLoaderRouterModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_61__["CarouselModule"],
        ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_62__["NgxHmCarouselModule"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_67__["CrystalLightboxModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_73__["SliderModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_75__["GoogleMapsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
        ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_81__["LazyLoadImagesModule"]] }); })();


/***/ }),

/***/ "aip8":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/sort.pipe.ts ***!
  \*******************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SortPipe {
    transform(value, sort) {
        if (!value)
            return '';
        switch (sort) {
            case '123':
                return value.sort((a, b) => a.memory - b.memory);
            case 'abs':
                return value.sort((a, b) => {
                    if (a.color < b.color) {
                        return -1;
                    }
                    return 0;
                });
        }
        // switch(sort){
        //   case "number":
        //   return value.sort((a,b )=> a-b)
        //   case 'abs' :
        //     return   
        // }
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });


/***/ }),

/***/ "b7R5":
/*!******************************************************!*\
  !*** ./src/app/pages/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/snack-bar/snack-bar.component */ "rqfx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/category/category.service */ "hmux");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/order/order.service */ "zCCq");
/* harmony import */ var src_app_shared_services_detali_detali_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/detali/detali.service */ "GxZS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_navigate_navigate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/navigate/navigate.component */ "8ysZ");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/filter/filter.component */ "/J2p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-lazy-load-images */ "V+U2");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/replacement.pipe */ "ezZm");
/* harmony import */ var _shared_pipes_name_string_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/pipes/name-string.pipe */ "6c9R");
/* harmony import */ var _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/pipes/fixed.pipe */ "ItGS");
/* harmony import */ var _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/pipes/kyrs.pipe */ "S8YT");





















const _c0 = function (a0, a1, a2) { return [a0, a1, a2]; };
function CategoryComponent_mat_card_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "nameString");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-card-actions", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_mat_card_32_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r3.localAdd(item_r1); return ctx_r3.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u041A\u0443\u043F\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-src", item_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](23, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, "/category/" + item_r1.category)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 13, item_r1.categoryProduct)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 15, item_r1.uuid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", item_r1.title, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 17, item_r1.memory), " ", item_r1.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 19, item_r1.price / item_r1.dollarPrice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 21, item_r1.price), " \u0433\u0440\u043D");
} }
class CategoryComponent {
    constructor(categoryServices, routerActivate, router, appleServices, order, detaliServices, dialog) {
        this.categoryServices = categoryServices;
        this.routerActivate = routerActivate;
        this.router = router;
        this.appleServices = appleServices;
        this.order = order;
        this.detaliServices = detaliServices;
        this.dialog = dialog;
        //  characteristics: Array<{[key: string]: string}>
        //  [{option1: 'asdasd'}, {options2: 'asdasd'}]
        // @Input() type: 'apple' | 'mac' | 'apple watch' | any;
        this.rangeValues = [0, 2000];
        this.pricaRange = {
            min: 0,
            max: 2000
        };
        this.isLoader = true;
        this.hiden = true;
        this.arrApple = [];
        this.localApple = [];
        this.img = '../../../assets/images/loader.png';
        this.filterArr = {
            memory: [],
            colors: [],
            nameProduct: [],
            display: [],
            processor: [],
            charging: [],
            year: []
        };
        this.allApples = [];
        this.obj = {};
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.get();
                // this.isLoader = true
                // this.onLoad()
                // this.onLoad()
                // window.location.reload()
            }
        });
    }
    ngOnChanges() {
        //  this.onLoad()
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__["SnackBarComponent"], {
            width: '250px',
            data: { title: 'Добавлено в Корзину' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
    forceReload() {
    }
    handleChange({ values: [r1, r2] }) {
        this.rangeValues = [r1, r2];
        this.getArrAppleRange(r1, r2);
    }
    onChangeRange(val, num) {
        const r1 = num ? this.rangeValues[0] : val;
        const r2 = num ? val : this.rangeValues[1];
        this.rangeValues = [r1, r2];
        this.getArrAppleRange(r1, r2);
    }
    getArrAppleRange(r1, r2) {
        // console.log( this.arrApple);
        const entries = Object.entries(this.obj).filter(([key, val]) => val.length);
        let allApplesCopy = [...this.allApples];
        entries.forEach(([key, val]) => {
            allApplesCopy = allApplesCopy.filter(el => val.includes(el[key]));
        });
        this.arrApple = allApplesCopy.filter(el => Math.floor((el.price / el.dollarPrice)) >= r1 && Math.floor((el.price / el.dollarPrice)) <= r2 + 1);
        // console.log(this.arrApple);
    }
    setMinMaxRange(max) {
        // console.log(max);
        this.pricaRange = {
            min: 0,
            max: +max + 0.5
        };
        this.rangeValues = [0, +max + 0.5];
    }
    // @HostListener('window:load', ['$event'])  loadImage(e) {
    // console.log(e);
    //  this.isLoader = true;
    // }
    // hideLoader() {
    //   this.isLoader = false;
    // }
    onLoad(value) {
        if (value) {
            this.isLoader = false;
            // window.location.reload(true)
        }
    }
    onClick() {
        window.alert('Host Element Clicked');
    }
    ngOnInit() {
        // this.get()
        // console.log('22222');
        this.order.$arrOrder.next(this.localApple);
        // console.log(window.location);
        // setTimeout(()=>{
        //   this.rangeValues = [10, 90];
        // }, 5000)
        // this.get()
    }
    urlParam(param, text) {
        return param ? param + text : '';
    }
    get() {
        const category = this.routerActivate.snapshot.paramMap.get('category');
        const apple = this.routerActivate.snapshot.paramMap.get('apple');
        // console.log(category);   
        if (category) {
            this.appleServices.getApple().then(apple => {
                this.arrApple = apple.filter(product => product.category.trim().replace(/ /g, '-') === category.trim().replace(/ /g, '-'));
                this.allApples = this.arrApple;
                this.category = category.replace(/-/g, ' ').toLowerCase();
                // console.log(this.allApples);
                this.getFields();
                // console.log(this.allApples);
                const getMax = this.allApples.reduce((acc, el) => Math.floor(el.price / el.dollarPrice) > acc ? Math.floor(el.price / el.dollarPrice) : acc, 0);
                this.setMinMaxRange(getMax);
                this.getArrAppleRange(this.pricaRange.min, this.pricaRange.max);
            });
        }
        if (apple) {
            this.appleServices.getApple().then(apl => {
                this.arrApple = apl.filter(el => el.categoryProduct.trim().replace(/ /g, '-').toLowerCase() === apple.trim().replace(/ /g, '-'));
                this.allApples = this.arrApple;
                this.category = apple.replace(/-/g, ' ').toLowerCase();
                this.getFields();
                // console.log(this.allApples);
                const getMax = this.allApples.reduce((acc, el) => Math.floor(el.price / el.dollarPrice) > acc ? Math.floor(el.price / el.dollarPrice) : acc, 0);
                // console.log(getMax);
                this.setMinMaxRange(getMax);
                this.getArrAppleRange(this.pricaRange.min, this.pricaRange.max);
            });
        }
    }
    getFields(...rest) {
        // console.log('======', this.arrApple);
        // rest.forEach((el: any) =>{
        //   const type = new Set();
        //   this.arrApple.forEach((elem: any) => {
        //     type.add(el[elem])
        //       if(elem.detalis){
        //         type.add(el.detalis.display)
        //      } 
        //   })
        //   this.filterArr[el] = [...type];
        // })
        const memory = new Set();
        const colors = new Set();
        const nameProduct = new Set();
        const display = new Set();
        const processor = new Set();
        const charging = new Set();
        const year = new Set();
        this.arrApple.forEach((el) => {
            //  console.log(el.color.trim(),'--');
            // console.log(el.color, '---');
            var _a, _b, _c, _d, _e, _f, _g;
            if (el.memory) {
                memory.add((_a = el.memory) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase());
            }
            if (el.color) {
                colors.add((_b = el.color) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase());
            }
            if (el.categoryProduct) {
                nameProduct.add((_c = el.categoryProduct) === null || _c === void 0 ? void 0 : _c.trim().toLowerCase());
            }
            if (el.detalis) {
                display.add((_d = el.detalis.display) === null || _d === void 0 ? void 0 : _d.trim().toLowerCase());
            }
            if (el.detalis) {
                processor.add((_e = el.detalis.processor) === null || _e === void 0 ? void 0 : _e.trim().toLowerCase());
            }
            if (el.detalis) {
                charging.add((_f = el.detalis.charging) === null || _f === void 0 ? void 0 : _f.trim().toLowerCase());
            }
            if (el.detalis) {
                year.add((_g = el.detalis.year) === null || _g === void 0 ? void 0 : _g.trim().toLowerCase());
            }
        });
        this.filterArr.memory = [...memory];
        this.filterArr.colors = [...colors];
        this.filterArr.nameProduct = [...nameProduct];
        this.filterArr.display = [...display];
        this.filterArr.processor = [...processor];
        this.filterArr.charging = [...charging];
        this.filterArr.year = [...year];
        // console.log( this.filterArr.colors);
    }
    selectedFieldsMemory(event, type) {
        this.obj[type] = event;
        // console.log(type);
        const entries = Object.entries(this.obj).filter(([key, val]) => val.length);
        let allApplesCopy = [...this.allApples];
        entries.forEach(([key, val]) => {
            // allApplesCopy = allApplesCopy.filter(el => val.includes(el[key] || (el.detalis && el.detalis[key]) ))
            allApplesCopy = allApplesCopy.filter(el => {
                // console.log(el);
                var _a, _b;
                return val.includes(((_a = el[key]) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) || (el.detalis && ((_b = el.detalis[key]) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase())));
            });
        });
        const [r1, r2] = this.rangeValues;
        this.arrApple = allApplesCopy.filter(el => (Math.floor(el.price / el.dollarPrice)) > r1 && (Math.floor(el.price / el.dollarPrice)) < r2);
    }
    // selectedFieldsColors(event){
    //   // this.filter.color = event
    //       // this.filteredByColor = Object.entries(event).filter(([key, value]) => value).map(([key, value]) =>key);
    //   this.obj.color = Object.entries(event).filter(el => el[1]).map(el =>el[0]);
    //   const color = Object.values(event).filter(Boolean)
    //   // console.log(color,'color');
    //   this.arrApple = this.allApples.filter(el =>  event[el.color]  || !color.length).filter(el =>  this.obj.memory.includes(el.memory) || !this.obj.memory.length )
    // }
    // selectedFieldsnameProduct( event ){
    //   this.obj.categoryProduct = Object.entries(event).filter(el => el[1]).map(el=> el[0])
    //   const name = Object.values(event).filter(Boolean)
    //   this.arrApple = this.allApples.filter(el => event[el.categoryProduct] || !name.length).filter(el => {
    //      return this.obj.color.includes(el.color )  || !this.obj.color.length 
    //   })
    // }
    // selectedFieldsDisplay(event){
    //   // this.filter.color = event
    //       // this.filteredByColor = Object.entries(event).filter(([key, value]) => value).map(([key, value]) =>key);
    //       this.filteredByColor = Object.entries(event).filter(el => el[1]).map(el =>el[0]);
    //       console.log(this.filteredByColor);
    //     const color = Object.values(event).filter(Boolean)
    //   this.arrApple = this.allApples.filter(el =>  event[el.color]  || !color.length).filter(el =>  this.filteredByMemory.includes(el.memory) || !this.filteredByMemory.length)
    // }
    localAdd(apple) {
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.localApple = JSON.parse(localStorage.getItem('basket'));
            if (this.localApple.some(localApple => localApple.id === apple.id)) {
                const index = this.localApple.findIndex(localApple => localApple.id === apple.id);
                this.localApple[index].count += apple.count;
            }
            else {
                this.localApple.push(apple);
            }
            localStorage.setItem('basket', JSON.stringify(this.localApple));
        }
        else {
            this.localApple.push(apple);
            localStorage.setItem('basket', JSON.stringify(this.localApple));
        }
        this.order.basket.next(apple);
        // this.order.$arrOrder.next(this.localApple)
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_4__["AppleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_detali_detali_service__WEBPACK_IMPORTED_MODULE_6__["DetaliService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], hostBindings: function CategoryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onload", function CategoryComponent_onload_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { isLoader: "isLoader" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 33, vars: 27, consts: [[1, "admin", "container-fluid", 2, "margin-top", "20px", "display", "flex", "justify-content", "center"], [1, "row"], [1, "col-3"], ["itemprop", "breadcrumb", 1, "breadcrumbs"], ["href", "/"], [1, "inp"], [1, "filters", 3, "placeholder", "placeholderChange", "input"], [1, "param", 3, "ngModel", "range", "min", "max", "ngModelChange", "onSlideEnd"], [3, "filterArr", "title", "selectedFields"], [1, "col-9"], [1, "tab-content"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], ["lazy-load-images", "", 1, "image-list"], ["src", "../../../assets/images/loader.png", "mat-card-image", "", "alt", "", 1, "width"], ["routerLinkActive", "active", 3, "routerLink"], [1, "text"], [1, "text-wigle"], [1, "center"], ["color", "primary", "mat-raised-button", "", 3, "click"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navigate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "AppleRoom.ua");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0426\u0456\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("placeholderChange", function CategoryComponent_Template_input_placeholderChange_18_listener($event) { return (ctx.rangeValues[0] = $event); })("input", function CategoryComponent_Template_input_input_18_listener($event) { return ctx.onChangeRange($event.target.value, 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "$ - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("placeholderChange", function CategoryComponent_Template_input_placeholderChange_20_listener($event) { return (ctx.rangeValues[1] = $event); })("input", function CategoryComponent_Template_input_input_20_listener($event) { return ctx.onChangeRange($event.target.value, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoryComponent_Template_p_slider_ngModelChange_22_listener($event) { return ctx.rangeValues = $event; })("onSlideEnd", function CategoryComponent_Template_p_slider_onSlideEnd_22_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "app-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedFields", function CategoryComponent_Template_app_filter_selectedFields_23_listener($event) { return ctx.selectedFieldsMemory($event, "memory"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "app-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedFields", function CategoryComponent_Template_app_filter_selectedFields_24_listener($event) { return ctx.selectedFieldsMemory($event, "color"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "app-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedFields", function CategoryComponent_Template_app_filter_selectedFields_25_listener($event) { return ctx.selectedFieldsMemory($event, "categoryProduct"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "app-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedFields", function CategoryComponent_Template_app_filter_selectedFields_26_listener($event) { return ctx.selectedFieldsMemory($event, "display"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "app-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedFields", function CategoryComponent_Template_app_filter_selectedFields_27_listener($event) { return ctx.selectedFieldsMemory($event, "processor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "app-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedFields", function CategoryComponent_Template_app_filter_selectedFields_28_listener($event) { return ctx.selectedFieldsMemory($event, "charging"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "app-filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedFields", function CategoryComponent_Template_app_filter_selectedFields_29_listener($event) { return ctx.selectedFieldsMemory($event, "year"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CategoryComponent_mat_card_32_Template, 22, 27, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 23, ctx.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 25, ctx.category), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.rangeValues[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.rangeValues[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rangeValues)("range", true)("min", ctx.pricaRange.min)("max", ctx.pricaRange.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filterArr", ctx.filterArr.memory)("title", "\u041E\u0431\u0454\u043C \u043F\u0430\u043C\u044F\u0442\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filterArr", ctx.filterArr.colors)("title", "\u041A\u043E\u043B\u0456\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filterArr", ctx.filterArr.nameProduct)("title", "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filterArr", ctx.filterArr.display)("title", "\u0414\u0456\u0430\u0433\u043E\u043D\u0430\u043B\u044C \u0435\u043A\u0440\u0430\u043D\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filterArr", ctx.filterArr.processor)("title", "\u041F\u0440\u043E\u0446\u0435\u0441\u043E\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filterArr", ctx.filterArr.charging)("title", "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 \u0431\u0435\u0437\u0434\u0440\u043E\u0442\u043E\u0432\u0443 \u0437\u0430\u0440\u044F\u0434\u043A\u0443 \u043A\u0435\u0439\u0441\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filterArr", ctx.filterArr.year)("title", "\u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrApple);
    } }, directives: [_components_navigate_navigate_component__WEBPACK_IMPORTED_MODULE_8__["NavigateComponent"], primeng_slider__WEBPACK_IMPORTED_MODULE_9__["Slider"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImagesDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LowerCasePipe"], _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_16__["ReplacementPipe"], _shared_pipes_name_string_pipe__WEBPACK_IMPORTED_MODULE_17__["NameStringPipe"], _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_18__["FixedPipe"], _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_19__["KyrsPipe"]], styles: [".p-slider.p-slider-horizontal[_ngcontent-%COMP%]   .p-slider-handle[_ngcontent-%COMP%] {\n  margin-top: -0.5715rem;\n  margin-left: -0.5715rem;\n  height: 20px;\n  width: 20px;\n  background: #fff;\n  border: 1px solid #ebebeb;\n  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.23);\n}\n\n.p-slider[_ngcontent-%COMP%]   .p-slider-range[_ngcontent-%COMP%] {\n  background: #ef456a;\n}\n\n.p-slider[_ngcontent-%COMP%]:not(.p-disabled)   .p-slider-handle[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  border-color: #ffffff;\n}\n\n.p-slider.p-slider-horizontal[_ngcontent-%COMP%] {\n  width: 65%;\n  height: 0.286rem;\n  margin-bottom: 2rem;\n}\n\n@font-face {\n  font-family: \"apple\";\n  src: url(\"/assets/font/9651.ttf\");\n}\n\nmeta[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\n.block[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f8f8f8;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-apple[_ngcontent-%COMP%] {\n  margin-right: 2%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.font-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n  text-align: center;\n  margin-top: 1rem;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  transition: all 0.6s;\n}\n\n.width[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n}\n\n.text-wigle[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 1.5px;\n  margin-right: 1rem;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.center[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.1s;\n}\n\nmat-card[_ngcontent-%COMP%]:hover   .center[_ngcontent-%COMP%] {\n  opacity: 100;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.col-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 20%;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-style: normal;\n  font-weight: 800;\n  line-height: normal;\n  font-size: 24px;\n  letter-spacing: 1px;\n  color: #000;\n  margin-bottom: 10px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 1px;\n  color: #3797e5;\n  cursor: pointer;\n}\n\nmat-card-title[_ngcontent-%COMP%]:hover {\n  color: #e54b37;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\nmat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 1px -1px;\n}\n\n.filters[_ngcontent-%COMP%]   .filter-param[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.breadcrumbs[_ngcontent-%COMP%] {\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  font-size: 16px;\n  letter-spacing: 1px;\n  color: #c9c9c9;\n  margin: 20px 0 15px;\n}\n\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  font-size: 14px;\n  letter-spacing: 0.875px;\n  color: #ef456a;\n}\n\n.breadcrumbs[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-weight: 100;\n}\n\n.breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 700;\n}\n\n.param[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-bottom: 1rem;\n}\n\n.filters[_ngcontent-%COMP%] {\n  width: 50px;\n  border: none;\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  font-size: 18px;\n  text-align: center;\n  letter-spacing: 1.125px;\n  min-width: 80px;\n  color: #000;\n  outline: none !important;\n  margin-bottom: 1rem;\n}\n\n@media all and (max-width: 1330px) {\n  .col-9[_ngcontent-%COMP%] {\n    flex: 0 0 65%;\n    max-width: 87%;\n  }\n\n  .p-slider.p-slider-horizontal[_ngcontent-%COMP%] {\n    width: 87%;\n  }\n\n  .col-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 30%;\n  }\n}\n\n@media all and (max-width: 1050px) {\n  .col-3[_ngcontent-%COMP%] {\n    flex: 0 0 33%;\n    max-width: 33%;\n  }\n\n  .example-card[_ngcontent-%COMP%] {\n    width: 250px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin-right: 0rem;\n    margin-bottom: 1rem;\n  }\n\n  .col-9[_ngcontent-%COMP%] {\n    flex: 0 0 71%;\n    max-width: 67%;\n  }\n}\n\n@media all and (max-width: 827px) {\n  .p-slider[_ngcontent-%COMP%] {\n    width: 94% !important;\n    height: 0.286rem;\n    margin-bottom: 2rem;\n  }\n\n  .col-9[_ngcontent-%COMP%] {\n    flex: 0 0 72%;\n    max-width: 59%;\n  }\n\n  .tab-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n@media all and (max-width: 720px) {\n  .col-3[_ngcontent-%COMP%] {\n    flex: 0 0 39%;\n    max-width: 44%;\n  }\n\n  .col-xl-auto[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n\n  .admin[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: 0px;\n    margin-left: 0px;\n  }\n}\n\n@media all and (max-width: 570px) {\n  .col-3[_ngcontent-%COMP%] {\n    flex: 0 0 90%;\n    max-width: 91%;\n  }\n\n  .inp[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: 0px;\n    margin-left: 0px;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcZ2xvYmFsLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FBbkJBO0VBQ0Usb0JBQUE7RUFDQSxpQ0FBQTtBQXNCRjs7QUFaQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBY0Y7O0FBWEE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VDdEJBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEcUNKOztBQVpBO0VBQ0UsZ0JBQUE7RUM1QkUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUQ0QkYsc0JBQUE7QUFpQkY7O0FBZEE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDREQUFBO0FBaUJGOztBQWRBO0VBQ0UsY0FBQTtBQWlCRjs7QUFkQTtFQUNFLFVBQUE7QUFpQkY7O0FBZEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFpQkY7O0FBYkE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBZ0JGOztBQWRBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWlCRjs7QUFkQTtFQUNFLFlBQUE7QUFpQkY7O0FBYkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxvQkFBQTtBQWlCRjs7QUFkQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBaUJGOztBQWRBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWlCRjs7QUFkQTtFQUNFLGtCQUFBO0FBaUJGOztBQWZBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBa0JGOztBQWZBO0VBQ0UsWUFBQTtBQWtCRjs7QUFmQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBa0JGOztBQWZBO0VBQ0UsWUFBQTtBQWtCRjs7QUFmQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBa0JGOztBQWhCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQW1CRjs7QUFoQkE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUFtQkY7O0FBakJBO0VBQ0Usd0lBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFvQkY7O0FBakJBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBb0JKOztBQWpCQTtFQUNFLGNBQUE7QUFvQkY7O0FBakJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBb0JGOztBQWZBO0VBQ0UsNEJBQUE7QUFrQkY7O0FBWkE7RUFDRSxtQkFBQTtBQWVGOztBQVpBO0VBQ0UsWUFBQTtBQWVGOztBQVhBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFjRjs7QUFYQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWNGOztBQVhBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBY0Y7O0FBWEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFjRjs7QUFYQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWNGOztBQVhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBY0Y7O0FBWEE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBY0Y7O0VBWkE7SUFDQSxVQUFBO0VBZUE7O0VBWEE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQWNGO0FBQ0Y7O0FBWEE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBYUY7O0VBWEE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFjRjs7RUFaQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBZUY7QUFDRjs7QUFYQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBYUY7O0VBWEE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQWNBOztFQVpBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7RUFlRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQWNGOztFQVpBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQWVGOztFQWJBO0lBQ0UsV0FBQTtJQUNBLDZCQUFBO0lBQ0EsNEJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBZ0JGOztFQWRGO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQyxpQkFBQTtJQUNBLGdCQUFBO0VBaUJEO0FBQ0Y7O0FBZEE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBZ0JGOztFQWRBO0lBQ0EsWUFBQTtFQWlCQTs7RUFmQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBa0JGO0FBQ0YiLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucC1zbGlkZXIucC1zbGlkZXItaG9yaXpvbnRhbCAucC1zbGlkZXItaGFuZGxlIHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjU3MTVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNTcxNXJlbTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA5cHggcmdiKDAgMCAwIC8gMjMlKTtcclxufVxyXG5cclxuLnAtc2xpZGVyIC5wLXNsaWRlci1yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWY0NTZhO1xyXG59XHJcblxyXG4ucC1zbGlkZXI6bm90KC5wLWRpc2FibGVkKSAucC1zbGlkZXItaGFuZGxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7IFxyXG4gIH1cclxuXHJcbi5wLXNsaWRlci5wLXNsaWRlci1ob3Jpem9udGFsIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBoZWlnaHQ6IDAuMjg2cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufSIsIi5wLXNsaWRlci5wLXNsaWRlci1ob3Jpem9udGFsIC5wLXNsaWRlci1oYW5kbGUge1xuICBtYXJnaW4tdG9wOiAtMC41NzE1cmVtO1xuICBtYXJnaW4tbGVmdDogLTAuNTcxNXJlbTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm94LXNoYWRvdzogMCAycHggOXB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5wLXNsaWRlciAucC1zbGlkZXItcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZWY0NTZhO1xufVxuXG4ucC1zbGlkZXI6bm90KC5wLWRpc2FibGVkKSAucC1zbGlkZXItaGFuZGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucC1zbGlkZXIucC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMC4yODZyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJhcHBsZVwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udC85NjUxLnR0ZlwiKTtcbn1cbm1ldGEge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBwYWRkaW5nOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtYXBwbGUge1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvbnQtdGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogMy41cmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICBoZWlnaHQ6IDNyZW07XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xufVxuXG4ud2lkdGgge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG59XG5cbi50ZXh0LXdpZ2xlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2VudGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG5cbm1hdC1jYXJkOmhvdmVyIC5jZW50ZXIge1xuICBvcGFjaXR5OiAxMDA7XG59XG5cbi50YWItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxubWF0LXNsaWRlciB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmNvbC0zIHtcbiAgZmxleDogMCAwIDI1JTtcbiAgbWF4LXdpZHRoOiAyMCU7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5oNSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogXCJhcHBsZVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogIzM3OTdlNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtY2FyZC10aXRsZTpob3ZlciB7XG4gIGNvbG9yOiAjZTU0YjM3O1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAtMXB4O1xufVxuXG4uZmlsdGVycyAuZmlsdGVyLXBhcmFtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxubWF0LXNsaWRlciB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmJyZWFkY3J1bWJzIHtcbiAgZm9udC1mYW1pbHk6IFwiYXBwbGVcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjYzljOWM5O1xuICBtYXJnaW46IDIwcHggMCAxNXB4O1xufVxuXG4uYnJlYWRjcnVtYnMgYSB7XG4gIGZvbnQtZmFtaWx5OiBcImFwcGxlXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC44NzVweDtcbiAgY29sb3I6ICNlZjQ1NmE7XG59XG5cbi5icmVhZGNydW1icyBpIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5icmVhZGNydW1icyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wYXJhbSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5maWx0ZXJzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiYXBwbGVcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMTI1cHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgY29sb3I6ICMwMDA7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTMzMHB4KSB7XG4gIC5jb2wtOSB7XG4gICAgZmxleDogMCAwIDY1JTtcbiAgICBtYXgtd2lkdGg6IDg3JTtcbiAgfVxuXG4gIC5wLXNsaWRlci5wLXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogODclO1xuICB9XG5cbiAgLmNvbC0zIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMzAlO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgLmNvbC0zIHtcbiAgICBmbGV4OiAwIDAgMzMlO1xuICAgIG1heC13aWR0aDogMzMlO1xuICB9XG5cbiAgLmV4YW1wbGUtY2FyZCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1yaWdodDogMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbC05IHtcbiAgICBmbGV4OiAwIDAgNzElO1xuICAgIG1heC13aWR0aDogNjclO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MjdweCkge1xuICAucC1zbGlkZXIge1xuICAgIHdpZHRoOiA5NCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDAuMjg2cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAuY29sLTkge1xuICAgIGZsZXg6IDAgMCA3MiU7XG4gICAgbWF4LXdpZHRoOiA1OSU7XG4gIH1cblxuICAudGFiLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY29sLTMge1xuICAgIGZsZXg6IDAgMCAzOSU7XG4gICAgbWF4LXdpZHRoOiA0NCU7XG4gIH1cblxuICAuY29sLXhsLWF1dG8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cblxuICAuYWRtaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgLmNvbC0zIHtcbiAgICBmbGV4OiAwIDAgOTAlO1xuICAgIG1heC13aWR0aDogOTElO1xuICB9XG5cbiAgLmlucCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSIsIlxyXG5AbWl4aW4gY2VudGVyKCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "b9fz":
/*!*******************************************************************!*\
  !*** ./src/app/components/modal-basket/modal-basket.component.ts ***!
  \*******************************************************************/
/*! exports provided: ModalBasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBasketComponent", function() { return ModalBasketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order/order.service */ "zCCq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/replacement.pipe */ "ezZm");
/* harmony import */ var _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/kyrs.pipe */ "S8YT");
/* harmony import */ var _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/fixed.pipe */ "ItGS");








const _c0 = function (a0, a1, a2) { return [a0, a1, a2]; };
function ModalBasketComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBasketComponent_div_9_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.hideOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBasketComponent_div_9_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.hideOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBasketComponent_div_9_Template_div_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deletApple(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](23, _c0, "/category/" + item_r3.category, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, item_r3.categoryProduct), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, item_r3.uuid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](27, _c0, "/category/" + item_r3.category, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 13, item_r3.categoryProduct), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 15, item_r3.uuid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r3.categoryProduct, " ", item_r3.memory, " ", item_r3.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, item_r3.price / item_r3.dollarPrice)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 21, item_r3.price), " \u0433\u0440\u043D");
} }
function ModalBasketComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u0438 \u043F\u043E\u043A\u0438 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/basket/"]; };
function ModalBasketComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u0441\u044C\u043E\u0433\u043E :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBasketComponent_div_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hideOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx_r2.totalPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
class ModalBasketComponent {
    constructor(orderServices) {
        this.orderServices = orderServices;
        this.orders = [];
    }
    ngOnInit() {
        this.getOrder();
    }
    getOrder() {
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.orders = JSON.parse(localStorage.getItem('basket'));
        }
    }
    hideOverlay() {
        this.overlay = false;
        this.show = false;
    }
    modal() {
        this.show = true;
        this.overlay = true;
        this.getOrder();
        this.total();
    }
    deletApple(item) {
        const index = this.orders.findIndex(prod => prod.id === item.id);
        this.orders.splice(index, 1);
        this.total();
        this.updateLocalProducts();
        this.orderServices.basket.next(this.orders);
    }
    updateLocalProducts() {
        localStorage.setItem('basket', JSON.stringify(this.orders));
        this.total();
    }
    total() {
        this.totalPrice = this.orders.reduce((acum, elem) => {
            const total = acum + (elem.price / elem.dollarPrice * elem.count);
            return +total.toFixed();
        }, 0);
    }
}
ModalBasketComponent.ɵfac = function ModalBasketComponent_Factory(t) { return new (t || ModalBasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
ModalBasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalBasketComponent, selectors: [["app-modal-basket"]], decls: 14, vars: 7, consts: [[1, "basket"], [1, "basket-menu"], [1, "basket-top"], [1, "content"], [1, "row"], [1, "basket-top__right"], [1, "basket-top__left", 3, "click"], ["class", "cart-modal__item", 4, "ngFor", "ngForOf"], ["class", "basket-botom", 4, "ngIf"], [1, "info"], [1, "modal-fade", "modal-trigger", "modal-close", "search-fade", "state-opened", 3, "click"], [1, "cart-modal__item"], [1, "cart-modal__item-img"], ["routerLinkActive", "active1", 3, "routerLink", "click"], ["alt", "Apple iPhone 12 64GB White", 3, "src"], [1, "cart-modal__item-meta"], [3, "routerLink", "click"], [1, "cart-modal__item-price"], [1, "price-uah"], ["data-product-id", "184784", 1, "cart-modal__item-remove"], [1, "basket-top__left", "cross", 3, "click"], [1, "basket-botom"], [1, "cart-modal__empty-message"], ["mat-raised-button", "", "color", "primary", 1, "width", 3, "routerLink", "click"]], template: function ModalBasketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBasketComponent_Template_div_click_8_listener() { return ctx.hideOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalBasketComponent_div_9_Template, 24, 31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalBasketComponent_div_10_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalBasketComponent_div_12_Template, 8, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBasketComponent_Template_div_click_13_listener() { return ctx.hideOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPrice === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPrice > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.overlay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplacementPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_6__["KyrsPipe"], _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_7__["FixedPipe"]], styles: [".basket[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.basket-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 30%;\n  height: 100%;\n  padding: 15px;\n  background-color: #ffffff;\n  transform: translateX(105%);\n  transition: all 0.3s linear;\n  display: block;\n  z-index: 18;\n  box-shadow: -5px 0 13px 0 rgba(0, 0, 0, 0.2);\n}\n\n.basket-menu.active[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 18;\n}\n\n.info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  width: 92%;\n}\n\n.modal-fade.active[_ngcontent-%COMP%] {\n  background-color: rgba(153, 153, 153, 0.6);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 15;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.basket-top__right[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background-image: url(\"/assets/images/modal-basket/shopping-bag--v1.png\");\n  background-size: 100%, 100%;\n  background-repeat: no-repeat;\n}\n\n.basket-top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 13%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  font-size: 1.3rem;\n}\n\n.basket-top__left[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-image: url(\"/assets/images/modal-basket/close.png\");\n  background-size: 100%, 100%;\n  background-repeat: no-repeat;\n  align-items: center;\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 3rem;\n}\n\n.cart-modal__item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px;\n  position: relative;\n  padding-right: 30px;\n  width: 100%;\n}\n\n.cart-modal__item-img[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 15px;\n  width: 100px;\n  text-align: center;\n}\n\n.cart-modal__item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n.cart-modal__item-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #999;\n  font-size: 12px;\n  margin-right: 5px;\n}\n\n.cart-modal__item-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-226%);\n  right: 20px;\n  width: 20px;\n  text-align: center;\n  font-size: 12px;\n  opacity: 0.7;\n  cursor: pointer;\n}\n\n.cart-modal__item-price[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: 700;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.cross[_ngcontent-%COMP%] {\n  width: 12px;\n}\n\n.cart-modal__item-price[_ngcontent-%COMP%]   span.price-uah[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  color: green;\n  margin-left: 5px;\n}\n\n.cart-modal__empty-message[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n  color: #666;\n}\n\n@media all and (max-width: 1200px) {\n  .basket-menu[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-width: 82%;\n  }\n\n  .cart-modal__item-remove[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 53%;\n    transform: translateY(-226%);\n    right: -12px;\n    width: 20px;\n    text-align: center;\n    font-size: 12px;\n    opacity: 0.7;\n    cursor: pointer;\n  }\n}\n\n@media all and (max-width: 768px) {\n  .basket-menu[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-width: 82%;\n  }\n\n  .cart-modal__item-remove[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 53%;\n    transform: translateY(-226%);\n    right: -12px;\n    width: 20px;\n    text-align: center;\n    font-size: 12px;\n    opacity: 0.7;\n    cursor: pointer;\n  }\n}\n\n@media all and (max-width: 500px) {\n  .basket-menu[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media all and (max-width: 355px) {\n  .basket-menu[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-width: 82%;\n  }\n\n  .cart-modal__item-remove[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 53%;\n    transform: translateY(-226%);\n    right: -12px;\n    width: 20px;\n    text-align: center;\n    font-size: 12px;\n    opacity: 0.7;\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb2RhbC1iYXNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0FBRUo7O0FBQ0U7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUlFO0VBQ0UsMENBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0FBREo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBRUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFDRTtJQUVFLFVBQUE7RUFBRjs7RUFHRjtJQUNFLGNBQUE7RUFBQTs7RUFHRjtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQUFBO0FBQ0Y7O0FBU0E7RUFDRTtJQUVFLFVBQUE7RUFSRjs7RUFXRjtJQUNFLGNBQUE7RUFSQTs7RUFXRjtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQVJBO0FBQ0Y7O0FBYUE7RUFDRTtJQUNFLFdBQUE7RUFYRjtBQUNGOztBQWdCQTtFQUNFO0lBRUUsV0FBQTtFQWZGOztFQWtCRjtJQUNFLGNBQUE7RUFmQTs7RUFrQkY7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFmQTtBQUNGIiwiZmlsZSI6Im1vZGFsLWJhc2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNrZXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgLmJhc2tldC1tZW51e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogIDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwNSUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiAxODtcclxuICAgIGJveC1zaGFkb3c6IC01cHggMCAxM3B4IDAgcmdiKDAgMCAwIC8gMjAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmJhc2tldC1tZW51LmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHotaW5kZXg6IDE4O1xyXG4gICAgXHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLmluZm97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDJyZW07XHJcbiAgICB3aWR0aDogOTIlO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWZhZGUuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSw2MCUsLjYpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIH1cclxuXHJcbiAgLmJhc2tldC10b3BfX3JpZ2h0e1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tb2RhbC1iYXNrZXQvc2hvcHBpbmctYmFnLS12MS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUsIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuXHJcbiAgLmJhc2tldC10b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEzJTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG5cclxuICAuYmFza2V0LXRvcF9fbGVmdCB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21vZGFsLWJhc2tldC9jbG9zZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUsIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiBcclxuICBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAud2lkdGh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0LW1vZGFsX19pdGVtIHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJ0LW1vZGFsX19pdGVtLWltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FydC1tb2RhbF9faXRlbS1pbWcgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcblxyXG4uY2FydC1tb2RhbF9faXRlbS1wcmljZSBzcGFuIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmNhcnQtbW9kYWxfX2l0ZW0tcmVtb3ZlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMjYlKTtcclxuICByaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG9wYWNpdHk6IC43O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcnQtbW9kYWxfX2l0ZW0tcHJpY2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNyb3NzIHtcclxuICB3aWR0aDogMTJweDtcclxufVxyXG5cclxuLmNhcnQtbW9kYWxfX2l0ZW0tcHJpY2Ugc3Bhbi5wcmljZS11YWgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jYXJ0LW1vZGFsX19lbXB0eS1tZXNzYWdlIHtcclxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmJhc2tldC1tZW51IHtcclxuICAgXHJcbiAgICB3aWR0aDogNTAlO1xyXG4gXHJcbn1cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDgyJTtcclxufVxyXG5cclxuLmNhcnQtbW9kYWxfX2l0ZW0tcmVtb3ZlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MyU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMjYlKTtcclxuICByaWdodDogLTEycHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJhc2tldC1tZW51IHtcclxuICAgXHJcbiAgICB3aWR0aDogNzAlO1xyXG4gXHJcbn1cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDgyJTtcclxufVxyXG5cclxuLmNhcnQtbW9kYWxfX2l0ZW0tcmVtb3ZlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MyU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMjYlKTtcclxuICByaWdodDogLTEycHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuYmFza2V0LW1lbnUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAzNTVweCkge1xyXG4gIC5iYXNrZXQtbWVudSB7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiBcclxufVxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogODIlO1xyXG59XHJcblxyXG4uY2FydC1tb2RhbF9faXRlbS1yZW1vdmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUzJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIyNiUpO1xyXG4gIHJpZ2h0OiAtMTJweDtcclxuICB3aWR0aDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "bmFq":
/*!************************************************!*\
  !*** ./src/app/pages/apple/apple.component.ts ***!
  \************************************************/
/*! exports provided: AppleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppleComponent", function() { return AppleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");


class AppleComponent {
    constructor(appleServices) {
        this.appleServices = appleServices;
    }
    ngOnInit() {
    }
}
AppleComponent.ɵfac = function AppleComponent_Factory(t) { return new (t || AppleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_1__["AppleService"])); };
AppleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppleComponent, selectors: [["app-apple"]], decls: 0, vars: 0, template: function AppleComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "dWnJ":
/*!***********************************************!*\
  !*** ./src/app/shared/models/watch.models.ts ***!
  \***********************************************/
/*! exports provided: Watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
class Watch {
    constructor(id, display, strap, housing, size, color, category, uuid) {
        this.id = id;
        this.display = display;
        this.strap = strap;
        this.housing = housing;
        this.size = size;
        this.color = color;
        this.category = category;
        this.uuid = uuid;
    }
}


/***/ }),

/***/ "eU2y":
/*!****************************************************!*\
  !*** ./src/app/shared/services/gallery.service.ts ***!
  \****************************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class GalleryService {
    constructor(firestory) {
        this.firestory = firestory;
    }
    getGallery() {
        return this.firestory.collection('gallery').ref.orderBy('id', 'asc').get().then(res => res.docs.map(el => el.data()));
    }
    addGallery(gallery, num) {
        return this.firestory.collection('gallery').doc(num).set(gallery);
    }
    deleteGallery(id) {
        return this.firestory.collection('gallery').doc(id).delete();
    }
    updateGallery(id, gallery) {
        return this.firestory.collection('gallery').doc(id).set(gallery);
    }
}
GalleryService.ɵfac = function GalleryService_Factory(t) { return new (t || GalleryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
GalleryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GalleryService, factory: GalleryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ezZm":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/replacement.pipe.ts ***!
  \**************************************************/
/*! exports provided: ReplacementPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacementPipe", function() { return ReplacementPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ReplacementPipe {
    transform(value) {
        // console.log(value);
        return value.trim().replace(/ /g, '-');
    }
}
ReplacementPipe.ɵfac = function ReplacementPipe_Factory(t) { return new (t || ReplacementPipe)(); };
ReplacementPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replacement", type: ReplacementPipe, pure: true });


/***/ }),

/***/ "fUaZ":
/*!**************************************************!*\
  !*** ./src/app/shared/models/comments.models.ts ***!
  \**************************************************/
/*! exports provided: Comments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
class Comments {
    constructor(id, uuid, name, description, date) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.date = date;
    }
}


/***/ }),

/***/ "hmux":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/category/category.service.ts ***!
  \**************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class CategoryService {
    constructor(afAtuth, firestory, router) {
        this.afAtuth = afAtuth;
        this.firestory = firestory;
        this.router = router;
        this.arrCategory$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getCategory() {
        return this.firestory.collection('category').ref.orderBy('id', 'asc').get().then(res => {
            //  return res.docs.map(el=> el.data())
            const allCategories = res.docs.map(e => {
                const data = e.data();
                return Object.assign(Object.assign({}, data), { doc: e.id });
            });
            this.arrCategory$.next(allCategories);
            // console.log(allCategories);
            return allCategories;
        });
        //  return this.firestory.collection('category').ref.where("id", ">=", 1).orderBy("id", "asc").get().then(res=> res.docs.map(el=>el.data()  el.id ))
    }
    arrCategory() {
        return this.arrCategory$.asObservable();
    }
    addCategory(category, num) {
        return this.firestory.collection('category').doc(num).set(category);
        // return this.firestory.collection('table').add(user).then(res=>{
        // return  res.get().then(x => x.data())
        // })
        //  return this.firestory.collection('table').add(user)
    }
    deleteCategory(id) {
        return this.firestory.collection('category').doc(id).delete();
    }
    updateCategory(id, category) {
        return this.firestory.collection('category').doc(id).set(category);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jAKP":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/models-apple/models-apple.component.ts ***!
  \*******************************************************************/
/*! exports provided: ModelsAppleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsAppleComponent", function() { return ModelsAppleComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/snack-bar/snack-bar.component */ "rqfx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order/order.service */ "zCCq");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lazy-load-images */ "V+U2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes/replacement.pipe */ "ezZm");
/* harmony import */ var _shared_pipes_name_string_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/name-string.pipe */ "6c9R");
/* harmony import */ var _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pipes/fixed.pipe */ "ItGS");
/* harmony import */ var _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipes/kyrs.pipe */ "S8YT");














const _c0 = function (a0, a1, a2) { return [a0, a1, a2]; };
function ModelsAppleComponent_mat_card_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "replacement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "nameString");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-card-actions", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModelsAppleComponent_mat_card_13_Template_button_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); $event.stopPropagation(); ctx_r3.localAdd(item_r1); return ctx_r3.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u041A\u0443\u043F\u0438\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-src", item_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](19, _c0, "/category/" + item_r1.category, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, item_r1.categoryProduct)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, item_r1.uuid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", item_r1.title, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, item_r1.memory), " ", item_r1.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 15, item_r1.price / item_r1.dollarPrice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 17, item_r1.price), " \u0433\u0440\u043D");
} }
class ModelsAppleComponent {
    constructor(order, dialog) {
        this.order = order;
        this.dialog = dialog;
        this.localApple = [];
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__["SnackBarComponent"], {
            width: '250px',
            data: { title: 'Добавлено в корзину' }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    localAdd(apple) {
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.localApple = JSON.parse(localStorage.getItem('basket'));
            if (this.localApple.some(localApple => localApple.id === apple.id)) {
                const index = this.localApple.findIndex(localApple => localApple.id === apple.id);
                this.localApple[index].count += apple.count;
            }
            else {
                this.localApple.push(apple);
            }
            localStorage.setItem('basket', JSON.stringify(this.localApple));
        }
        else {
            this.localApple.push(apple);
            localStorage.setItem('basket', JSON.stringify(this.localApple));
        }
        this.order.basket.next(apple);
    }
}
ModelsAppleComponent.ɵfac = function ModelsAppleComponent_Factory(t) { return new (t || ModelsAppleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ModelsAppleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModelsAppleComponent, selectors: [["app-models-apple"]], inputs: { arr: "arr", name: "name" }, decls: 14, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "home__list-title", "text-center"], [1, "nav", "nav-pills", "b-carousel-type"], [1, "nav-item"], ["data-toggle", "pill", "href", "#pills-newcomers-new", 1, "nav-link", "active"], [1, "table"], ["id", "pills-newcomers-new", 1, "tab-pane", "active"], [1, "col-9"], [1, "twrap"], ["class", "example-card", 4, "ngFor", "ngForOf"], [1, "example-card"], ["lazy-load-images", "", 1, "image-list"], ["data-aos", "fade-up", "data-aos-duration", "300", "data-aos-easing", " easy-in-out ", "data-aos-once", " false ", "src", "../../../assets/images/loader.png", "mat-card-image", "", "alt", "Photo of a Shiba Inu", 1, "width"], ["routerLinkActive", "active", 3, "routerLink"], [1, "text"], [1, "text-wigle"], [1, "center"], ["color", "primary", "mat-raised-button", "", 3, "click"]], template: function ModelsAppleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041D\u043E\u0432\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ModelsAppleComponent_mat_card_13_Template, 20, 23, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImagesDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LowerCasePipe"], _shared_pipes_replacement_pipe__WEBPACK_IMPORTED_MODULE_10__["ReplacementPipe"], _shared_pipes_name_string_pipe__WEBPACK_IMPORTED_MODULE_11__["NameStringPipe"], _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_12__["FixedPipe"], _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_13__["KyrsPipe"]], styles: ["[data-aos][data-aos][data-aos-duration=\"50\"][_ngcontent-%COMP%], body[data-aos-duration=\"50\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"][_ngcontent-%COMP%], body[data-aos-delay=\"50\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"50\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"][_ngcontent-%COMP%], body[data-aos-duration=\"100\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"][_ngcontent-%COMP%], body[data-aos-delay=\"100\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"100\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"][_ngcontent-%COMP%], body[data-aos-duration=\"150\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"][_ngcontent-%COMP%], body[data-aos-delay=\"150\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"150\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"][_ngcontent-%COMP%], body[data-aos-duration=\"200\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"][_ngcontent-%COMP%], body[data-aos-delay=\"200\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"200\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"][_ngcontent-%COMP%], body[data-aos-duration=\"250\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"][_ngcontent-%COMP%], body[data-aos-delay=\"250\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"250\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"][_ngcontent-%COMP%], body[data-aos-duration=\"300\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"][_ngcontent-%COMP%], body[data-aos-delay=\"300\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"300\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"][_ngcontent-%COMP%], body[data-aos-duration=\"350\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"][_ngcontent-%COMP%], body[data-aos-delay=\"350\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"350\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"][_ngcontent-%COMP%], body[data-aos-duration=\"400\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"][_ngcontent-%COMP%], body[data-aos-delay=\"400\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"400\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"][_ngcontent-%COMP%], body[data-aos-duration=\"450\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"][_ngcontent-%COMP%], body[data-aos-delay=\"450\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"450\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"][_ngcontent-%COMP%], body[data-aos-duration=\"500\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"][_ngcontent-%COMP%], body[data-aos-delay=\"500\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"500\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"][_ngcontent-%COMP%], body[data-aos-duration=\"550\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"][_ngcontent-%COMP%], body[data-aos-delay=\"550\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"550\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"][_ngcontent-%COMP%], body[data-aos-duration=\"600\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"][_ngcontent-%COMP%], body[data-aos-delay=\"600\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"600\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"][_ngcontent-%COMP%], body[data-aos-duration=\"650\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"][_ngcontent-%COMP%], body[data-aos-delay=\"650\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"650\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"][_ngcontent-%COMP%], body[data-aos-duration=\"700\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"][_ngcontent-%COMP%], body[data-aos-delay=\"700\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"700\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"][_ngcontent-%COMP%], body[data-aos-duration=\"750\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"][_ngcontent-%COMP%], body[data-aos-delay=\"750\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"750\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"][_ngcontent-%COMP%], body[data-aos-duration=\"800\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"][_ngcontent-%COMP%], body[data-aos-delay=\"800\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"800\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"][_ngcontent-%COMP%], body[data-aos-duration=\"850\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"][_ngcontent-%COMP%], body[data-aos-delay=\"850\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"850\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"][_ngcontent-%COMP%], body[data-aos-duration=\"900\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"][_ngcontent-%COMP%], body[data-aos-delay=\"900\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"900\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"][_ngcontent-%COMP%], body[data-aos-duration=\"950\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"][_ngcontent-%COMP%], body[data-aos-delay=\"950\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"950\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"][_ngcontent-%COMP%], body[data-aos-duration=\"1000\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"][_ngcontent-%COMP%], body[data-aos-delay=\"1000\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1000\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"][_ngcontent-%COMP%], body[data-aos-duration=\"1050\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"][_ngcontent-%COMP%], body[data-aos-delay=\"1050\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1050\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"][_ngcontent-%COMP%], body[data-aos-duration=\"1100\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"][_ngcontent-%COMP%], body[data-aos-delay=\"1100\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1100\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"][_ngcontent-%COMP%], body[data-aos-duration=\"1150\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"][_ngcontent-%COMP%], body[data-aos-delay=\"1150\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1150\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"][_ngcontent-%COMP%], body[data-aos-duration=\"1200\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"][_ngcontent-%COMP%], body[data-aos-delay=\"1200\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1200\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"][_ngcontent-%COMP%], body[data-aos-duration=\"1250\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"][_ngcontent-%COMP%], body[data-aos-delay=\"1250\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1250\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"][_ngcontent-%COMP%], body[data-aos-duration=\"1300\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"][_ngcontent-%COMP%], body[data-aos-delay=\"1300\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1300\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"][_ngcontent-%COMP%], body[data-aos-duration=\"1350\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"][_ngcontent-%COMP%], body[data-aos-delay=\"1350\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1350\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"][_ngcontent-%COMP%], body[data-aos-duration=\"1400\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"][_ngcontent-%COMP%], body[data-aos-delay=\"1400\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1400\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"][_ngcontent-%COMP%], body[data-aos-duration=\"1450\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"][_ngcontent-%COMP%], body[data-aos-delay=\"1450\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1450\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"][_ngcontent-%COMP%], body[data-aos-duration=\"1500\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"][_ngcontent-%COMP%], body[data-aos-delay=\"1500\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1500\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"][_ngcontent-%COMP%], body[data-aos-duration=\"1550\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"][_ngcontent-%COMP%], body[data-aos-delay=\"1550\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1550\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"][_ngcontent-%COMP%], body[data-aos-duration=\"1600\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"][_ngcontent-%COMP%], body[data-aos-delay=\"1600\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1600\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"][_ngcontent-%COMP%], body[data-aos-duration=\"1650\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"][_ngcontent-%COMP%], body[data-aos-delay=\"1650\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1650\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"][_ngcontent-%COMP%], body[data-aos-duration=\"1700\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"][_ngcontent-%COMP%], body[data-aos-delay=\"1700\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1700\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"][_ngcontent-%COMP%], body[data-aos-duration=\"1750\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"][_ngcontent-%COMP%], body[data-aos-delay=\"1750\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1750\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"][_ngcontent-%COMP%], body[data-aos-duration=\"1800\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"][_ngcontent-%COMP%], body[data-aos-delay=\"1800\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1800\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"][_ngcontent-%COMP%], body[data-aos-duration=\"1850\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"][_ngcontent-%COMP%], body[data-aos-delay=\"1850\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1850\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"][_ngcontent-%COMP%], body[data-aos-duration=\"1900\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"][_ngcontent-%COMP%], body[data-aos-delay=\"1900\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1900\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"][_ngcontent-%COMP%], body[data-aos-duration=\"1950\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"][_ngcontent-%COMP%], body[data-aos-delay=\"1950\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"1950\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"][_ngcontent-%COMP%], body[data-aos-duration=\"2000\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"][_ngcontent-%COMP%], body[data-aos-delay=\"2000\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2000\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"][_ngcontent-%COMP%], body[data-aos-duration=\"2050\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"][_ngcontent-%COMP%], body[data-aos-delay=\"2050\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2050\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"][_ngcontent-%COMP%], body[data-aos-duration=\"2100\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"][_ngcontent-%COMP%], body[data-aos-delay=\"2100\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2100\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"][_ngcontent-%COMP%], body[data-aos-duration=\"2150\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"][_ngcontent-%COMP%], body[data-aos-delay=\"2150\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2150\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"][_ngcontent-%COMP%], body[data-aos-duration=\"2200\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"][_ngcontent-%COMP%], body[data-aos-delay=\"2200\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2200\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"][_ngcontent-%COMP%], body[data-aos-duration=\"2250\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"][_ngcontent-%COMP%], body[data-aos-delay=\"2250\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2250\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"][_ngcontent-%COMP%], body[data-aos-duration=\"2300\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"][_ngcontent-%COMP%], body[data-aos-delay=\"2300\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2300\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"][_ngcontent-%COMP%], body[data-aos-duration=\"2350\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"][_ngcontent-%COMP%], body[data-aos-delay=\"2350\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2350\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"][_ngcontent-%COMP%], body[data-aos-duration=\"2400\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"][_ngcontent-%COMP%], body[data-aos-delay=\"2400\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2400\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"][_ngcontent-%COMP%], body[data-aos-duration=\"2450\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"][_ngcontent-%COMP%], body[data-aos-delay=\"2450\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2450\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"][_ngcontent-%COMP%], body[data-aos-duration=\"2500\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"][_ngcontent-%COMP%], body[data-aos-delay=\"2500\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2500\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"][_ngcontent-%COMP%], body[data-aos-duration=\"2550\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"][_ngcontent-%COMP%], body[data-aos-delay=\"2550\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2550\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"][_ngcontent-%COMP%], body[data-aos-duration=\"2600\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"][_ngcontent-%COMP%], body[data-aos-delay=\"2600\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2600\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"][_ngcontent-%COMP%], body[data-aos-duration=\"2650\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"][_ngcontent-%COMP%], body[data-aos-delay=\"2650\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2650\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"][_ngcontent-%COMP%], body[data-aos-duration=\"2700\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"][_ngcontent-%COMP%], body[data-aos-delay=\"2700\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2700\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"][_ngcontent-%COMP%], body[data-aos-duration=\"2750\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"][_ngcontent-%COMP%], body[data-aos-delay=\"2750\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2750\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"][_ngcontent-%COMP%], body[data-aos-duration=\"2800\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"][_ngcontent-%COMP%], body[data-aos-delay=\"2800\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2800\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"][_ngcontent-%COMP%], body[data-aos-duration=\"2850\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"][_ngcontent-%COMP%], body[data-aos-delay=\"2850\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2850\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"][_ngcontent-%COMP%], body[data-aos-duration=\"2900\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"][_ngcontent-%COMP%], body[data-aos-delay=\"2900\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2900\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"][_ngcontent-%COMP%], body[data-aos-duration=\"2950\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"][_ngcontent-%COMP%], body[data-aos-delay=\"2950\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"2950\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"][_ngcontent-%COMP%], body[data-aos-duration=\"3000\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"][_ngcontent-%COMP%], body[data-aos-delay=\"3000\"][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate[_ngcontent-%COMP%], body[data-aos-delay=\"3000\"][_ngcontent-%COMP%]   [data-aos].aos-animate[_ngcontent-%COMP%]{transition-delay:3s}[data-aos][_ngcontent-%COMP%]{pointer-events:none}[data-aos].aos-animate[_ngcontent-%COMP%]{pointer-events:auto}[data-aos][data-aos][data-aos-easing=linear][_ngcontent-%COMP%], body[data-aos-easing=linear][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease][_ngcontent-%COMP%], body[data-aos-easing=ease][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in][_ngcontent-%COMP%], body[data-aos-easing=ease-in][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out][_ngcontent-%COMP%], body[data-aos-easing=ease-out][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out][_ngcontent-%COMP%], body[data-aos-easing=ease-in-out][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back][_ngcontent-%COMP%], body[data-aos-easing=ease-in-back][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back][_ngcontent-%COMP%], body[data-aos-easing=ease-out-back][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back][_ngcontent-%COMP%], body[data-aos-easing=ease-in-out-back][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine][_ngcontent-%COMP%], body[data-aos-easing=ease-in-sine][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine][_ngcontent-%COMP%], body[data-aos-easing=ease-out-sine][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine][_ngcontent-%COMP%], body[data-aos-easing=ease-in-out-sine][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad][_ngcontent-%COMP%], body[data-aos-easing=ease-in-quad][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad][_ngcontent-%COMP%], body[data-aos-easing=ease-out-quad][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad][_ngcontent-%COMP%], body[data-aos-easing=ease-in-out-quad][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic][_ngcontent-%COMP%], body[data-aos-easing=ease-in-cubic][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic][_ngcontent-%COMP%], body[data-aos-easing=ease-out-cubic][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic][_ngcontent-%COMP%], body[data-aos-easing=ease-in-out-cubic][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart][_ngcontent-%COMP%], body[data-aos-easing=ease-in-quart][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart][_ngcontent-%COMP%], body[data-aos-easing=ease-out-quart][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart][_ngcontent-%COMP%], body[data-aos-easing=ease-in-out-quart][_ngcontent-%COMP%]   [data-aos][_ngcontent-%COMP%]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}@media screen{html[_ngcontent-%COMP%]:not(.no-js)   [data-aos^=fade][data-aos^=fade][_ngcontent-%COMP%]{opacity:0;transition-property:opacity,transform}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos^=fade][data-aos^=fade].aos-animate[_ngcontent-%COMP%]{opacity:1;transform:none}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=fade-up][_ngcontent-%COMP%]{transform:translate3d(0,100px,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=fade-down][_ngcontent-%COMP%]{transform:translate3d(0,-100px,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=fade-right][_ngcontent-%COMP%]{transform:translate3d(-100px,0,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=fade-left][_ngcontent-%COMP%]{transform:translate3d(100px,0,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=fade-up-right][_ngcontent-%COMP%]{transform:translate3d(-100px,100px,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=fade-up-left][_ngcontent-%COMP%]{transform:translate3d(100px,100px,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=fade-down-right][_ngcontent-%COMP%]{transform:translate3d(-100px,-100px,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=fade-down-left][_ngcontent-%COMP%]{transform:translate3d(100px,-100px,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos^=zoom][data-aos^=zoom][_ngcontent-%COMP%]{opacity:0;transition-property:opacity,transform}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos^=zoom][data-aos^=zoom].aos-animate[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0) scale(1)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-in][_ngcontent-%COMP%]{transform:scale(.6)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-in-up][_ngcontent-%COMP%]{transform:translate3d(0,100px,0) scale(.6)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-in-down][_ngcontent-%COMP%]{transform:translate3d(0,-100px,0) scale(.6)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-in-right][_ngcontent-%COMP%]{transform:translate3d(-100px,0,0) scale(.6)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-in-left][_ngcontent-%COMP%]{transform:translate3d(100px,0,0) scale(.6)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-out][_ngcontent-%COMP%]{transform:scale(1.2)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-out-up][_ngcontent-%COMP%]{transform:translate3d(0,100px,0) scale(1.2)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-out-down][_ngcontent-%COMP%]{transform:translate3d(0,-100px,0) scale(1.2)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-out-right][_ngcontent-%COMP%]{transform:translate3d(-100px,0,0) scale(1.2)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=zoom-out-left][_ngcontent-%COMP%]{transform:translate3d(100px,0,0) scale(1.2)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos^=slide][data-aos^=slide][_ngcontent-%COMP%]{transition-property:transform;visibility:hidden}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos^=slide][data-aos^=slide].aos-animate[_ngcontent-%COMP%]{visibility:visible;transform:translateZ(0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=slide-up][_ngcontent-%COMP%]{transform:translate3d(0,100%,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=slide-down][_ngcontent-%COMP%]{transform:translate3d(0,-100%,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=slide-right][_ngcontent-%COMP%]{transform:translate3d(-100%,0,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=slide-left][_ngcontent-%COMP%]{transform:translate3d(100%,0,0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos^=flip][data-aos^=flip][_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition-property:transform}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=flip-left][_ngcontent-%COMP%]{transform:perspective(2500px) rotateY(-100deg)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=flip-left].aos-animate[_ngcontent-%COMP%]{transform:perspective(2500px) rotateY(0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=flip-right][_ngcontent-%COMP%]{transform:perspective(2500px) rotateY(100deg)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=flip-right].aos-animate[_ngcontent-%COMP%]{transform:perspective(2500px) rotateY(0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=flip-up][_ngcontent-%COMP%]{transform:perspective(2500px) rotateX(-100deg)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=flip-up].aos-animate[_ngcontent-%COMP%]{transform:perspective(2500px) rotateX(0)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=flip-down][_ngcontent-%COMP%]{transform:perspective(2500px) rotateX(100deg)}html[_ngcontent-%COMP%]:not(.no-js)   [data-aos=flip-down].aos-animate[_ngcontent-%COMP%]{transform:perspective(2500px) rotateX(0)}}@font-face {\n  font-family: \"apple\";\n  src: url(\"/assets/font/9651.ttf\");\n}.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}.col-12[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}.home__list-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: bold;\n  margin: 20px 0px 30px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}.b-carousel-type[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  line-height: 1.1;\n  justify-content: center;\n  font-weight: 700;\n  margin: -15px 0 15px;\n}.b-carousel-type[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .b-carousel-type[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #ef456a;\n}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n}.tab-content[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%] {\n  display: block;\n}.product-list[_ngcontent-%COMP%] {\n  justify-content: center;\n}.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  text-align: center;\n  width: 240px;\n  margin-bottom: 30px;\n  padding: 0 10px;\n  position: relative;\n}.product-card__image-holder[_ngcontent-%COMP%] {\n  height: 220px;\n  position: relative;\n}.product-card__name[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  margin-bottom: 10px;\n}.product-card__meta[_ngcontent-%COMP%] {\n  margin-top: auto;\n}.product-card__price[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  margin-top: 10px;\n}.product-card__add2cart[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n}.button_primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}.block[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f8f8f8;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.card-apple[_ngcontent-%COMP%] {\n  margin-right: 2%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}.font-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n  text-align: center;\n  margin-top: 1rem;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}.img[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}.active[_ngcontent-%COMP%] {\n  color: red;\n}.example-card[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}.text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n}mat-card-title[_ngcontent-%COMP%] {\n  height: 3rem;\n}.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}.example-card[_ngcontent-%COMP%] {\n  transition: all 0.6s;\n}.width[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n}.text-wigle[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 1.5px;\n  margin-right: 1rem;\n}.mat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}.center[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.1s;\n}mat-card[_ngcontent-%COMP%]:hover   .center[_ngcontent-%COMP%] {\n  opacity: 100;\n}.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}mat-slider[_ngcontent-%COMP%] {\n  width: 200px;\n}.col-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 20%;\n}.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}.row[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}h5[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-style: normal;\n  font-weight: 800;\n  line-height: normal;\n  font-size: 24px;\n  letter-spacing: 1px;\n  color: #000;\n  margin-bottom: 10px;\n}mat-card-title[_ngcontent-%COMP%] {\n  font-family: \"apple\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 1px;\n  color: #3797e5;\n  cursor: pointer;\n}mat-card-title[_ngcontent-%COMP%]:hover {\n  color: #e54b37;\n}h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 1px -1px;\n  width: 19.5%;\n}.filters[_ngcontent-%COMP%]   .filter-param[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}.twrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap !important;\n  justify-content: center;\n}.col-9[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}.b-carousel-type[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .b-carousel-type[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #ef456a;\n}@media screen and (max-width: 1300px) {\n  .example-card[_ngcontent-%COMP%] {\n    width: 50% !important;\n    margin-right: 0rem !important;\n    margin-bottom: 0rem !important;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .twrap[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap !important;\n  }\n}@media screen and (max-width: 768px) {\n  .example-card[_ngcontent-%COMP%] {\n    width: auto !important;\n    margin-right: 0rem !important;\n    margin-bottom: 0rem !important;\n    display: flex;\n    justify-content: center;\n  }\n\n  .twrap[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .mat-card[_ngcontent-%COMP%] {\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n    display: flex;\n    position: relative;\n    padding: 15px;\n    border-radius: 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxtb2RlbHMtYXBwbGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtaXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRix3QkFBd0IsQ0FBQywrRUFBK0UsbUJBQW1CLENBQUMsdUdBQXVHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHVGQUF1Rix1QkFBdUIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLG9CQUFvQixDQUFDLHVGQUF1Rix3QkFBd0IsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMseUdBQXlHLHFCQUFxQixDQUFDLHlGQUF5RixzQkFBc0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLG1CQUFtQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5RixzQkFBc0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLG1CQUFtQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5Rix3QkFBd0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHFCQUFxQixDQUFDLHlGQUF5Rix5QkFBeUIsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLHNCQUFzQixDQUFDLHlGQUF5RixzQkFBc0IsQ0FBQyxtRkFBbUYsbUJBQW1CLENBQUMsMkdBQTJHLG1CQUFtQixDQUFDLFdBQVcsbUJBQW1CLENBQUMsdUJBQXVCLG1CQUFtQixDQUFDLHFGQUFxRix3REFBd0QsQ0FBQyxpRkFBaUYsK0JBQStCLENBQUMsdUZBQXVGLGtDQUFrQyxDQUFDLHlGQUF5RixtQ0FBbUMsQ0FBQywrRkFBK0Ysc0NBQXNDLENBQUMsaUdBQWlHLDBEQUEwRCxDQUFDLG1HQUFtRyw0REFBNEQsQ0FBQyx5R0FBeUcsMkRBQTJELENBQUMsaUdBQWlHLHdEQUF3RCxDQUFDLG1HQUFtRyx3REFBd0QsQ0FBQyx5R0FBeUcseURBQXlELENBQUMsaUdBQWlHLHlEQUF5RCxDQUFDLG1HQUFtRyx3REFBd0QsQ0FBQyx5R0FBeUcsMkRBQTJELENBQUMsbUdBQW1HLHlEQUF5RCxDQUFDLHFHQUFxRyx3REFBd0QsQ0FBQywyR0FBMkcsMkRBQTJELENBQUMsbUdBQW1HLHlEQUF5RCxDQUFDLHFHQUFxRyx3REFBd0QsQ0FBQywyR0FBMkcsMkRBQTJELENBQUMsY0FBYyxrREFBa0QsU0FBUyxDQUErQyxxQ0FBNkYsQ0FBQyw4REFBOEQsU0FBUyxDQUF3QixjQUFjLENBQUMsb0NBQTZFLGdDQUFnQyxDQUFDLHNDQUFnRixpQ0FBaUMsQ0FBQyx1Q0FBaUYsaUNBQWlDLENBQUMsc0NBQStFLGdDQUFnQyxDQUFDLDBDQUF3RixxQ0FBcUMsQ0FBQyx5Q0FBc0Ysb0NBQW9DLENBQUMsNENBQTJGLHNDQUFzQyxDQUFDLDJDQUF5RixxQ0FBcUMsQ0FBQyxrREFBa0QsU0FBUyxDQUErQyxxQ0FBNkYsQ0FBQyw4REFBOEQsU0FBUyxDQUEwQyxnQ0FBZ0MsQ0FBQyxvQ0FBZ0UsbUJBQW1CLENBQUMsdUNBQTBGLDBDQUEwQyxDQUFDLHlDQUE2RiwyQ0FBMkMsQ0FBQywwQ0FBOEYsMkNBQTJDLENBQUMseUNBQTRGLDBDQUEwQyxDQUFDLHFDQUFrRSxvQkFBb0IsQ0FBQyx3Q0FBNEYsMkNBQTJDLENBQUMsMENBQStGLDRDQUE0QyxDQUFDLDJDQUFnRyw0Q0FBNEMsQ0FBQywwQ0FBOEYsMkNBQTJDLENBQUMsb0RBQTBGLDZCQUE2QixDQUFpRCxpQkFBaUIsQ0FBQyxnRUFBZ0Usa0JBQWtCLENBQWlDLHVCQUF1QixDQUFDLHFDQUE2RSwrQkFBK0IsQ0FBQyx1Q0FBZ0YsZ0NBQWdDLENBQUMsd0NBQWlGLGdDQUFnQyxDQUFDLHVDQUErRSwrQkFBK0IsQ0FBQyxrREFBa0Qsa0NBQWtDLENBQUMsMEJBQTBCLENBQXVDLDZCQUE2RSxDQUFDLHNDQUE2Riw4Q0FBOEMsQ0FBQyxrREFBbUcsd0NBQXdDLENBQUMsdUNBQTZGLDZDQUE2QyxDQUFDLG1EQUFvRyx3Q0FBd0MsQ0FBQyxvQ0FBMkYsOENBQThDLENBQUMsZ0RBQWlHLHdDQUF3QyxDQUFDLHNDQUE0Riw2Q0FBNkMsQ0FBQyxrREFBbUcsd0NBQXdDLENBQUMsQ0NHNWw0QjtFQUNFLG9CQUFBO0VBQ0EsaUNBQUE7QUFERixDQUlBO0VBR0ksYUFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRkosQ0FLQTtFQUdJLGNBQUE7RUFDQSxlQUFBO0FBRkosQ0FPQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUpKLENBT0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUpKLENBUUE7RUFDSSx5QkFBQTtBQUxKLENBUUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFMSixDQVFBO0VBQ0ksY0FBQTtBQUxKLENBUUE7RUFJSSx1QkFBQTtBQVBKLENBVUE7RUFHSSx3QkFBQTtBQVBKLENBVUE7RUFFSSxhQUFBO0VBRUEsMkJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUEosQ0FVQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQVBKLENBVUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFQSixDQVVBO0VBQ0ksZ0JBQUE7QUFQSixDQVVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBUEosQ0FVQTtFQUNJLHFCQUFBO0FBUEosQ0FVQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBUEosQ0FhQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUN0SEEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUQ2R0osQ0FZQTtFQUNFLGdCQUFBO0VDNUhFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VENEhGLHNCQUFBO0FBUEYsQ0FVQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNERBQUE7QUFQRixDQVVBO0VBQ0UsY0FBQTtBQVBGLENBVUE7RUFDRSxVQUFBO0FBUEYsQ0FVQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVBGLENBV0E7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBUkYsQ0FVQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFQRixDQVVBO0VBQ0UsWUFBQTtBQVBGLENBV0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFSRixDQVVBO0VBQ0Usb0JBQUE7QUFQRixDQVVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFQRixDQVVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVBGLENBVUE7RUFDRSxrQkFBQTtBQVBGLENBU0E7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUFORixDQVNBO0VBQ0UsWUFBQTtBQU5GLENBU0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQU5GLENBU0E7RUFDRSxZQUFBO0FBTkYsQ0FTQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBTkYsQ0FRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUxGLENBUUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUFMRixDQU9BO0VBQ0Usd0lBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFKRixDQU9BO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSkosQ0FPQTtFQUNFLGNBQUE7QUFKRixDQU9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSkYsQ0FTQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQU5GLENBWUE7RUFDRSxtQkFBQTtBQVRGLENBWUE7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQVRKLENBZ0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFiRixDQWdCQTtFQUNFLHlCQUFBO0FBYkYsQ0FnQkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSw4QkFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7RUFiRjs7RUFlRDtJQUNHLGFBQUE7SUFDQSx1QkFBQTtJQUNBLDBCQUFBO0VBWkY7QUFDRixDQW9CQTtFQUVFO0lBQ0Usc0JBQUE7SUFDQSw2QkFBQTtJQUNBLDhCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0VBbkJGOztFQXFCRDtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQWxCRDs7RUFzQkQ7SUFDQyx5REFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQW5CQTtBQUNGIiwiZmlsZSI6Im1vZGVscy1hcHBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiNTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjo1MG1zfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCI1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6NTBtc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouMXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjEwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjEwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjFzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi4xNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjE1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjE1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjE1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouMnN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjIwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjIwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjJzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi4yNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjI1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjI1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjI1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjMwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMzAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouM3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIzMDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjMwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIzMDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjMwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjNzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMzUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIzNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIzNTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjM1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIzNTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjM1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjM1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjQwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiNDAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouNHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI0MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjQwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI0MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjQwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjRzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiNDUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI0NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi40NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI0NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjQ1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI0NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjQ1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjQ1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjUwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiNTAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI1MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjUwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI1MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjUwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiNTUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI1NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi41NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI1NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjU1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI1NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjU1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjU1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjYwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiNjAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouNnN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI2MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjYwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI2MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjYwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjZzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiNjUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI2NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi42NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI2NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjY1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI2NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjY1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjY1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjcwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiNzAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouN3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI3MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjcwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI3MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjcwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjdzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiNzUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI3NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi43NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI3NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjc1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI3NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjc1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Ljc1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiODAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouOHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI4MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjgwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI4MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjgwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjhzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiODUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI4NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi44NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI4NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjg1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI4NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjg1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Ljg1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjkwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiOTAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouOXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI5MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjkwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI5MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjkwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6LjlzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiOTUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI5NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOi45NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI5NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjk1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI5NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjk1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Ljk1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjFzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTAwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTAwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMDAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMDAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwNTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuMDVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTA1MFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTA1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMDUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMDUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjA1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjExMDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjExMDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuMXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMTAwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMTAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjExMDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjExMDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuMXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxMTUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxMTUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjE1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjExNTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjExNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTE1MFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTE1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS4xNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxMjAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjJzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTIwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTIwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjJzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTI1MFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTI1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS4yNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMjUwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMjUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjEyNTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjEyNTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuMjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTMwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTMwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS4zc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjEzMDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjEzMDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTMwMFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTMwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS4zc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEzNTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEzNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuMzVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTM1MFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTM1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMzUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMzUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjM1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE0MDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE0MDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuNHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNDAwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNDAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE0MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjE0MDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuNHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxNDUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxNDUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjQ1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE0NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjE0NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTQ1MFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTQ1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS40NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxNTAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTUwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTUwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNTAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNTAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTU1MFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTU1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS41NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNTUwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNTUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE1NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjE1NTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuNTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTYwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTYwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS42c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE2MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjE2MDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTYwMFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTYwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS42c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE2NTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE2NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuNjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTY1MFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTY1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNjUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNjUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjY1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE3MDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE3MDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuN3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNzAwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNzAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE3MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjE3MDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuN3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxNzUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxNzUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjc1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE3NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjE3NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTc1MFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTc1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS43NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxODAwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxODAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjhzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTgwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTgwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxODAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxODAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjhzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTg1MFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTg1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS44NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxODUwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxODUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE4NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjE4NTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuODVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTkwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTkwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS45c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE5MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjE5MDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTkwMFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTkwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS45c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE5NTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE5NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuOTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTk1MFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTk1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxOTUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxOTUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjk1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjJzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjAwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjAwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMDAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMDAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwNTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuMDVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjA1MFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjA1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMDUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMDUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjA1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIxMDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIxMDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuMXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMTAwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMTAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjIxMDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjIxMDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuMXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyMTUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyMTUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjE1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjIxNTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjIxNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjE1MFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjE1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi4xNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyMjAwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyMjAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjJzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjIwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjIwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMjAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMjAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjJzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjI1MFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjI1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi4yNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMjUwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMjUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjIyNTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjIyNTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuMjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjMwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjMwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi4zc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjIzMDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjIzMDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjMwMFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjMwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi4zc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIzNTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIzNTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuMzVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjM1MFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjM1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMzUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMzUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjM1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI0MDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI0MDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuNHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNDAwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNDAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI0MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjI0MDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuNHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyNDUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyNDUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjQ1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI0NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjI0NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjQ1MFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjQ1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi40NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyNTAwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyNTAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjUwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjUwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNTAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNTAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjU1MFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjU1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi41NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNTUwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNTUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI1NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjI1NTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuNTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjYwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjYwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi42c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI2MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjI2MDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjYwMFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjYwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi42c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI2NTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI2NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuNjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjY1MFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjY1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNjUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNjUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjY1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI3MDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI3MDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuN3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNzAwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNzAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI3MDBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjI3MDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuN3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyNzUwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyNzUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjc1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI3NTBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjI3NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjc1MFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjc1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi43NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyODAwXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyODAwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjhzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjgwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjgwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyODAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyODAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjhzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjg1MFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjg1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi44NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyODUwXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyODUwXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI4NTBcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cIjI4NTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuODVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjkwMFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjkwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi45c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI5MDBcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cIjI5MDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjkwMFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjkwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi45c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI5NTBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI5NTBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuOTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjk1MFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjk1MFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyOTUwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyOTUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjk1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjMwMDBcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjMwMDBcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjNzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMzAwMFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVwiMzAwMFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIzMDAwXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIzMDAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTozc31bZGF0YS1hb3Nde3BvaW50ZXItZXZlbnRzOm5vbmV9W2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXtwb2ludGVyLWV2ZW50czphdXRvfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1saW5lYXJdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWxpbmVhcl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjI1LC4yNSwuNzUsLjc1KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZV0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZV0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluXSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLWluXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0XSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLW91dF0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXRdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0XSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLWJhY2tdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tYmFja10gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjYsLS4yOCwuNzM1LC4wNDUpfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLW91dC1iYWNrXSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLW91dC1iYWNrXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEuMjc1KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtYmFja10sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtYmFja10gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjY4LC0uNTUsLjI2NSwxLjU1KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1zaW5lXSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLXNpbmVdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40NywwLC43NDUsLjcxNSl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXNpbmVdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXNpbmVdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4zOSwuNTc1LC41NjUsMSl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LXNpbmVdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LXNpbmVdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40NDUsLjA1LC41NSwuOTUpfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLXF1YWRdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tcXVhZF0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wODUsLjY4LC41Myl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXF1YWRdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXF1YWRdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LXF1YWRdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LXF1YWRdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tY3ViaWNdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tY3ViaWNdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDg1LC42OCwuNTMpfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLW91dC1jdWJpY10sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtY3ViaWNdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LWN1YmljXSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLW91dC1jdWJpY10gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1xdWFydF0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1xdWFydF0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wODUsLjY4LC41Myl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXF1YXJ0XSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLW91dC1xdWFydF0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtcXVhcnRdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LXF1YXJ0XSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpfUBtZWRpYSBzY3JlZW57aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePWZhZGVdW2RhdGEtYW9zXj1mYWRlXXtvcGFjaXR5OjA7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LHRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvc149ZmFkZV1bZGF0YS1hb3NePWZhZGVdLmFvcy1hbmltYXRle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZhZGUtdXBdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwcHgsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmFkZS1kb3duXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwcHgsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmFkZS1yaWdodF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDBweCwwLDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZhZGUtbGVmdF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwcHgsMCwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLXVwLXJpZ2h0XXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwcHgsMTAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDBweCwxMDBweCwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLXVwLWxlZnRdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHB4LDEwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDBweCwxMDBweCwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLWRvd24tcmlnaHRdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDBweCwtMTAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDBweCwtMTAwcHgsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmFkZS1kb3duLWxlZnRdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHB4LC0xMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwcHgsLTEwMHB4LDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zXj16b29tXVtkYXRhLWFvc149em9vbV17b3BhY2l0eTowO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm19aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePXpvb21dW2RhdGEtYW9zXj16b29tXS5hb3MtYW5pbWF0ZXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLWluXXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNik7dHJhbnNmb3JtOnNjYWxlKC42KX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLWluLXVwXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMHB4LDApIHNjYWxlKC42KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDBweCwwKSBzY2FsZSguNil9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9em9vbS1pbi1kb3duXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDBweCwwKSBzY2FsZSguNik7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMHB4LDApIHNjYWxlKC42KX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLWluLXJpZ2h0XXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwcHgsMCwwKSBzY2FsZSguNik7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDBweCwwLDApIHNjYWxlKC42KX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLWluLWxlZnRdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHB4LDAsMCkgc2NhbGUoLjYpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDBweCwwLDApIHNjYWxlKC42KX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLW91dF17LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yKTt0cmFuc2Zvcm06c2NhbGUoMS4yKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLW91dC11cF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDBweCwwKSBzY2FsZSgxLjIpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMHB4LDApIHNjYWxlKDEuMil9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9em9vbS1vdXQtZG93bl17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwcHgsMCkgc2NhbGUoMS4yKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwcHgsMCkgc2NhbGUoMS4yKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLW91dC1yaWdodF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHB4LDAsMCkgc2NhbGUoMS4yKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHB4LDAsMCkgc2NhbGUoMS4yKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLW91dC1sZWZ0XXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDBweCwwLDApIHNjYWxlKDEuMik7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHB4LDAsMCkgc2NhbGUoMS4yKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvc149c2xpZGVdW2RhdGEtYW9zXj1zbGlkZV17dHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybTt2aXNpYmlsaXR5OmhpZGRlbn1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvc149c2xpZGVdW2RhdGEtYW9zXj1zbGlkZV0uYW9zLWFuaW1hdGV7dmlzaWJpbGl0eTp2aXNpYmxlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9c2xpZGUtdXBdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXNsaWRlLWRvd25dey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9c2xpZGUtcmlnaHRdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9c2xpZGUtbGVmdF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePWZsaXBdW2RhdGEtYW9zXj1mbGlwXXstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3RyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm19aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmxpcC1sZWZ0XXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVkoLTEwMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgtMTAwZGVnKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mbGlwLWxlZnRdLmFvcy1hbmltYXRley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVZKDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZsaXAtcmlnaHRdey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgxMDBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVkoMTAwZGVnKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mbGlwLXJpZ2h0XS5hb3MtYW5pbWF0ZXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVkoMCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mbGlwLXVwXXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVgoLTEwMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgtMTAwZGVnKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mbGlwLXVwXS5hb3MtYW5pbWF0ZXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVgoMCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mbGlwLWRvd25dey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVgoMTAwZGVnKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mbGlwLWRvd25dLmFvcy1hbmltYXRley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVYKDApfX0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9taXhpbi5zY3NzJztcclxuQGltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJhcHBsZVwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250Lzk2NTEudHRmXCIpO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbi5jb2wtMTIge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5ob21lX19saXN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5iLWNhcm91c2VsLXR5cGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IC0xNXB4IDAgMTVweDtcclxufVxyXG5cclxuXHJcbi5iLWNhcm91c2VsLXR5cGUgLm5hdi1saW5rLmFjdGl2ZSwgLmItY2Fyb3VzZWwtdHlwZSAuc2hvdz4ubmF2LWxpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDU2YTtcclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi50YWItY29udGVudD4uYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0IHtcclxuICAgIC8vIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZF9faW1hZ2UtaG9sZGVyIHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmRfX25hbWUge1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkX19tZXRhIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmRfX3ByaWNlIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZF9fYWRkMmNhcnQge1xyXG4gICAgb3BhY2l0eTogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b25fcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5ibG9ja3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBAaW5jbHVkZSBjZW50ZXIoKVxyXG4gICBcclxufVxyXG5cclxuLmNhcmQtYXBwbGV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBAaW5jbHVkZSBjZW50ZXIoKTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9udC10aXRsZXtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi50ZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiBcclxufVxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG5cclxuLmNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5leGFtcGxlLWNhcmR7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbn1cclxuXHJcbi53aWR0aHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuLnRleHQtd2lnbGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNlbnRlcntcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMXM7XHJcbn1cclxuXHJcbm1hdC1jYXJkOmhvdmVyIC5jZW50ZXJ7XHJcbiAgb3BhY2l0eTogMTAwO1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbm1hdC1zbGlkZXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmNvbC0zIHtcclxuICBmbGV4OiAwIDAgMjUlO1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG59XHJcbi5leGFtcGxlLXNlY3Rpb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucm93IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59XHJcbmg1IHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdhcHBsZSc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogIzM3OTdlNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGU6aG92ZXJ7XHJcbiAgY29sb3I6ICNlNTRiMzc7XHJcbn1cclxuXHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcblxyXG5cclxubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMDFweCAtMXB4IDtcclxuICB3aWR0aDogMTkuNSU7XHJcbn1cclxuLy8gbWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkgOmhvdmVyIHtcclxuLy8gICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAxcHggMXB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDNweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxuLy8gfVxyXG5cclxuLmZpbHRlcnMgLmZpbHRlci1wYXJhbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnR3cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcblxyXG59XHJcblxyXG4uY29sLTkge1xyXG4gIGZsZXg6IDAgMCAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmItY2Fyb3VzZWwtdHlwZSAubmF2LWxpbmsuYWN0aXZlLCAuYi1jYXJvdXNlbC10eXBlIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDU2YTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSAge1xyXG4gIC5leGFtcGxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiB9XHJcbiAudHdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcblxyXG4gIFxyXG4gfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIH1cclxuIC50d3JhcCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgXHJcbiB9XHJcblxyXG4gLm1hdC1jYXJkIHtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTVweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5cclxuXHJcbn1cclxuIiwiXHJcbkBtaXhpbiBjZW50ZXIoKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "kYDd":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/filter-products.pipe.ts ***!
  \******************************************************/
/*! exports provided: FilterProductsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProductsPipe", function() { return FilterProductsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterProductsPipe {
    transform(value, state) {
        if (!value)
            return value;
        if (!state)
            return '';
        // console.log(value);
        return value.filter(category => category.categoryProduct === state);
    }
}
FilterProductsPipe.ɵfac = function FilterProductsPipe_Factory(t) { return new (t || FilterProductsPipe)(); };
FilterProductsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterProducts", type: FilterProductsPipe, pure: true });


/***/ }),

/***/ "kaia":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/color.pipe.ts ***!
  \********************************************/
/*! exports provided: ColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPipe", function() { return ColorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ColorPipe {
    transform(value, item) {
        return value;
    }
}
ColorPipe.ɵfac = function ColorPipe_Factory(t) { return new (t || ColorPipe)(); };
ColorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "color", type: ColorPipe, pure: true });


/***/ }),

/***/ "lRFV":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_models_apple_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/apple.models */ "yz5t");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/navs/navs.service */ "livN");
/* harmony import */ var src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/category/category.service */ "hmux");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/pipes/filter.pipe */ "UhSo");
/* harmony import */ var _shared_pipes_filter_products_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/pipes/filter-products.pipe */ "kYDd");
/* harmony import */ var _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/pipes/kyrs.pipe */ "S8YT");
























function AdminProductsComponent_mat_optgroup_7_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminProductsComponent_mat_optgroup_7_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.add(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r5.title, " ");
} }
function AdminProductsComponent_mat_optgroup_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-optgroup", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminProductsComponent_mat_optgroup_7_mat_option_1_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", group_r3.nameEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, ctx_r0.arrOpntio2, group_r3.nameEN));
} }
function AdminProductsComponent_mat_accordion_36_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminProductsComponent_mat_accordion_36_tr_31_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const item_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r12.editApple(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminProductsComponent_mat_accordion_36_tr_31_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const item_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r14.deleteApple(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r10.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 9, item_r10.price), " \u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.dollarPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r10.memory, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r10.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.categoryProduct);
} }
function AdminProductsComponent_mat_accordion_36_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function AdminProductsComponent_mat_accordion_36_Template_mat_expansion_panel_opened_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.panelOpenState = true; })("closed", function AdminProductsComponent_mat_accordion_36_Template_mat_expansion_panel_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-panel-title", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Img");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "dolar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Memory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "CategoryProduct");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AdminProductsComponent_mat_accordion_36_tr_31_Template, 26, 11, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "filterProducts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", col_r8.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](32, 2, ctx_r2.arrApple, col_r8.title));
} }
class AdminProductsComponent {
    constructor(appleServices, storage, navServices, categoryServices, http, formBolider, dialog) {
        this.appleServices = appleServices;
        this.storage = storage;
        this.navServices = navServices;
        this.categoryServices = categoryServices;
        this.http = http;
        this.formBolider = formBolider;
        this.dialog = dialog;
        this.papa = 'papa';
        this.arrApple = [];
        this.arrOpntio = [];
        this.countries = [];
        // form = this.formBolider.group({})
        this.formGroup = this.formBolider.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            memory: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            selectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            dollarPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            detalis: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
        this.dynControls = [];
    }
    ngOnInit() {
        this.getApple();
        this.navServices.$arrNav.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(d => d !== null)).subscribe(res => {
            this.arrOpntio = res;
            // console.log(res);
        });
        this.categoryServices.getCategory().then(res => {
            this.arrOpntio2 = res;
            // console.log(res, 'option');
        });
        this.getСurrency();
    }
    // addModal(){
    //  const dialogRef = this.dialog.open(DevicePropertiesComponent , {
    //    data : {
    //      form : this.papa
    //    }
    //  } )
    //   dialogRef.afterClosed().subscribe(res => {
    //     if(res != undefined) {
    //     this.countries.push(res);
    //     this.formGroup.addControl(res.control, new FormControl(''))
    //     }
    //   })
    // }
    // openDialog() {
    //   const dialogRef = this.dialog.open(ModalProductsComponent);
    // }
    getСurrency() {
        this.appleServices.getСurrency().subscribe(respons => {
            console.log(respons);
            this.dollar = Math.floor(+respons[0].sale);
        });
    }
    getApple() {
        this.appleServices.getApple().then(apple => {
            // console.log(apple);
            this.arrApple = apple;
            //  console.log(apple, 'aplle');
        });
    }
    uploadFile(event) {
        // console.log(this.dollar);
        // console.log('apple ============================');
        this.isdisabled = true;
        // console.log('*********',this.img);
        this.formGroup.value.img = '';
        if (this.img) {
            this.storage.refFromURL(this.img).delete();
            this.img = '';
        }
        const file = event.target.files[0];
        const filePath = `apple/${this.uuid()}.${file.type.split('/')[1]}`;
        console.log('apple', filePath);
        const task = this.storage.upload(filePath, file);
        this.uploadProgress = task.percentageChanges();
        task.then(result => {
            this.storage.ref(`apple/${result.metadata.name}`).getDownloadURL().subscribe(img => {
                this.img = img;
                this.uploadProgress.subscribe(res => {
                    if (res === 100) {
                        this.isdisabled = false;
                    }
                });
            });
        });
    }
    add({ category, id }) {
        // this.selected = item.category
        this.selected = category;
        // const nav: any = this.arrOpntio.find(el => el.id === id);
        // console.log(nav);
        // this.dynControls = [];
        // if(nav.props){
        //     this.dynControls = Object.keys(nav.props);
        //     console.log(this.dynControls);
        //     this.dynControls.forEach(item => {
        //     this.formGroup.addControl(item, new FormControl(''))
        //    })
        // }
        // console.log(this.formGroup);
    }
    addApple(form) {
        var _a;
        const myId = uuid__WEBPACK_IMPORTED_MODULE_4__["v4"]();
        const apple = Object.assign({}, new src_app_shared_models_apple_models__WEBPACK_IMPORTED_MODULE_3__["Apple"](0, myId, 1, form.title, form.price, this.img, this.selected, form.selectValue, this.dollar, form.color, form.memory));
        // console.log(apple);
        if (!this.isText) {
            if (this.arrApple.length > 0) {
                apple.id = this.arrApple.slice(-1)[0].id + 1;
            }
            // console.log(apple);
            this.appleServices.addApple(apple, `apple ${apple.id}`).then(res => {
                this.getApple();
            });
        }
        if (this.isText) {
            apple.id = this.idApple;
            apple.uuid = this.uuidItem;
            if (this.iteam.comments) {
                const newApple = Object.assign(Object.assign({}, apple), { detalis: Object.assign({}, this.iteam.detalis), description: Object.assign({}, this.iteam.description), comments: [...(_a = this.iteam) === null || _a === void 0 ? void 0 : _a.comments] });
                this.appleServices.updateApple(`apple ${this.iteam.id}`, newApple).then(() => {
                    this.getApple();
                });
            }
            else {
                const newApple = Object.assign(Object.assign({}, apple), { detalis: Object.assign({}, this.iteam.detalis), description: Object.assign({}, this.iteam.description) });
                this.appleServices.updateApple(`apple ${apple.id}`, newApple).then(() => {
                    this.getApple();
                });
            }
            this.isText = false;
        }
        this.img = '';
        this.uploadProgress = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(0);
        this.formGroup.reset();
        this.isdisabled = true;
    }
    editApple(iteam) {
        // console.log( iteam.price / +this.dollar );
        // console.log(iteam.price );
        // console.log( +this.dollar );
        console.log(iteam);
        this.idApple = iteam.id;
        this.uuidItem = iteam.uuid;
        this.isText = true;
        this.formGroup.patchValue({
            title: iteam.title,
            price: iteam.price,
            memory: iteam.memory,
            color: iteam.color,
            selectValue: iteam.categoryProduct,
        });
        this.iteam = iteam;
        this.img = iteam.img;
        this.selected = iteam.category;
        this.isdisabled = false;
    }
    deleteApple(iteam) {
        this.appleServices.deleteApple(`apple ${iteam.id}`).then(() => {
            this.getApple();
        });
        if (iteam.img) {
            this.storage.refFromURL(iteam.img).delete();
        }
    }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
AdminProductsComponent.ɵfac = function AdminProductsComponent_Factory(t) { return new (t || AdminProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_6__["AppleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_navs_navs_service__WEBPACK_IMPORTED_MODULE_8__["NavsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"])); };
AdminProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdminProductsComponent, selectors: [["app-admin-products"]], decls: 37, vars: 9, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["formControlName", "selectValue"], [3, "label", 4, "ngFor", "ngForOf"], [1, "example-full-width"], ["formControlName", "title", "matInput", "", "name", "title"], ["type", "number", "formControlName", "price", "matInput", "", "name", "price"], [1, "row"], [1, "col-6", "form-group"], ["type", "text", "formControlName", "memory", "matInput", "", "name", "price"], ["type", "text", "formControlName", "color", "matInput", "", "name", "price"], ["for", "file-upload", 1, "custom-file-upload"], ["formControlName", "img", "id", "file-upload", "type", "file", 3, "change"], ["mode", "determinate", 3, "value"], ["id", ""], ["type", "submit", "mat-raised-button", "", 1, "margin", 3, "disabled", "color", "textContent"], [4, "ngFor", "ngForOf"], [3, "label"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [3, "opened", "closed"], [2, "text-align", "center"], [1, "table", "block"], ["alt", "", 2, "height", "50px", 3, "src"], ["mat-raised-button", "", "color", "accent", 1, "res", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function AdminProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminProductsComponent_Template_form_ngSubmit_0_listener() { return ctx.addApple(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminProductsComponent_mat_optgroup_7_Template, 3, 5, "mat-optgroup", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Memory");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminProductsComponent_Template_input_change_29_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "mat-progress-bar", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, AdminProductsComponent_mat_accordion_36_Template, 33, 5, "mat-accordion", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.arrOpntio);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 7, ctx.uploadProgress));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isdisabled)("color", ctx.isText ? "accent" : "primary")("textContent", ctx.isText ? "Save" : "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.arrOpntio2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOptgroup"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelDescription"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterPipe"], _shared_pipes_filter_products_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterProductsPipe"], _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_22__["KyrsPipe"]], styles: ["table[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 90%;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom-file-upload[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.papa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  color: \"red\";\n}\n\n.res[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n\n.mat-tab-body-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n  overflow-x: inherit !important;\n}\n\n.mat-tab-body-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  margin-top: 20px !important;\n  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRtaW4tY2F0ZWdvcnlcXGFkbWluLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFkbWluLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUVBLFdBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FBL0JBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQWtDSjs7QUEvQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7QUFrQ0oiLCJmaWxlIjoiYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hcmdpbntcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wYXBhICBwOm50aC1vZi10eXBlKDEpIHtcclxuICBjb2xvcjogJ3JlZCdcclxufVxyXG5cclxuLnJlc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59IiwidGFibGUsIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdXN0b20tZmlsZS11cGxvYWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucGFwYSBwOm50aC1vZi10eXBlKDEpIHtcbiAgY29sb3I6IFwicmVkXCI7XG59XG5cbi5yZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4ubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy14OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFiLWJvZHktd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xufSJdfQ== */"] });


/***/ }),

/***/ "livN":
/*!******************************************************!*\
  !*** ./src/app/shared/services/navs/navs.service.ts ***!
  \******************************************************/
/*! exports provided: NavsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavsService", function() { return NavsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class NavsService {
    constructor(firestory) {
        this.firestory = firestory;
        this.$arrNav = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.$obj = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.getNavs();
    }
    getNavs() {
        return this.firestory.collection('navs').ref.orderBy('id', 'asc').get().then(res => {
            const data = res.docs.map(el => el.data());
            this.$arrNav.next(data);
            return data;
        });
    }
    addNavs(navs, num) {
        return this.firestory.collection('navs').doc(num).set(navs);
    }
    deleteNavs(id) {
        return this.firestory.collection('navs').doc(id).delete();
    }
    updateNavs(id, category) {
        return this.firestory.collection('navs').doc(id).set(category);
    }
}
NavsService.ɵfac = function NavsService_Factory(t) { return new (t || NavsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
NavsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavsService, factory: NavsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m4x3":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-order/admin-order.component.ts ***!
  \************************************************************/
/*! exports provided: AdminOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderComponent", function() { return AdminOrderComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/order/order.service */ "zCCq");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/kyrs.pipe */ "S8YT");
/* harmony import */ var _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/fixed.pipe */ "ItGS");








function AdminOrderComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.id, " ");
} }
function AdminOrderComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0406\u043C\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.userName, " ");
} }
function AdminOrderComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.lastName, " ");
} }
function AdminOrderComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0422\u0435\u043B\u0435\u0444\u043E\u043D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.userPhone, " ");
} }
function AdminOrderComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r22.email, " ");
} }
function AdminOrderComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0410\u0434\u0440\u0435\u0441\u0441 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_ng_container_18_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r23.street.name, " === \u041D\u0430\u0448 \u041C\u0430\u0433\u0430\u0437\u0438\u043D ");
} }
function AdminOrderComponent_ng_container_18_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r23.adress, " === \u0410\u0434\u0440\u0435\u0441\u0441\u0430 \u0414\u043E\u043C\u0430 ");
} }
function AdminOrderComponent_ng_container_18_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", element_r23.novaCisty, " ", element_r23.novaAddres, " === \u0412\u0456\u0434\u0456\u043B\u043B\u0435\u043D\u044F \u041D\u043E\u0432\u043E\u0457 \u041F\u043E\u0448\u0442\u0438 ");
} }
function AdminOrderComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminOrderComponent_ng_container_18_p_2_Template, 3, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminOrderComponent_ng_container_18_p_3_Template, 3, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminOrderComponent_ng_container_18_p_4_Template, 3, 2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", element_r23.menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "3");
} }
function AdminOrderComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminOrderComponent_td_21_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const element_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r31.deleteOrder(element_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_23_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_23_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", element_r50.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AdminOrderComponent_td_23_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_23_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r51.category, " ");
} }
function AdminOrderComponent_td_23_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_23_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", element_r52.category, " ", element_r52.categoryProduct, " ", element_r52.memory, " ", element_r52.color, "");
} }
function AdminOrderComponent_td_23_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " priceUS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_23_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, element_r53.price / element_r53.dollarPrice)), " ");
} }
function AdminOrderComponent_td_23_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " priceUK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_23_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, element_r54.price)), " \u0433\u0440\u043D ");
} }
function AdminOrderComponent_td_23_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_23_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", element_r55.count, " ");
} }
function AdminOrderComponent_td_23_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0412\u0441\u044C\u043E\u0433\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminOrderComponent_td_23_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, element_r56.count * element_r56.price / element_r56.dollarPrice)), " ");
} }
function AdminOrderComponent_td_23_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 33);
} }
function AdminOrderComponent_td_23_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 34);
} }
function AdminOrderComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminOrderComponent_td_23_th_5_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminOrderComponent_td_23_td_6_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminOrderComponent_td_23_th_8_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminOrderComponent_td_23_td_9_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AdminOrderComponent_td_23_th_11_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AdminOrderComponent_td_23_td_12_Template, 2, 4, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminOrderComponent_td_23_th_14_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AdminOrderComponent_td_23_td_15_Template, 4, 5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AdminOrderComponent_td_23_th_17_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminOrderComponent_td_23_td_18_Template, 4, 5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AdminOrderComponent_td_23_th_20_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AdminOrderComponent_td_23_td_21_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminOrderComponent_td_23_th_23_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AdminOrderComponent_td_23_td_24_Template, 5, 5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdminOrderComponent_td_23_tr_25_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AdminOrderComponent_td_23_tr_26_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r14.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@detailExpand", element_r33 == ctx_r14.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", element_r33.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r14.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r14.displayedColumns);
} }
function AdminOrderComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 33);
} }
function AdminOrderComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminOrderComponent_tr_25_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const element_r58 = ctx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.expandedElement = ctx_r59.expandedElement === element_r58 ? null : element_r58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r58 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("example-expanded-row", ctx_r16.expandedElement === element_r58);
} }
function AdminOrderComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 36);
} }
const _c0 = function () { return ["expandedDetail"]; };
class AdminOrderComponent {
    constructor(orderServices) {
        this.orderServices = orderServices;
        this.columnsToDisplay = ['id', 'userName', 'lastName', 'userPhone', 'email', 'street', 'delete'];
        // columnsToDisplay = ['id' ,'userName'];
        this.arrOrder = [];
        this.displayedColumns = ['img', 'name', 'category', 'priceDol', 'priceUK', 'count', 'syma'];
    }
    ngOnInit() {
        this.getLooder();
    }
    getLooder() {
        this.orderServices.getOrder().then(res => {
            this.arrOrder = res;
            console.log(res);
        });
    }
    deleteOrder(item) {
        this.orderServices.deleteOrder(`order ${item.id}`).then(() => {
            this.getLooder();
        });
    }
}
AdminOrderComponent.ɵfac = function AdminOrderComponent_Factory(t) { return new (t || AdminOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"])); };
AdminOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminOrderComponent, selectors: [["app-admin-order"]], decls: 27, vars: 5, consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", "witdh", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "userName"], ["matColumnDef", "lastName"], ["matColumnDef", "userPhone"], ["matColumnDef", "email"], ["matColumnDef", "street"], [4, "matCellDef"], ["matColumnDef", "delete"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "example-element-detail", "di"], ["mat-table", "", 1, "mat-elevation-z8", "witdh", 3, "dataSource"], ["matColumnDef", "img"], ["mat-cell", "", "class", "row", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "name"], ["matColumnDef", "priceDol"], ["matColumnDef", "priceUK"], ["matColumnDef", "count"], ["matColumnDef", "syma"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-cell", "", 1, "row"], ["alt", "", 2, "height", "50px", "width", "50px", 3, "src"], ["mat-header-row", ""], ["mat-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function AdminOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminOrderComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminOrderComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminOrderComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminOrderComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminOrderComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminOrderComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AdminOrderComponent_th_11_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AdminOrderComponent_td_12_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminOrderComponent_th_14_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AdminOrderComponent_td_15_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AdminOrderComponent_th_17_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminOrderComponent_ng_container_18_Template, 5, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AdminOrderComponent_th_20_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AdminOrderComponent_td_21_Template, 3, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminOrderComponent_td_23_Template, 27, 5, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AdminOrderComponent_tr_24_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdminOrderComponent_tr_25_Template, 1, 2, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AdminOrderComponent_tr_26_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.arrOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_6__["KyrsPipe"], _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_7__["FixedPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 0;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.witdh[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-raised-button[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBS0U7RUFDRSxTQUFBO0FBRko7O0FBS0U7RUFDRSxzQkFBQTtBQUZKOztBQUtFO0VBQ0UsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLHNCQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRko7O0FBSUU7RUFDRSxXQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0FBREoiLCJmaWxlIjoiYWRtaW4tb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICBcclxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAud2l0ZGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBtYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ "mImb":
/*!**********************************************!*\
  !*** ./src/app/shared/guards/login.guard.ts ***!
  \**********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login/login.service */ "EVec");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginGuard {
    constructor(loginServices, router) {
        this.loginServices = loginServices;
        this.router = router;
    }
    canActivate(route, state) {
        return this.checkLogin();
    }
    checkLogin() {
        return true;
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mSj3":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @crystalui/angular-lightbox */ "k/Yu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function GalleryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/galleryUser"]; };
class GalleryComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.eventService.emitter.subscribe((event) => {
            console.log(event);
        });
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_1__["EventService"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], inputs: { arrGallery: "arrGallery" }, decls: 9, vars: 3, consts: [[1, "section__block", "user-gallery"], [1, "container"], [1, "user-gallery__title", "mobile"], [1, "user-gallery__list"], [4, "ngFor", "ngForOf"], [1, "text-center"], ["routerLinkActive", "active", 1, "btn", "btn-primary", "mt-5", 3, "routerLink"], [3, "src"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0424\u043E\u0442\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u0432\u0441\u0456 \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrGallery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["@font-face {\n  font-family: \"apple\";\n  src: url(\"/assets/font/9651.ttf\");\n}\n.section__block[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.user-gallery__title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: \"apple\";\n  color: #000;\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 26px;\n  letter-spacing: 1px;\n}\n.user-gallery__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.user-gallery__list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 0 0 16.6666%;\n  padding: 1.5px;\n}\n.user-gallery__list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  vertical-align: top;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.mat-card[_ngcontent-%COMP%] {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 16px;\n  border-radius: 0px;\n}\n@media screen and (max-width: 768px) {\n  div[_ngcontent-%COMP%] {\n    flex: 0 0 49.6666% !important;\n    padding: 1.5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBR0EsbUJBQUE7QUFGSjtBQU1BO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFISjtBQU1BO0VBQ0ksNkJBQUE7QUFISjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBSEo7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1BO0VBQ0ksNkJBQUE7QUFISjtBQU1BO0VBQ0kseURBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1BO0VBR0k7SUFDRSw2QkFBQTtJQUNBLGNBQUE7RUFMSjtBQUNGIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcImFwcGxlXCI7XHJcbiAgICBzcmM6IHVybChcIi9hc3NldHMvZm9udC85NjUxLnR0ZlwiKTtcclxuICB9XHJcblxyXG4uc2VjdGlvbl9fYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnVzZXItZ2FsbGVyeV9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ2FwcGxlJztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG59XHJcblxyXG4udXNlci1nYWxsZXJ5X19saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci1nYWxsZXJ5X19saXN0IGRpdiB7XHJcbiAgICBmbGV4OiAwIDAgMTYuNjY2NiU7XHJcbiAgICBwYWRkaW5nOiAxLjVweDtcclxufVxyXG5cclxuLnVzZXItZ2FsbGVyeV9fbGlzdCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDsgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBmbGV4OiAwIDAgNDkuNjY2NiUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMS41cHg7XHJcbiAgfVxyXG5cclxuIFxyXG59Il19 */"] });


/***/ }),

/***/ "n8ey":
/*!***************************************************************!*\
  !*** ./src/app/pages/home/short-text/short-text.component.ts ***!
  \***************************************************************/
/*! exports provided: ShortTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortTextComponent", function() { return ShortTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/category/iphone"]; };
const _c1 = function () { return ["/category/mac"]; };
const _c2 = function () { return ["/category/apple watch"]; };
const _c3 = function () { return ["/category/airpods"]; };
class ShortTextComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShortTextComponent.ɵfac = function ShortTextComponent_Factory(t) { return new (t || ShortTextComponent)(); };
ShortTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShortTextComponent, selectors: [["app-short-text"]], decls: 47, vars: 8, consts: [[1, "holder"], ["type", "checkbox", "id", "read-more-checker", 1, "read-more-checker"], [1, "limited", "l-200"], ["routerLinkActive", "active", "target", "_blank", 3, "routerLink"], ["target", "_blank", 3, "routerLink"], [1, "bottom"], ["for", "read-more-checker", 1, "read-more-button"]], template: function ShortTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apple Room - \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0442\u0430 \u0441\u0435\u0440\u0432\u0456\u0441\u043D\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u0457 \u0442\u0435\u0445\u043D\u0456\u043A\u0438 Apple \u0443 \u041B\u044C\u0432\u043E\u0432\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0434\u043E\u0432\u043E\u043B\u0456 \u0432\u0430\u0436\u043A\u043E \u0437\u0443\u0441\u0442\u0440\u0456\u0442\u0438 \u043B\u044E\u0434\u0438\u043D\u0443, \u044F\u043A\u0430 \u0431 \u043D\u0435 \u0447\u0443\u043B\u0430 \u043F\u0440\u043E \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 \u0442\u0435\u0445\u043D\u0456\u043A\u0438 Apple. \u041D\u0435 \u0434\u0438\u0432\u043D\u043E, \u0449\u043E \u0432\u043E\u043D\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456\u0441\u0442\u044E, \u0430\u0434\u0436\u0435 \u0434\u0430\u043D\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u0437\u0430\u0432\u043E\u044E\u0432\u0430\u043B\u0430 \u0441\u0435\u0440\u0446\u044F \u043B\u044E\u0434\u0435\u0439 \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u044F\u043A\u0456\u0441\u043D\u0456\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457, \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0434\u0438\u0437\u0430\u0439\u043D\u0443 \u0442\u0430 \u044F\u0441\u043A\u0440\u0430\u0432\u0438\u043C \u043D\u043E\u0432\u0438\u043D\u043A\u0430\u043C. \u0423\u0436\u0435 \u043D\u0435 \u043F\u0435\u0440\u0448\u0438\u0439 \u0440\u0456\u043A \u043C\u0438 \u043F\u0440\u0430\u0446\u044E\u0454\u043C\u043E \u0437 \u0446\u0456\u0454\u044E \u0442\u0435\u0445\u043D\u0456\u043A\u043E\u044E, \u0442\u0430 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u0430\u0432\u0456\u0440\u0438\u0442\u0438 \u2013 \u0432\u043E\u043D\u0430 \u0432\u0430\u0440\u0442\u0430 \u0441\u0432\u043E\u0454\u0457 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0456. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430 \u0432\u0456\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0456\u0439 \u0432\u0456\u0442\u0440\u0438\u043D\u0456 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443 Apple-Room \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0456:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "iPhone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "MacBook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Apple Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "iMac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041D\u0430 \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456 Apple Room \u0434\u0443\u0436\u0435 \u0437\u0440\u0443\u0447\u043D\u0430 \u043D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044F, \u043F\u043E\u0448\u0443\u043A \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u043D\u0435 \u0437\u0430\u0432\u0434\u0430\u0454 \u0442\u0440\u0443\u0434\u043D\u043E\u0449\u0456\u0432. \u0414\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043E\u0431\u0440\u0430\u0442\u0438 \u0442\u0435\u0445\u043D\u0456\u043A\u0443, \u043C\u043E\u0434\u0435\u043B\u044C \u0442\u0430 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438, \u0449\u043E\u0431 \u043D\u0430\u0431\u043B\u0438\u0437\u0438\u0442\u0438\u0441\u044F \u0434\u043E \u043E\u043C\u0440\u0456\u044F\u043D\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u043A\u0440\u043E\u043A \u0431\u043B\u0438\u0436\u0447\u0435. \u0423 \u043D\u0430\u0441 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u0437\u2019\u044F\u0432\u043B\u044F\u044E\u0442\u044C\u0441\u044F \u044F\u0441\u043A\u0440\u0430\u0432\u0456 \u043D\u043E\u0432\u0438\u043D\u043A\u0438, \u0441\u0442\u0438\u043B\u044C\u043D\u0456 \u0430\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0438, \u0449\u043E\u0431 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u0445\u043D\u0456\u043A\u043E\u044E \u0431\u0443\u043B\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0438\u043C. \u041F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u044E\u0454\u0442\u044C\u0441\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E \u043D\u043E\u0432\u0438\u043D\u043E\u043A, \u0432\u0438\u0433\u0456\u0434\u043D\u0438\u0445 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0439 \u0442\u0430 \u0430\u043A\u0446\u0456\u0439. \u041D\u0435 \u0432\u0442\u0440\u0430\u0442\u044C\u0442\u0435 \u0448\u0430\u043D\u0441 \u043A\u0443\u043F\u0438\u0442\u0438 \u043C\u043E\u0434\u0435\u043B\u044C, \u043F\u0440\u043E \u044F\u043A\u0443 \u0432\u0438 \u0434\u0430\u0432\u043D\u043E \u043C\u0440\u0456\u044F\u043B\u0438, \u0437\u0430 \u0432\u0438\u0433\u0456\u0434\u043D\u043E\u044E \u0446\u0456\u043D\u043E\u044E \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456 Apple Room.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0422\u0435\u0445\u043D\u0456\u043A\u0430 Apple \u2013 \u043E\u0441\u043D\u043E\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u0438\u043A \u0456\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439\u043D\u0438\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0439 \u0432 \u0441\u0432\u0456\u0442\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0431\u0435\u0440\u0435 \u0441\u0432\u0456\u0439 \u043F\u043E\u0447\u0430\u0442\u043E\u043A \u0437 \u0434\u0430\u043B\u0435\u043A\u043E\u0433\u043E 1976 \u0440\u043E\u043A\u0443. \u0407\u0457 \u0440\u043E\u0431\u043E\u0442\u0430 \u0431\u0443\u043B\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u043D\u0430 \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0443 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u043E\u0457 \u0442\u0435\u0445\u043D\u0456\u043A\u0438 \u0456 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E\u0433\u043E \u0443\u0441\u0442\u0430\u0442\u043A\u0443\u0432\u0430\u043D\u043D\u044F. \u0417\u0430 \u0440\u043E\u043A\u0438 \u0456\u0441\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u0437\u043D\u0430\u0447\u043D\u043E \u0440\u043E\u0437\u0448\u0438\u0440\u0438\u043B\u0430 \u0441\u0432\u0456\u0439 \u0430\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442. \u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u0434\u043E\u0434\u0430\u043B\u0438 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0438, \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0438, \u0430\u0443\u0434\u0456\u043E\u043F\u043B\u0435\u0454\u0440\u0438 \u0442\u0430 \u0430\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0438. Apple \u0440\u043E\u0437\u0440\u043E\u0431\u0438\u043B\u0438 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0435 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F, \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0456 \u0441\u0438\u0441\u0442\u0435\u043C\u0438, \u0449\u043E \u0454 \u043D\u0435\u0432\u0456\u0434\u2019\u0454\u043C\u043D\u043E\u044E \u0447\u0430\u0441\u0442\u0438\u043D\u043E\u044E \u0457\u0445\u043D\u044C\u043E\u0457 \u0442\u0435\u0445\u043D\u0456\u043A\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041E\u0434\u0438\u043D \u0433\u0430\u0434\u0436\u0435\u0442 \u0432\u043C\u0456\u0449\u0443\u0454 \u043A\u043E\u043B\u043E\u0441\u0430\u043B\u044C\u043D\u0443 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u0442\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C, \u0449\u043E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0434\u043B\u044F \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F, \u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0431\u0456\u0437\u043D\u0435\u0441\u0443, \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u0443. \u0426\u0435 \u0442\u0435\u0445\u043D\u0456\u043A\u0430 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u0433\u043E, \u044F\u043A\u043E\u044E \u043C\u043E\u0436\u043D\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0432\u0436\u0435 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 \u0442\u0435\u0445\u043D\u0456\u043A\u0438 Apple \u0432 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u0456 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0432\u0456\u0434\u043E\u043C\u0438\u043C\u0438 \u0431\u0440\u0435\u043D\u0434\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F Apple \u043D\u0435 \u0431\u043E\u0457\u0442\u044C\u0441\u044F \u0440\u0438\u0437\u0438\u043A\u0443\u0432\u0430\u0442\u0438, \u0440\u0430\u0434\u0438\u043A\u0430\u043B\u044C\u043D\u043E \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u0434\u0438\u0437\u0430\u0439\u043D \u0441\u0432\u043E\u0454\u0457 \u0442\u0435\u0445\u043D\u0456\u043A\u0438, \u0432\u0440\u0430\u0436\u0430\u044E\u0447\u0438 \u0441\u0432\u0456\u0442 \u043D\u043E\u0432\u0438\u043C \u043F\u0440\u043E\u0440\u0438\u0432\u043E\u043C, \u0432\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F\u043C \u0456\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439. \u041A\u043E\u0436\u043D\u0430 \u043D\u043E\u0432\u0438\u043D\u043A\u0430 \u2013 \u0446\u0435 \u0432\u0438\u043A\u043B\u0438\u043A \u0431\u0440\u0435\u043D\u0434\u0430\u043C, \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430\u043C\u0438 \u0432\u043B\u0430\u0441\u043D\u0438\u0445 \u043C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0435\u0439 \u0442\u0430 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0438\u0441\u043E\u043A\u043E\u0457 \u043F\u043B\u0430\u043D\u043A\u0438 \u0434\u043B\u044F \u0434\u043E\u0441\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0440\u0456\u0432\u043D\u044F \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E\u0433\u043E \u0440\u043E\u0437\u0432\u0438\u0442\u043A\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u041F\u0440\u043E \u044F\u043A\u0456\u0441\u0442\u044C \u0442\u0435\u0445\u043D\u0456\u043A\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u043C\u0456\u043B\u044C\u0439\u043E\u043D\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0443 \u0432\u0456\u0434\u043E\u043C\u043E \u043D\u0435 \u0442\u0456\u043B\u044C\u043A\u0438 \u043D\u0430 \u0441\u043B\u043E\u0432\u0430\u0445. \u041A\u043E\u0436\u0435\u043D \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0432\u0456\u0434\u043C\u0456\u0447\u0430\u0454 \u043F\u0440\u043E\u0441\u0442\u043E\u0442\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u043A\u043E\u0440\u0438\u0441\u043D\u0456 \u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u043E\u0434\u0430\u0442\u043A\u0438. \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F Apple \u0437\u0430\u0432\u0436\u0434\u0438 \u043D\u0430\u043C\u0430\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0435 \u0442\u0456\u043B\u044C\u043A\u0438 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u044C\u043D\u0438\u0442\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432, \u0430\u043B\u0435 \u0456 \u0432\u043F\u0440\u043E\u0432\u0430\u0434\u0438\u0442\u0438 \u043D\u043E\u0432\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457, \u0449\u043E \u0440\u0430\u043D\u0456\u0448\u0435 \u0437\u0434\u0430\u0432\u0430\u043B\u0438\u0441\u044F \u043D\u0435\u0440\u0435\u0430\u043B\u044C\u043D\u0438\u043C\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u041C\u0430\u043B\u043E \u0445\u0442\u043E \u043C\u043E\u0436\u0435 \u0437\u0432\u0430\u0436\u0438\u0442\u0438\u0441\u044F \u043D\u0430 \u0442\u0430\u043A\u0438\u0439 \u0440\u0438\u0437\u0438\u043A\u043E\u0432\u0430\u043D\u0438\u0439 \u043A\u0440\u043E\u043A, \u0430\u0434\u0436\u0435 \u0437\u0430\u0432\u0436\u0434\u0438 \u0454 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u0457, \u0449\u043E \u043D\u0435 \u0437\u0432\u0438\u043A\u043B\u0430 \u0434\u043E \u0437\u043C\u0456\u043D. \u0426\u044F \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u0454, \u0449\u043E \u043D\u0430 \u043F\u0435\u0440\u0448\u043E\u043C\u0443 \u043F\u043B\u0430\u043D\u0456 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0456\u0432 Apple \u0454 \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441, \u044F\u043A\u0456\u0441\u0442\u044C \u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0422\u0435\u0445\u043D\u0456\u043A\u0430 \u044F\u0431\u043B\u0443\u0447\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0443 \u043C\u0430\u0454 \u043F\u043E\u0442\u0443\u0436\u043D\u0438\u0439 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B, \u0449\u043E \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044F\u0454 \u043F\u043E\u0442\u0440\u0435\u0431\u0438 \u0441\u0443\u0447\u0430\u0441\u043D\u043E\u0457 \u043B\u044E\u0434\u0438\u043D\u0438. \u041A\u043E\u0436\u043D\u0430 \u043D\u043E\u0432\u0430 \u043C\u043E\u0434\u0435\u043B\u044C \u043C\u0430\u0454 \u0441\u0442\u0438\u043B\u044C\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u0432\u0438\u0442\u043E\u043D\u0447\u0435\u043D\u0443 \u0444\u043E\u0440\u043C\u0443, \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u0434\u043E\u043F\u043E\u0432\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0440\u0456\u0448\u0435\u043D\u043D\u044F\u043C\u0438. \u0412\u043E\u043D\u0430 \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0432\u0441\u0456\u043C \u2013 \u0430\u043A\u0442\u0438\u0432\u043D\u0456\u0439 \u0434\u0456\u0432\u0447\u0438\u043D\u0456, \u0454\u0444\u0435\u043A\u0442\u043D\u043E\u043C\u0443 \u043F\u0430\u0440\u0443\u0431\u043A\u0443 \u0447\u0438 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u043C\u0443 \u0431\u0456\u0437\u043D\u0435\u0441\u043C\u0435\u043D\u0443. \u041A\u043E\u0436\u0435\u043D \u0437\u043D\u0430\u0439\u0434\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u0435 \u0434\u0438\u0437\u0430\u0439\u043D, \u044F\u043A\u0438\u0439 \u0434\u043E\u043F\u043E\u0432\u043D\u0438\u0442\u044C \u0439\u043E\u0433\u043E \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0456\u0441\u0442\u044C \u0442\u0430 \u0434\u043E\u0434\u0430\u0441\u0442\u044C \u0436\u0438\u0442\u0442\u044E \u043D\u043E\u0432\u0438\u0445 \u044F\u0441\u043A\u0440\u0430\u0432\u0438\u0445 \u0431\u0430\u0440\u0432. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@charset \"UTF-8\";\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, serif;\n  background-color: #c6c6c6;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\ndiv[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nfooter[_ngcontent-%COMP%] {\n  text-align: center;\n  flex-grow: 0;\n  padding: 20px 0;\n}\nmain[_ngcontent-%COMP%] {\n  height: 100vh;\n  flex: 1;\n}\na[_ngcontent-%COMP%] {\n  color: #b95995;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #b96f90;\n}\n.holder[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 1200px;\n  margin: 20px auto 0;\n  padding: 20px;\n}\n\n.limited[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow: hidden;\n  position: relative;\n}\n.limited.l-200[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n\n.limited.l-300[_ngcontent-%COMP%] {\n  max-height: 300px;\n}\n.limited[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white 80%);\n  width: 100%;\n  height: 60px;\n  opacity: 1;\n  transition: 0.3s;\n}\n.read-more-checker[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n}\n.read-more-checker[_ngcontent-%COMP%]:checked    ~ .limited[_ngcontent-%COMP%] {\n  max-height: none;\n}\n.read-more-checker[_ngcontent-%COMP%]:checked    ~ .limited[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: 0.3s;\n}\n.read-more-checker[_ngcontent-%COMP%]    ~ .read-more-button[_ngcontent-%COMP%]:before {\n  content: \"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \";\n}\n.read-more-checker[_ngcontent-%COMP%]:checked    ~ .read-more-button[_ngcontent-%COMP%]:before {\n  content: \"\u0421\u043A\u0440\u0438\u0442\u0438\";\n}\n.read-more-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  margin: 0 auto;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  width: 20%;\n  -webkit-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.styled-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  padding-left: 18px;\n  margin-bottom: 5px;\n  position: relative;\n}\n.styled-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #232323;\n  text-decoration: underline;\n}\n@media screen and (max-width: 1300px) {\n  .read-more-button[_ngcontent-%COMP%] {\n    width: 23%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .read-more-button[_ngcontent-%COMP%] {\n    width: 49%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hvcnQtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsa0JBQUE7QUFDQTs7RUFFRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNEQUFBO0VBQ0EseUJBQUE7RUFDQSxtWUFBQTtBQUdGO0FBREE7Ozs7RUFJRSxzQkFBQTtBQUlGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBS0Y7QUFIQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0FBTUY7QUFKQTtFQUNFLGNBQUE7QUFPRjtBQUxBO0VBQ0UsY0FBQTtBQVFGO0FBTkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVNGO0FBUEEseUNBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVVGO0FBUkE7RUFDRSxpQkFBQTtBQVdGO0FBVEEsZ0NBQUE7QUFDQTtFQUNFLGlCQUFBO0FBWUY7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlFQUFBO0VBS0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFTRjtBQVBBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBVUY7QUFSQTtFQUNFLGdCQUFBO0FBV0Y7QUFUQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQVlGO0FBVkE7RUFDRSw2QkFBQTtBQWFGO0FBVkE7RUFDRSxpQkFBQTtBQWFGO0FBWEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxSUFBQTtBQWFGO0FBUEE7RUFDSSxnQkFBQTtBQVVKO0FBUEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUEE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFVSjtBQVBBO0VBQ0U7SUFFRSxVQUFBO0VBU0Y7QUFDRjtBQUpBO0VBRUE7SUFFRSxVQUFBO0VBSUE7QUFDRiIsImZpbGUiOiJzaG9ydC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogQ29tbW9uIHN0eWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmM2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgdmlld0JveD0nMCAwIDYwIDYwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmMGYwZjAnIGZpbGwtb3BhY2l0eT0nMC40JyUzRSUzQ3BhdGggZD0nTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuZGl2LFxuZm9vdGVyLFxuaGVhZGVyLFxubWFpbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4OiAxO1xufVxuXG5hIHtcbiAgY29sb3I6ICNiOTU5OTU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2I5NmY5MDtcbn1cblxuLmhvbGRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogU3R5bGVzIGZvciB0ZXh0IGJveCB3aXRoIG1vcmUgYnV0dG9uICovXG4ubGltaXRlZCB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saW1pdGVkLmwtMjAwIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbi8qIEFkZCB5b3VyIHNpemVzIGZvciB0ZXh0IGJveCAqL1xuLmxpbWl0ZWQubC0zMDAge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLmxpbWl0ZWQgLmJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCB3aGl0ZSA4MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucmVhZC1tb3JlLWNoZWNrZXIge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yZWFkLW1vcmUtY2hlY2tlcjpjaGVja2VkIH4gLmxpbWl0ZWQge1xuICBtYXgtaGVpZ2h0OiBub25lO1xufVxuXG4ucmVhZC1tb3JlLWNoZWNrZXI6Y2hlY2tlZCB+IC5saW1pdGVkIC5ib3R0b20ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucmVhZC1tb3JlLWNoZWNrZXIgfiAucmVhZC1tb3JlLWJ1dHRvbjpiZWZvcmUge1xuICBjb250ZW50OiBcItCf0L7QutCw0LfQsNGC0Lgg0J/QvtCy0L3RltGB0YLRjiBcIjtcbn1cblxuLnJlYWQtbW9yZS1jaGVja2VyOmNoZWNrZWQgfiAucmVhZC1tb3JlLWJ1dHRvbjpiZWZvcmUge1xuICBjb250ZW50OiBcItCh0LrRgNC40YLQuFwiO1xufVxuXG4ucmVhZC1tb3JlLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAyMCU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zdHlsZWQtdGV4dCB1bCBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdHlsZWQtdGV4dCB1bCBsaSBhIHtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLnJlYWQtbW9yZS1idXR0b24ge1xuICAgIHdpZHRoOiAyMyU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZWFkLW1vcmUtYnV0dG9uIHtcbiAgICB3aWR0aDogNDklO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "nS89":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/carusel/carusel.component.ts ***!
  \*********************************************************/
/*! exports provided: CaruselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaruselComponent", function() { return CaruselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_carusel_carusel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/carusel/carusel.service */ "sghH");
/* harmony import */ var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-hm-carousel */ "joFe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CaruselComponent_article_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const avatar_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + (avatar_r11 == null ? null : avatar_r11.img) + ")");
} }
function CaruselComponent_ng_template_4_Template(rf, ctx) { }
function CaruselComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const avatar_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + (avatar_r13 == null ? null : avatar_r13.img) + ")");
} }
function CaruselComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CaruselComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CaruselComponent_12_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const model_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", model_r17.index === model_r17.currentIndex);
} }
function CaruselComponent_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CaruselComponent_12_ng_template_0_Template, 1, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} }
class CaruselComponent {
    // avatars = []
    constructor(caruselServices) {
        this.caruselServices = caruselServices;
        this.follow = true;
        this.enablePan = true;
        this.index = 2;
        this.speed = 3000;
        this.infinite = true;
        this.direction = 'right';
        this.directionToggle = true;
        this.autoplay = true;
        this.arrCaruser = [];
        this.breakpoint = [
            {
                width: 500,
                number: 1
            },
            {
                width: 700,
                number: 1
            },
            {
                width: 800,
                number: 2
            },
            {
                width: 1024,
                number: 2
            },
        ];
        this.avatars = this.arrCaruser.map((x, i) => {
            const num = i;
            // const num = Math.floor(Math.random() * 1000);
            return {
                url: x,
                title: `${num}`
            };
        });
    }
    ngOnInit() {
        this.getloader();
        // console.log(this.avatars);
    }
    getloader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.caruselServices.getCarysel().then(res => {
                //  const el =   res.map(el => el.img)
                this.arrCaruser = res;
            });
        });
    }
    toggleDirection($event) {
        this.direction = this.directionToggle ? 'right' : 'left';
    }
    indexChanged(index) {
    }
}
CaruselComponent.ɵfac = function CaruselComponent_Factory(t) { return new (t || CaruselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_carusel_carusel_service__WEBPACK_IMPORTED_MODULE_2__["CaruselService"])); };
CaruselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CaruselComponent, selectors: [["app-carusel"]], decls: 13, vars: 13, consts: [["show-num", "auto", 1, "carousel", "c-accent", 3, "ngModel", "autoplay-speed", "autoplay", "autoplay-direction", "infinite", "between-delay", "mourse-enable", "breakpoint", "data", "aniTime", "ngModelChange"], ["carousel", ""], ["ngx-hm-carousel-container", "", 1, "content"], ["class", "item ", "ngx-hm-carousel-item", "", 4, "ngFor", "ngForOf"], ["infiniteContainer", ""], ["carouselContent", ""], ["carouselPrev", ""], ["carouselNext", ""], [4, "ngIf"], ["ngx-hm-carousel-item", "", 1, "item"], [1, "img"], [1, "item"], [1, "img1"], [1, "click-area"], [1, "material-icons"], ["carouselDot", ""], [1, "ball", "bg-accent"]], template: function CaruselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-hm-carousel", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CaruselComponent_Template_ngx_hm_carousel_ngModelChange_0_listener($event) { return ctx.index = $event; })("ngModelChange", function CaruselComponent_Template_ngx_hm_carousel_ngModelChange_0_listener($event) { return ctx.index = $event; })("ngModelChange", function CaruselComponent_Template_ngx_hm_carousel_ngModelChange_0_listener($event) { return ctx.indexChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CaruselComponent_article_3_Template, 2, 2, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CaruselComponent_ng_template_4_Template, 0, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaruselComponent_ng_template_6_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CaruselComponent_ng_template_8_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CaruselComponent_ng_template_10_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CaruselComponent_12_Template, 2, 0, undefined, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.index)("ngModel", ctx.index)("autoplay-speed", ctx.speed)("autoplay", ctx.autoplay)("autoplay-direction", ctx.direction)("infinite", ctx.infinite)("between-delay", 2000)("mourse-enable", true)("breakpoint", ctx.breakpoint)("data", ctx.arrCaruser)("aniTime", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.arrCaruser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.arrCaruser.length > 0);
    } }, directives: [ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_3__["NgxHmCarouselComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_3__["NgxHmCarouselItemDirective"]], styles: [".aniT[_ngcontent-%COMP%] {\n  transition: all 1s linear;\n}\n\n.transition[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out !important;\n}\n\n.carousel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.carousel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  padding: 0.5em;\n}\n\n.carousel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n  border-radius: 10px;\n}\n\n.carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n\n.carousel[_ngcontent-%COMP%]   .ball[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n\n.carousel[_ngcontent-%COMP%]   .ball.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.carousel[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 5px;\n  background: #ff5252;\n}\n\n.carousel[_ngcontent-%COMP%]   .click-area[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n\n.carousel[_ngcontent-%COMP%]   .click-area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .carousel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 0.5rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FydXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtBQUNGOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUNJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ047O0FBRU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFSOztBQUtFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFISjs7QUFLSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUhOOztBQU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTEo7O0FBT0k7RUFDRSxVQUFBO0FBTE47O0FBU0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBUko7O0FBVUk7RUFDRSxjQUFBO0FBUk47O0FBYUE7RUFFSTtJQUNJLDZCQUFBO0VBWE47QUFDRiIsImZpbGUiOiJjYXJ1c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuaVQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbi50cmFuc2l0aW9uIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgXHJcblxyXG4gICAgICAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIC5pbWcxIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYWxsIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAmLnZpc2libGUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmNTI1MjtcclxuICB9XHJcblxyXG4gIC5jbGljay1hcmVhIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDNlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgLmNhcm91c2VsIC5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "pCH4":
/*!***********************************************!*\
  !*** ./src/app/shared/models/order.models.ts ***!
  \***********************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Order {
    constructor(id, userName, lastName, userPhone, email, date, orders, menu, street, adress, novaCisty, novaAddres) {
        this.id = id;
        this.userName = userName;
        this.lastName = lastName;
        this.userPhone = userPhone;
        this.email = email;
        this.date = date;
        this.orders = orders;
        this.menu = menu;
        this.street = street;
        this.adress = adress;
        this.novaCisty = novaCisty;
        this.novaAddres = novaAddres;
    }
}


/***/ }),

/***/ "qjlc":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-hover/nav-hover.component.ts ***!
  \*************************************************************/
/*! exports provided: NavHoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHoverComponent", function() { return NavHoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function NavHoverComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class NavHoverComponent {
    constructor() {
        this.fot = ['1', '2', '3', '4'];
    }
    ngOnInit() {
    }
}
NavHoverComponent.ɵfac = function NavHoverComponent_Factory(t) { return new (t || NavHoverComponent)(); };
NavHoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavHoverComponent, selectors: [["app-nav-hover"]], decls: 2, vars: 1, consts: [[1, "block"], ["style", "margin-right: 20px;", 4, "ngFor", "ngForOf"], [2, "margin-right", "20px"]], template: function NavHoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavHoverComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fot);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 10rem;\n  background-color: seagreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtaG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJuYXYtaG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2VhZ3JlZW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "rNc0":
/*!********************************!*\
  !*** ./src/app/mysor/mysor.ts ***!
  \********************************/
/*! exports provided: mysor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mysor", function() { return mysor; });
const mysor = [
    { lat: 49.84450921500758, lng: 24.030359526999376, name: 'м. Львів, вул. Гавришкевича, 5' },
    { lat: 49.80750605821097, lng: 23.978081613505314, name: 'м. Львів, ТРЦ "Victoria Gardens", вул. Кульпарківська, 226а' },
    { lat: 49.870122183994425, lng: 24.022713540493065, name: 'м. Львів, СТРЦ "Spartak", вул. Гетьмана Мазепи, 1Б' },
    { lat: 50.02923106043581, lng: 36.32805878467641, name: 'м. Харків, ТЦ "Караван", вул. Героїв Праці, 7' },
    { lat: 50.41437978794401, lng: 30.519305411674438, name: 'м. Київ, вул. Казимира Малевича, 86П, БЦ "Либідь", 2-й поверх, офіс 204' },
    { lat: 49.55232132839582, lng: 25.593363569318978, name: 'м. Тернопіль вул. Сагайдачного, 7' },
    { lat: 49.575622334554545, lng: 25.638798182812565, name: 'м. Тернопіль ТРЦ "Подоляни" вул. Текстильна 28ч' },
    { lat: 48.25887422307149, lng: 25.956524067429722, name: 'м. Чернівці, ТЦ "DEPOt" Головна вулиця, 265А' },
    { lat: 46.49800553165598, lng: 30.71778871340605, name: 'м. Одеса, вул. Одарія, 3 Магазин 74' },
    { lat: 46.63674324556001, lng: 32.61364752875294, name: 'м. Херсон, вул. Декабристів, 10' },
    { lat: 47.909749176414884, lng: 33.38887224043356, name: 'м. Кривий Ріг, проспект Миру, 33' }
];


/***/ }),

/***/ "rqfx":
/*!*************************************************************!*\
  !*** ./src/app/components/snack-bar/snack-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_models_category_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/category.models */ "ukUI");




class SnackBarComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        // this.dialogRef.close();
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
SnackBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SnackBarComponent, selectors: [["app-snack-bar"]], decls: 2, vars: 1, template: function SnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
    } }, styles: ["p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbmFjay1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNuYWNrLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "rxGk":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/description,models.ts ***!
  \*****************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
class Description {
    constructor(id, uuid, category, title, description, img) {
        this.id = id;
        this.uuid = uuid;
        this.category = category;
        this.title = title;
        this.description = description;
        this.img = img;
    }
}


/***/ }),

/***/ "sJdk":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-carusel/admin-carusel.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminCaruselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCaruselComponent", function() { return AdminCaruselComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_models_carysel_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/carysel.models */ "/RPv");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_shared_services_carusel_carusel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/carusel/carusel.service */ "sghH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function AdminCaruselComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCaruselComponent_tr_29_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.editCarysel(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCaruselComponent_tr_29_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.deleteCarysel(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.url);
} }
class AdminCaruselComponent {
    constructor(formBolider, storage, caryselServices) {
        this.formBolider = formBolider;
        this.storage = storage;
        this.caryselServices = caryselServices;
        this.formGroup = this.formBolider.group({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
        this.loaderCarysel();
    }
    loaderCarysel() {
        this.caryselServices.getCarysel().then(res => {
            this.arrCarysel = res;
            console.log(res);
        });
    }
    addCarysel(value) {
        const carysel = Object.assign({}, new src_app_shared_models_carysel_models__WEBPACK_IMPORTED_MODULE_2__["Carysel"](1, this.img, value.url));
        if (!this.isText) {
            if (this.arrCarysel.length > 0) {
                carysel.id = this.arrCarysel.slice(-1)[0].id + 1;
            }
            this.caryselServices.addCarysel(carysel, `carysel ${carysel.id}`).then(res => {
                this.loaderCarysel();
            });
        }
        if (this.isText) {
            carysel.id = this.idCarysel;
            this.caryselServices.updateCarysel(`carysel ${carysel.id}`, carysel).then(() => {
                this.loaderCarysel();
            });
            this.isText = false;
        }
        this.img = '';
        this.formGroup.reset();
        this.uploadProgress = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(0);
    }
    uploadFile(event) {
        const myId = uuid__WEBPACK_IMPORTED_MODULE_3__["v4"]();
        this.isdisabled = true;
        this.formGroup.value.img = '';
        if (this.img) {
            this.storage.refFromURL(this.img).delete();
            this.img = '';
        }
        console.log(event);
        const file = event.target.files[0];
        const filePath = `carysel/${myId}.${file.type.split('/')[1]}`;
        const task = this.storage.upload(filePath, file);
        this.uploadProgress = task.percentageChanges();
        task.then(result => {
            this.storage.ref(`carysel/${result.metadata.name}`).getDownloadURL().subscribe(img => {
                this.img = img;
                this.uploadProgress.subscribe(res => {
                    if (res === 100) {
                        this.isdisabled = false;
                    }
                });
            });
        });
        //  this.formGroup.patchValue({img: ''})
    }
    editCarysel(item) {
        this.idCarysel = item.id;
        this.isText = true;
        this.formGroup.patchValue({
            url: item.url
        });
        this.img = item.img;
    }
    deleteCarysel(item) {
        console.log(item);
        this.caryselServices.deleteCarysel(`carysel ${item.id}`).then(() => {
            this.loaderCarysel();
        });
        if (item.img) {
            this.storage.refFromURL(item.img).delete();
        }
    }
}
AdminCaruselComponent.ɵfac = function AdminCaruselComponent_Factory(t) { return new (t || AdminCaruselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_carusel_carusel_service__WEBPACK_IMPORTED_MODULE_6__["CaruselService"])); };
AdminCaruselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminCaruselComponent, selectors: [["app-admin-carusel"]], decls: 30, vars: 8, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["formControlName", "url", "matInput", "", "name", "url"], ["for", "file-carysel", 1, "custom-file-upload"], ["formControlName", "img", "id", "file-carysel", "type", "file", 3, "change"], ["mode", "determinate", 3, "value"], ["id", ""], ["type", "submit", "mat-raised-button", "", 1, "margin", 3, "disabled", "color", "textContent"], [1, "table", "block"], [4, "ngFor", "ngForOf"], ["alt", "", 2, "height", "50px", 3, "src"], ["mat-raised-button", "", "color", "accent", 1, "res", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function AdminCaruselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminCaruselComponent_Template_form_ngSubmit_0_listener() { return ctx.addCarysel(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AdminCaruselComponent_Template_input_change_7_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "mat-progress-bar", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Img");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AdminCaruselComponent_tr_29_Template, 13, 3, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 6, ctx.uploadProgress));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isdisabled || ctx.formGroup.invalid)("color", ctx.isText ? "accent" : "primary")("textContent", ctx.isText ? "Save" : "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.arrCarysel);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jYXJ1c2VsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "sMq3":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/lenght-numver.pipe.ts ***!
  \****************************************************/
/*! exports provided: LenghtNumverPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenghtNumverPipe", function() { return LenghtNumverPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LenghtNumverPipe {
    transform(value, arr, state) {
        if (!value)
            return null;
        if (!arr)
            return [];
        if (!state)
            return [];
        const fil = arr.filter(category => category.category === state.toLowerCase());
        let f = fil.length;
        let number = 0;
        while (number === f) {
            return number += 1;
        }
        return 0;
    }
}
LenghtNumverPipe.ɵfac = function LenghtNumverPipe_Factory(t) { return new (t || LenghtNumverPipe)(); };
LenghtNumverPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "lenghtNumver", type: LenghtNumverPipe, pure: true });


/***/ }),

/***/ "sghH":
/*!************************************************************!*\
  !*** ./src/app/shared/services/carusel/carusel.service.ts ***!
  \************************************************************/
/*! exports provided: CaruselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaruselService", function() { return CaruselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class CaruselService {
    constructor(firestory) {
        this.firestory = firestory;
    }
    getApple() {
        return this.firestory.collection('apple').ref.orderBy('id', 'asc').get().then(res => res.docs.map(el => el.data()));
    }
    getCarysel() {
        return this.firestory.collection('carysel').ref.orderBy('id', 'asc').get().then(res => res.docs.map(el => el.data()));
    }
    addCarysel(carysel, num) {
        return this.firestory.collection('carysel').doc(num).set(carysel);
    }
    deleteCarysel(id) {
        return this.firestory.collection('carysel').doc(id).delete();
    }
    updateCarysel(id, carysel) {
        return this.firestory.collection('carysel').doc(id).set(carysel);
    }
}
CaruselService.ɵfac = function CaruselService_Factory(t) { return new (t || CaruselService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
CaruselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CaruselService, factory: CaruselService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tVP0":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/description/description.service.ts ***!
  \********************************************************************/
/*! exports provided: DescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionService", function() { return DescriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class DescriptionService {
    constructor(firestory) {
        this.firestory = firestory;
    }
    getDescription() {
        return this.firestory.collection('description').ref.orderBy('id', 'asc').get().then(res => res.docs.map(el => el.data()));
    }
    addDescription(description, num) {
        return this.firestory.collection('description').doc(num).set(description);
    }
    deleteDescription(id) {
        return this.firestory.collection('description').doc(id).delete();
    }
    updateDescription(id, description) {
        return this.firestory.collection('description').doc(id).set(description);
    }
}
DescriptionService.ɵfac = function DescriptionService_Factory(t) { return new (t || DescriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
DescriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DescriptionService, factory: DescriptionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ukUI":
/*!**************************************************!*\
  !*** ./src/app/shared/models/category.models.ts ***!
  \**************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor(id, title, img, category) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.category = category;
    }
}


/***/ }),

/***/ "v/O3":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/value.pipe.ts ***!
  \********************************************/
/*! exports provided: ValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuePipe", function() { return ValuePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ValuePipe {
    transform(value) {
        return value === null || value === void 0 ? void 0 : value.comments;
    }
}
ValuePipe.ɵfac = function ValuePipe_Factory(t) { return new (t || ValuePipe)(); };
ValuePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "value", type: ValuePipe, pure: true });


/***/ }),

/***/ "v8Oh":
/*!*********************************************!*\
  !*** ./src/app/shared/models/mac.models.ts ***!
  \*********************************************/
/*! exports provided: Mac */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mac", function() { return Mac; });
class Mac {
    constructor(id, processor, nuclei, cpu, videoCard, color, year, ram, display, category, uuid) {
        this.id = id;
        this.processor = processor;
        this.nuclei = nuclei;
        this.cpu = cpu;
        this.videoCard = videoCard;
        this.color = color;
        this.year = year;
        this.ram = ram;
        this.display = display;
        this.category = category;
        this.uuid = uuid;
    }
}


/***/ }),

/***/ "vGGw":
/*!******************************************!*\
  !*** ./src/app/shared/pipes/arr.pipe.ts ***!
  \******************************************/
/*! exports provided: ArrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrPipe", function() { return ArrPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ArrPipe {
    transform(value, name) {
        if (!value) {
            return '';
        }
        switch (name) {
            case 'categoryProduct':
                return value.reduce((acum, el, arr) => acum + ',' + el.categoryProduct, '').slice(1);
            case 'category':
                return value.reduce((acum, el, arr) => acum + ',' + el.category, '').slice(1);
            case 'count':
                return value.reduce((acum, el, arr) => acum + ',' + el.count + 'шт', '').slice(1);
            case 'price':
                const param = value.reduce((acum, el, arr) => acum + ',' + +el.price / el.dollarPrice, '').slice(1);
                return param;
            case 'грн':
                return value + ' Грн';
            case 'images':
                return value.map(el => el.image);
        }
    }
}
ArrPipe.ɵfac = function ArrPipe_Factory(t) { return new (t || ArrPipe)(); };
ArrPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "arr", type: ArrPipe, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_carusel_admin_carusel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin-carusel/admin-carusel.component */ "sJdk");
/* harmony import */ var _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin-category/admin-category.component */ "JQyM");
/* harmony import */ var _admin_admin_comments_admin_comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin-comments/admin-comments.component */ "BRtY");
/* harmony import */ var _admin_admin_detali_admin_detali_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin-detali/admin-detali.component */ "AeD1");
/* harmony import */ var _admin_admin_gallery_admin_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin-gallery/admin-gallery.component */ "41zX");
/* harmony import */ var _admin_admin_order_admin_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-order/admin-order.component */ "m4x3");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "lRFV");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _pages_apple_details_apple_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/apple-details/apple-details.component */ "A95i");
/* harmony import */ var _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/basket/basket.component */ "zYrN");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/category/category.component */ "b7R5");
/* harmony import */ var _pages_gallery_ivybox_gallery_ivybox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/gallery-ivybox/gallery-ivybox.component */ "TAK2");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/guards/login.guard */ "mImb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'basket', component: _pages_basket_basket_component__WEBPACK_IMPORTED_MODULE_10__["BasketComponent"] },
    { path: 'galleryUser', component: _pages_gallery_ivybox_gallery_ivybox_component__WEBPACK_IMPORTED_MODULE_12__["GalleryIvyboxComponent"] },
    { path: 'category/:category', component: _pages_category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"] },
    { path: 'category/:category/:apple', component: _pages_category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"] },
    { path: 'category/:category/:apple/:id', component: _pages_apple_details_apple_details_component__WEBPACK_IMPORTED_MODULE_9__["AppleDetailsComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], canActivate: [_shared_guards_login_guard__WEBPACK_IMPORTED_MODULE_14__["LoginGuard"]], children: [
            { path: '', pathMatch: 'full', redirectTo: 'category' },
            { path: 'category', component: _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_2__["AdminCategoryComponent"] },
            { path: 'comments', component: _admin_admin_comments_admin_comments_component__WEBPACK_IMPORTED_MODULE_3__["AdminCommentsComponent"] },
            { path: 'carusel', component: _admin_admin_carusel_admin_carusel_component__WEBPACK_IMPORTED_MODULE_1__["AdminCaruselComponent"] },
            { path: 'gallery', component: _admin_admin_gallery_admin_gallery_component__WEBPACK_IMPORTED_MODULE_5__["AdminGalleryComponent"] },
            { path: 'products', component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_7__["AdminProductsComponent"] },
            { path: 'detali', component: _admin_admin_detali_admin_detali_component__WEBPACK_IMPORTED_MODULE_4__["AdminDetaliComponent"] },
            { path: 'order', component: _admin_admin_order_admin_order_component__WEBPACK_IMPORTED_MODULE_6__["AdminOrderComponent"] },
        ] },
    { path: '**', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yz5t":
/*!***********************************************!*\
  !*** ./src/app/shared/models/apple.models.ts ***!
  \***********************************************/
/*! exports provided: Apple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apple", function() { return Apple; });
class Apple {
    // public detalis = {};
    constructor(id, uuid, count, title, price, img, category, categoryProduct, dollarPrice, color, memory) {
        this.id = id;
        this.uuid = uuid;
        this.count = count;
        this.title = title;
        this.price = price;
        this.img = img;
        this.category = category;
        this.categoryProduct = categoryProduct;
        this.dollarPrice = dollarPrice;
        this.color = color;
        this.memory = memory;
    }
}


/***/ }),

/***/ "zCCq":
/*!********************************************************!*\
  !*** ./src/app/shared/services/order/order.service.ts ***!
  \********************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class OrderService {
    constructor(firestory) {
        this.firestory = firestory;
        this.basket = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.$arrOrder = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('basket')));
    }
    getOrder() {
        return this.firestory.collection('order').ref.orderBy('id', 'asc').get().then(res => res.docs.map(el => el.data()));
    }
    addOrder(order, num) {
        return this.firestory.collection('order').doc(num).set(order);
    }
    deleteOrder(id) {
        return this.firestory.collection('order').doc(id).delete();
    }
    updateOrder(id, order) {
        return this.firestory.collection('order').doc(id).set(order);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zYrN":
/*!**************************************************!*\
  !*** ./src/app/pages/basket/basket.component.ts ***!
  \**************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_models_order_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/order.models */ "pCH4");
/* harmony import */ var src_app_mysor_mysor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/mysor/mysor */ "rNc0");
/* harmony import */ var src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/snack-bar/snack-bar.component */ "rqfx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/order/order.service */ "zCCq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/apple/apple.service */ "7WFE");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_maps_nova_maps_nova_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/maps-nova/maps-nova.component */ "W6Sa");
/* harmony import */ var _components_maps_maps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/maps/maps.component */ "I7oR");
/* harmony import */ var _shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pipes/kyrs.pipe */ "S8YT");
/* harmony import */ var _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/fixed.pipe */ "ItGS");

















function BasketComponent_div_2_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketComponent_div_2_div_17_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const order_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.deletApple(order_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " $");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketComponent_div_2_div_17_Template_span_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const order_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.productCount(order_r6, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketComponent_div_2_div_17_Template_span_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const order_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.productCount(order_r6, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "b", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + order_r6.img + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", order_r6.categoryProduct, " ", order_r6.memory, " ", order_r6.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 12, order_r6.price / order_r6.dollarPrice)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 14, order_r6.price), " \u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", order_r6.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 18, order_r6.count * order_r6.price / order_r6.dollarPrice)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 20, order_r6.count * order_r6.price), "");
} }
function BasketComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u0422\u043E\u0432\u0430\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0426\u0456\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, BasketComponent_div_2_div_17_Template, 44, 22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "299");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\u0417\u0430\u0433\u0430\u043B\u043E\u043C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\u0433\u0440\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 5, ctx_r0.totalPrice)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 7, ctx_r0.totalUk));
} }
function BasketComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-maps-nova", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx_r1.formGroup);
} }
function BasketComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "em", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u041C\u043E\u0436\u043B\u0438\u0432\u0430 \u043F\u043E \u043C. \u041B\u044C\u0432\u0456\u0432. \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430. \u041E\u043F\u043B\u0430\u0442\u0430 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u0456 \u0442\u043E\u0432\u0430\u0440\u0443. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u0410\u0434\u0440\u0435\u0441\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u041D\u043E\u043C\u0435\u0440 \u0431\u0443\u0434\u0438\u043D\u043A\u0443 (\u0442\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BasketComponent_p_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-maps", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx_r3.formGroup);
} }
function BasketComponent_tr_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "kyrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", order_r11.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", order_r11.categoryProduct, " ", order_r11.memory, " ", order_r11.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 8, order_r11.price / order_r11.dollarPrice)), " \u00D7 ", order_r11.count, " ");
} }
class BasketComponent {
    constructor(orderServices, router, formBolider, appleServices, dialog) {
        this.orderServices = orderServices;
        this.router = router;
        this.formBolider = formBolider;
        this.appleServices = appleServices;
        this.dialog = dialog;
        this.orders = [];
        this.active = '1';
        this.orderArr = [];
        // public activeItem: string;
        this.formGroup = this.formBolider.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            maps: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((src_app_mysor_mysor__WEBPACK_IMPORTED_MODULE_2__["mysor"][0])),
            adress: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            nova: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Львів'),
            novaMaps: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Відділення №1: вул. Городоцька, 359')
        });
    }
    ngOnInit() {
        this.getOrder();
        this.total();
        this.getloader();
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["SnackBarComponent"], {
            width: '250px',
            data: { title: 'Ордер прийнятий' }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    activeItem(value) {
        this.active = value;
    }
    getloader() {
        this.orderServices.getOrder().then(order => {
            // console.log(apple);
            this.orderArr = order;
            //  console.log(apple, 'aplle');
        });
    }
    getOrder() {
        if (localStorage.length > 0 && localStorage.getItem('basket')) {
            this.orders = JSON.parse(localStorage.getItem('basket'));
        }
    }
    deletApple(item) {
        const index = this.orders.findIndex(prod => prod.id === item.id);
        this.orders.splice(index, 1);
        this.total();
        this.updateLocalProducts();
        this.orderServices.basket.next(this.orders);
        if (JSON.parse(localStorage.getItem('basket')).length === 0) {
            this.router.navigate(['category/', item.category]);
        }
    }
    updateLocalProducts() {
        localStorage.setItem('basket', JSON.stringify(this.orders));
        this.total();
    }
    productCount(product, status) {
        if (status) {
            product.count++;
        }
        else {
            if (product.count > 1) {
                product.count--;
            }
        }
        this.total();
        this.updateLocalProducts();
        this.orderServices.basket.next(this.orders);
    }
    total() {
        this.totalPrice = this.orders.reduce((total, elem) => {
            return total + (elem.price / elem.dollarPrice * elem.count);
        }, 0);
        this.totalUk = this.orders.reduce((total, elem) => {
            return total + (elem.price * elem.count);
        }, 0);
    }
    addOrder(form) {
        const order = Object.assign({}, new src_app_shared_models_order_models__WEBPACK_IMPORTED_MODULE_1__["Order"](1, form.name, form.lastName, form.number, form.email, new Date, this.orders, this.active, form.maps, form.adress, form.nova, form.novaMaps));
        console.log(order);
        if (this.orderArr.length > 0) {
            order.id = this.orderArr.slice(-1)[0].id + 1;
        }
        this.orderServices.addOrder(order, `order ${order.id}`).then(() => {
            this.getloader();
        });
        this.formGroup.reset();
        this.orders = [];
        localStorage.setItem('basket', JSON.stringify(this.orders));
        this.orderServices.basket.next(this.orders);
        // const find =  this.orderArr.find(el => el).orders.find(el => el)
        if (JSON.parse(localStorage.getItem('basket')).length === 0) {
            this.router.navigate(['home']);
            setTimeout(() => {
                this.openDialog();
            }, 1000);
        }
    }
}
BasketComponent.ɵfac = function BasketComponent_Factory(t) { return new (t || BasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_apple_apple_service__WEBPACK_IMPORTED_MODULE_7__["AppleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
BasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BasketComponent, selectors: [["app-basket"]], decls: 102, vars: 22, consts: [[1, "container"], [1, "row"], ["class", "col-lg-12 mt-5", 4, "ngIf"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "row-block"], [1, "width"], [1, "payItems", "smallSlideLeft", "animationDelay-1", "pading"], [1, "h6"], [1, "col-6", "form-group"], [1, "example-full-width"], ["type", "text", "formControlName", "name", "matInput", "", "name", "price"], ["type", "text", "formControlName", "lastName", "matInput", "", "name", "price"], ["matPrefix", ""], ["type", "tel", "formControlName", "number", "matInput", "", "placeholder", "__-__-___"], ["type", "email", "formControlName", "email", "matInput", "", "name", "price"], [1, "checkout-step.step-shipping"], [1, "checkout-options", "shipping", "cartOS__form", "mara"], [1, "shipping-1", 3, "click"], ["src", "../../../assets/images/delivery/placeholder (1).svg", 1, "method-logo"], ["type", "radio", "name", "shipping_id", "value", "1", "checked", ""], [1, "rate"], [1, "price2", "nowrap"], [1, "price", "nowrap"], [1, "shipping-9", 3, "click"], ["src", "../../../assets/images/delivery/kurr.svg", 1, "method-logo"], ["type", "radio", "name", "shipping_id", "value", "9"], [1, "shipping-3", 3, "click"], ["src", "../../../assets/images/delivery/np-icon.webp", 1, "method-logo"], ["type", "radio", "name", "shipping_id", "value", "3"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "cartOS__right"], [1, "cartOS__info", 2, "position", "relative", "top", "0px"], [1, "cartOS__title"], [1, "cartOS__table"], [4, "ngFor", "ngForOf"], [1, "cartOS__infoBl"], [1, "cartOS__bl"], ["src", "", "alt", "", 1, "cartOS__dopIcon"], [1, "cartOS__total"], [1, "cartOS__total-title"], [1, "cartOS__total-price"], [1, "small"], ["type", "submit", "value", "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F", 1, "cartOS__button", "wa-button", "button", "btn", "button_primary", 3, "disabled"], [1, "col-lg-12", "mt-5"], [1, "col-lg-12", "col-lg-push-6", "col-my-lt-12"], [1, "payItems", "smallSlideLeft", "animationDelay-1"], [1, "table"], [1, "tr", "thead"], [1, "tr", "nav"], [1, "td"], [1, "tr", "tbody"], ["class", "tr productOrder", 4, "ngFor", "ngForOf"], [1, "tr", "tfoot"], [1, "fullPrice", "cart-total"], [1, "subFullPrice", 2, "display", "none"], [1, "totalFullPrice", 2, "display", "block"], [1, "tr", "productOrder"], [1, "delateProduct", "remove-cart-product-popup", "open-popup", 3, "click"], [1, "smallProduct"], [1, "imgWrapper"], [1, "smallProductInfo"], [1, "h6", "as"], [1, "td", "count"], [1, "singleItemPrice"], [2, "text-align", "center"], [1, "productCountWrapper"], [1, "productCount", "lessProduct", 3, "click"], ["maxlength", "3", "type", "text", 1, "product-qty", 3, "value"], [1, "productCount", "moreProduct", "update-cart-product", 3, "click"], [1, "itemPrice", "productPrice"], [1, "tableMobTitle"], [3, "form"], [1, "cartOS__shipList", "shipping-9", 2, "display", "block"], [1, "hint", "error", "comment", 2, "display", "none"], [1, "cartOS__shipVariants"], ["type", "hidden", "name", "rate_id[9]", "value", "delivery"], [1, "wa-form", "wa-address"], [1, "wa-field", "wa-field-address", "wa-field-address-shipping"], [1, "wa-name"], [1, "wa-value"], ["matInput", "", "formControlName", "adress"], ["type", "hidden", "name", "customer_9[address.shipping][region]", "value", "14"], ["type", "hidden", "name", "customer_9[address.shipping][country]", "value", "ukr"], ["type", "hidden", "name", "_csrf", "value", ""], [1, "map", 3, "form"], [1, "cartOS__tableImg"], ["alt", "Apple iPhone 12 64GB White", "title", "Apple iPhone 12 64GB White", 3, "src"], [1, "cartOS__tablePrice"]], template: function BasketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BasketComponent_div_2_Template, 41, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function BasketComponent_Template_form_ngSubmit_3_listener() { return ctx.addOrder(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u0406\u043C*\u044F *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Telephone *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "+380 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketComponent_Template_li_click_38_listener() { return ctx.activeItem("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketComponent_Template_li_click_49_listener() { return ctx.activeItem("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\u041A\u0443\u0440'\u0454\u0440\u0441\u044C\u043A\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 (\u041B\u044C\u0432\u0456\u0432) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BasketComponent_Template_li_click_60_listener() { return ctx.activeItem("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "\u041D\u043E\u0432\u0430 \u041F\u043E\u0448\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\u0412\u0456\u0434 50 \u0433\u0440\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, BasketComponent_div_72_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, BasketComponent_div_73_Template, 22, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, BasketComponent_p_74_Template, 2, 1, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\u0412\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, BasketComponent_tr_82_Template, 10, 10, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u2014 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " \u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "\u0412\u0441\u044C\u043E\u0433\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](94, "kyrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](95, "fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "kyrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.orders.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("shipping_active", ctx.active == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("shipping_active", ctx.active == "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("shipping_active", ctx.active == "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](94, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](95, 18, ctx.totalPrice)), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](99, 20, ctx.totalUk), " \u0433\u0440\u043D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_maps_nova_maps_nova_component__WEBPACK_IMPORTED_MODULE_12__["MapsNovaComponent"], _components_maps_maps_component__WEBPACK_IMPORTED_MODULE_13__["MapsComponent"]], pipes: [_shared_pipes_kyrs_pipe__WEBPACK_IMPORTED_MODULE_14__["KyrsPipe"], _shared_pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_15__["FixedPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]], styles: [".payItems[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  padding: 0 20px;\n  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.31);\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: \"Comfortaa\";\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 20px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 24px 15px;\n  width: 14.3333%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n  width: 4%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: right;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  float: right;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n  padding: 30px 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .fullPrice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  height: 120px;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n  width: 1%;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 0;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e6e6e6;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 60% !important;\n  padding-left: 0;\n}\n\n.payItems[_ngcontent-%COMP%]   .singleItemPrice[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.payItems[_ngcontent-%COMP%]   .singleItemPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.payItems[_ngcontent-%COMP%]   .itemPrice[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #000;\n}\n\n.payItems[_ngcontent-%COMP%]   .itemPrice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.smallProduct[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 13px;\n  line-height: 18px;\n  font-family: \"Roboto\";\n}\n\n.smallProduct[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .as[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 0.25s linear;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 90px;\n  height: 90px;\n  margin-top: -45px;\n  margin-left: 5px;\n  display: block;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  transition: opacity 0.25s linear;\n}\n\n.smallProduct[_ngcontent-%COMP%]   .smallProductInfo[_ngcontent-%COMP%] {\n  padding-left: 110px;\n}\n\n.delateProduct[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  cursor: pointer;\n}\n\n.delateProduct[_ngcontent-%COMP%]:before, .delateProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 15px;\n  height: 2px;\n  margin-left: -7px;\n  background: #c80000;\n  transform: rotate(-45deg);\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.delateProduct[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.tableMobTitle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBasker[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .payItems[_ngcontent-%COMP%] {\n  padding: 0;\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .tablem[_ngcontent-%COMP%], .emptyBas[_ngcontent-%COMP%]   .paySelect[_ngcontent-%COMP%], .emptyBas[_ngcontent-%COMP%]   .btnWrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.emptyBas[_ngcontent-%COMP%]   .emptyBasker[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  padding: 15px;\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 600;\n  font-family: \"Comfortaa\";\n}\n\n.emptyBas[_ngcontent-%COMP%]   .emptyBasker[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c80000;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  color: rgba(212, 0, 0, 0.6);\n  border: 1px solid rgba(212, 0, 0, 0.3);\n  padding: 15px;\n  margin-top: 15px;\n  display: none;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15px;\n  width: 24px;\n  height: 24px;\n  display: block;\n  margin-top: -12px;\n}\n\n.deliveryWarning[_ngcontent-%COMP%]   .errorMsg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n\n.invalidMsg[_ngcontent-%COMP%] {\n  padding: 5px 0 10px;\n  color: rgba(212, 0, 0, 0.6);\n  display: none;\n}\n\n.orderDiscount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n  padding: 30px 20px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.orderDiscount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n}\n\n.orderDiscount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .orderDiscount[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c80000;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  \n}\n\nlabel[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 0;\n  background: #0e0e0e;\n  z-index: 2;\n  content: \"\";\n  transition: height 300ms linear;\n}\n\nlabel[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 1px;\n  height: 0;\n  background: #0e0e0e;\n  transition: height 300ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0;\n  right: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  right: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  transition: width 375ms linear;\n  z-index: 2;\n  content: \"\";\n}\n\nlabel.active[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]:after {\n  height: 100%;\n}\n\nlabel.active[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after, label.active[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before, label.active[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\nlabel.light[_ngcontent-%COMP%]   .simpleInput[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #fff;\n}\n\nlabel.light[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]:after {\n  background: #fff;\n}\n\nlabel.light[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]   .firstBorderElement[_ngcontent-%COMP%]:after, label.light[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:before, label.light[_ngcontent-%COMP%]   .secondBorderElement[_ngcontent-%COMP%]:after {\n  background: #fff;\n}\n\n.inputWrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   .simpleInput[_ngcontent-%COMP%] {\n  padding-right: 50px;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n\n.inputWrapper.searchInput[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: 15px auto;\n}\n\n.simpleInput[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 48px;\n  padding: 0 15px;\n  color: #0e0e0e;\n  height: 50px;\n  width: 100%;\n  border: 1px #e6e6e6 solid;\n  transition: all 200ms linear;\n  font-family: \"Roboto\";\n}\n\n.simpleInput.invalid[_ngcontent-%COMP%] {\n  z-index: 4;\n  border-color: #f11e1e !important;\n}\n\ntextarea.simpleInput[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 22px;\n  height: 140px;\n}\n\ntextarea.simpleInput.small[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-moz-placeholder, textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-moz-placeholder, textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #0e0e0e;\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\nlabel.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, label.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 1;\n}\n\n\n\n\n\n.checkboxEntry[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  min-width: 20px;\n  min-height: 20px;\n}\n\n.checkboxEntry.light[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:before {\n  background-position: center center;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:after {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 18px;\n  line-height: 22px;\n  padding-left: 22px;\n  display: block;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  border: 2px #f7c200 solid;\n  border-radius: 1px;\n  z-index: 1;\n  content: \"\";\n}\n\n.checkboxEntry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  background: #f7c200;\n  transform: scale(0.05);\n  opacity: 1;\n  transition: opacity 0.45s linear, transform 0.45s linear;\n  content: \"\";\n}\n\n.checkboxEntry.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  border-radius: 10px;\n  background: none;\n}\n\n.checkboxEntry.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  border-radius: 100%;\n}\n\n\n\n\n\n.sumoWrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.SelectBox[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 15px;\n}\n\n.SumoSelect[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n  width: 100%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: width 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]:after {\n  left: auto;\n  right: 50%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 1px;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: width 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  left: auto;\n  right: 50%;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 0%;\n  background: #0e0e0e;\n  z-index: 2;\n  transition: height 375ms linear;\n  content: \"\";\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  top: auto;\n  left: auto;\n  right: 0;\n  bottom: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .SumoSelect[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%] {\n  padding: 0;\n  border-bottom: 1px solid #e6e6e6;\n  transition: background 100ms linear;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n\n.SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]:first-child, .SumoSelect[_ngcontent-%COMP%]   .optWrapper[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   li.opt[_ngcontent-%COMP%]:last-child {\n  border-radius: 0;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  height: 100%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]   .CaptionCont[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]:before, .SumoSelect.open[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.SumoSelect.open[_ngcontent-%COMP%]    > .optWrapper[_ngcontent-%COMP%] {\n  top: 50px;\n}\n\n.productCountWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 24px;\n}\n\n.productCount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transform: translateY(-50%);\n}\n\n.productCount.lessProduct[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\n.productCountWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 38px;\n  font-weight: 500;\n  padding: 0 6px;\n  font-family: \"Roboto\";\n  border: 1px solid #eaeaea;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  font-weight: 400;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  background: none;\n  border: none;\n  margin: 0;\n  width: 100%;\n  font-family: \"Arial\";\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:before, .productCount.moreProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:after {\n  transform: rotate(-90deg);\n}\n\n.productCount.moreProduct[_ngcontent-%COMP%]:before, .productCount.moreProduct[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10px;\n  height: 2px;\n  margin-top: -1px;\n  margin-left: -5px;\n  background: #c80000;\n  transition: background 0.25s linear;\n  content: \"\";\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: row !important;\n}\n\n.pading[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 2rem;\n  padding: 2rem;\n}\n\n.h6[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.row-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.cartOS__right[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.cartOS__right[_ngcontent-%COMP%] {\n  float: right;\n  width: 360px;\n}\n\n.cartOS__info[_ngcontent-%COMP%] {\n  border: 1px solid #f2f2f2;\n  border-radius: 5px;\n  transition: box-shadow 0.3s ease-out;\n  width: 360px;\n  padding: 20px;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.cartOS__info[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.1);\n}\n\n.cartOS__info[_ngcontent-%COMP%]   .cartOS__title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n\n.cartOS__info[_ngcontent-%COMP%]   .cartOS__title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.cartOS__table[_ngcontent-%COMP%] {\n  font-size: 0;\n  line-height: normal;\n  margin-bottom: 25px;\n}\n\n.cartOS__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  width: 100%;\n}\n\n.cartOS__table[_ngcontent-%COMP%]   .cartOS__tableImg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-right: 15px;\n  width: 50px;\n}\n\n.cartOS__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0 0 15px;\n  vertical-align: top;\n}\n\n.cartOS__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0 0 15px;\n  vertical-align: top;\n}\n\n.cartOS__table[_ngcontent-%COMP%]   .cartOS__tableImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 40px;\n  max-height: 40px;\n}\n\n.cartOS__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 4px;\n  margin-top: 0;\n}\n\n.cartOS__table[_ngcontent-%COMP%]   .cartOS__tablePrice[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 14px;\n}\n\n.cartOS__bl[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  overflow: hidden;\n  position: relative;\n}\n\n.cartOS__total[_ngcontent-%COMP%] {\n  padding: 20px 0 30px;\n  text-align: center;\n}\n\n.button_primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.cartOS__button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%], button[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   [type=button][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.cartOS__bl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #fff;\n  display: block;\n  float: left;\n  padding: 0 6px 1px 0;\n  z-index: 1;\n  position: relative;\n  max-width: 80%;\n}\n\n.cartOS__dopIcon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: -3px;\n  vertical-align: middle;\n  max-height: 20px;\n  max-width: 30px;\n}\n\n.cartOS__total[_ngcontent-%COMP%] {\n  padding: 20px 0 30px;\n  text-align: center;\n}\n\n.cartOS__total-title[_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.cartOS__total-price[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 500;\n}\n\n.small[_ngcontent-%COMP%], small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n#np2_appartament3[_ngcontent-%COMP%], #np2_housenum3[_ngcontent-%COMP%], #np2_floor3[_ngcontent-%COMP%] {\n  min-width: 40px;\n  width: 60px;\n  max-width: 60px;\n  font-size: 14px;\n}\n\n#np2_wh_select3[_ngcontent-%COMP%], #np2_custom_street3[_ngcontent-%COMP%], #np2_cities_3[_ngcontent-%COMP%], #np2_street_select3[_ngcontent-%COMP%], #np2_wh_shipping_fields3[_ngcontent-%COMP%], #np2_address_shipping_fields3[_ngcontent-%COMP%] {\n  display: table;\n}\n\n#np2_edit_street3[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.np2_flatfloor[_ngcontent-%COMP%], .np2_canhideflat[_ngcontent-%COMP%] {\n  text-align: left !important;\n  display: inline-grid;\n  width: 160px;\n}\n\n.np2_hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.np2_error[_ngcontent-%COMP%] {\n  border: 2px solid red !important;\n}\n\n@media screen and (max-width: 450px) {\n  #np2_wh_select3[_ngcontent-%COMP%], #np2_custom_street3[_ngcontent-%COMP%], #np2_cities_3[_ngcontent-%COMP%], #np2_street_select3[_ngcontent-%COMP%], #np2_wh_shipping_fields3[_ngcontent-%COMP%], #np2_address_shipping_fields3[_ngcontent-%COMP%] {\n    max-width: 350px;\n  }\n\n  .shipping-3[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%] {\n    max-width: 350px;\n    width: 250px !important;\n    min-width: 200px;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .shipping-3[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%] {\n    max-width: 700px;\n    width: 450px !important;\n    min-width: 400px;\n  }\n}\n\n@media screen and (min-width: 1240px) {\n  .shipping-3[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%] {\n    max-width: 500px;\n    width: 450px !important;\n    min-width: 400px;\n  }\n}\n\n.shipping-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.shipping-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n}\n\n.shipping-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black !important;\n  margin: 0px 0 5px !important;\n}\n\n#np2_appartament5[_ngcontent-%COMP%], #np2_housenum5[_ngcontent-%COMP%], #np2_floor5[_ngcontent-%COMP%] {\n  min-width: 40px;\n  width: 60px;\n  max-width: 60px;\n  font-size: 14px;\n}\n\n#np2_wh_select5[_ngcontent-%COMP%], #np2_custom_street5[_ngcontent-%COMP%], #np2_cities_5[_ngcontent-%COMP%], #np2_street_select5[_ngcontent-%COMP%], #np2_wh_shipping_fields5[_ngcontent-%COMP%], #np2_address_shipping_fields5[_ngcontent-%COMP%] {\n  display: table;\n}\n\n#np2_edit_street5[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.np2_flatfloor[_ngcontent-%COMP%], .np2_canhideflat[_ngcontent-%COMP%] {\n  text-align: left !important;\n  display: inline-grid;\n  width: 160px;\n}\n\n.np2_hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.np2_error[_ngcontent-%COMP%] {\n  border: 2px solid red !important;\n}\n\n@media screen and (max-width: 450px) {\n  #np2_wh_select5[_ngcontent-%COMP%], #np2_custom_street5[_ngcontent-%COMP%], #np2_cities_5[_ngcontent-%COMP%], #np2_street_select5[_ngcontent-%COMP%], #np2_wh_shipping_fields5[_ngcontent-%COMP%], #np2_address_shipping_fields5[_ngcontent-%COMP%] {\n    max-width: 350px;\n  }\n\n  .shipping-5[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%] {\n    max-width: 350px;\n    width: 250px !important;\n    min-width: 200px;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .shipping-5[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%] {\n    max-width: 700px;\n    width: 450px !important;\n    min-width: 400px;\n  }\n}\n\n@media screen and (min-width: 1240px) {\n  .shipping-5[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%] {\n    max-width: 500px;\n    width: 450px !important;\n    min-width: 400px;\n  }\n}\n\n.shipping-5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.shipping-5[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n}\n\n.shipping-5[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black !important;\n  margin: 0px 0 5px !important;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 85px;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  float: none;\n  margin-top: 10px;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: calc(25% - 20px);\n}\n\n.np2_flatfloor[_ngcontent-%COMP%] {\n  display: flex;\n  width: 500px;\n  max-width: 100%;\n  align-items: center;\n}\n\n.np2_flatfloor[_ngcontent-%COMP%], .np2_canhideflat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.np2_flatfloor[_ngcontent-%COMP%]   br[_ngcontent-%COMP%], .np2_canhideflat[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n#np2_appartament5[_ngcontent-%COMP%], #np2_housenum5[_ngcontent-%COMP%], #np2_floor5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-left: 5px;\n}\n\n@media screen and (max-width: 580px) {\n  .cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n  }\n}\n\n.width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%] {\n  margin: -20px -10px 0;\n}\n\n.cartOS__list[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cartOS__list_shipping[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   .checkout-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cartOS__list_shipping[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li.shipping_active[_ngcontent-%COMP%] {\n  border-color: #ffc600;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: calc(25% - 20px);\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px 10px 0;\n  padding: 0;\n  width: calc(33.33% - 20px);\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px 10px 0;\n  padding: 0;\n  width: calc(33.33% - 20px);\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: calc(25% - 20px);\n}\n\n.cartOS__list_shipping[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 1px solid #efefef;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: row-reverse;\n  list-style: none;\n  margin-top: 20px;\n  padding: 15px;\n  position: relative;\n  transition: all 0.3s ease-out;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px;\n  cursor: pointer;\n}\n\n.cartOS__list_shipping[_ngcontent-%COMP%]   li.shipping_active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 85px;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.cartOS__list_shipping[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0;\n  margin-top: 0;\n  position: static;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  float: none;\n  margin-top: 10px;\n}\n\n.mara[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n  width: calc(25% - 20px);\n}\n\nli[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px 10px 0;\n  padding: 0;\n  width: calc(33.33% - 20px);\n}\n\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 10px;\n  max-width: 40px;\n}\n\nh3[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 85px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0;\n  margin-top: 0;\n  position: static;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.price2[_ngcontent-%COMP%] {\n  color: #e15;\n  font-weight: 700;\n  font-size: 1.1em;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px;\n  cursor: pointer;\n}\n\nli[_ngcontent-%COMP%] {\n  border: 1px solid #efefef;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: row-reverse;\n  list-style: none;\n  margin-top: 20px;\n  padding: 15px;\n  position: relative;\n  transition: all 0.3s ease-out;\n}\n\n.rate[_ngcontent-%COMP%] {\n  float: none;\n  margin-top: 2rem;\n}\n\n.rate[_ngcontent-%COMP%] {\n  width: initial;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 30px;\n}\n\n.cartOS__list_shipping.cartOS__list_shippingTile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.map[_ngcontent-%COMP%] {\n  height: 20rem;\n}\n\nli[_ngcontent-%COMP%]:hover {\n  border-color: #d4d4d4;\n}\n\n.shipping_active[_ngcontent-%COMP%] {\n  border-color: #ffc600;\n}\n\n.cartOS__shipList[_ngcontent-%COMP%] {\n  display: none;\n  text-align: left;\n}\n\n.cartOS[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  color: #707070;\n  margin-bottom: 0;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.cartOS__list_shipping[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0;\n  margin-top: 10px;\n}\n\n.checkout-step[_ngcontent-%COMP%]   .wa-field[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.checkout-step[_ngcontent-%COMP%]   .wa-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.wa-name[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #000;\n  font-weight: 700;\n  font-size: 14px;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 16px;\n  line-height: 1.35;\n  font-weight: 400;\n}\n\n@media screen and (max-width: 1201px) {\n  label[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0px;\n    cursor: pointer;\n  }\n\n  li[_ngcontent-%COMP%] {\n    border: 1px solid #efefef;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: unset;\n    list-style: none;\n    margin-top: 20px;\n    padding: 7px;\n    position: relative;\n    transition: all 0.3s ease-out;\n  }\n}\n\n@media screen and (max-width: 994px) {\n  .row-block[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  .pading[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 2rem;\n    padding: 2rem;\n  }\n\n  .cartOS__right[_ngcontent-%COMP%] {\n    float: right;\n    width: 100%;\n  }\n\n  .cartOS__info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 771px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .nav[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .td[_ngcontent-%COMP%] {\n    padding: 0px 0px !important;\n    height: 120px;\n  }\n\n  .productOrder[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n  }\n\n  .delateProduct[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    position: relative;\n    top: 111px;\n    cursor: pointer;\n  }\n\n  .payItems[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n    padding: 0;\n    width: 10%;\n    position: relative;\n    left: 69%;\n  }\n\n  .count[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  li[_ngcontent-%COMP%] {\n    padding: 2rem;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYXNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFHRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFHQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUdBLHlCQUFBO0VBR0EsbUNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFHRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBOzs7RUFHRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBOztFQUVFLGNBQUE7QUFDRjs7QUFFQSxTQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUdBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUdBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBR0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFHQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUdBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBR0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOztFQUVFLFlBQUE7QUFDRjs7QUFFQTs7OztFQUlFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOztFQUVFLGdCQUFBO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFHQSw0QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFRSxjQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBOztFQUVFLGNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFRSxjQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBOztFQUVFLCtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBOztFQUVFLCtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBOztFQUVFLCtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBOztFQUVFLCtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBLFdBQUE7O0FBRUEsaUJBQUE7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usa0NBQUE7QUFBRjs7QUFHQTtFQUdFLG1CQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBR0Esc0JBQUE7RUFDQSxVQUFBO0VBSUEsd0RBQUE7RUFFQSxXQUFBO0FBREY7O0FBSUE7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFFRSxtQkFBQTtBQURGOztBQUlBLGFBQUE7O0FBRUEsYUFBQTs7QUFDQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBR0EsOEJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFHQSw4QkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBR0EsK0JBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0E7O0VBRUUsZUFBQTtBQUZGOztBQUtBO0VBRUUsZ0JBQUE7QUFGRjs7QUFLQTtFQUVFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7RUFHQSxtQ0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTs7RUFHRSxnQkFBQTtBQUZGOztBQUtBOztFQUVFLFlBQUE7QUFGRjs7QUFLQTs7RUFFRSxVQUFBO0FBRkY7O0FBS0E7O0VBRUUsVUFBQTtBQUZGOztBQUtBO0VBQ0UsU0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFHQSwyQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBR0EsbUNBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBOzs7RUFHRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QUFGRjs7QUFLQTs7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFHQSxtQ0FBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUdFLHlCQUFBO0FBRkY7O0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBR0EsbUNBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0FBRkY7O0FBTUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBSEY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSx5Q0FBQTtBQUpGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFMRjs7QUFRQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtBQUxGOztBQVFBOzs7O0VBSUUsMEJBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTs7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7OztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTs7Ozs7O0VBT0UsY0FBQTtBQU5GOztBQVNBO0VBRUUsZUFBQTtBQVBGOztBQVVBOztFQUVFLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSx3QkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0NBQUE7QUFQRjs7QUFZQTtFQUVFOzs7Ozs7SUFNRSxnQkFBQTtFQVZGOztFQWNBO0lBQ0UsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VBWEY7QUFDRjs7QUFlQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VBYkY7QUFDRjs7QUFnQkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtFQWRGO0FBQ0Y7O0FBaUJBO0VBQ0UsMEJBQUE7QUFmRjs7QUFrQkE7RUFDRSw2QkFBQTtBQWZGOztBQW9CQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7QUFqQkY7O0FBcUJBOzs7RUFHRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBbEJGOztBQXFCQTs7Ozs7O0VBT0UsY0FBQTtBQW5CRjs7QUFzQkE7RUFFRSxlQUFBO0FBcEJGOztBQXVCQTs7RUFFRSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQXBCRjs7QUF1QkE7RUFDRSx3QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxnQ0FBQTtBQXBCRjs7QUF5QkE7RUFFRTs7Ozs7O0lBTUUsZ0JBQUE7RUF2QkY7O0VBMkJBO0lBQ0UsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VBeEJGO0FBQ0Y7O0FBNEJBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUExQkY7QUFDRjs7QUE2QkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtFQTNCRjtBQUNGOztBQThCQTtFQUNFLDBCQUFBO0FBNUJGOztBQStCQTtFQUNFLDZCQUFBO0FBNUJGOztBQWlDQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7QUE5QkY7O0FBa0NBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBL0JGOztBQWtDQTtFQUNFLHVCQUFBO0FBL0JGOztBQWtDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBL0JGOztBQWtDQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7QUEvQkY7O0FBa0NBOztFQUVFLHdCQUFBO0FBL0JGOztBQWtDQTs7O0VBR0Usa0JBQUE7RUFDQSxnQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRTtJQUNFLHdCQUFBO0VBL0JGO0FBQ0Y7O0FBaUNBO0VBQ0UsV0FBQTtBQS9CRjs7QUFrQ0E7RUFDRSxxQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxrQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxVQUFBO0FBL0JGOztBQWtDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBL0JGOztBQWtDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBL0JGOztBQWtDQTtFQUNFLHFCQUFBO0FBL0JGOztBQWtDQTtFQUNFLHVCQUFBO0FBL0JGOztBQWtDQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQS9CRjs7QUFtQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFoQ0Y7O0FBcUNBO0VBQ0UsdUJBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsZ0JBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsZUFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsZ0JBQUE7QUFsQ0Y7O0FBcUNDO0VBQ0MsdUJBQUE7QUFsQ0Y7O0FBcUNDO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBbENGOztBQXFDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBbENGOztBQXNDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBbkNGOztBQXNDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBbkNGOztBQXNDQztFQUNDLGdCQUFBO0FBbkNGOztBQXVDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBcENGOztBQXVDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQXBDRjs7QUFzQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBbkNGOztBQXVDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQXBDRjs7QUF1Q0E7RUFFRSxjQUFBO0FBckNGOztBQXdDQTtFQUNFLGVBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UsZUFBQTtBQXJDRjs7QUF5Q0E7RUFDRSxhQUFBO0FBdENGOztBQXlDQTtFQUNFLHFCQUFBO0FBdENGOztBQXlDQTtFQUNFLHFCQUFBO0FBdENGOztBQXlDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxnQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxtQkFBQTtBQXRDRjs7QUF5Q0M7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQXRDRjs7RUF5Q0Y7SUFDRSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDZCQUFBO0VBdENBO0FBQ0Y7O0FBMENBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtFQXhDRjs7RUEwQ0Q7SUFDQyxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBdkNBOztFQTZDRjtJQUNJLFlBQUE7SUFFQSxXQUFBO0VBM0NGOztFQThDRjtJQUNFLFdBQUE7RUEzQ0E7QUFDRjs7QUFnREE7RUFDQztJQUNHLGVBQUE7RUE5Q0Y7QUFDRjs7QUFpREE7RUFFQTtJQUNFLHdCQUFBO0VBaERBOztFQW1ERjtJQUNFLDJCQUFBO0lBQ0EsYUFBQTtFQWhEQTs7RUFrREY7SUFDRSx3QkFBQTtJQUNBLGlDQUFBO0VBL0NBOztFQW1ERjtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQWhEQTs7RUFtREY7SUFDRSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtFQWhEQTs7RUFvREY7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUFqREE7O0VBb0RGO0lBQ0UseUJBQUE7RUFqREE7O0VBb0RGO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VBakRBO0FBQ0YiLCJmaWxlIjoiYmFza2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheUl0ZW1zIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA3cHggMCByZ2IoMCAwIDAgLyAzMSUpXHJcbn1cclxuXHJcbi5wYXlJdGVtcyAudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCI7XHJcbn1cclxuXHJcbi5wYXlJdGVtcyAudGFibGUgLnRoZWFkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wYXlJdGVtcyAudGFibGUgLnRoZWFkIC50ZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XHJcbiAgd2lkdGg6IDE0LjMzMzMlO1xyXG59XHJcblxyXG4ucGF5SXRlbXMgLnRhYmxlIC50aGVhZCAudGQ6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDQlO1xyXG59XHJcblxyXG4ucGF5SXRlbXMgLnRhYmxlIC50aGVhZCAudGQ6bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnBheUl0ZW1zIC50YWJsZSAudGZvb3Qge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnBheUl0ZW1zIC50YWJsZSAudGZvb3QgLnRyIHtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnBheUl0ZW1zIC50YWJsZSAudGZvb3QgLmZ1bGxQcmljZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucGF5SXRlbXMgLnRhYmxlIC50Zm9vdCAuZnVsbFByaWNlIHAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wYXlJdGVtcyAudGFibGUgLnRmb290IC5mdWxsUHJpY2Ugc3BhbixcclxuLnBheUl0ZW1zIC50YWJsZSAudGZvb3QgLmZ1bGxQcmljZSBpIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnBheUl0ZW1zIC50YWJsZSAudGJvZHkgLnRkIHtcclxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLnBheUl0ZW1zIC50YWJsZSAudGJvZHkgLnRkOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxJTtcclxufVxyXG5cclxuLnBheUl0ZW1zIC50YWJsZSAudGJvZHkgLnRkOm50aC1jaGlsZCgyKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucGF5SXRlbXMgLnRhYmxlIC50ciAudHIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG59XHJcblxyXG4ucGF5SXRlbXMgLnRhYmxlIC50ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnBheUl0ZW1zIC50YWJsZSAudGQ6bnRoLWNoaWxkKDIpIHtcclxuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucGF5SXRlbXMgLnNpbmdsZUl0ZW1QcmljZSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5wYXlJdGVtcyAuc2luZ2xlSXRlbVByaWNlIHNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcblxyXG4ucGF5SXRlbXMgLml0ZW1QcmljZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnBheUl0ZW1zIC5pdGVtUHJpY2Ugc3BhbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5zbWFsbFByb2R1Y3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbn1cclxuXHJcbi5zbWFsbFByb2R1Y3QgLmFzIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5zbWFsbFByb2R1Y3QgLmFzIGEge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjI1MHMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIC4yNTBzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMjUwcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5zbWFsbFByb2R1Y3QgLmltZ1dyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjI1MHMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjI1MHMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1MHMgbGluZWFyO1xyXG59XHJcblxyXG4uc21hbGxQcm9kdWN0IC5zbWFsbFByb2R1Y3RJbmZvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xyXG59XHJcblxyXG4uZGVsYXRlUHJvZHVjdCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZWxhdGVQcm9kdWN0OmJlZm9yZSxcclxuLmRlbGF0ZVByb2R1Y3Q6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgYmFja2dyb3VuZDogI2M4MDAwMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG4uZGVsYXRlUHJvZHVjdDphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50YWJsZSAudHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxufVxyXG5cclxuLnRhYmxlIC50ZCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuLnRhYmxlTW9iVGl0bGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5lbXB0eUJhc2tlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmVtcHR5QmFzIC5wYXlJdGVtcyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZW1wdHlCYXMgLnRhYmxlbSxcclxuLmVtcHR5QmFzIC5wYXlTZWxlY3QsXHJcbi5lbXB0eUJhcyAuYnRuV3JhcHBlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmVtcHR5QmFzIC5lbXB0eUJhc2tlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCI7XHJcbn1cclxuXHJcbi5lbXB0eUJhcyAuZW1wdHlCYXNrZXIgYSB7XHJcbiAgY29sb3I6ICNjODAwMDA7XHJcbn1cclxuXHJcbi5kZWxpdmVyeVdhcm5pbmcgLmVycm9yTXNnIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZ2JhKDIxMiwgMCwgMCwgMC42KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMCwgMCwgMC4zKTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRlbGl2ZXJ5V2FybmluZyAuZXJyb3JNc2cgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMTVweDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogLTEycHg7XHJcbn1cclxuXHJcbi5kZWxpdmVyeVdhcm5pbmcgLmVycm9yTXNnIHAge1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxufVxyXG5cclxuLmludmFsaWRNc2cge1xyXG4gIHBhZGRpbmc6IDVweCAwIDEwcHg7XHJcbiAgY29sb3I6IHJnYmEoMjEyLCAwLCAwLCAwLjYpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5vcmRlckRpc2NvdW50IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi5vcmRlckRpc2NvdW50IHAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5vcmRlckRpc2NvdW50IHNwYW4sXHJcbi5vcmRlckRpc2NvdW50IGkge1xyXG4gIGNvbG9yOiAjYzgwMDAwO1xyXG59XHJcblxyXG4vKklucHV0cyovXHJcbmxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLypMaWdodCBpbnB1dHMqL1xyXG59XHJcblxyXG5sYWJlbDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29udGVudDogJyc7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGxpbmVhcjtcclxufVxyXG5cclxubGFiZWw6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDFweDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgbGluZWFyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbmxhYmVsIC5maXJzdEJvcmRlckVsZW1lbnQ6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgei1pbmRleDogMjtcclxuICBjb250ZW50OiAnJztcclxufVxyXG5cclxubGFiZWwgLmZpcnN0Qm9yZGVyRWxlbWVudDphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogIzBlMGUwZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbmxhYmVsIC5zZWNvbmRCb3JkZXJFbGVtZW50OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogNTAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZTBlMGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG5sYWJlbCAuc2Vjb25kQm9yZGVyRWxlbWVudDphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogNTAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZTBlMGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG5sYWJlbC5hY3RpdmU6YmVmb3JlLFxyXG5sYWJlbC5hY3RpdmU6YWZ0ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubGFiZWwuYWN0aXZlIC5maXJzdEJvcmRlckVsZW1lbnQ6YmVmb3JlLFxyXG5sYWJlbC5hY3RpdmUgLmZpcnN0Qm9yZGVyRWxlbWVudDphZnRlcixcclxubGFiZWwuYWN0aXZlIC5zZWNvbmRCb3JkZXJFbGVtZW50OmJlZm9yZSxcclxubGFiZWwuYWN0aXZlIC5zZWNvbmRCb3JkZXJFbGVtZW50OmFmdGVyIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5sYWJlbC5saWdodCAuc2ltcGxlSW5wdXQge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5sYWJlbC5saWdodDpiZWZvcmUsXHJcbmxhYmVsLmxpZ2h0OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5sYWJlbC5saWdodCAuZmlyc3RCb3JkZXJFbGVtZW50OmJlZm9yZSxcclxubGFiZWwubGlnaHQgLmZpcnN0Qm9yZGVyRWxlbWVudDphZnRlcixcclxubGFiZWwubGlnaHQgLnNlY29uZEJvcmRlckVsZW1lbnQ6YmVmb3JlLFxyXG5sYWJlbC5saWdodCAuc2Vjb25kQm9yZGVyRWxlbWVudDphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmlucHV0V3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5wdXRXcmFwcGVyLnNlYXJjaElucHV0IC5zaW1wbGVJbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmlucHV0V3JhcHBlci5zZWFyY2hJbnB1dCAuaW1nV3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dFdyYXBwZXIuc2VhcmNoSW5wdXQgaW1nIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbn1cclxuXHJcbi5zaW1wbGVJbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBjb2xvcjogIzBlMGUwZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggI2U2ZTZlNiBzb2xpZDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG59XHJcblxyXG4uc2ltcGxlSW5wdXQuaW52YWxpZCB7XHJcbiAgei1pbmRleDogNDtcclxuICBib3JkZXItY29sb3I6ICNmMTFlMWUgIWltcG9ydGFudDtcclxufVxyXG5cclxudGV4dGFyZWEuc2ltcGxlSW5wdXQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhLnNpbXBsZUlucHV0LnNtYWxsIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxyXG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyLFxyXG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLFxyXG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcclxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMGUwZTBlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlucHV0Oi1tb3otcGxhY2Vob2xkZXIsXHJcbnRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMGUwZTBlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLFxyXG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwZTBlMGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxyXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMGUwZTBlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmxhYmVsLmxpZ2h0IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxyXG5sYWJlbC5saWdodCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5sYWJlbC5saWdodCBpbnB1dDotbW96LXBsYWNlaG9sZGVyLFxyXG5sYWJlbC5saWdodCB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmxhYmVsLmxpZ2h0IGlucHV0OjotbW96LXBsYWNlaG9sZGVyLFxyXG5sYWJlbC5saWdodCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5sYWJlbC5saWdodCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbmxhYmVsLmxpZ2h0IHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBpbnB1dHMgKi9cclxuXHJcbi8qUmFkaW8gQ2hlY2tCb3gqL1xyXG4uY2hlY2tib3hFbnRyeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNoZWNrYm94RW50cnkubGlnaHQgc3BhbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jaGVja2JveEVudHJ5IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tib3hFbnRyeSBpbnB1dDpjaGVja2VkK3NwYW46YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3hFbnRyeSBpbnB1dDpjaGVja2VkK3NwYW46YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jaGVja2JveEVudHJ5IHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jaGVja2JveEVudHJ5IHNwYW46YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyOiAycHggI2Y3YzIwMCBzb2xpZDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi02LnBuZykgMTAwcHggY2VudGVyIG5vLXJlcGVhdDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5jaGVja2JveEVudHJ5IHNwYW46YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdjMjAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjA1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjA1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMDUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC40NTBzIGxpbmVhciwgLXdlYmtpdC10cmFuc2Zvcm0gLjQ1MHMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjQ1MHMgbGluZWFyLCAtd2Via2l0LXRyYW5zZm9ybSAuNDUwcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuNDUwcyBsaW5lYXIsIHRyYW5zZm9ybSAuNDUwcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDUwcyBsaW5lYXIsIHRyYW5zZm9ybSAuNDUwcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDUwcyBsaW5lYXIsIHRyYW5zZm9ybSAuNDUwcyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIC40NTBzIGxpbmVhcjtcclxuICBjb250ZW50OiAnJztcclxufVxyXG5cclxuLmNoZWNrYm94RW50cnkucmFkaW8gc3BhbjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGVja2JveEVudHJ5LnJhZGlvIHNwYW46YWZ0ZXIge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4vKiBDaGVja2JveCAqL1xyXG5cclxuLypTdW1vU2VsZWN0Ki9cclxuLnN1bW9XcmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5TZWxlY3RCb3gge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uU3Vtb1NlbGVjdCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uU3Vtb1NlbGVjdDpiZWZvcmUsXHJcbi5TdW1vU2VsZWN0OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICBjb250ZW50OiAnJztcclxufVxyXG5cclxuLlN1bW9TZWxlY3Q6YWZ0ZXIge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDUwJTtcclxufVxyXG5cclxuLlN1bW9TZWxlY3QgLkNhcHRpb25Db250IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG59XHJcblxyXG4uU3Vtb1NlbGVjdCAuQ2FwdGlvbkNvbnQ6YmVmb3JlLFxyXG4uU3Vtb1NlbGVjdCAuQ2FwdGlvbkNvbnQ6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZTBlMGU7XHJcbiAgei1pbmRleDogMjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM3NW1zIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiB3aWR0aCAzNzVtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMzc1bXMgbGluZWFyO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG4uU3Vtb1NlbGVjdCAuQ2FwdGlvbkNvbnQ6YWZ0ZXIge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDUwJTtcclxufVxyXG5cclxuLlN1bW9TZWxlY3QgLkNhcHRpb25Db250PnNwYW46YmVmb3JlLFxyXG4uU3Vtb1NlbGVjdCAuQ2FwdGlvbkNvbnQ+c3BhbjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMzc1bXMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IGhlaWdodCAzNzVtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDM3NW1zIGxpbmVhcjtcclxuICBjb250ZW50OiAnJztcclxufVxyXG5cclxuLlN1bW9TZWxlY3QgLkNhcHRpb25Db250PnNwYW46YWZ0ZXIge1xyXG4gIHRvcDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLlN1bW9TZWxlY3QgLkNhcHRpb25Db250PnNwYW4sXHJcbi5TdW1vU2VsZWN0IC5DYXB0aW9uQ29udCBsYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uU3Vtb1NlbGVjdCAub3B0V3JhcHBlciB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5TdW1vU2VsZWN0IC5vcHRXcmFwcGVyIC5vcHRpb25zIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLlN1bW9TZWxlY3QgLm9wdFdyYXBwZXIgLm9wdGlvbnMgbGkub3B0IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMDBtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMDBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMDBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5TdW1vU2VsZWN0IC5vcHRXcmFwcGVyIC5vcHRpb25zIGxpLm9wdCBsYWJlbCB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcblxyXG4uU3Vtb1NlbGVjdCAub3B0V3JhcHBlciAub3B0aW9ucyBsaS5vcHQ6Zmlyc3QtY2hpbGQsXHJcbi5TdW1vU2VsZWN0IC5vcHRXcmFwcGVyIC5vcHRpb25zIGxpLm9wdDpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLlN1bW9TZWxlY3Qub3BlbiAuQ2FwdGlvbkNvbnQ+c3BhbjpiZWZvcmUsXHJcbi5TdW1vU2VsZWN0Lm9wZW4gLkNhcHRpb25Db250PnNwYW46YWZ0ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLlN1bW9TZWxlY3Qub3BlbiAuQ2FwdGlvbkNvbnQ6YmVmb3JlLFxyXG4uU3Vtb1NlbGVjdC5vcGVuIC5DYXB0aW9uQ29udDphZnRlciB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLlN1bW9TZWxlY3Qub3BlbjpiZWZvcmUsXHJcbi5TdW1vU2VsZWN0Lm9wZW46YWZ0ZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5TdW1vU2VsZWN0Lm9wZW4+Lm9wdFdyYXBwZXIge1xyXG4gIHRvcDogNTBweDtcclxufVxyXG5cclxuLnByb2R1Y3RDb3VudFdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0Q291bnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLnByb2R1Y3RDb3VudC5sZXNzUHJvZHVjdDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBiYWNrZ3JvdW5kOiAjYzgwMDAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbi5wcm9kdWN0Q291bnRXcmFwcGVyIGlucHV0IHtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLnByb2R1Y3RDb3VudFdyYXBwZXIgaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMCA2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhLFxyXG5zZWxlY3Qge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogJ0FyaWFsJztcclxufVxyXG5cclxuLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdCB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdDpiZWZvcmUsXHJcbi5wcm9kdWN0Q291bnQubW9yZVByb2R1Y3Q6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBiYWNrZ3JvdW5kOiAjYzgwMDAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXI7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbi5wcm9kdWN0Q291bnQubW9yZVByb2R1Y3Q6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG59XHJcblxyXG4ucHJvZHVjdENvdW50Lm1vcmVQcm9kdWN0OmJlZm9yZSxcclxuLnByb2R1Y3RDb3VudC5tb3JlUHJvZHVjdDphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNjODAwMDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhcjtcclxuICBjb250ZW50OiAnJztcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5wYWRpbmcge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIC8vIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4uaDYge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yb3ctYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FydE9TX19yaWdodCB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmNhcnRPU19fcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMzYwcHg7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2luZm8ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzIGVhc2Utb3V0O1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmNhcnRPU19faW5mbzpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNDBweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG59XHJcblxyXG5cclxuLmNhcnRPU19faW5mbyAuY2FydE9TX190aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2luZm8gLmNhcnRPU19fdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcnRPU19fdGFibGUge1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX3RhYmxlIHRhYmxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FydE9TX190YWJsZSAuY2FydE9TX190YWJsZUltZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX3RhYmxlIHRhYmxlIHRkIHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMCAwIDE1cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmNhcnRPU19fdGFibGUgdGFibGUgdGQge1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAwIDAgMTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uY2FydE9TX190YWJsZSAuY2FydE9TX190YWJsZUltZyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uY2FydE9TX190YWJsZSB0YWJsZSB0ZCBoMyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX3RhYmxlIC5jYXJ0T1NfX3RhYmxlUHJpY2Uge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNhcnRPU19fYmwge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX3RvdGFsIHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25fcHJpbWFyeSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblt0eXBlPXJlc2V0XSxcclxuW3R5cGU9c3VibWl0XSxcclxuYnV0dG9uLFxyXG5odG1sIFt0eXBlPWJ1dHRvbl0ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG59XHJcblxyXG4uYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2JsIGRpdiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAwIDZweCAxcHggMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNhcnRPU19fZG9wSWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG4gIG1heC13aWR0aDogMzBweDtcclxufVxyXG5cclxuLmNhcnRPU19fdG90YWwge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcnRPU19fdG90YWwtdGl0bGUge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX3RvdGFsLXByaWNlIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNtYWxsLFxyXG5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuI25wMl9hcHBhcnRhbWVudDMsXHJcbiNucDJfaG91c2VudW0zLFxyXG4jbnAyX2Zsb29yMyB7XHJcbiAgbWluLXdpZHRoOiA0MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1heC13aWR0aDogNjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbiNucDJfd2hfc2VsZWN0MyxcclxuI25wMl9jdXN0b21fc3RyZWV0MyxcclxuI25wMl9jaXRpZXNfMyxcclxuI25wMl9zdHJlZXRfc2VsZWN0MyxcclxuI25wMl93aF9zaGlwcGluZ19maWVsZHMzLFxyXG4jbnAyX2FkZHJlc3Nfc2hpcHBpbmdfZmllbGRzMyB7XHJcblxyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4jbnAyX2VkaXRfc3RyZWV0MyB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm5wMl9mbGF0Zmxvb3IsXHJcbi5ucDJfY2FuaGlkZWZsYXQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICB3aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbi5ucDJfaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ucDJfZXJyb3Ige1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gICNucDJfd2hfc2VsZWN0MyxcclxuICAjbnAyX2N1c3RvbV9zdHJlZXQzLFxyXG4gICNucDJfY2l0aWVzXzMsXHJcbiAgI25wMl9zdHJlZXRfc2VsZWN0MyxcclxuICAjbnAyX3doX3NoaXBwaW5nX2ZpZWxkczMsXHJcbiAgI25wMl9hZGRyZXNzX3NoaXBwaW5nX2ZpZWxkczMge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuc2hpcHBpbmctMyAuc2VsZWN0Mi1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuc2hpcHBpbmctMyAuc2VsZWN0Mi1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNDBweCkge1xyXG4gIC5zaGlwcGluZy0zIC5zZWxlY3QyLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNoaXBwaW5nLTMgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaGlwcGluZy0zIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcbi5zaGlwcGluZy0zIHAgc3BhbiB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggMCA1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbiNucDJfYXBwYXJ0YW1lbnQ1LFxyXG4jbnAyX2hvdXNlbnVtNSxcclxuI25wMl9mbG9vcjUge1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4jbnAyX3doX3NlbGVjdDUsXHJcbiNucDJfY3VzdG9tX3N0cmVldDUsXHJcbiNucDJfY2l0aWVzXzUsXHJcbiNucDJfc3RyZWV0X3NlbGVjdDUsXHJcbiNucDJfd2hfc2hpcHBpbmdfZmllbGRzNSxcclxuI25wMl9hZGRyZXNzX3NoaXBwaW5nX2ZpZWxkczUge1xyXG5cclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuI25wMl9lZGl0X3N0cmVldDUge1xyXG5cclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5ucDJfZmxhdGZsb29yLFxyXG4ubnAyX2NhbmhpZGVmbGF0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG4ubnAyX2hpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnAyX2Vycm9yIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG5cclxuICAjbnAyX3doX3NlbGVjdDUsXHJcbiAgI25wMl9jdXN0b21fc3RyZWV0NSxcclxuICAjbnAyX2NpdGllc181LFxyXG4gICNucDJfc3RyZWV0X3NlbGVjdDUsXHJcbiAgI25wMl93aF9zaGlwcGluZ19maWVsZHM1LFxyXG4gICNucDJfYWRkcmVzc19zaGlwcGluZ19maWVsZHM1IHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLnNoaXBwaW5nLTUgLnNlbGVjdDItY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLnNoaXBwaW5nLTUgLnNlbGVjdDItY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB3aWR0aDogNDUwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjQwcHgpIHtcclxuICAuc2hpcHBpbmctNSAuc2VsZWN0Mi1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaGlwcGluZy01IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2hpcHBpbmctNSBwIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG4uc2hpcHBpbmctNSBwIHNwYW4ge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4IDAgNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUgaDMge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmcuY2FydE9TX19saXN0X3NoaXBwaW5nVGlsZSBsaSAucmF0ZSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcnRPU19fbGlzdF9zaGlwcGluZy5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmdUaWxlIGxpIHtcclxuICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcclxufVxyXG5cclxuLm5wMl9mbGF0Zmxvb3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubnAyX2ZsYXRmbG9vcixcclxuLm5wMl9jYW5oaWRlZmxhdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubnAyX2ZsYXRmbG9vciBicixcclxuLm5wMl9jYW5oaWRlZmxhdCBiciB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbnAyX2FwcGFydGFtZW50NSxcclxuI25wMl9ob3VzZW51bTUsXHJcbiNucDJfZmxvb3I1IHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUgbGkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gIH1cclxufVxyXG4ud2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUge1xyXG4gIG1hcmdpbjogLTIwcHggLTEwcHggMDtcclxufVxyXG5cclxuLmNhcnRPU19fbGlzdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUgLmNoZWNrb3V0LW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nIHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhcnRPU19fbGlzdF9zaGlwcGluZy5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmdUaWxlIGxpLnNoaXBwaW5nX2FjdGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZjNjAwO1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUgbGkge1xyXG4gIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMjBweCAxMHB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogY2FsYygzMy4zMyUgLSAyMHB4KTtcclxufVxyXG5cclxuXHJcbi5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmcuY2FydE9TX19saXN0X3NoaXBwaW5nVGlsZSBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDIwcHgpO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmcuY2FydE9TX19saXN0X3NoaXBwaW5nVGlsZSBsaSB7XHJcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmcgbGkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUgbGkgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nIGxpLnNoaXBwaW5nX2FjdGl2ZSBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmNhcnRPU19fbGlzdF9zaGlwcGluZy5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmdUaWxlIGgzIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUgaDMge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcnRPU19fbGlzdF9zaGlwcGluZyBoMyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmcuY2FydE9TX19saXN0X3NoaXBwaW5nVGlsZSBsaSAucmF0ZSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hcmEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5vbCwgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbiBsaSB7XHJcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XHJcbn1cclxuXHJcbiBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDIwcHgpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1heC13aWR0aDogNDBweDtcclxufVxyXG5cclxuXHJcbmgzIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcbiBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuXHJcbi5wcmljZTIge1xyXG4gIGNvbG9yOiAjZTE1O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmxpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuXHJcbi5yYXRlIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4ucmF0ZSB7XHJcbiAgXHJcbiAgd2lkdGg6IGluaXRpYWw7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uY2FydE9TX19saXN0X3NoaXBwaW5nLmNhcnRPU19fbGlzdF9zaGlwcGluZ1RpbGUgaDMge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5tYXAge1xyXG4gIGhlaWdodDogMjByZW07XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICNkNGQ0ZDQ7XHJcbn1cclxuXHJcbi5zaGlwcGluZ19hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmYzYwMDtcclxufVxyXG5cclxuLmNhcnRPU19fc2hpcExpc3Qge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNhcnRPUyAuaGludCB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCwgb3B0Z3JvdXAsIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jYXJ0T1NfX2xpc3Rfc2hpcHBpbmcgcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXQtc3RlcCAud2EtZmllbGQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jaGVja291dC1zdGVwIC53YS1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuIC53YS1uYW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDFweCkge1xyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMHB4OyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubGkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHVuc2V0OyBcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk0cHgpIHtcclxuICAucm93LWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gfSBcclxuIC5wYWRpbmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuICBcclxuZWxlbWVudC5zdHlsZSB7XHJcbn1cclxuLmNhcnRPU19fcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FydE9TX19pbmZvIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MXB4KSB7XHJcbiAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlIDtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpICB7XHJcblxyXG4ubmF2ICB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGQge1xyXG4gIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcbi5wcm9kdWN0T3JkZXIgIHtcclxuICBkaXNwbGF5OiBmbGV4ICAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgXHJcbiAgXHJcbn1cclxuXHJcbi5kZWxhdGVQcm9kdWN0IHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTExcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGF5SXRlbXMgLnRhYmxlIC50Ym9keSAudGQ6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNjklO1xyXG4gIFxyXG59XHJcblxyXG4uY291bnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxpIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiBcclxuXHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIl19 */"] });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map