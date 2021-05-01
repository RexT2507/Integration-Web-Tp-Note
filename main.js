(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/Integration-Web-Tp-Note/Integration-Web-Tp-Note/src/main.ts */"zUnb");


/***/ }),

/***/ "62zh":
/*!******************************************!*\
  !*** ./src/app/animations/animations.ts ***!
  \******************************************/
/*! exports provided: fader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none', opacity: 0 }),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'unset', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' })),
        ], { optional: true }),
    ]),
]);
// export const translateTop = trigger('translateTop', [
//   transition('void => *', [
//     style({
//       opacity: 0,
//       transform: 'translateY(-100%)'
//     }),
//     animate('0.8s ease-out')
//   ]),
//   transition('* => void', [
//     animate('0.8s ease-out', style({
//       opacity: 0,
//       transform: 'translateY(100%)'
//     }))
//   ])
// ]);


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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/animations */ "62zh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function AppComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
} }
function AppComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { collapsed: a0 }; };
class AppComponent {
    constructor() {
        this.isMenuCollapsed = true;
    }
    prepareRoute(outlet) {
        console.log(outlet);
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    toggleMenuCollapse() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 48, vars: 5, consts: [[1, "content-parent"], [1, "sidebar"], ["elem", ""], ["src", "../assets/logoRabbit@2x.png", 1, "rabbit-logo"], ["src", "../assets/panier.png"], [1, "vector-line"], [3, "click"], ["class", "pending-logo", "src", "../assets/hamburger.png", 4, "ngIf"], ["class", "pending-logo-close", 4, "ngIf"], ["src", "../assets/search.png"], [1, "sidebar-org"], [1, "collapse-menu", 3, "ngClass"], [1, "first-parent"], [1, "first-content"], [1, "first-content-child"], [1, "first-vector"], [1, "menu-space"], [1, "content"], ["Outlet", "outlet"], ["src", "../assets/hamburger.png", 1, "pending-logo"], [1, "pending-logo-close"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_9_listener() { return ctx.toggleMenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppComponent_img_10_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_span_11_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "orga");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "bits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Our fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Our vegetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Our vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "router-outlet", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.isMenuCollapsed));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 150px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  opacity: 1;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n}\n\n.sidebar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: center;\n}\n\n.vector-line[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20%;\n  background-color: #F1D145;\n}\n\n.content-parent[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\ndiv.content[_ngcontent-%COMP%] {\n  margin-left: 135px;\n  padding: 1px 16px;\n  height: 100%;\n  background-color: #F7F8FA;\n}\n\n.rabbit-logo[_ngcontent-%COMP%] {\n  width: 69px;\n  height: 57px;\n  opacity: 1;\n}\n\n.pending-logo[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  transition: all 0.6s;\n}\n\n.pending-logo[_ngcontent-%COMP%]:hover {\n  width: 50px;\n  height: 50px;\n  transform: scale(1.1);\n}\n\n.pending-logo-close[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  font-size: 29px;\n  color: #375238;\n  cursor: pointer;\n}\n\n.collapse-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  margin-left: 150px;\n  width: calc(100vw - 150px);\n  background-color: white;\n  transition: width 1s ease, 2s background-position 1s ease;\n}\n\n.collapse-menu.collapsed[_ngcontent-%COMP%] {\n  transition: width 1s ease, 2s background-position 1s ease;\n  position: fixed;\n  overflow: hidden;\n  width: 0;\n}\n\n.sidebar-org[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 20px;\n  transform: matrix(0, -1, 1, 0, 0, 0);\n  color: #375238;\n}\n\n.sidebar-org[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #F1D145;\n}\n\n.collapse-menu[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 1811px;\n  position: absolute;\n  top: 0;\n  transition: width 500ms ease, 500ms background-position 500ms ease;\n  margin-left: 150px;\n  background-image: url('tomatoes.png');\n  background-repeat: no-repeat;\n  background-size: 817px;\n  background-position-y: center;\n  background-position: right;\n}\n\n.collapse-menu.collapsed[_ngcontent-%COMP%] {\n  width: 0;\n  position: fixed;\n  overflow: hidden;\n  background-position-x: 1900px;\n  background-position-y: center;\n  transition: 500ms width 500ms ease, background-position 500ms ease;\n}\n\n.first-parent[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  margin-left: 5em;\n  height: 15%;\n}\n\n.first-content[_ngcontent-%COMP%] {\n  margin-top: 76px;\n  height: auto;\n  width: auto;\n  cursor: default;\n}\n\n.first-content-child[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 24px/29px acumin-pro;\n  letter-spacing: 1.8px;\n  color: #3B573B;\n  opacity: 1;\n  display: inline-block;\n}\n\n.first-vector[_ngcontent-%COMP%] {\n  top: 76px;\n  left: 794px;\n  width: 25px;\n  height: 0px;\n  border: 1px solid #F3D145;\n  opacity: 1;\n  display: inline-block;\n  margin-bottom: 4px;\n  margin-right: 16px;\n  transition: 0.3s;\n  cursor: default;\n}\n\n.menu-space[_ngcontent-%COMP%] {\n  margin-top: 9em;\n}\n\n@media screen and (max-width: 700px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  div.content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: center;\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFFRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSEY7O0FBTUE7RUFFRSxZQUFBO0FBSkY7O0FBT0E7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBUUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFORjs7QUFTQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFQRjs7QUFVQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFSRjs7QUFXQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBVEY7O0FBWUE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5REFBQTtBQVZGOztBQVlFO0VBRUUseURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0FBWEo7O0FBZ0JBO0VBRUUseUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBZEY7O0FBaUJBO0VBRUUsY0FBQTtBQWZGOztBQW9CQTtFQUVFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGtFQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBbEJGOztBQW9CRTtFQUNFLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0VBQUE7QUFsQko7O0FBdUJBO0VBRUUsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFyQkY7O0FBd0JBO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUF0QkY7O0FBeUJBO0VBRUUsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQXZCRjs7QUEwQkE7RUFFRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBeEJGOztBQTJCQTtFQUVFLGVBQUE7QUF6QkY7O0FBOEJBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBM0JGOztFQTZCQTtJQUFZLFdBQUE7RUF6Qlo7O0VBMEJBO0lBQWEsY0FBQTtFQXRCYjtBQUNGOztBQXlCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VBdkJGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2lkZWJhclxue1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNpZGViYXIgPiBkaXZcbntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52ZWN0b3ItbGluZVxue1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRDE0NTtcbn1cblxuLmNvbnRlbnQtcGFyZW50XG57XG4gIGhlaWdodDogMTAwJTtcbn1cblxuZGl2LmNvbnRlbnRcbntcbiAgbWFyZ2luLWxlZnQ6IDEzNXB4O1xuICBwYWRkaW5nOiAxcHggMTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xufVxuXG4ucmFiYml0LWxvZ29cbntcbiAgd2lkdGg6IDY5cHg7XG4gIGhlaWdodDogNTdweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBlbmRpbmctbG9nb1xue1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC42MHM7XG59XG5cbi5wZW5kaW5nLWxvZ286aG92ZXJcbntcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ucGVuZGluZy1sb2dvLWNsb3NlXG57XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgY29sb3I6ICMzNzUyMzg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbGxhcHNlLW1lbnVcbntcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLCAycyBiYWNrZ3JvdW5kLXBvc2l0aW9uIDFzIGVhc2U7XG5cbiAgJi5jb2xsYXBzZWRcbiAge1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2UsIDJzIGJhY2tncm91bmQtcG9zaXRpb24gMXMgZWFzZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuXG5cbi5zaWRlYmFyLW9yZ1xue1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zZm9ybTogIG1hdHJpeCgwLCAtMSwgMSwgMCwgMCwgMCk7XG4gIGNvbG9yOiAjMzc1MjM4O1xufVxuXG4uc2lkZWJhci1vcmcgPiBzcGFuXG57XG4gIGNvbG9yOiAjRjFEMTQ1O1xufVxuXG5cblxuLmNvbGxhcHNlLW1lbnVcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB3aWR0aDogMTgxMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZSwgNTAwbXMgYmFja2dyb3VuZC1wb3NpdGlvbiA1MDBtcyBlYXNlO1xuICBtYXJnaW4tbGVmdDoxNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvdG9tYXRvZXMucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODE3cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcblxuICAmLmNvbGxhcHNlZCB7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxOTAwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogNTAwbXMgd2lkdGggNTAwbXMgZWFzZSwgYmFja2dyb3VuZC1wb3NpdGlvbiA1MDBtcyBlYXNlO1xuXG4gIH1cbn1cblxuLmZpcnN0LXBhcmVudFxue1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgbWFyZ2luLWxlZnQ6IDVlbTtcbiAgaGVpZ2h0OiAxNSU7XG59XG5cbi5maXJzdC1jb250ZW50XG57XG4gIG1hcmdpbi10b3A6IDc2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmZpcnN0LWNvbnRlbnQtY2hpbGRcbntcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDI0cHgvMjlweCBhY3VtaW4tcHJvO1xuICBsZXR0ZXItc3BhY2luZzogMS44cHg7XG4gIGNvbG9yOiAjM0I1NzNCO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5maXJzdC12ZWN0b3JcbntcbiAgdG9wOiA3NnB4O1xuICBsZWZ0OiA3OTRweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjNEMTQ1O1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5tZW51LXNwYWNlXG57XG4gIG1hcmdpbi10b3A6IDllbTtcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zaWRlYmFyIGEge2Zsb2F0OiBsZWZ0O31cbiAgZGl2LmNvbnRlbnQge21hcmdpbi1sZWZ0OiAwO31cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuc2lkZWJhciBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxufVxuIl19 */"], data: { animation: [
            _animations_animations__WEBPACK_IMPORTED_MODULE_0__["fader"]
        ] } });


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
/* harmony import */ var _fruit_page_fruit_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fruit-page/fruit-page.component */ "h9vf");
/* harmony import */ var _vege_page_vege_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vege-page/vege-page.component */ "kImY");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _fruit_page_fruit_page_component__WEBPACK_IMPORTED_MODULE_3__["FruitPageComponent"],
        _vege_page_vege_page_component__WEBPACK_IMPORTED_MODULE_4__["VegePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "h9vf":
/*!****************************************************!*\
  !*** ./src/app/fruit-page/fruit-page.component.ts ***!
  \****************************************************/
/*! exports provided: FruitPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FruitPageComponent", function() { return FruitPageComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FruitPageComponent {
    constructor(router) {
        this.router = router;
        this.active = false;
    }
    ngOnInit() {
    }
    vegeRoute() {
        this.router.navigate(['/vegetable']).then(() => {
            window.location.reload();
        });
    }
}
FruitPageComponent.ɵfac = function FruitPageComponent_Factory(t) { return new (t || FruitPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FruitPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FruitPageComponent, selectors: [["app-fruit-page"]], hostVars: 1, hostBindings: function FruitPageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@flyInOut", ctx.active);
    } }, decls: 93, vars: 0, consts: [[1, "fruit-content"], [1, "menu"], [1, "first-parent"], [1, "first-content"], [1, "first-content-child"], [1, "first-vector"], [1, "second-parent"], [1, "second-content"], [1, "content-list"], [1, "ligne-list"], [1, "ligne"], [1, "third-parent"], [1, "third-content"], [1, "social-media"], [1, "social-media-parent"], [1, "social-media-content"], ["src", "assets/twitter.png"], ["src", "assets/youtube.png"], ["src", "assets/instagram.png"], ["src", "assets/facebook.png"], [1, "fruit-title-content"], [1, "fruit-title"], [1, "fruit-lorem"], [1, "disc-div"], [1, "disc-btn"], ["src", "../../assets/arrow-216-24.png"], [1, "footer-fruit"], [1, "page-number"], [1, "sp1"], [1, "sp2"], [1, "button-router"], [1, "vege-miniature"], [1, "vege-router-text"], [1, "vege-route", 3, "click"], [1, "arrow-icon"]], template: function FruitPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Pineapples");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Strawberri");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Apples");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Citrus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Cauliflowe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Tomatoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Eggplants");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Carotts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Our fruits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "& vegetables ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "are");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " organic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Discover");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Vegetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FruitPageComponent_Template_div_click_90_listener() { return ctx.vegeRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " \u25B8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["@keyframes slideInFromBottom {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n.fruit-content[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0s 1 slideInFromBottom;\n  background: transparent url('pineapple-supply-co-prP9CYcRpzA-unsplash.png') 0% 0% no-repeat padding-box;\n  background-position: -30vh -70vh;\n}\n@keyframes slideInFromLeft {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slideInFromRight {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  width: 100%;\n  height: auto;\n  z-index: 1;\n}\n.first-parent[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromLeft;\n  grid-column-start: 1;\n  margin-left: 5em;\n  height: 15%;\n}\n.first-content[_ngcontent-%COMP%] {\n  margin-top: 76px;\n  height: auto;\n  width: auto;\n  cursor: default;\n}\n.first-content-child[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 24px/29px acumin-pro;\n  letter-spacing: 1.8px;\n  color: #3B573B;\n  opacity: 1;\n  display: inline-block;\n}\n.first-vector[_ngcontent-%COMP%] {\n  top: 76px;\n  left: 794px;\n  width: 25px;\n  height: 0px;\n  border: 1px solid #F3D145;\n  opacity: 1;\n  display: inline-block;\n  margin-bottom: 4px;\n  margin-right: 16px;\n  transition: 0.3s;\n  cursor: default;\n}\n.second-parent[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromLeft;\n  grid-column-start: 2;\n  height: 15%;\n  margin-left: 15em;\n}\n.second-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  height: auto;\n  cursor: default;\n}\n.content-list[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: auto;\n}\n.content-list[_ngcontent-%COMP%]:hover   .ligne[_ngcontent-%COMP%] {\n  border-color: #3B573B;\n}\n.ligne-list[_ngcontent-%COMP%] {\n  top: 173px;\n  left: 833px;\n  width: 121px;\n  height: 12px;\n  list-style: none;\n  color: #375238;\n  cursor: default;\n  text-align: left;\n  font: normal normal bold 12px/14px acumin-pro;\n  letter-spacing: 0.9px;\n  color: #375238;\n  opacity: 1;\n  display: inline-block;\n}\n.ligne[_ngcontent-%COMP%] {\n  top: 76px;\n  left: 794px;\n  width: 25px;\n  height: 0px;\n  border: 1px solid #F3D145;\n  opacity: 1;\n  display: inline-block;\n  margin-bottom: 4px;\n  margin-right: 16px;\n  transition: 0.3s;\n  cursor: default;\n}\n.ligne[_ngcontent-%COMP%]:hover {\n  border-color: #375238;\n}\n.third-parent[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromLeft;\n  grid-column-start: 3;\n  height: 15%;\n  margin-left: 15em;\n}\n.third-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  height: auto;\n  cursor: default;\n}\n.social-media[_ngcontent-%COMP%] {\n  grid-column-start: 4;\n  text-align: right;\n  height: 15%;\n  animation: 0.5s ease-out 0.5s 1 slideInFromRight;\n}\n.social-media-parent[_ngcontent-%COMP%] {\n  margin-top: 67px;\n  height: auto;\n  cursor: default;\n  margin-right: 60px;\n}\n.social-media-content[_ngcontent-%COMP%] {\n  margin-bottom: 29px;\n  height: auto;\n}\n.fruit-title-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.fruit-lorem[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 30px;\n  height: 105px;\n  width: 977px;\n  background: rgba(255, 255, 255, 0.39);\n}\n.fruit-lorem[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: left;\n  font: normal normal bold 12px/14px acumin-pro;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  padding-left: 39px;\n  letter-spacing: 0.9px;\n  color: #375238;\n  opacity: 1;\n}\n.disc-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 34px;\n}\n.disc-btn[_ngcontent-%COMP%] {\n  margin-right: 65em;\n  background-color: #F1D145;\n  border: none;\n  color: white;\n  font: normal normal normal 12px/14px acumin-pro;\n  width: 208px;\n  height: 38px;\n  text-align: center;\n  text-transform: uppercase;\n  display: inline-block;\n  cursor: pointer;\n  box-shadow: inset 0 0 0 0 #375238;\n  transition: ease-out 1s;\n}\n.disc-btn[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  height: 8px;\n  justify-content: center;\n  transform: rotate(-90deg);\n}\n.disc-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 400px 0 0 0 #375238;\n}\n.fruit-title[_ngcontent-%COMP%] {\n  font: normal normal 900 150px/130px acumin-pro;\n  letter-spacing: 7.5px;\n  color: #375238;\n}\n.fruit-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #F1D145;\n}\n.footer-fruit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n.button-router[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromRight;\n  top: 916px;\n  left: 1583px;\n  width: 277px;\n  height: 107px;\n  background: transparent url('mutzii-tC1Snwcxw5g-unsplash (1).png') 0% 0% no-repeat padding-box;\n  opacity: 1;\n  grid-column-start: 3;\n  text-align: center;\n  display: grid;\n  grid-template-columns: 125px 19px 17px;\n  gap: 0px 0px;\n  cursor: pointer;\n}\n.vege-route[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 107px;\n  opacity: 1;\n  background: linear-gradient(to left, #F1D145 50%, #375238 50%) right;\n  background-size: 200%;\n  transition: 0s;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 45px;\n  color: white;\n}\n.vege-router-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  transform: matrix(0, -1, 1, 0, 0, 0);\n  color: #F1D145;\n  margin-top: 3ng s5px;\n}\n.vege-router-text[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #375238;\n}\n.vege-route[_ngcontent-%COMP%]:hover {\n  background-position: left;\n  transition: 0.6s ease-out;\n}\n.page-number[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0s 1 slideInFromBottom;\n  top: 975px;\n  margin-top: 4em;\n  margin-right: 90em;\n  width: 110px;\n  height: 98px;\n  text-align: left;\n  opacity: 1;\n}\n.page-number[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 98px/16px acumin-pro;\n  letter-spacing: 7.35px;\n  color: #F1D145;\n}\n.page-number[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]   .sp1[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 29px/16px acumin-pro;\n  letter-spacing: 7.35px;\n  color: #F1D145;\n}\n.page-number[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]   .sp2[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 29px/16px acumin-pro;\n  color: #375238;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZydWl0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLDJCQUFBO0VBREY7RUFHQTtJQUNFLHlCQUFBO0VBREY7QUFDRjtBQUlBO0VBRUUsK0NBQUE7RUFDQSx1R0FBQTtFQUNBLGdDQUFBO0FBSEY7QUFRQTtFQUNFO0lBQ0UsNEJBQUE7RUFMRjtFQU9BO0lBQ0UseUJBQUE7RUFMRjtBQUNGO0FBUUE7RUFDRTtJQUNFLDJCQUFBO0VBTkY7RUFRQTtJQUNFLHlCQUFBO0VBTkY7QUFDRjtBQVNBO0VBRUUsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBUkY7QUFXQTtFQUVFLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFURjtBQVlBO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFWRjtBQWFBO0VBRUUsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQVhGO0FBY0E7RUFFRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWkY7QUFlQTtFQUVFLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFiRjtBQWdCQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFkRjtBQWlCQTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtBQWZGO0FBa0JBO0VBQ0UscUJBQUE7QUFmRjtBQWtCQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQWhCRjtBQW1CQTtFQUVFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFqQkY7QUFvQkE7RUFFRSxxQkFBQTtBQWxCRjtBQXFCQTtFQUVFLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFuQkY7QUFzQkE7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBcEJGO0FBdUJBO0VBRUUsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtBQXJCRjtBQXdCQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXRCRjtBQXlCQTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtBQXZCRjtBQTRCQTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQTFCRjtBQTZCQTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUEzQkY7QUE4QkE7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUE1QkY7QUErQkE7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQTdCRjtBQWdDQTtFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFHQSx1QkFBQTtBQTlCRjtBQWlDQTtFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUEvQkY7QUFrQ0E7RUFDRSxxQ0FBQTtBQS9CRjtBQWtDQTtFQUVFLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBaENGO0FBbUNBO0VBRUUsY0FBQTtBQWpDRjtBQW9DQTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBbENGO0FBc0NBO0VBRUUsZ0RBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEZBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBcENGO0FBdUNBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0VBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFyQ0Y7QUF3Q0E7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBdENGO0FBeUNBO0VBRUUsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBdkNGO0FBMENBO0VBRUUsY0FBQTtBQXhDRjtBQTJDQTtFQUVFLHlCQUFBO0VBQ0EseUJBQUE7QUF6Q0Y7QUE2Q0E7RUFFRSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQTNDRjtBQStDQTtFQUVFLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUE3Q0Y7QUFnREE7RUFFRSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBOUNGO0FBaURBO0VBRUUsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7QUEvQ0YiLCJmaWxlIjoiZnJ1aXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gUEFHRSBGUlVJVFxuQGtleWZyYW1lcyBzbGlkZUluRnJvbUJvdHRvbSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuXG4uZnJ1aXQtY29udGVudFxue1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbUJvdHRvbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi9hc3NldHMvcGluZWFwcGxlLXN1cHBseS1jby1wclA5Q1ljUnB6QS11bnNwbGFzaC5wbmcnKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMHZoIC03MHZoO1xufVxuXG4vLyoqKioqKiogTUVOVSBQUk9EVUNUU1xuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5cbi5tZW51XG57XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlIDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMTtcbn1cblxuLmZpcnN0LXBhcmVudFxue1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMC41cyAxIHNsaWRlSW5Gcm9tTGVmdDtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIG1hcmdpbi1sZWZ0OiA1ZW07XG4gIGhlaWdodDogMTUlO1xufVxuXG4uZmlyc3QtY29udGVudFxue1xuICBtYXJnaW4tdG9wOiA3NnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5maXJzdC1jb250ZW50LWNoaWxkXG57XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAyNHB4LzI5cHggYWN1bWluLXBybztcbiAgbGV0dGVyLXNwYWNpbmc6IDEuOHB4O1xuICBjb2xvcjogIzNCNTczQjtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmlyc3QtdmVjdG9yXG57XG4gIHRvcDogNzZweDtcbiAgbGVmdDogNzk0cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YzRDE0NTtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc2Vjb25kLXBhcmVudFxue1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMC41cyAxIHNsaWRlSW5Gcm9tTGVmdDtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGhlaWdodDogMTUlO1xuICBtYXJnaW4tbGVmdDogMTVlbTtcbn1cblxuLnNlY29uZC1jb250ZW50XG57XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uY29udGVudC1saXN0XG57XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRlbnQtbGlzdDpob3ZlciAubGlnbmV7XG4gIGJvcmRlci1jb2xvcjogIzNCNTczQjtcbn1cblxuLmxpZ25lLWxpc3RcbntcbiAgdG9wOiAxNzNweDtcbiAgbGVmdDogODMzcHg7XG4gIHdpZHRoOiAxMjFweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjb2xvcjojMzc1MjM4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzE0cHggYWN1bWluLXBybztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xuICBjb2xvcjogIzM3NTIzODtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubGlnbmVcbntcbiAgdG9wOiA3NnB4O1xuICBsZWZ0OiA3OTRweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjNEMTQ1O1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5saWduZTpob3Zlclxue1xuICBib3JkZXItY29sb3I6ICMzNzUyMzg7XG59XG5cbi50aGlyZC1wYXJlbnRcbntcbiAgYW5pbWF0aW9uOiAwLjVzIGVhc2Utb3V0IDAuNXMgMSBzbGlkZUluRnJvbUxlZnQ7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICBoZWlnaHQ6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDE1ZW07XG59XG5cbi50aGlyZC1jb250ZW50XG57XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc29jaWFsLW1lZGlhXG57XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgaGVpZ2h0OiAxNSU7XG4gIGFuaW1hdGlvbjogMC41cyBlYXNlLW91dCAwLjVzIDEgc2xpZGVJbkZyb21SaWdodDtcbn1cblxuLnNvY2lhbC1tZWRpYS1wYXJlbnRcbntcbiAgbWFyZ2luLXRvcDogNjdweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbn1cblxuLnNvY2lhbC1tZWRpYS1jb250ZW50XG57XG4gIG1hcmdpbi1ib3R0b206IDI5cHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi8vKioqKioqKiBFTkQgTUVOVSBQUk9EVUNUU1xuXG5cbi5mcnVpdC10aXRsZS1jb250ZW50XG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZnJ1aXQtbG9yZW1cbntcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogMTA1cHg7XG4gIHdpZHRoOiA5NzdweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjM5KTtcbn1cblxuLmZydWl0LWxvcmVtID4gcFxue1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDEycHgvMTRweCBhY3VtaW4tcHJvO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMzlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xuICBjb2xvcjogIzM3NTIzODtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmRpc2MtZGl2XG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzNHB4O1xufVxuXG4uZGlzYy1idG5cbntcbiAgbWFyZ2luLXJpZ2h0OiA2NWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFEMTQ1O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTJweC8xNHB4IGFjdW1pbi1wcm87XG4gIHdpZHRoOiAyMDhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwICMzNzUyMzg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogZWFzZS1vdXQgIDFzO1xuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAxcztcbn1cblxuLmRpc2MtYnRuID4gaW1nXG57XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGhlaWdodDogOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cblxuLmRpc2MtYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzM3NTIzODtcbn1cblxuLmZydWl0LXRpdGxlXG57XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgOTAwIDE1MHB4LzEzMHB4IGFjdW1pbi1wcm87XG4gIGxldHRlci1zcGFjaW5nOiA3LjVweDtcbiAgY29sb3I6ICMzNzUyMzg7XG59XG5cbi5mcnVpdC10aXRsZSA+IHNwYW5cbntcbiAgY29sb3I6ICNGMUQxNDU7XG59XG5cbi5mb290ZXItZnJ1aXRcbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG5cbi5idXR0b24tcm91dGVyXG57XG4gIGFuaW1hdGlvbjogMC41cyBlYXNlLW91dCAwLjVzIDEgc2xpZGVJbkZyb21SaWdodDtcbiAgdG9wOiA5MTZweDtcbiAgbGVmdDogMTU4M3B4O1xuICB3aWR0aDogMjc3cHg7XG4gIGhlaWdodDogMTA3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vYXNzZXRzL211dHppaS10QzFTbndjeHc1Zy11bnNwbGFzaCAoMSkucG5nJykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBvcGFjaXR5OiAxO1xuICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyNXB4IDE5cHggMTdweDtcbiAgZ2FwOiAwcHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52ZWdlLXJvdXRlXG57XG4gIHdpZHRoOiAxMTZweDtcbiAgaGVpZ2h0OiAxMDdweDtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNGMUQxNDUgNTAlLCAjMzc1MjM4IDUwJSkgcmlnaHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcbiAgdHJhbnNpdGlvbjogMHM7XG59XG5cbi5hcnJvdy1pY29uXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0NXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi52ZWdlLXJvdXRlci10ZXh0XG57XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNmb3JtOiAgbWF0cml4KDAsIC0xLCAxLCAwLCAwLCAwKTtcbiAgY29sb3I6ICNGMUQxNDU7XG4gIG1hcmdpbi10b3A6IDNuZyBzNXB4O1xufVxuXG4udmVnZS1yb3V0ZXItdGV4dCA+IHNwYW5cbntcbiAgY29sb3I6ICMzNzUyMzg7XG59XG5cbi52ZWdlLXJvdXRlOmhvdmVyXG57XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZS1vdXQ7XG59XG5cblxuLnBhZ2UtbnVtYmVyXG57XG4gIGFuaW1hdGlvbjogMC41cyBlYXNlLW91dCAwcyAxIHNsaWRlSW5Gcm9tQm90dG9tO1xuICB0b3A6IDk3NXB4O1xuICBtYXJnaW4tdG9wOiA0ZW07XG4gIG1hcmdpbi1yaWdodDogOTBlbTtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDk4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuLnBhZ2UtbnVtYmVyID4gaDFcbntcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDk4cHgvMTZweCBhY3VtaW4tcHJvO1xuICBsZXR0ZXItc3BhY2luZzogNy4zNXB4O1xuICBjb2xvcjogI0YxRDE0NTtcbn1cblxuLnBhZ2UtbnVtYmVyID4gaDEgLnNwMVxue1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMjlweC8xNnB4IGFjdW1pbi1wcm87XG4gIGxldHRlci1zcGFjaW5nOiA3LjM1cHg7XG4gIGNvbG9yOiAjRjFEMTQ1O1xufVxuXG4ucGFnZS1udW1iZXIgPiBoMSAuc3AyXG57XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAyOXB4LzE2cHggYWN1bWluLXBybztcbiAgY29sb3I6ICMzNzUyMzg7XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                // state('*', style({opacity: 1, transform: 'translateX(0)'})),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.8s ease-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.8s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    }))
                ])
            ])
        ] } });


/***/ }),

/***/ "kImY":
/*!**************************************************!*\
  !*** ./src/app/vege-page/vege-page.component.ts ***!
  \**************************************************/
/*! exports provided: VegePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegePageComponent", function() { return VegePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class VegePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
VegePageComponent.ɵfac = function VegePageComponent_Factory(t) { return new (t || VegePageComponent)(); };
VegePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VegePageComponent, selectors: [["app-vege-page"]], decls: 93, vars: 0, consts: [[1, "fruit-content"], [1, "menu"], [1, "first-parent"], [1, "first-content"], [1, "first-content-child"], [1, "first-vector"], [1, "second-parent"], [1, "second-content"], [1, "content-list"], [1, "ligne-list"], [1, "ligne"], [1, "third-parent"], [1, "third-content"], [1, "social-media"], [1, "social-media-parent"], [1, "social-media-content"], ["src", "assets/twitter.png"], ["src", "assets/youtube.png"], ["src", "assets/instagram.png"], ["src", "assets/facebook.png"], [1, "fruit-title-content"], [1, "fruit-title"], [1, "fruit-lorem"], [1, "disc-div"], [1, "disc-btn"], ["src", "../../assets/arrow-216-24.png"], [1, "footer-fruit"], [1, "page-number"], [1, "sp1"], [1, "sp2"], [1, "button-router"], [1, "vege-miniature"], [1, "vege-router-text"], ["routerLink", "/fruit", 1, "vege-route"], [1, "arrow-icon"]], template: function VegePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pineapples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Strawberri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Apples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Citrus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cauliflowe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tomatoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Eggplants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Carotts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Our fruits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "& vegetables ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " organic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Discover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Fruit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u25B8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@keyframes slideInFromBottom {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n.fruit-content[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0s 1 slideInFromBottom;\n  background: transparent url('Sans-titre-2.png') 0% 0% no-repeat padding-box;\n  background-position: -30vh -70vh;\n}\n@keyframes slideInFromLeft {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slideInFromRight {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  width: 100%;\n  height: auto;\n  z-index: 1;\n}\n.first-parent[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromLeft;\n  grid-column-start: 1;\n  margin-left: 5em;\n  height: 15%;\n}\n.first-content[_ngcontent-%COMP%] {\n  margin-top: 76px;\n  height: auto;\n  width: auto;\n  cursor: default;\n}\n.first-content-child[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 24px/29px acumin-pro;\n  letter-spacing: 1.8px;\n  color: #3B573B;\n  opacity: 1;\n  display: inline-block;\n}\n.first-vector[_ngcontent-%COMP%] {\n  top: 76px;\n  left: 794px;\n  width: 25px;\n  height: 0px;\n  border: 1px solid #F3D145;\n  opacity: 1;\n  display: inline-block;\n  margin-bottom: 4px;\n  margin-right: 16px;\n  transition: 0.3s;\n  cursor: default;\n}\n.second-parent[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromLeft;\n  grid-column-start: 2;\n  height: 15%;\n  margin-left: 15em;\n}\n.second-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  height: auto;\n  cursor: default;\n}\n.content-list[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: auto;\n}\n.content-list[_ngcontent-%COMP%]:hover   .ligne[_ngcontent-%COMP%] {\n  border-color: #3B573B;\n}\n.ligne-list[_ngcontent-%COMP%] {\n  top: 173px;\n  left: 833px;\n  width: 121px;\n  height: 12px;\n  list-style: none;\n  color: #375238;\n  cursor: default;\n  text-align: left;\n  font: normal normal bold 12px/14px acumin-pro;\n  letter-spacing: 0.9px;\n  color: #375238;\n  opacity: 1;\n  display: inline-block;\n}\n.ligne[_ngcontent-%COMP%] {\n  top: 76px;\n  left: 794px;\n  width: 25px;\n  height: 0px;\n  border: 1px solid #F3D145;\n  opacity: 1;\n  display: inline-block;\n  margin-bottom: 4px;\n  margin-right: 16px;\n  transition: 0.3s;\n  cursor: default;\n}\n.ligne[_ngcontent-%COMP%]:hover {\n  border-color: #375238;\n}\n.third-parent[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromLeft;\n  grid-column-start: 3;\n  height: 15%;\n  margin-left: 15em;\n}\n.third-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  height: auto;\n  cursor: default;\n}\n.social-media[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromRight;\n  grid-column-start: 4;\n  text-align: right;\n  height: 15%;\n}\n.social-media-parent[_ngcontent-%COMP%] {\n  margin-top: 67px;\n  height: auto;\n  cursor: default;\n  margin-right: 60px;\n}\n.social-media-content[_ngcontent-%COMP%] {\n  margin-bottom: 29px;\n  height: auto;\n}\n.fruit-title-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.fruit-lorem[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 30px;\n  height: 105px;\n  width: 977px;\n  background: rgba(255, 255, 255, 0.39);\n}\n.fruit-lorem[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: left;\n  font: normal normal bold 12px/14px acumin-pro;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  padding-left: 39px;\n  letter-spacing: 0.9px;\n  color: #375238;\n  opacity: 1;\n}\n.disc-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 34px;\n}\n.disc-btn[_ngcontent-%COMP%] {\n  margin-right: 65em;\n  background-color: #F1D145;\n  border: none;\n  color: white;\n  font: normal normal normal 12px/14px acumin-pro;\n  width: 208px;\n  height: 38px;\n  text-align: center;\n  text-transform: uppercase;\n  display: inline-block;\n  cursor: pointer;\n  box-shadow: inset 0 0 0 0 #375238;\n  transition: ease-out 1s;\n}\n.disc-btn[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  height: 8px;\n  justify-content: center;\n  transform: rotate(-90deg);\n}\n.disc-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 400px 0 0 0 #375238;\n}\n.fruit-title[_ngcontent-%COMP%] {\n  font: normal normal 900 150px/130px acumin-pro;\n  letter-spacing: 7.5px;\n  color: #375238;\n}\n.fruit-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #F1D145;\n}\n.footer-fruit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n.button-router[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0.5s 1 slideInFromRight;\n  top: 916px;\n  left: 1583px;\n  width: 277px;\n  height: 107px;\n  background: transparent url('Sans-titre-1.png') 0% 0% no-repeat padding-box;\n  opacity: 1;\n  grid-column-start: 3;\n  text-align: center;\n  display: grid;\n  grid-template-columns: 125px 19px 17px;\n  gap: 0px 0px;\n  cursor: pointer;\n}\n.vege-route[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 107px;\n  opacity: 1;\n  background: linear-gradient(to left, #F1D145 50%, #375238 50%) right;\n  background-size: 200%;\n  transition: 0s;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 45px;\n  color: white;\n}\n.vege-router-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  transform: matrix(0, -1, 1, 0, 0, 0);\n  color: #F1D145;\n  margin-top: 3ng s5px;\n}\n.vege-router-text[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #375238;\n}\n.vege-route[_ngcontent-%COMP%]:hover {\n  background-position: left;\n  transition: 0.6s ease-out;\n}\n.page-number[_ngcontent-%COMP%] {\n  animation: 0.5s ease-out 0s 1 slideInFromBottom;\n  top: 975px;\n  margin-top: 4em;\n  margin-right: 90em;\n  width: 110px;\n  height: 98px;\n  text-align: left;\n  opacity: 1;\n}\n.page-number[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 98px/16px acumin-pro;\n  letter-spacing: 7.35px;\n  color: #F1D145;\n}\n.page-number[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]   .sp1[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 29px/16px acumin-pro;\n  letter-spacing: 7.35px;\n  color: #F1D145;\n}\n.page-number[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]   .sp2[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal bold 29px/16px acumin-pro;\n  color: #375238;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZlZ2UtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFO0lBQ0UsMkJBQUE7RUFGRjtFQUlBO0lBQ0UseUJBQUE7RUFGRjtBQUNGO0FBS0E7RUFFRSwrQ0FBQTtFQUNBLDJFQUFBO0VBQ0EsZ0NBQUE7QUFKRjtBQVdBO0VBQ0U7SUFDRSw0QkFBQTtFQVJGO0VBVUE7SUFDRSx5QkFBQTtFQVJGO0FBQ0Y7QUFXQTtFQUNFO0lBQ0UsMkJBQUE7RUFURjtFQVdBO0lBQ0UseUJBQUE7RUFURjtBQUNGO0FBWUE7RUFFRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFYRjtBQWNBO0VBRUUsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVpGO0FBZUE7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWJGO0FBZ0JBO0VBRUUsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQWRGO0FBaUJBO0VBRUUsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWZGO0FBa0JBO0VBRUUsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWhCRjtBQW1CQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFqQkY7QUFvQkE7RUFFRSxtQkFBQTtFQUNBLFlBQUE7QUFsQkY7QUFxQkE7RUFDRSxxQkFBQTtBQWxCRjtBQXFCQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQW5CRjtBQXNCQTtFQUVFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFwQkY7QUF1QkE7RUFFRSxxQkFBQTtBQXJCRjtBQXdCQTtFQUVFLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF0QkY7QUF5QkE7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdkJGO0FBMEJBO0VBRUUsZ0RBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXhCRjtBQTJCQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXpCRjtBQTRCQTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtBQTFCRjtBQStCQTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQTdCRjtBQWdDQTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUE5QkY7QUFpQ0E7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUEvQkY7QUFrQ0E7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWhDRjtBQW1DQTtFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFHQSx1QkFBQTtBQWpDRjtBQW9DQTtFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFsQ0Y7QUFxQ0E7RUFDRSxxQ0FBQTtBQWxDRjtBQXFDQTtFQUVFLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBbkNGO0FBc0NBO0VBRUUsY0FBQTtBQXBDRjtBQXVDQTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBckNGO0FBd0NBO0VBRUUsZ0RBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdENGO0FBeUNBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0VBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUF2Q0Y7QUEwQ0E7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBeENGO0FBMkNBO0VBRUUsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBekNGO0FBNENBO0VBRUUsY0FBQTtBQTFDRjtBQTZDQTtFQUVFLHlCQUFBO0VBQ0EseUJBQUE7QUEzQ0Y7QUErQ0E7RUFFRSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQTdDRjtBQWlEQTtFQUVFLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUEvQ0Y7QUFrREE7RUFFRSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBaERGO0FBbURBO0VBRUUsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7QUFqREYiLCJmaWxlIjoidmVnZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBQQUdFIEZSVUlUXG5cbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cblxuLmZydWl0LWNvbnRlbnRcbntcbiAgYW5pbWF0aW9uOiAwLjVzIGVhc2Utb3V0IDBzIDEgc2xpZGVJbkZyb21Cb3R0b207XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vYXNzZXRzL1NhbnMtdGl0cmUtMi5wbmcnKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMHZoIC03MHZoO1xufVxuXG5cbi8vKioqKioqKiBNRU5VIFBST0RVQ1RTXG5cblxuQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuXG4ubWVudVxue1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlIDI1JSA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDE7XG59XG5cbi5maXJzdC1wYXJlbnRcbntcbiAgYW5pbWF0aW9uOiAwLjVzIGVhc2Utb3V0IDAuNXMgMSBzbGlkZUluRnJvbUxlZnQ7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBtYXJnaW4tbGVmdDogNWVtO1xuICBoZWlnaHQ6IDE1JTtcbn1cblxuLmZpcnN0LWNvbnRlbnRcbntcbiAgbWFyZ2luLXRvcDogNzZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uZmlyc3QtY29udGVudC1jaGlsZFxue1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMjRweC8yOXB4IGFjdW1pbi1wcm87XG4gIGxldHRlci1zcGFjaW5nOiAxLjhweDtcbiAgY29sb3I6ICMzQjU3M0I7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZpcnN0LXZlY3Rvclxue1xuICB0b3A6IDc2cHg7XG4gIGxlZnQ6IDc5NHB4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGM0QxNDU7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnNlY29uZC1wYXJlbnRcbntcbiAgYW5pbWF0aW9uOiAwLjVzIGVhc2Utb3V0IDAuNXMgMSBzbGlkZUluRnJvbUxlZnQ7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBoZWlnaHQ6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDE1ZW07XG59XG5cbi5zZWNvbmQtY29udGVudFxue1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmNvbnRlbnQtbGlzdFxue1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250ZW50LWxpc3Q6aG92ZXIgLmxpZ25le1xuICBib3JkZXItY29sb3I6ICMzQjU3M0I7XG59XG5cbi5saWduZS1saXN0XG57XG4gIHRvcDogMTczcHg7XG4gIGxlZnQ6IDgzM3B4O1xuICB3aWR0aDogMTIxcHg7XG4gIGhlaWdodDogMTJweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6IzM3NTIzODtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8xNHB4IGFjdW1pbi1wcm87XG4gIGxldHRlci1zcGFjaW5nOiAwLjlweDtcbiAgY29sb3I6ICMzNzUyMzg7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxpZ25lXG57XG4gIHRvcDogNzZweDtcbiAgbGVmdDogNzk0cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YzRDE0NTtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubGlnbmU6aG92ZXJcbntcbiAgYm9yZGVyLWNvbG9yOiAjMzc1MjM4O1xufVxuXG4udGhpcmQtcGFyZW50XG57XG4gIGFuaW1hdGlvbjogMC41cyBlYXNlLW91dCAwLjVzIDEgc2xpZGVJbkZyb21MZWZ0O1xuICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgaGVpZ2h0OiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNWVtO1xufVxuXG4udGhpcmQtY29udGVudFxue1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnNvY2lhbC1tZWRpYVxue1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMC41cyAxIHNsaWRlSW5Gcm9tUmlnaHQ7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgaGVpZ2h0OiAxNSU7XG59XG5cbi5zb2NpYWwtbWVkaWEtcGFyZW50XG57XG4gIG1hcmdpbi10b3A6IDY3cHg7XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cbi5zb2NpYWwtbWVkaWEtY29udGVudFxue1xuICBtYXJnaW4tYm90dG9tOiAyOXB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4vLyoqKioqKiogRU5EIE1FTlUgUFJPRFVDVFNcblxuXG4uZnJ1aXQtdGl0bGUtY29udGVudFxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZydWl0LWxvcmVtXG57XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDEwNXB4O1xuICB3aWR0aDogOTc3cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4zOSk7XG59XG5cbi5mcnVpdC1sb3JlbSA+IHBcbntcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzE0cHggYWN1bWluLXBybztcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDM5cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjlweDtcbiAgY29sb3I6ICMzNzUyMzg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kaXNjLWRpdlxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzRweDtcbn1cblxuLmRpc2MtYnRuXG57XG4gIG1hcmdpbi1yaWdodDogNjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRDE0NTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEycHgvMTRweCBhY3VtaW4tcHJvO1xuICB3aWR0aDogMjA4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCAjMzc1MjM4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2Utb3V0IDFzO1xuICAtbW96LXRyYW5zaXRpb246IGVhc2Utb3V0ICAxcztcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMXM7XG59XG5cbi5kaXNjLWJ0biA+IGltZ1xue1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5kaXNjLWJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDQwMHB4IDAgMCAwICMzNzUyMzg7XG59XG5cbi5mcnVpdC10aXRsZVxue1xuICBmb250OiBub3JtYWwgbm9ybWFsIDkwMCAxNTBweC8xMzBweCBhY3VtaW4tcHJvO1xuICBsZXR0ZXItc3BhY2luZzogNy41cHg7XG4gIGNvbG9yOiAjMzc1MjM4O1xufVxuXG4uZnJ1aXQtdGl0bGUgPiBzcGFuXG57XG4gIGNvbG9yOiAjRjFEMTQ1O1xufVxuXG4uZm9vdGVyLWZydWl0XG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmJ1dHRvbi1yb3V0ZXJcbntcbiAgYW5pbWF0aW9uOiAwLjVzIGVhc2Utb3V0IDAuNXMgMSBzbGlkZUluRnJvbVJpZ2h0O1xuICB0b3A6IDkxNnB4O1xuICBsZWZ0OiAxNTgzcHg7XG4gIHdpZHRoOiAyNzdweDtcbiAgaGVpZ2h0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi9hc3NldHMvU2Fucy10aXRyZS0xLnBuZycpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgb3BhY2l0eTogMTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjVweCAxOXB4IDE3cHg7XG4gIGdhcDogMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmVnZS1yb3V0ZVxue1xuICB3aWR0aDogMTE2cHg7XG4gIGhlaWdodDogMTA3cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRjFEMTQ1IDUwJSwgIzM3NTIzOCA1MCUpIHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gIHRyYW5zaXRpb246IDBzO1xufVxuXG4uYXJyb3ctaWNvblxue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udmVnZS1yb3V0ZXItdGV4dFxue1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRyYW5zZm9ybTogIG1hdHJpeCgwLCAtMSwgMSwgMCwgMCwgMCk7XG4gIGNvbG9yOiAjRjFEMTQ1O1xuICBtYXJnaW4tdG9wOiAzbmcgczVweDtcbn1cblxuLnZlZ2Utcm91dGVyLXRleHQgPiBzcGFuXG57XG4gIGNvbG9yOiAjMzc1MjM4O1xufVxuXG4udmVnZS1yb3V0ZTpob3Zlclxue1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xufVxuXG5cbi5wYWdlLW51bWJlclxue1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbUJvdHRvbTtcbiAgdG9wOiA5NzVweDtcbiAgbWFyZ2luLXRvcDogNGVtO1xuICBtYXJnaW4tcmlnaHQ6IDkwZW07XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA5OHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvcGFjaXR5OiAxO1xufVxuXG5cbi5wYWdlLW51bWJlciA+IGgxXG57XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCA5OHB4LzE2cHggYWN1bWluLXBybztcbiAgbGV0dGVyLXNwYWNpbmc6IDcuMzVweDtcbiAgY29sb3I6ICNGMUQxNDU7XG59XG5cbi5wYWdlLW51bWJlciA+IGgxIC5zcDFcbntcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDI5cHgvMTZweCBhY3VtaW4tcHJvO1xuICBsZXR0ZXItc3BhY2luZzogNy4zNXB4O1xuICBjb2xvcjogI0YxRDE0NTtcbn1cblxuLnBhZ2UtbnVtYmVyID4gaDEgLnNwMlxue1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMjlweC8xNnB4IGFjdW1pbi1wcm87XG4gIGNvbG9yOiAjMzc1MjM4O1xufVxuIl19 */"] });


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
/* harmony import */ var _vege_page_vege_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vege-page/vege-page.component */ "kImY");
/* harmony import */ var _fruit_page_fruit_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fruit-page/fruit-page.component */ "h9vf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

// COMPONENTS




const routes = [
    {
        path: '',
        redirectTo: '/fruit',
        pathMatch: 'full'
    },
    {
        path: 'vegetable',
        component: _vege_page_vege_page_component__WEBPACK_IMPORTED_MODULE_1__["VegePageComponent"],
        data: {
            animation: "vege-animation"
        }
    },
    {
        path: 'fruit',
        component: _fruit_page_fruit_page_component__WEBPACK_IMPORTED_MODULE_2__["FruitPageComponent"],
        data: {
            animation: "fruit-animation"
        }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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