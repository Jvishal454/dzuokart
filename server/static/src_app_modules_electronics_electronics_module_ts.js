"use strict";
(self["webpackChunkdzuokart"] = self["webpackChunkdzuokart"] || []).push([["src_app_modules_electronics_electronics_module_ts"],{

/***/ 3448:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/electronics/components/cell-phones/cell-phones.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellPhonesComponent: () => (/* binding */ CellPhonesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class CellPhonesComponent {}
_class = CellPhonesComponent;
_class.ɵfac = function CellPhonesComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-cell-phones"]],
  decls: 2,
  vars: 0,
  template: function CellPhonesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cell-phones works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZWxsLXBob25lcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbGVjdHJvbmljcy9jb21wb25lbnRzL2NlbGwtcGhvbmVzL2NlbGwtcGhvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4895:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/electronics/components/laptops/laptops.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LaptopsComponent: () => (/* binding */ LaptopsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class LaptopsComponent {}
_class = LaptopsComponent;
_class.ɵfac = function LaptopsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-laptops"]],
  decls: 2,
  vars: 0,
  template: function LaptopsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "laptops works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXB0b3BzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbGVjdHJvbmljcy9jb21wb25lbnRzL2xhcHRvcHMvbGFwdG9wcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6266:
/*!*******************************************************************!*\
  !*** ./src/app/modules/electronics/electronics-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElectronicsRoutingModule: () => (/* binding */ ElectronicsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _electronics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./electronics.component */ 5971);
/* harmony import */ var _components_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/laptops/laptops.component */ 4895);
/* harmony import */ var _components_cell_phones_cell_phones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cell-phones/cell-phones.component */ 3448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






const routes = [{
  path: '',
  component: _electronics_component__WEBPACK_IMPORTED_MODULE_0__.ElectronicsComponent,
  children: [{
    path: 'laptops',
    component: _components_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_1__.LaptopsComponent
  }, {
    path: 'cell-phones',
    component: _components_cell_phones_cell_phones_component__WEBPACK_IMPORTED_MODULE_2__.CellPhonesComponent
  }]
}];
class ElectronicsRoutingModule {}
_class = ElectronicsRoutingModule;
_class.ɵfac = function ElectronicsRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ElectronicsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5971:
/*!**************************************************************!*\
  !*** ./src/app/modules/electronics/electronics.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElectronicsComponent: () => (/* binding */ ElectronicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class ElectronicsComponent {}
_class = ElectronicsComponent;
_class.ɵfac = function ElectronicsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-electronics"]],
  decls: 1,
  vars: 0,
  template: function ElectronicsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbGVjdHJvbmljcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbGVjdHJvbmljcy9lbGVjdHJvbmljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3810:
/*!***********************************************************!*\
  !*** ./src/app/modules/electronics/electronics.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElectronicsModule: () => (/* binding */ ElectronicsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _electronics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./electronics-routing.module */ 6266);
/* harmony import */ var _electronics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./electronics.component */ 5971);
/* harmony import */ var _components_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/laptops/laptops.component */ 4895);
/* harmony import */ var _components_cell_phones_cell_phones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cell-phones/cell-phones.component */ 3448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class ElectronicsModule {}
_class = ElectronicsModule;
_class.ɵfac = function ElectronicsModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _electronics_routing_module__WEBPACK_IMPORTED_MODULE_0__.ElectronicsRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ElectronicsModule, {
    declarations: [_electronics_component__WEBPACK_IMPORTED_MODULE_1__.ElectronicsComponent, _components_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_2__.LaptopsComponent, _components_cell_phones_cell_phones_component__WEBPACK_IMPORTED_MODULE_3__.CellPhonesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _electronics_routing_module__WEBPACK_IMPORTED_MODULE_0__.ElectronicsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_electronics_electronics_module_ts.js.map