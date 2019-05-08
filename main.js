(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./departments/departments.component */ "./src/app/departments/departments.component.ts");
/* harmony import */ var _designations_designations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./designations/designations.component */ "./src/app/designations/designations.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallary/gallary.component */ "./src/app/gallary/gallary.component.ts");









var routes = [
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"] },
    { path: 'departments', component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentsComponent"] },
    { path: 'designations', component: _designations_designations_component__WEBPACK_IMPORTED_MODULE_5__["DesignationsComponent"] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"] },
    { path: 'posts/:id', component: _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"] },
    { path: 'photos', component: _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_8__["GallaryComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentsComponent"], _designations_designations_component__WEBPACK_IMPORTED_MODULE_5__["DesignationsComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"], _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_8__["GallaryComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Employees Management';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/departments/departments.component.css":
/*!*******************************************************!*\
  !*** ./src/app/departments/departments.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnRzL2RlcGFydG1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/departments/departments.component.html":
/*!********************************************************!*\
  !*** ./src/app/departments/departments.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" [ngSwitch]=\"FormParts\">\n\n      <div *ngSwitchCase=\"1\">\n\n\n        <h2>{{title}}</h2>\n        <div class=\"panel-group\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-body\">\n\n              <form>\n                <div class=\"form-group row\">\n                  <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Department Name</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-3\">\n                  </div>\n                  <div class=\"col-sm-2\">\n                    <button type=\"button\" class=\"btn btn-primary\">Save</button> &nbsp;\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"getFormList()\">Home</button>\n                  </div>\n                </div>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"2\">\n        <div class=\"container\">\n          <div class=\"row p-2\">\n            <div class=\"col-sm\">\n              <h2>{{title}}</h2>\n            </div>\n            <div class=\"col-sm\" align=\"right\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"getForm()\">Add New</button>\n            </div>\n\n          </div>\n        </div>\n\n\n        <div class=\"panel-group\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-body\">\n\n              <form>\n                <table class=\"table table-sm table-bordered table-striped\">\n                  <thead class=\"thead-dark\">\n                  <tr>\n                    <th width=\"5%\" scope=\"col\">ID</th>\n                    <th width=\"85%\" scope=\"col\">Department Name</th>\n                    <th width=\"10%\" scope=\"col\">Action</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <th scope=\"row\">1</th>\n                    <td>Mark</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">2</th>\n                    <td>Jacob</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">3</th>\n                    <td>Larry</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/departments/departments.component.ts":
/*!******************************************************!*\
  !*** ./src/app/departments/departments.component.ts ***!
  \******************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DepartmentsComponent = /** @class */ (function () {
    function DepartmentsComponent() {
        this.title = 'Department List';
        this.FormParts = 2;
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
    };
    DepartmentsComponent.prototype.getFormList = function () {
        this.title = 'Department List';
        this.FormParts = 2;
    };
    DepartmentsComponent.prototype.getForm = function () {
        this.title = 'Department';
        this.FormParts = 1;
    };
    DepartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-departments',
            template: __webpack_require__(/*! ./departments.component.html */ "./src/app/departments/departments.component.html"),
            styles: [__webpack_require__(/*! ./departments.component.css */ "./src/app/departments/departments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());



/***/ }),

/***/ "./src/app/designations/designations.component.css":
/*!*********************************************************!*\
  !*** ./src/app/designations/designations.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbmF0aW9ucy9kZXNpZ25hdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/designations/designations.component.html":
/*!**********************************************************!*\
  !*** ./src/app/designations/designations.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" [ngSwitch]=\"FormParts\">\n\n      <div *ngSwitchCase=\"1\">\n\n\n        <h2>{{title}}</h2>\n        <div class=\"panel-group\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-body\">\n\n              <form>\n                <div class=\"form-group row\">\n                  <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Designation Name</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-3\">\n                  </div>\n                  <div class=\"col-sm-2\">\n                    <button type=\"button\" class=\"btn btn-primary\">Save</button> &nbsp;\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"getFormList()\">Home</button>\n                  </div>\n                </div>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"2\">\n        <div class=\"container\">\n          <div class=\"row p-2\">\n            <div class=\"col-sm\">\n              <h2>{{title}}</h2>\n            </div>\n            <div class=\"col-sm\" align=\"right\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"getForm()\">Add New</button>\n            </div>\n\n          </div>\n        </div>\n\n\n        <div class=\"panel-group\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-body\">\n\n              <form>\n                <table class=\"table table-sm table-bordered table-striped\">\n                  <thead class=\"thead-dark\">\n                  <tr>\n                    <th width=\"5%\" scope=\"col\">ID</th>\n                    <th width=\"85%\" scope=\"col\">Designation Name</th>\n                    <th width=\"10%\" scope=\"col\">Action</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <th scope=\"row\">1</th>\n                    <td>Mark</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">2</th>\n                    <td>Jacob</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">3</th>\n                    <td>Larry</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/designations/designations.component.ts":
/*!********************************************************!*\
  !*** ./src/app/designations/designations.component.ts ***!
  \********************************************************/
/*! exports provided: DesignationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationsComponent", function() { return DesignationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DesignationsComponent = /** @class */ (function () {
    function DesignationsComponent() {
        this.title = 'Designation List';
        this.FormParts = 2;
    }
    DesignationsComponent.prototype.ngOnInit = function () {
    };
    DesignationsComponent.prototype.getFormList = function () {
        this.title = 'Designation List';
        this.FormParts = 2;
    };
    DesignationsComponent.prototype.getForm = function () {
        this.title = 'Designation';
        this.FormParts = 1;
    };
    DesignationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-designations',
            template: __webpack_require__(/*! ./designations.component.html */ "./src/app/designations/designations.component.html"),
            styles: [__webpack_require__(/*! ./designations.component.css */ "./src/app/designations/designations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DesignationsComponent);
    return DesignationsComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" [ngSwitch]=\"FormParts\">\n\n      <div *ngSwitchCase=\"1\">\n\n\n        <h2>{{title}}</h2>\n        <div class=\"panel-group\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-body\">\n\n              <form>\n                <div class=\"form-group row\">\n                  <label for=\"txtName\" class=\"col-sm-2 col-form-label\">Name</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" name=\"txtName\" id=\"txtName\" placeholder=\"\">\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"txtFatherName\" class=\"col-sm-2 col-form-label\">Father Name</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" name=\"txtFatherName\" id=\"txtFatherName\" placeholder=\"\">\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"txtGender\" class=\"col-sm-2 col-form-label\">Gender</label>\n                  <div class=\"col-sm-6\">\n                    <select class=\"form-control\" name=\"txtGender\" id=\"txtGender\" >\n                      <option value=\"Male\">Male</option>\n                      <option value=\"Female\">Female</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"txtCNIC\" class=\"col-sm-2 col-form-label\">CNIC</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" name=\"txtCNIC\" id=\"txtCNIC\"  placeholder=\"\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group row\">\n                  <label for=\"txtContactNo\" class=\"col-sm-2 col-form-label\">Contact No</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" name=\"txtContactNo\" id=\"txtContactNo\"  placeholder=\"\">\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"txtDepartment\" class=\"col-sm-2 col-form-label\">Department</label>\n                  <div class=\"col-sm-6\">\n                    <select class=\"form-control\" name=\"txtDepartment\" id=\"txtDepartment\" >\n                      <option value=\"\">Select</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"txtDesignation\" class=\"col-sm-2 col-form-label\">Designation</label>\n                  <div class=\"col-sm-6\">\n                    <select class=\"form-control\" name=\"txtDesignation\" id=\"txtDesignation\" >\n                      <option value=\"\">Select</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-3\">\n                  </div>\n                  <div class=\"col-sm-2\">\n                    <button type=\"button\" class=\"btn btn-primary\">Save</button> &nbsp;\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"getFormList()\">Home</button>\n                  </div>\n                </div>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"2\">\n        <div class=\"container\">\n          <div class=\"row p-2\">\n            <div class=\"col-sm\">\n              <h2>{{title}}</h2>\n            </div>\n            <div class=\"col-sm\" align=\"right\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"getForm()\">Add New</button>\n            </div>\n\n          </div>\n        </div>\n\n\n        <div class=\"panel-group\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-body\">\n\n              <form>\n                <table class=\"table table-sm table-bordered table-striped\">\n                  <thead class=\"thead-dark\">\n                  <tr>\n                    <th width=\"5%\" scope=\"col\">ID</th>\n                    <th scope=\"col\">Name</th>\n                    <th scope=\"col\">Father Name</th>\n                    <th scope=\"col\">Gender</th>\n                    <th scope=\"col\">CNIC</th>\n                    <th scope=\"col\">Contact No</th>\n                    <th scope=\"col\">Department</th>\n                    <th scope=\"col\">Designation</th>\n                    <th width=\"10%\" scope=\"col\">Action</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n                    <th scope=\"row\">1</th>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">2</th>\n                    <td>Jacob</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">3</th>\n                    <td>Larry</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>Mark</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-sm btn-warning\"><li class=\"fa fa-edit\"></li></button>&nbsp;\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\"><li class=\"fa fa-trash\"></li></button>\n                    </td>\n                  </tr>\n                  </tbody>\n                </table>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
        this.title = 'Employees List';
        this.FormParts = 2;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent.prototype.getFormList = function () {
        this.title = 'Employees List';
        this.FormParts = 2;
    };
    EmployeesComponent.prototype.getForm = function () {
        this.title = 'Employees';
        this.FormParts = 1;
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/gallary/gallary.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallary/gallary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxhcnkvZ2FsbGFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallary/gallary.component.html":
/*!************************************************!*\
  !*** ./src/app/gallary/gallary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h4>Gallary</h4>\n  </div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-md-4\" *ngFor=\"let photo of photos\">\n      <div class=\"card mb-4 box-shadow\">\n        <img class=\"card-img-top\" data-src=\"{{photo.url}}\" alt=\"{{photo.url}}\" style=\"height: 225px; width: 100%; display: block;\" src=\"{{photo.url}}\" data-holder-rendered=\"true\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{photo.title}}</p>\n          <div class=\"d-flex justify-content-between align-items-center\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/gallary/gallary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallary/gallary.component.ts ***!
  \**********************************************/
/*! exports provided: GallaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallaryComponent", function() { return GallaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GallaryComponent = /** @class */ (function () {
    function GallaryComponent() {
        var _this = this;
        this.photos = [];
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.photos = data; })
            .catch(function (err) { return console.log(err); });
    }
    GallaryComponent.prototype.ngOnInit = function () {
    };
    GallaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallary',
            template: __webpack_require__(/*! ./gallary.component.html */ "./src/app/gallary/gallary.component.html"),
            styles: [__webpack_require__(/*! ./gallary.component.css */ "./src/app/gallary/gallary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GallaryComponent);
    return GallaryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-success\"  >\n  <a class=\"navbar-brand\" href=\"#\">Angular 7</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/employees\" routerLinkActive=\"active\">Employees</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/departments\" routerLinkActive=\"active\">Departments</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/designations\" routerLinkActive=\"active\">Designations</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/posts\" routerLinkActive=\"active\">Posts</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/photos\" routerLinkActive=\"active\">Gallary</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown ml-auto\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" data-toggle=\"dropdown\" (click)=\"show=!show\">Dropdown</a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\" [ngClass]=\"{show: show === true}\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"blog-post\">\n        <h2 class=\"blog-post-title\">{{post.title}}</h2>\n\n        <p>{{post.body}}</p>\n        <hr>\n        <br>\n        <a class=\"btn btn-success\" routerLink=\"/posts\" routerLinkActive=\"active\">Back to Posts</a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PostComponent = /** @class */ (function () {
    function PostComponent(route) {
        var _this = this;
        this.route = route;
        this.id = 0;
        this.post = {};
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.post = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"createPost()\">New Post</button>-->\n<!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"updatePost()\">Update Post</button>-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"blog-post\" *ngFor=\"let post of posts\">\n        <h2 class=\"blog-post-title\"><a [routerLink]=\"[post.id]\">{{post.title}}</a></h2>\n\n        <p>{{post.body}}</p>\n        <hr>\n        <br>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        var _this = this;
        this.posts = [];
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.posts = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent.prototype.createPost = function () {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Angular 7',
                body: 'i am using json api for learning',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(function (response) { return response.json(); })
            .then(function (json) { return console.log(json); });
    };
    PostsComponent.prototype.updatePost = function () {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'Angular 7',
                body: 'i am using json api for learning',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(function (response) { return response.json(); })
            .then(function (json) { return console.log(json); });
    };
    PostsComponent.prototype.deletePost = function () {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        });
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wajid/angular/project-one/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map