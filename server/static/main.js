"use strict";
(self["webpackChunkdzuokart"] = self["webpackChunkdzuokart"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/authentication/authentication.component */ 7456);
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test/test.component */ 3744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'electronics',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_electronics_electronics_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/electronics/electronics.module */ 3810)).then(m => m.ElectronicsModule)
}, {
  path: 'authentication',
  component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__.AuthenticationComponent
}, {
  path: 'test',
  component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_2__.TestComponent
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ 2952);
var _class;




class AppComponent {
  constructor() {
    this.title = 'dzuokart';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  consts: [[2, "margin-top", "55px", "position", "relative", "height", "100%", "z-index", "2"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "app-sidenav");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared/shared.module */ 1383);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ 2952);
/* harmony import */ var _components_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/grid-list/grid-list.component */ 794);
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/authentication/authentication.component */ 7456);
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/test/test.component */ 3744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;












class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__.SidenavComponent, _components_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_6__.GridListComponent, _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__.AuthenticationComponent, _components_test_test_component__WEBPACK_IMPORTED_MODULE_8__.TestComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ }),

/***/ 7456:
/*!***********************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationComponent: () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
var _class;












function AuthenticationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthenticationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div")(2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15)(5, "form", 16)(6, "mat-form-field", 17)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 17)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_div_9_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.hide = !ctx_r4.hide);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_div_9_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_div_9_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.loginGoogle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Login with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_div_9_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.loginFacebook());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Login with Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_div_9_Template_p_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.showSignUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Need an Account? Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-btn", ctx_r1.isSignUpVisible);
  }
}
function AuthenticationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AuthenticationComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div")(2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15)(5, "form", 16)(6, "mat-form-field", 17)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fullname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 17)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 17)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_div_11_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.hide = !ctx_r10.hide);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_div_11_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.signupForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_div_11_Template_p_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.showLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Already have an Account? Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.signup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx_r3.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-btn", ctx_r3.isLoginVisible);
  }
}
class AuthenticationComponent {
  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto' as FloatLabelType);
  // login = this._formBuilder.group({
  //   hideRequired: this.hideRequiredControl,
  //   floatLabel: this.floatLabelControl,
  // });
  constructor(fb, snackBar, matIconRegistry, domSanitizer) {
    this.fb = fb;
    this.snackBar = snackBar;
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
    this.isLoginVisible = true; // Initialize with login UI visible
    this.isSignUpVisible = false;
    this.hide = true;
    this.registerIcons();
    this.login = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
    this.signup = this.fb.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }
  // handling scrollabr overflow
  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }
  //Remove style on destroy
  ngOnDestroy() {
    document.body.style.removeProperty('overflow');
  }
  registerIcons() {
    const icons = {
      'google': 'assets/images/login/google.svg',
      'facebook': 'assets/images/login/facebook.svg'
    };
    for (const [iconName, iconPath] of Object.entries(icons)) {
      this.matIconRegistry.addSvgIcon(iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath));
    }
  }
  // Create methods to toggle the states
  showLogin() {
    this.isLoginVisible = true;
    this.isSignUpVisible = false;
  }
  showSignUp() {
    this.isSignUpVisible = true;
    this.isLoginVisible = false;
  }
  submitForm() {
    if (this.login.valid) {
      const username = this.login.get('username').value;
      const password = this.login.get('password').value;
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
      this.openSnackBar('Please Fill in the Fields', 'close');
    }
  }
  signupForm() {
    if (this.signup.valid) {
      const fullname = this.signup.get('fullname').value;
      const email = this.signup.get('email').value;
      const password = this.signup.get('password').value;
      console.log('Username:', fullname);
      console.log('Email', email);
      console.log('Password:', password);
    } else {
      this.openSnackBar('Please Fill in the Signup Fields', 'close');
    }
  }
  // general snackbar 
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
  loginGoogle() {
    this.openSnackBar('Google Login under construction', 'close');
  }
  loginFacebook() {
    this.openSnackBar('Facebook Login under construction', 'close');
  }
}
_class = AuthenticationComponent;
_class.ɵfac = function AuthenticationComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-authentication"]],
  decls: 16,
  vars: 8,
  consts: [[1, "container"], [1, "card-class"], [1, "card"], [1, "btn-div"], ["mat-raised-button", "", 3, "click"], ["class", "card-col-1", 4, "ngIf"], ["class", "card-col-2", 4, "ngIf"], [1, "login-svg"], ["src", "assets\\images\\login\\freelancer.png", "alt", "freelancer", "draggable", "false"], [1, "login-svg-2"], ["src", "assets\\images\\work\\work-4.png", "alt", "freelancer", "draggable", "false"], [1, "card-col-1"], ["src", "assets\\images\\login\\login-3.svg", "alt", "freelancer", "draggable", "false"], [1, "card-col-2"], [1, "para"], [1, "form-class"], [3, "formGroup"], ["appearance", "fill", 3, "hideRequiredMarker"], ["matInput", "", "formControlName", "username"], ["matPrefix", ""], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "forgot-pass"], ["mat-raised-button", "", "color", "primary", 1, "login-btn", 3, "click"], [1, "divider"], [2, "background-color", "brown"], ["matPrefix", "", "svgIcon", "google"], ["matPrefix", "", "svgIcon", "facebook"], [1, "toggle-other", 3, "click"], ["src", "assets\\images\\login\\login-5.svg", "alt", "freelancer", "draggable", "false"], ["matInput", "", "formControlName", "fullname"], ["matInput", "", "formControlName", "email"]],
  template: function AuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_4_listener() {
        return ctx.showLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_6_listener() {
        return ctx.showSignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthenticationComponent_div_8_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AuthenticationComponent_div_9_Template, 37, 8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AuthenticationComponent_div_10_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AuthenticationComponent_div_11_Template, 33, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-btn", ctx.isLoginVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-btn", ctx.isSignUpVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  margin: 0;\n  padding: 2.8rem;\n  height: 100%;\n}\n\n.card-class[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 77vh;\n  width: 50vw;\n  border-radius: 15px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n\n.btn-div[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  margin-top: 2rem;\n  margin-left: 0.6rem;\n  border: 3px solid rgb(134, 137, 134);\n  padding: 0.2rem;\n  border-radius: 50px;\n}\n\n.btn-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50px;\n}\n\n.selected-btn[_ngcontent-%COMP%] {\n  background-color: #36382E;\n  color: white;\n}\n\n.card-col-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n  border-radius: 15px 40px 40px 15px; \n\n  background-color: #B3C2F2;\n}\n\n.card-col-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-top: 3.7rem;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n  gap: 3rem;\n  border-radius: 15px 15px 15px 15px;\n}\n\n.login-svg[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 100%;\n  width: 15%;\n  margin: 0;\n  padding: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.login-svg-2[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 100%;\n  width: 22%;\n  margin: 1rem;\n  padding: 0;\n  left: 0;\n  bottom: 0;\n}\n\n.para[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  font-weight: bold;\n  font-family: cursive;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n}\n\n.form-class[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  flex: 1; \n\n}\n\n\n\n.form-class[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-class[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-class[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-family: cursive;\n  font-size: large;\n  font-weight: bold;\n}\n\n.forgot-pass[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.forgot-pass[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: dodgerblue;\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 90%;\n  margin-top: -1.3rem;\n  gap: 1rem;\n}\n\n.toggle-other[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.toggle-other[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0csYUFBQTtFQUNBLHVCQUFBO0VBQ0MsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQVFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBTEo7O0FBU0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBVUE7RUFDSSxtQkFBQTtBQVBKOztBQVVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxrQ0FBQSxFQUFBLHNFQUFBO0VBQ0EseUJBQUE7QUFSSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0FBUEo7O0FBMEJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBdkJKOztBQTBCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUF2Qko7O0FBMkJFO0VBQ0UsT0FBQSxFQUFBLGdFQUFBO0FBeEJKOztBQTJCRSxnRkFBQTtBQUNBO0VBQ0UsV0FBQTtBQXhCSjs7QUEyQkU7O0VBRUUsV0FBQTtBQXhCSjs7QUE0QkU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXpCSjs7QUE0QkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUF6Qko7O0FBNEJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBekJKOztBQTRCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXpCSjs7QUE4QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBM0JKOztBQThCRTtFQUNFLGlCQUFBO0FBM0JKIiwiZmlsZSI6ImF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGFpbmVye1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4vLyAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyLjhyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyRTEwOEUsICMzMTk3RDYpO1xyXG59XHJcblxyXG4uY2FyZC1jbGFzc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzd2aDtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3OyAvKnJlcGxhY2UgdGhpcyBzYW1lIGNvbG9yIGZvciBjYXJkLWNvbC0yIGJnIGNvbG9yICovXHJcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyBcclxufVxyXG4uYnRuLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxMzQsIDEzNywgMTM0KTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNCM0MyRjI7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLWRpdiBidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzODJFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbi5jYXJkLWNvbC0xe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLy8gYm9yZGVyOiAxNXB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDQwcHggNDBweCAxNXB4OyAvKiAxc3QgMTVweCBhbmQgbGFzdCBpcyBzYW1lIGJlY2F1c2UgYWJvdmUgaW4gY2FyZCBpIGhhdmUgZ2l2ZW4gMTVweCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IzQzJGMjtcclxufVxyXG4uY2FyZC1jb2wtMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDMuN3JlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZ2FwOiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC5jYXJkOmhvdmVyIHtcclxuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgXHJcbi8vICAgfVxyXG5cclxuLy8gLmNoaWxkLWNvbnR7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcblxyXG5cclxuLmxvZ2luLXN2Z3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubG9naW4tc3ZnLTJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgd2lkdGg6IDIyJTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucGFyYXtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcblxyXG4uZm9ybS1jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNsYXNzIGZvcm0ge1xyXG4gICAgZmxleDogMTsgLyogVGhpcyBtYWtlcyB0aGUgZm9ybSBleHBhbmQgdG8gZmlsbCBhdmFpbGFibGUgdmVydGljYWwgc3BhY2UgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQXBwbHkgd2lkdGg6IDEwMCUgdG8gaW5wdXQgYW5kIG1hdC1pY29uIHRvIG1ha2UgdGhlbSB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoICovXHJcbiAgLmZvcm0tY2xhc3MgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNsYXNzIGlucHV0LFxyXG4gIC5mb3JtLWNsYXNzIG1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLmxvZ2luLWJ0bntcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZvcmdvdC1wYXNze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAuZm9yZ290LXBhc3M6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICB9XHJcblxyXG4gIC5kaXZpZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS4zcmVtO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxuICB9XHJcblxyXG4gIC50b2dnbGUtb3RoZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZS1vdGhlcjpob3ZlcntcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIH0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNHLGFBQUE7RUFDQSx1QkFBQTtFQUNDLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQUxKOztBQVNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksbUJBQUE7QUFQSjs7QUFVQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsa0NBQUEsRUFBQSxzRUFBQTtFQUNBLHlCQUFBO0FBUko7O0FBVUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtBQVBKOztBQTBCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBdkJKOztBQTBCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBdkJKOztBQTBCQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBdkJKOztBQTJCRTtFQUNFLE9BQUEsRUFBQSxnRUFBQTtBQXhCSjs7QUEyQkUsZ0ZBQUE7QUFDQTtFQUNFLFdBQUE7QUF4Qko7O0FBMkJFOztFQUVFLFdBQUE7QUF4Qko7O0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBNEJFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBekJKOztBQTRCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXpCSjs7QUE0QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF6Qko7O0FBOEJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTNCSjs7QUE4QkU7RUFDRSxpQkFBQTtBQTNCSjtBQUNBLG95TkFBb3lOIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGFpbmVye1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4vLyAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyLjhyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyRTEwOEUsICMzMTk3RDYpO1xyXG59XHJcblxyXG4uY2FyZC1jbGFzc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzd2aDtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3OyAvKnJlcGxhY2UgdGhpcyBzYW1lIGNvbG9yIGZvciBjYXJkLWNvbC0yIGJnIGNvbG9yICovXHJcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyBcclxufVxyXG4uYnRuLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxMzQsIDEzNywgMTM0KTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNCM0MyRjI7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLWRpdiBidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzODJFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbi5jYXJkLWNvbC0xe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLy8gYm9yZGVyOiAxNXB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDQwcHggNDBweCAxNXB4OyAvKiAxc3QgMTVweCBhbmQgbGFzdCBpcyBzYW1lIGJlY2F1c2UgYWJvdmUgaW4gY2FyZCBpIGhhdmUgZ2l2ZW4gMTVweCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IzQzJGMjtcclxufVxyXG4uY2FyZC1jb2wtMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDMuN3JlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZ2FwOiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC5jYXJkOmhvdmVyIHtcclxuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgXHJcbi8vICAgfVxyXG5cclxuLy8gLmNoaWxkLWNvbnR7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcblxyXG5cclxuLmxvZ2luLXN2Z3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubG9naW4tc3ZnLTJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgd2lkdGg6IDIyJTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucGFyYXtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcblxyXG4uZm9ybS1jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNsYXNzIGZvcm0ge1xyXG4gICAgZmxleDogMTsgLyogVGhpcyBtYWtlcyB0aGUgZm9ybSBleHBhbmQgdG8gZmlsbCBhdmFpbGFibGUgdmVydGljYWwgc3BhY2UgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQXBwbHkgd2lkdGg6IDEwMCUgdG8gaW5wdXQgYW5kIG1hdC1pY29uIHRvIG1ha2UgdGhlbSB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoICovXHJcbiAgLmZvcm0tY2xhc3MgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNsYXNzIGlucHV0LFxyXG4gIC5mb3JtLWNsYXNzIG1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLmxvZ2luLWJ0bntcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZvcmdvdC1wYXNze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAuZm9yZ290LXBhc3M6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICB9XHJcblxyXG4gIC5kaXZpZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS4zcmVtO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxuICB9XHJcblxyXG4gIC50b2dnbGUtb3RoZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZS1vdGhlcjpob3ZlcntcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 794:
/*!*************************************************************!*\
  !*** ./src/app/components/grid-list/grid-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridListComponent: () => (/* binding */ GridListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
var _class;



class GridListComponent {
  constructor() {
    this.tiles = [{
      src: 'assets/images/home-carousel/grid-1.jpg',
      cols: 3,
      rows: 1,
      color: '#BAE2D9'
    }, {
      src: 'assets/images/shop/shop-2.png',
      cols: 1,
      rows: 2,
      color: '#BAE2D9'
    }, {
      src: 'assets/images/shop/shop-4.png',
      cols: 1,
      rows: 1,
      color: '#EF1C74'
    }, {
      src: 'assets/images/home-carousel/grid-1.jpg',
      cols: 2,
      rows: 1,
      color: '#F4634A'
    }];
  }
}
_class = GridListComponent;
_class.ɵfac = function GridListComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-grid-list"]],
  decls: 48,
  vars: 0,
  consts: [[1, "container"], [1, "carousel-div"], ["cols", "4", "rowHeight", "7rem", 1, "grid-list"], ["colspan", "3", "rowspan", "1", 2, "border", "#d77281 solid"], [1, "row-1"], ["colspan", "1", "rowspan", "2", 2, "background-color", "rgb(157, 65, 203)"], [1, "col-2"], ["src", "assets\\images\\shop\\shop-2.png"], ["colspan", "1", "rowspan", "1", 2, "border", "#d77281 solid"], [1, "row-2"], ["colspan", "2", "rowspan", "1", 2, "border", "#d77281 solid"], ["routerLink", "/electronics/laptops", 1, "col2-row2"], ["src", "assets\\images\\laptops\\laptop-2.png"], [1, "cover"], ["routerLink", "/electronics/cell-phones", 1, "col2-row2"], ["src", "assets\\images\\mobiles\\mobile-3.png"], [1, "col2-row2"], ["src", "assets\\images\\tv\\tv-9.png"], ["src", "assets\\images\\shop\\shop-5.png"], ["src", "assets\\images\\shop\\shop-1.png"], ["src", "assets\\images\\delivery\\delivery-1.png"], ["src", "assets\\images\\delivery\\delivery-2.png"]],
  template: function GridListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-grid-list", 2)(3, "mat-grid-tile", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " col 1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " col 2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " col 3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " col 4 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " col 5 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " col 6 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-tile", 5)(17, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-grid-tile", 8)(20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " row 2 col 1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " row 2 col 1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-grid-tile", 10)(25, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13)(28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Laptops");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13)(33, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mobiles");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13)(38, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "TV's");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__.MatGridTile],
  styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  width: 99.48%;\n  padding-left: 0.4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.carousel-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.grid-list[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0.2rem;\n}\n\n.carousel-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.row-1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 96%;\n  width: 100%;\n  margin-right: 0.1rem;\n  margin-left: 0.12rem;\n  border-style: solid double;\n  background-color: rgb(154, 73, 170);\n}\n\n.row-2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 96%;\n  width: 99.9%;\n  margin-right: 0.13rem;\n  margin-left: 0.14rem;\n  border-style: solid double;\n  background-color: rgb(231, 163, 128);\n}\n\n.col-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-style: solid double;\n  background-color: rgb(154, 73, 170);\n}\n\n.col2-row2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.5px;\n  margin-left: 1.5px;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  position: relative;\n}\n\n.col2-row2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n  transition: opacity 0.3s ease;\n}\n\n.col2-row2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.cover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-width: 100%;\n  max-height: 28%;\n  width: auto;\n  height: auto;\n  color: rgba(255, 255, 255, 0);\n  cursor: pointer;\n  text-align: center;\n  transition: all 1s linear;\n}\n\n.cover[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: rgb(255, 255, 255);\n  transition: all 0.2s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQUFKOztBQVFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFJQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FBVEo7O0FBWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUlBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUFaSjs7QUFlRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFJQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUVBLDBCQUFBO0VBQ0EsbUNBQUE7QUFoQko7O0FBbUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFoQko7O0FBcUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsWUFBQTtBQWxCSjs7QUFxQkU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBbEJKOztBQXlCRTtFQUtFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQTFCSiIsImZpbGUiOiJncmlkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHdpZHRoOiA5OS40OCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG59XHJcbi5jYXJvdXNlbC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAvLyB3aWR0aDogOTUlO1xyXG59XHJcbi5ncmlkLWxpc3R7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxufVxyXG4uY2Fyb3VzZWwtY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIH1cclxuXHJcbiAgLnJvdy0xe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbjogNXB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA5NiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjEwcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMTJyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIGRvdWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDczLCAxNzApO1xyXG4gIH1cclxuXHJcbiAgLnJvdy0ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbjogNXB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA5NiU7XHJcbiAgICB3aWR0aDogOTkuOTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjEzcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMTRyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIGRvdWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE2MywgMTI4KTtcclxuICB9XHJcblxyXG4gIC5jb2wtMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIGRvdWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDczLCAxNzApO1xyXG4gIH1cclxuXHJcbiAgLmNvbDItcm93MntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVweDsgLy9mb3JtcyB0aGUgc3F1YXJlIGJvcmRlclxyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7IC8qIFNlbWktdHJhbnNwYXJlbnQgYmFja2dyb3VuZCAqL1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmNvbDItcm93MiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmNvbDItcm93MiBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuXHJcbiAgLmNvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHJpZ2h0OiAwOyBcclxuICAgIGJvdHRvbTogMDsgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyOCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcclxuXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiBcclxuXHJcbiAgLmNvdmVyOmhvdmVyIHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xyXG4gIH1cclxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmlkLWxpc3QvZ3JpZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBQUo7O0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUlBLFdBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFUSjs7QUFZRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBSUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQVpKOztBQWVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUlBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxtQ0FBQTtBQWhCSjs7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWhCSjs7QUFxQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQWxCSjs7QUFxQkU7RUFDRSxZQUFBO0FBbEJKOztBQXFCRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFsQko7O0FBeUJFO0VBS0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBMUJKO0FBSUEsd2hMQUF3aEwiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHdpZHRoOiA5OS40OCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG59XHJcbi5jYXJvdXNlbC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAvLyB3aWR0aDogOTUlO1xyXG59XHJcbi5ncmlkLWxpc3R7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxufVxyXG4uY2Fyb3VzZWwtY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIH1cclxuXHJcbiAgLnJvdy0xe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbjogNXB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA5NiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjEwcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMTJyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIGRvdWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDczLCAxNzApO1xyXG4gIH1cclxuXHJcbiAgLnJvdy0ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbjogNXB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA5NiU7XHJcbiAgICB3aWR0aDogOTkuOTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjEzcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMTRyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIGRvdWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE2MywgMTI4KTtcclxuICB9XHJcblxyXG4gIC5jb2wtMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIGRvdWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDczLCAxNzApO1xyXG4gIH1cclxuXHJcbiAgLmNvbDItcm93MntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVweDsgLy9mb3JtcyB0aGUgc3F1YXJlIGJvcmRlclxyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7IC8qIFNlbWktdHJhbnNwYXJlbnQgYmFja2dyb3VuZCAqL1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmNvbDItcm93MiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmNvbDItcm93MiBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuXHJcbiAgLmNvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHJpZ2h0OiAwOyBcclxuICAgIGJvdHRvbTogMDsgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyOCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcclxuXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiBcclxuXHJcbiAgLmNvdmVyOmhvdmVyIHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6471:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.service */ 6319);
/* harmony import */ var src_app_shared_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/sidenav.service */ 4454);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 8128);
var _class;









function HeaderComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 11)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "dialpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Redial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 11)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class HeaderComponent {
  constructor(appService, sidenavService) {
    this.appService = appService;
    this.sidenavService = sidenavService;
  }
  ngOnInit() {}
  toggleMenu() {
    this.sidenavService.toggleSidenav();
  }
}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_sidenav_service__WEBPACK_IMPORTED_MODULE_1__.SidenavService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header"]],
  decls: 20,
  vars: 1,
  consts: [[1, "toolbar", "mat-elevation-z2"], ["mat-icon-button", "", "matTooltip", "Menu", 1, "example-icon", 3, "click"], ["routerLink", "home", 1, "mr-2", "sm:mr-2", "md:mr-2", "lg:mr-2", "xl:mr-2", "link", "white-color"], [1, "favorite-icon", "tool-icon", "running-cart"], [1, "example-spacer"], ["mat-icon-button", "", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon", 3, "matMenuTriggerFor"], [1, "mat-menuu"], ["appMenu", "matMenu"], ["matMenuContent", ""], ["mat-menu-item", "", "routerLink", "/authentication"], ["mat-menu-item", ""]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p")(2, "mat-toolbar", 0)(3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
        return ctx.toggleMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "DzuoKart");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "shopping_cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5)(12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6)(15, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-menu", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, HeaderComponent_ng_template_19_Template, 15, 0, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger],
  styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  background-color: #FAD16B;\n  height: 7.5vh;\n  margin: 0;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.4);\n}\n\n.link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.white-color[_ngcontent-%COMP%] {\n  color: #363939;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: #363939;\n}\n\n.tool-icon[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n\n.running-cart[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_runBigShoppingCart 2s ease 1; \n\n}\n\n@keyframes _ngcontent-%COMP%_runBigShoppingCart {\n  0% {\n    transform: translateX(0) scale(1);\n    animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  }\n  50% {\n    transform: translateX(calc(78rem - 100%)) scale(2.4);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  100% {\n    transform: translateX(0) scale(1);\n    position: relative;\n    \n\n    top: 0;\n    left: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_runSmallShoppingCart {\n  0% {\n    transform: translateX(0) scale(1);\n    animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  }\n  50% {\n    transform: translateX(calc(8.8rem - 100%)) scale(2.4);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  100% {\n    transform: translateX(0) scale(1);\n    position: relative;\n    \n\n    top: 0;\n    left: 0;\n  }\n}\n@media all and (max-width: 430px) {\n  .toolbar[_ngcontent-%COMP%] {\n    background-color: #15a453;\n    height: 7.5vh;\n    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.4);\n  }\n  .running-cart[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_runSmallShoppingCart 2s ease 1;\n  }\n}\n\n\n@media all and (max-width: 430px) {\n  .toolbar[_ngcontent-%COMP%]   .mat-menu-button[_ngcontent-%COMP%] {\n    display: flex; \n\n  }\n  .toolbar[_ngcontent-%COMP%]   .mat-menu-item[_ngcontent-%COMP%] {\n    display: block; \n\n  }\n  .toolbar[_ngcontent-%COMP%]   .mat-menu-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    margin-right: 8px; \n\n  }\n  .toolbar[_ngcontent-%COMP%]   .example-icon.favorite-icon[_ngcontent-%COMP%] {\n    display: none; \n\n  }\n}\n.mat-menuu[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFDQTtFQUNFLHVDQUFBLEVBQUEsOEJBQUE7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsaUNBQUE7SUFDQSx5REFBQTtFQUNGO0VBQ0E7SUFDRSxvREFBQTtJQUNBLHVEQUFBO0VBQ0Y7RUFDQTtJQUNFLGlDQUFBO0lBQ0Esa0JBQUE7SUFDRixpQ0FBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VBQ0E7QUFDRjtBQUdBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLHlEQUFBO0VBREY7RUFHQTtJQUNFLHFEQUFBO0lBQ0EsdURBQUE7RUFERjtFQUdBO0lBQ0UsaUNBQUE7SUFDQSxrQkFBQTtJQUNGLGlDQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7RUFEQTtBQUNGO0FBS0E7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLDhDQUFBO0VBSEY7RUFNQTtJQUNFLHlDQUFBO0VBSkY7QUFDRjtBQVFBLDhFQUFBO0FBQ0E7RUFDRTtJQUNFLGFBQUEsRUFBQSw0QkFBQTtFQU5GO0VBUUE7SUFDRSxjQUFBLEVBQUEsc0NBQUE7RUFORjtFQVFBO0lBQ0UsaUJBQUEsRUFBQSxzQ0FBQTtFQU5GO0VBUUE7SUFDRSxhQUFBLEVBQUEscUNBQUE7RUFORjtBQUNGO0FBVUU7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVJGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgXHJcbi50b29sYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUQxNkI7XHJcbiAgaGVpZ2h0OiA3LjV2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuLmxpbmt7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2hpdGUtY29sb3J7XHJcbiAgY29sb3I6ICMzNjM5Mzk7XHJcbn1cclxuXHJcbi5tYXQtaWNvbntcclxuICBjb2xvcjogIzM2MzkzOTtcclxufVxyXG4udG9vbC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAvLyBjb2xvcjogIzJmMzk0MDtcclxufVxyXG5cclxuLnJ1bm5pbmctY2FydCB7XHJcbiAgYW5pbWF0aW9uOiBydW5CaWdTaG9wcGluZ0NhcnQgMnMgZWFzZSAxOyAvKiBBZGp1c3QgZHVyYXRpb24gYXMgbmVlZGVkICovXHJcbn1cclxuXHJcbi8vZnVsbCB3aWR0aFxyXG5Aa2V5ZnJhbWVzIHJ1bkJpZ1Nob3BwaW5nQ2FydCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMSwgMC45LCAwLjIsIDEpOyBcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDc4cmVtIC0gMTAwJSkpIHNjYWxlKDIuNCk7IFxyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKTsgXHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIEFkanVzdCBwb3NpdGlvbmluZyBhcyBuZWVkZWQgKi9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vc21hbGwgd2lkdGhcclxuQGtleWZyYW1lcyBydW5TbWFsbFNob3BwaW5nQ2FydCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMSwgMC45LCAwLjIsIDEpOyBcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDguOHJlbSAtIDEwMCUpKSBzY2FsZSgyLjQpOyBcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSk7IFxyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBBZGp1c3QgcG9zaXRpb25pbmcgYXMgbmVlZGVkICovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vL1J1bm5pbmcgYWxsIGNoYW5nZXMgZm9yIG1vZGlsZSB3aWR0aFxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gIC50b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1YTQ1MztcclxuICAgIGhlaWdodDogNy41dmg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuXHJcbiAgLnJ1bm5pbmctY2FydHtcclxuICAgIGFuaW1hdGlvbjogcnVuU21hbGxTaG9wcGluZ0NhcnQgMnMgZWFzZSAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIEFkZCB0aGlzIG1lZGlhIHF1ZXJ5IHRvIGhpZGUgU2V0dGluZ3MgYW5kIFBlcnNvbiBidXR0b25zIG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAudG9vbGJhciAubWF0LW1lbnUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIERpc3BsYXkgdGhlIG1lbnUgYnV0dG9uICovXHJcbiAgfVxyXG4gIC50b29sYmFyIC5tYXQtbWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBTaG93IG1lbnUgaXRlbXMgYXMgYmxvY2sgZWxlbWVudHMgKi9cclxuICB9XHJcbiAgLnRvb2xiYXIgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4OyAvKiBBZGQgc3BhY2luZyBiZXR3ZWVuIGljb24gYW5kIHRleHQgKi9cclxuICB9XHJcbiAgLnRvb2xiYXIgLmV4YW1wbGUtaWNvbi5mYXZvcml0ZS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgU2V0dGluZ3MgYW5kIFBlcnNvbiBidXR0b25zICovXHJcbiAgfVxyXG59XHJcblxyXG4vLyBNYXQgTWVudSBzdHlsZXNcclxuICAubWF0LW1lbnV1IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICAvLyBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDhDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQUNBO0VBQ0UsdUNBQUEsRUFBQSw4QkFBQTtBQUVGOztBQUVBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLHlEQUFBO0VBQ0Y7RUFDQTtJQUNFLG9EQUFBO0lBQ0EsdURBQUE7RUFDRjtFQUNBO0lBQ0UsaUNBQUE7SUFDQSxrQkFBQTtJQUNGLGlDQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7RUFDQTtBQUNGO0FBR0E7RUFDRTtJQUNFLGlDQUFBO0lBQ0EseURBQUE7RUFERjtFQUdBO0lBQ0UscURBQUE7SUFDQSx1REFBQTtFQURGO0VBR0E7SUFDRSxpQ0FBQTtJQUNBLGtCQUFBO0lBQ0YsaUNBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtFQURBO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxhQUFBO0lBQ0EsOENBQUE7RUFIRjtFQU1BO0lBQ0UseUNBQUE7RUFKRjtBQUNGO0FBUUEsOEVBQUE7QUFDQTtFQUNFO0lBQ0UsYUFBQSxFQUFBLDRCQUFBO0VBTkY7RUFRQTtJQUNFLGNBQUEsRUFBQSxzQ0FBQTtFQU5GO0VBUUE7SUFDRSxpQkFBQSxFQUFBLHNDQUFBO0VBTkY7RUFRQTtJQUNFLGFBQUEsRUFBQSxxQ0FBQTtFQU5GO0FBQ0Y7QUFVRTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUkY7QUFDQSxvOElBQW84SSIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgXHJcbi50b29sYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUQxNkI7XHJcbiAgaGVpZ2h0OiA3LjV2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuLmxpbmt7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2hpdGUtY29sb3J7XHJcbiAgY29sb3I6ICMzNjM5Mzk7XHJcbn1cclxuXHJcbi5tYXQtaWNvbntcclxuICBjb2xvcjogIzM2MzkzOTtcclxufVxyXG4udG9vbC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAvLyBjb2xvcjogIzJmMzk0MDtcclxufVxyXG5cclxuLnJ1bm5pbmctY2FydCB7XHJcbiAgYW5pbWF0aW9uOiBydW5CaWdTaG9wcGluZ0NhcnQgMnMgZWFzZSAxOyAvKiBBZGp1c3QgZHVyYXRpb24gYXMgbmVlZGVkICovXHJcbn1cclxuXHJcbi8vZnVsbCB3aWR0aFxyXG5Aa2V5ZnJhbWVzIHJ1bkJpZ1Nob3BwaW5nQ2FydCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMSwgMC45LCAwLjIsIDEpOyBcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDc4cmVtIC0gMTAwJSkpIHNjYWxlKDIuNCk7IFxyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKTsgXHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIEFkanVzdCBwb3NpdGlvbmluZyBhcyBuZWVkZWQgKi9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vc21hbGwgd2lkdGhcclxuQGtleWZyYW1lcyBydW5TbWFsbFNob3BwaW5nQ2FydCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMSwgMC45LCAwLjIsIDEpOyBcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDguOHJlbSAtIDEwMCUpKSBzY2FsZSgyLjQpOyBcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSk7IFxyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBBZGp1c3QgcG9zaXRpb25pbmcgYXMgbmVlZGVkICovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vL1J1bm5pbmcgYWxsIGNoYW5nZXMgZm9yIG1vZGlsZSB3aWR0aFxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gIC50b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1YTQ1MztcclxuICAgIGhlaWdodDogNy41dmg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuXHJcbiAgLnJ1bm5pbmctY2FydHtcclxuICAgIGFuaW1hdGlvbjogcnVuU21hbGxTaG9wcGluZ0NhcnQgMnMgZWFzZSAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIEFkZCB0aGlzIG1lZGlhIHF1ZXJ5IHRvIGhpZGUgU2V0dGluZ3MgYW5kIFBlcnNvbiBidXR0b25zIG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAudG9vbGJhciAubWF0LW1lbnUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIERpc3BsYXkgdGhlIG1lbnUgYnV0dG9uICovXHJcbiAgfVxyXG4gIC50b29sYmFyIC5tYXQtbWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBTaG93IG1lbnUgaXRlbXMgYXMgYmxvY2sgZWxlbWVudHMgKi9cclxuICB9XHJcbiAgLnRvb2xiYXIgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4OyAvKiBBZGQgc3BhY2luZyBiZXR3ZWVuIGljb24gYW5kIHRleHQgKi9cclxuICB9XHJcbiAgLnRvb2xiYXIgLmV4YW1wbGUtaWNvbi5mYXZvcml0ZS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgU2V0dGluZ3MgYW5kIFBlcnNvbiBidXR0b25zICovXHJcbiAgfVxyXG59XHJcblxyXG4vLyBNYXQgTWVudSBzdHlsZXNcclxuICAubWF0LW1lbnV1IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICAvLyBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 159:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid-list/grid-list.component */ 794);
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test/test.component */ 3744);
var _class;



class HomeComponent {
  constructor() {
    this.tiles = [{
      src: 'assets/images/home-carousel/grid-1.jpg',
      cols: 3,
      rows: 1,
      color: 'lightgreen'
    }, {
      src: 'assets/images/home-carousel/grid-1.jpg',
      cols: 1,
      rows: 2,
      color: 'dodgerblue'
    }, {
      src: 'assets/images/home-carousel/grid-1.jpg',
      cols: 1,
      rows: 1,
      color: '#EAC562'
    }, {
      src: 'assets/images/home-carousel/grid-1.jpg',
      cols: 2,
      rows: 1,
      color: '#EF1C74'
    }];
  }
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 3,
  vars: 0,
  consts: [[1, "container"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-grid-list")(2, "app-test");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_0__.GridListComponent, _test_test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2952:
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.service */ 6319);
/* harmony import */ var src_app_shared_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/sidenav.service */ 4454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 3228);
var _class;







const _c0 = ["sidenav"];
const _c1 = function (a0) {
  return {
    "app-nav-open": a0
  };
};
class SidenavComponent {
  constructor(appService, sidenavService) {
    this.appService = appService;
    this.sidenavService = sidenavService;
    this.navOpen = false; //need to change to false for default
  }

  ngOnInit() {
    this.windowHeight = document.body.clientHeight;
  }
  handleSideNavOpenStart() {
    this.navOpen = true;
  }
  handleSideNavStateChange(navOpen) {
    if (this.navOpen == true) {
      this.navOpen = navOpen;
    }
  }
  // Create a getter for the Sidenav state
  get isSidenavOpen() {
    return this.sidenavService.getSidenavState();
  }
}
_class = SidenavComponent;
_class.ɵfac = function SidenavComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_sidenav_service__WEBPACK_IMPORTED_MODULE_1__.SidenavService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-sidenav"]],
  viewQuery: function SidenavComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    }
  },
  decls: 13,
  vars: 7,
  consts: [[1, "app-nav-container", 3, "ngClass"], [3, "hasBackdrop"], ["mode", "over", 1, "app-sidenav", 3, "opened", "openedStart", "openedChange"], ["sidenav", ""], [1, "dropdown"], ["mat-raised-button", "", "color", "primary"]],
  template: function SidenavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-sidenav-container", 1)(2, "mat-sidenav", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openedStart", function SidenavComponent_Template_mat_sidenav_openedStart_2_listener() {
        return ctx.handleSideNavOpenStart();
      })("openedChange", function SidenavComponent_Template_mat_sidenav_openedChange_2_listener($event) {
        return ctx.handleSideNavStateChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-nav-list")(5, "div", 4)(6, "mat-list-item")(7, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "abc");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-list-item")(10, "section")(11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "click");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, ctx.navOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasBackdrop", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-elevation-z4", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opened", ctx.isSidenavOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem],
  styles: [".app-nav-container[_ngcontent-%COMP%] {\n  position: fixed;\n  height: calc(100% - 55px);\n  margin: 0;\n  left: 0;\n  top: 60px;\n}\n.app-nav-container[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.app-nav-container.app-nav-open[_ngcontent-%COMP%] {\n  width: 270px;\n  z-index: 3;\n  transition: width 0.3s ease-in-out;\n}\n\n.app-sidenav[_ngcontent-%COMP%] {\n  background-color: rgb(246, 245, 245);\n  width: 270px;\n  z-index: 3;\n}\n\n.app-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media all and (max-width: 430px) {\n  .app-nav-container.app-nav-open[_ngcontent-%COMP%] {\n    width: 60%;\n    z-index: 3;\n    transition: width 0.3s ease-in-out;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQUFKOztBQUlBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFLQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFVBQUE7SUFDQSxrQ0FBQTtFQUZOO0FBQ0YiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbmF2LWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA2MHB4O1xyXG5cclxuICAgIG1hdC1zaWRlbmF2LWNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtbmF2LWNvbnRhaW5lci5hcHAtbmF2LW9wZW57XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuXHJcbi5hcHAtc2lkZW5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NSwgMjQ1KTtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBcclxufVxyXG4uYXBwLXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vL1J1bm5pbmcgYWxsIGNoYW5nZXMgZm9yIG1vZGlsZSB3aWR0aFxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgLmFwcC1uYXYtY29udGFpbmVyLmFwcC1uYXYtb3BlbntcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQUFKOztBQUlBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFLQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFVBQUE7SUFDQSxrQ0FBQTtFQUZOO0FBQ0Y7QUFDQSw0bURBQTRtRCIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbmF2LWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA2MHB4O1xyXG5cclxuICAgIG1hdC1zaWRlbmF2LWNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtbmF2LWNvbnRhaW5lci5hcHAtbmF2LW9wZW57XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuXHJcbi5hcHAtc2lkZW5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NSwgMjQ1KTtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBcclxufVxyXG4uYXBwLXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vL1J1bm5pbmcgYWxsIGNoYW5nZXMgZm9yIG1vZGlsZSB3aWR0aFxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgLmFwcC1uYXYtY29udGFpbmVyLmFwcC1uYXYtb3BlbntcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3744:
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestComponent: () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app.service */ 6319);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);
var _class;






function TestComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_mat_card_2_Template_mat_card_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const product_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.viewProductDetails(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "hotel_class");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", product_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r2.ratings.rate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", product_r2.price, "");
  }
}
function TestComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.goToProductsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class TestComponent {
  constructor(appService) {
    this.appService = appService;
    this.showViewAllButton = false;
  }
  ngOnInit() {
    // this.appService.getProducts().subscribe((data) => {
    // this.products = data;
    // Convert data to an array if it's an object
    // if (data instanceof Object) {
    //   this.products = Object.values(data);
    // } else {
    //   this.products = data;
    // }
    // Slice the array to get the first 10 items
    // this.products = this.products.slice(0, 12);
    //   console.log(this.products);
    //   this.showViewAllButton = this.products.length > 6; // Adjust based on your layout
    // });
    this.appService.getMProducts().subscribe(data => {
      console.log('mongo products', data);
      if (data instanceof Object) {
        this.products = Object.values(data);
      } else {
        this.products = data;
      }
    });
  }
  goToProductsPage() {
    // Implement navigation to the Products page
  }
  viewProductDetails(product) {
    // Implement navigation to the Product Details page and pass the product data
    console.log(product);
  }
}
_class = TestComponent;
_class.ɵfac = function TestComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-test"]],
  decls: 4,
  vars: 2,
  consts: [[1, "container"], [1, "product-grid"], ["class", "product-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "view-all-button", 4, "ngIf"], [1, "product-card", 3, "click"], [1, "prod-img"], ["draggable", "false", 3, "src", "alt"], [1, "product-details"], [1, "view-all-button"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
  template: function TestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TestComponent_mat_card_2_Template, 12, 5, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TestComponent_div_3_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showViewAllButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard],
  styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  \n\n}\n\n.product-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 17rem;\n  padding: 0.5rem;\n  gap: 0.3rem;\n}\n\n.view-all-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  \n\n}\n\nmat-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 3px rgba(0, 0, 0, 0.4), 0px 0px 2px 0px rgba(0, 0, 0, 0.4), 0px 1px 2px 0px rgba(0, 0, 0, 0.4);\n  transform: translateZ(0);\n  border: #FAD16B solid;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  height: 16rem;\n  width: 80%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  \n\n}\n\n.prod-img[_ngcontent-%COMP%] {\n  width: 10rem;\n  cursor: pointer;\n  height: 65%;\n}\n\n.product-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 35%;\n  width: 100%;\n  background-color: #FAD16B;\n}\n\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding-left: 2px;\n  margin: 5px 0; \n\n  flex: 1;\n}\n\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  color: black;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-size: medium;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 16.5px;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n\n.product-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: medium;\n  padding-top: 3px;\n  color: #FAD16B;\n  vertical-align: middle; \n\n}\n\n.product-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin: 5px 0;\n  flex: 1;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-left: 5px !important;\n  padding: 0 0px; \n\n  border-radius: 20px; \n\n  color: #FAD16B;\n  background-color: #363939; \n\n  border: 1px solid #363939; \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBRUEsK0JBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFESjs7QUFPRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBSko7O0FBUUM7RUFDRyxnSEFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFVQztFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUVBLGlDQUFBO0FBUkY7O0FBV0M7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFSSjs7QUFZQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUlBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFaRjs7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQSxFQUFBLHNDQUFBO0VBQ0EsT0FBQTtBQVpGOztBQWVBO0VBQ0UsWUFBQTtFQUNBLDZFQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0FBYkY7O0FBZUE7RUFFRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtBQWJGOztBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsc0JBQUEsRUFBQSw0Q0FBQTtBQWRGOztBQWdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQSxFQUFBLGtFQUFBO0VBQ0EsbUJBQUEsRUFBQSxxREFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQSxFQUFBLHFCQUFBO0VBQ0EseUJBQUEsRUFBQSxpQkFBQTtBQWJGIiwiZmlsZSI6InRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBob21lLmNvbXBvbmVudC5zY3NzICovXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIC8qIEFkZCBiYWNrZ3JvdW5kIHN0eWxlcyBoZXJlICovXHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWdyaWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjEwcHgsIDFmcikpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE3cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTM5O1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgLnZpZXctYWxsLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvKiBBZGQgYnV0dG9uIHN0eWxlcyBoZXJlICovXHJcbiAgfVxyXG4gIFxyXG5cclxuIG1hdC1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAgM3B4IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAgIDBweCAwcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgICAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgYm9yZGVyOiAjRkFEMTZCIHNvbGlkO1xyXG4gfVxyXG5cclxuIC5wcm9kdWN0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxNnJlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjIzLCAyMjQpO1xyXG4gIC8qIEFkZCBwcm9kdWN0IGNhcmQgc3R5bGVzIGhlcmUgKi9cclxufVxyXG5cclxuIC5wcm9kLWltZ3tcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogNjUlOyBcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuIH1cclxuXHJcbiAucHJvZHVjdC1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy8gYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBUaGlzIGFsaWducyB0aGUgY29udGVudCB2ZXJ0aWNhbGx5ICovXHJcbiAgLy8gcGFkZGluZzogMC4zcmVtO1xyXG4gIGhlaWdodDogMzUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUQxNkI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbHMgcCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIG1hcmdpbjogNXB4IDA7IC8qIFNldCB0b3AgYW5kIGJvdHRvbSBtYXJnaW5zIHRvIDVweCAqL1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbHMgcDpudGgtY2hpbGQoMSkge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuIFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmbGV4OiAxOyBcclxufVxyXG4ucHJvZHVjdC1kZXRhaWxzIHA6bnRoLWNoaWxkKDMpIHtcclxuICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2LjVweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmbGV4OiAxOyBcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlscyBzcGFuIG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIGNvbG9yOiAjRkFEMTZCO1xyXG4gXHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogQWxpZ24gdGhlIGljb24gdmVydGljYWxseSB3aXRoIHRoZSB0ZXh0ICovXHJcbn1cclxuLnByb2R1Y3QtZGV0YWlscyBzcGFuICB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBsZWZ0IGFuZCByaWdodCBzaWRlcywgc2V0IHRvcCBhbmQgYm90dG9tIHRvIDAgKi9cclxuICBib3JkZXItcmFkaXVzOiAyMHB4OyAvKiBTZXQgYSBib3JkZXItcmFkaXVzIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZXMgKi9cclxuICBjb2xvcjogI0ZBRDE2QjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTM5OzsgLyogQmFja2dyb3VuZCBjb2xvciAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNjM5Mzk7IC8qIEJvcmRlciBjb2xvciAqL1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90ZXN0L3Rlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBRUEsK0JBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFESjs7QUFPRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBSko7O0FBUUM7RUFDRyxnSEFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFVQztFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUVBLGlDQUFBO0FBUkY7O0FBV0M7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFSSjs7QUFZQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUlBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFaRjs7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQSxFQUFBLHNDQUFBO0VBQ0EsT0FBQTtBQVpGOztBQWVBO0VBQ0UsWUFBQTtFQUNBLDZFQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0FBYkY7O0FBZUE7RUFFRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtBQWJGOztBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsc0JBQUEsRUFBQSw0Q0FBQTtBQWRGOztBQWdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQSxFQUFBLGtFQUFBO0VBQ0EsbUJBQUEsRUFBQSxxREFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQSxFQUFBLHFCQUFBO0VBQ0EseUJBQUEsRUFBQSxpQkFBQTtBQWJGO0FBRUEsZ3lLQUFneUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBob21lLmNvbXBvbmVudC5zY3NzICovXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIC8qIEFkZCBiYWNrZ3JvdW5kIHN0eWxlcyBoZXJlICovXHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWdyaWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjEwcHgsIDFmcikpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE3cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTM5O1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgLnZpZXctYWxsLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvKiBBZGQgYnV0dG9uIHN0eWxlcyBoZXJlICovXHJcbiAgfVxyXG4gIFxyXG5cclxuIG1hdC1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDAgM3B4IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAgIDBweCAwcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgICAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgYm9yZGVyOiAjRkFEMTZCIHNvbGlkO1xyXG4gfVxyXG5cclxuIC5wcm9kdWN0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxNnJlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjIzLCAyMjQpO1xyXG4gIC8qIEFkZCBwcm9kdWN0IGNhcmQgc3R5bGVzIGhlcmUgKi9cclxufVxyXG5cclxuIC5wcm9kLWltZ3tcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogNjUlOyBcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuIH1cclxuXHJcbiAucHJvZHVjdC1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy8gYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBUaGlzIGFsaWducyB0aGUgY29udGVudCB2ZXJ0aWNhbGx5ICovXHJcbiAgLy8gcGFkZGluZzogMC4zcmVtO1xyXG4gIGhlaWdodDogMzUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUQxNkI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbHMgcCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIG1hcmdpbjogNXB4IDA7IC8qIFNldCB0b3AgYW5kIGJvdHRvbSBtYXJnaW5zIHRvIDVweCAqL1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbHMgcDpudGgtY2hpbGQoMSkge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuIFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmbGV4OiAxOyBcclxufVxyXG4ucHJvZHVjdC1kZXRhaWxzIHA6bnRoLWNoaWxkKDMpIHtcclxuICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2LjVweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmbGV4OiAxOyBcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlscyBzcGFuIG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIGNvbG9yOiAjRkFEMTZCO1xyXG4gXHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogQWxpZ24gdGhlIGljb24gdmVydGljYWxseSB3aXRoIHRoZSB0ZXh0ICovXHJcbn1cclxuLnByb2R1Y3QtZGV0YWlscyBzcGFuICB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBsZWZ0IGFuZCByaWdodCBzaWRlcywgc2V0IHRvcCBhbmQgYm90dG9tIHRvIDAgKi9cclxuICBib3JkZXItcmFkaXVzOiAyMHB4OyAvKiBTZXQgYSBib3JkZXItcmFkaXVzIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZXMgKi9cclxuICBjb2xvcjogI0ZBRDE2QjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTM5OzsgLyogQmFja2dyb3VuZCBjb2xvciAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNjM5Mzk7IC8qIEJvcmRlciBjb2xvciAqL1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6319:
/*!***************************************!*\
  !*** ./src/app/shared/app.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;


class AppService {
  constructor(http) {
    this.http = http;
  }
  getProducts() {
    let url = `https://fakestoreapi.com/products`;
    return this.http.get(url);
  }
  getMProducts() {
    let url = `/api/data/getProducts`;
    return this.http.get(url);
  }
}
_class = AppService;
_class.ɵfac = function AppService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1383:
/*!************************************************!*\
  !*** ./src/app/shared/shared/shared.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;































class SharedModule {}
_class = SharedModule;
_class.ɵfac = function SharedModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule]
  });
})();

/***/ }),

/***/ 4454:
/*!*******************************************!*\
  !*** ./src/app/shared/sidenav.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavService: () => (/* binding */ SidenavService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class SidenavService {
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  getSidenavState() {
    return this.isSidenavOpen;
  }
  constructor() {
    this.isSidenavOpen = false;
  }
}
_class = SidenavService;
_class.ɵfac = function SidenavService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map