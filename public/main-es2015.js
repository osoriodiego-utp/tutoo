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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container main-container mt-4\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories/categories.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories/categories.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"d-inline animated fadeIn\">Categorias</h1>\n<!-- *ngIf=\"logged()\" -->\n<!-- <button [routerLink]=\"['/admin/newcategory']\" class=\" d-inline btn btn-primary float-right\"> -->\n<button [routerLink]=\"['/admin/newcategory']\" class=\" d-inline btn btn-primary float-right\">\n    <i class=\"far fa-plus-square\"></i> Categoria\n</button>\n<hr>\n\n<div *ngIf=\"loading\" class=\"text-center mt-3 animate__animated animate__fadeIn\">\n    <h4 class=\"alert-heading\">Cargando</h4>\n    <p><i class=\"fas fa-spinner fa-spin fa-4x\"></i></p>\n    <p>Espere por favor.</p>\n</div>\n\n\n<div class=\"row\">\n    <div *ngFor=\"let category of categories\" class=\"col-6 col-sm-6 col-md-4 col-lg-3 mb-3\">\n        <div class=\"card animated fadeIn\">\n            <div class=\"card-body m-1\" align=\"center\">\n                <a [routerLink]=\"[ '/category', category.name] \">\n                    <img src={{category.imageurl}} class=\"card-img-top width=32 \">\n                    <h2 class=\"card-title text-resize text-uppercase \">{{category.name}}</h2>\n                </a>\n                <h5 class=\"card-title text-resize \"><i>subcategories</i></h5>\n                <p class=\"card-text \">{{category.tutors}} tutores</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"container \">\n    <p *ngIf=\"!loading \" class=\"lead \" align=\"center \">\n        <a [routerLink]=\"[ '/home'] \" class=\"btn btn-danger m-2 \">Atras</a>\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/category/category.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/category/category.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"sticky-title animated fadeIn\">{{category}}</h1>\n<hr>\n\n\n<div *ngIf=\"loading\" class=\"text-center mt-3 animate__animated animate__fadeIn\">\n    <h4 class=\"alert-heading\">Cargando</h4>\n    <p><i class=\"fas fa-spinner fa-spin fa-4x\"></i></p>\n    <p>Espere por favor.</p>\n</div>\n\n\n<div *ngIf=\"tutors.length === 0\" class=\"alert alert-primary\">\n    <strong>¡Lo sentimos!</strong> Aun no hay tutores asociados a esta categoría. Puedes solicitar uno <a [routerLink]=\"['/request']\" class=\"alert-link\">aquí</a>\n</div>\n\n<div *ngIf=\"!loading && tutors.length > 0\" class=\"row\">\n    <div *ngFor=\"let tutor of tutors\" class=\"col-12 col-sm-6 col-md-6 col-lg-4 mb-4\">\n        <div class=\"card animated fadeIn\">\n            <div class=\"row\">\n                <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 mb-4\">\n                    <img class=\"m-1 w-100 img-fluid\" style=\"max-height: 200px;\" src=\"{{tutor.imageurl}}\" alt=\"{{tutor.name}}\">\n                </div>\n                <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 mb-8\">\n                    <h3><b>{{tutor.name}} {{tutor.lastname}}</b></h3>\n                    <p><i>{{tutor.subjects}}.</i></p>\n                    <p><i>{{tutor.bio}}.</i></p>\n                    <p>{{tutor.email}} -- {{tutor.phone}}</p>\n                    <p>Valor/hora desde: {{tutor.value | currency:'$':'symbol':'1.0'}}, {{tutor.city}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container \">\n    <p *ngIf=\"!loading \" class=\"lead \" align=\"center \">\n        <a [routerLink]=\"[ '/categories'] \" class=\"btn btn-danger m-2 \">Atras</a>\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/newcategory/newcategory.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/newcategory/newcategory.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\" animated fadeIn\">\n    Nueva Categoria</h1>\n<hr>\n\n\n\n<form [formGroup]=\"catForm\" (ngSubmit)=\"createCategory(catForm)\" class=\"m-4 animated fadeIn fast\">\n    <fieldset class=\"m-4\">\n        <div class=\"form-group\">\n            <label>Categoria</label>\n            <input formControlName=\"name\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Nueva categoría\">\n        </div>\n\n        <div class=\"form-group\">\n            <label>Icono de categoria</label>\n            <input formControlName=\"imageurl\" (change)=\"handleImage($event)\" type=\"file\" class=\"form-control\" [class.is-invalid]=\"isInvalid('imageurl')\" placeholder=\"Seleccionar archivo\">\n        </div>\n\n        <p class=\"lead\" align=\"center\">\n            <a [routerLink]=\"['/home']\" class=\"btn btn-danger m-2\">Atras</a>\n            <button type=\"submit\" class=\"btn btn-primary m-2\">Guardar</button>\n        </p>\n    </fieldset>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/about/about.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/about/about.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"d-inline animated fadeIn\">Acerca de</h1>\n<hr>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/home/home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/home/home.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"alert === 'on'\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n    <h4 class=\"alert-heading\">Covid-19!</h4>\n    <p class=\"mb-0\">Lava tus manos frecuentemente y conserva la distancia cuando salgas,\n        <a href=\"https://www.google.com/search?sxsrf=ALeKk03NBrbRlK_oelxGp1v2QI5PNIAP5w:1588209707685&q=COVID-19&sa=X&ved=2ahUKEwia5NGb_o7pAhXSMd8KHZVCCqwQzmcoAHoECAsQAQ&biw=1517&bih=737\" class=\"alert-link\">Más información.</a>\n    </p>\n    <button (click)=\"alertOff()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"jumbotron animated fadeIn fast\" align=\"center\">\n    <h1 class=\"display-3 \">¡Puedes aprender!</h1>\n    <p class=\"lead animated fadeIn \">Tu tienes las <b><i>competencias</i></b>, otros las <b><i>necesitan</i></b>.</p>\n    <hr class=\"my-4 \">\n    <p class=\"lead \" align=\"center \">\n        <a class=\"btn btn-outline-primary btn-lg m-3 \" [routerLink]=\"[ '/categories'] \">Categorias</a>\n        <a class=\"btn btn-outline-primary btn-lg m-3 \" [routerLink]=\"[ '/request'] \">Solicitud</a>\n    </p>\n    <p class=\"animated fadeIn \"><i>Tareas, proyectos, clases, asesorías y más ...</i></p>\n</div>\n\n<!-- <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"...\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"...\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"...\" alt=\"Third slide\">\n        </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div> -->\n\n<!-- <iframe src=\"https://www.youtube.com/\" marginwidth=\"0\" marginheight=\"0\" name=\"ventana_iframe\" scrolling=\"no\" border=\"0\" frameborder=\"0\" width=\"300\" height=\"300\" align=\"center\">\n</iframe> -->\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/info/info.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/info/info.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"d-inline animated fadeIn\">Información general</h1>\n<hr>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/request/request.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/request/request.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"animated fadeIn\">Solicitar tutor</h1>\n<hr>\n\n\n<form [formGroup]=\"reqForm\" (ngSubmit)=\"createRequest()\" class=\"m-4 animated fadeIn fast\">\n    <fieldset class=\"m-4\">\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Nombre completo</label>\n            <input formControlName=\"name\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Nombre\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Teléfono</label>\n            <input formControlName=\"phone\" type=\"number\" class=\"form-control\" [class.is-invalid]=\"isInvalid('phone')\" placeholder=\"Teléfono\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Correo electrónico</label>\n            <input formControlName=\"email\" type=\"email\" class=\"form-control\" [class.is-invalid]=\"isInvalid('email')\" placeholder=\"Correo electrónico\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleSelect1\">Categoria</label>\n            <select formControlName=\"category\" class=\"form-control\" id=\"exampleSelect1\">\n                <option *ngFor=\"let category of categories\" >{{category}}</option>\n            </select>\n        </div>\n\n\n        <div class=\"form-group\">\n            <label for=\"exampleTextarea\">Descripción de la solicitud</label>\n            <textarea formControlName=\"description\" class=\"form-control\" [class.is-invalid]=\"isInvalid('email')\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n        </div>\n\n        <hr>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6 form-group\">\n                <label class=\"d-inline\">Documento</label>\n                <label class=\"d-inline float-right\"><i>no obligatorio  </i></label>\n                <input formControlName=\"documenturl\" (change)=\"handleDocument($event)\" type=\"file\" class=\"form-control\" [class.is-invalid]=\"isInvalidFile('documenturl')\" placeholder=\"Seleccionar documento\">\n            </div>\n            <div class=\"col-sm-6 form-group\">\n                <label>Imagen</label>\n                <label class=\"d-inline float-right\"><i>no obligatorio  </i></label>\n                <input formControlName=\"imageurl\" (change)=\"handleImage($event)\" type=\"file\" class=\"form-control\" [class.is-invalid]=\"isInvalidImage('imageurl')\" placeholder=\"Seleccionar imagen\">\n            </div>\n        </div>\n\n\n        <p class=\"lead\" style=\"margin-top: 50px;\" align=\"center\">\n            <a [routerLink]=\"['/home']\" class=\"btn btn-danger m-2\">Atras</a>\n            <button type=\"submit\" class=\"btn btn-primary m-2\">Enviar</button>\n        </p>\n    </fieldset>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/requests/requests.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/requests/requests.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\" animated fadeIn\" style=\"background-color: white;\">Solicitudes</h1>\n<hr>\n\n\n<div *ngIf=\"loading\" class=\"text-center mt-3 animate__animated animate__fadeIn\">\n    <h4 class=\"alert-heading\">Cargando</h4>\n    <p><i class=\"fas fa-spinner fa-spin fa-4x\"></i></p>\n    <p>Espere por favor.</p>\n</div>\n\n<table *ngIf=\"!loading && requests.length > 0\" class=\"table mt-1\">\n    <thead class=\"thead-dark\">\n        <tr align=\"center\">\n            <th>Solicitante</th>\n            <th>Categoria</th>\n            <th>Estado</th>\n            <th>Acciones</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let request of requests; let idx = index\" align=\"center\">\n            <td>{{request.name}}</td>\n            <td>{{request.category}}</td>\n            <td>\n                <label *ngIf=\"request.revised\" class=\"badge badge-success\">revisada</label>\n                <label *ngIf=\"!request.revised\" class=\"badge badge-warning\">pendiente</label>\n            </td>\n            <td>\n                <div class=\" row \">\n                    <button [routerLink]=\"['/admin/showrequest', request.id]\" class=\"col btn btn-outline-primary btn-sm mr-1\">\n                        <i class=\"fas fa-eye\"></i>\n                    </button>\n                    <button (click)=\"deleteRequest(request, idx)\" class=\"col btn btn-outline-danger btn-sm mr-1\">\n                        <i class=\"fas fa-trash-alt\"></i>\n                    </button>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/showrequest/showrequest.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/showrequest/showrequest.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-6 d-inline\">\n        <h1 class=\"animated fadeIn\" style=\"background-color: white;\">\n            <label *ngIf=\"request.revised\" class=\"badge badge-success\">revisada</label>\n            <label *ngIf=\"!request.revised\" class=\"badge badge-warning\">pendiente</label>\n        </h1>\n    </div>\n    <div class=\"col-sm-6 d-inline\">\n        <h5> <i> {{request.id}} </i></h5>\n    </div>\n</div>\n\n<hr>\n\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <h2>Solicita: </h2>\n        <h4>{{request.name}}</h4>\n\n        <h2>Telefono: </h2>\n        <h4>{{request.phone}}</h4>\n\n        <h2>Correo: </h2>\n        <h4>{{request.email}}</h4>\n    </div>\n\n    <div class=\"col-sm-6\">\n        <h2>Categoria: </h2>\n        <h4>{{request.category}}</h4>\n\n        <h2>Descripcion: </h2>\n        <h4>{{request.description}}</h4>\n    </div>\n</div>\n\n<br>\n<hr>\n<br>\n\n<div class=\"row\">\n    <div align=\"center\">\n        <h1><i>Aquí debería ir el archivo adjunto</i></h1>\n        <!-- <pdf-viewer [src]=\"pdfSrc\" [render-text]=\"true\" style=\"display: block;\"></pdf-viewer> -->\n    </div>\n</div>\n\n<br>\n<hr>\n<br>\n\n<p class=\"lead\" align=\"center\">\n    <a [routerLink]=\"['/requests']\" class=\"btn btn-danger m-2\">  Atras  </a>\n    <button *ngIf=\"!request.revised\" (click)=\"revised(request)\" class=\"btn btn-primary m-2\">Revisada</button>\n</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer mb-10 sticky-botton\" align=\"center\">\n    <hr>\n    <div class=\"container\">\n        <span>\n            <a href=\"https://api.whatsapp.com/send?phone=+573217023750\"><i class=\"fab fa-2x fa-whatsapp fa-fw\"></i></a>\n            <!-- <a href='https://twitter.com/'><i class=\"fab fa-twitter fa-2x\" style=\"color:lightblue;\"></i></a> -->\n            <a href='https://www.facebook.com/'><i class=\"fab fa-facebook fa-2x fa-fw\"></i></a>\n            <a href=\"https://instagram.com\"><i class=\"fab fa-2x fa-instagram fa-fw\"></i></a>\n            <!-- <a href=\"https://youtube.com\"><i class=\"fab fa-2x fa-youtube fa-fw\" style=\"color:red;\"></i></a> -->\n        </span>\n\n    </div>\n    <br>\n    <div>\n        <span>\n            <!-- <i>Iconos by <a href=\"https://iconos8.es/icons\">iconos8</a></i> -->\n        </span>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm navbar-dark bg-primary sticky-top\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n        <img src=\"assets/icons/tutoo2x.png\" alt=\"\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item \" routerLinkActive=\"active\">\n                <a class=\"nav-link float-right\" [routerLink]=\"['/']\">Inicio</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\">\n                <a class=\"nav-link float-right\" [routerLink]=\"['categories']\">Categorias</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\">\n                <a class=\"nav-link float-right\" [routerLink]=\"['request']\">Solicitud</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\">\n                <a class=\"nav-link float-right\" [routerLink]=\"['about']\">Acerca de</a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\">\n                <a class=\"nav-link float-right\" [routerLink]=\"['admin']\">Admin</a>\n            </li>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/newtutor/newtutor.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/newtutor/newtutor.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\" animated fadeIn\">Registrar Tutor</h1>\n<hr>\n\n\n<form [formGroup]=\"tutorForm\" (ngSubmit)=\"createTutor(tutorForm)\" class=\"m-4 animated fadeIn fast\">\n    <fieldset class=\"m-4\">\n        <div class=\"form-group\">\n            <label>Imagen de perfil</label>\n            <input formControlName=\"imageurl\" (change)=\"handleImage($event)\" type=\"file\" class=\"form-control\" [class.is-invalid]=\"isInvalid('imageurl')\" placeholder=\"Seleccionar archivo\">\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-6 form-group\">\n                <label>Nombre</label>\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Nombre completo\">\n            </div>\n            <div class=\"col-sm-6 form-group\">\n                <label>Apellido</label>\n                <input formControlName=\"lastname\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Apellido\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input formControlName=\"email\" type=\"email\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Correo electrónico\">\n        </div>\n        <div class=\"form-group\">\n            <label>Teléfono</label>\n            <input formControlName=\"phone\" type=\"number\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Teléfono de contacto\">\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6 form-group\">\n                <label>Valor</label>\n                <input formControlName=\"value\" type=\"number\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Costo por hora\">\n            </div>\n            <div class=\"col-sm-6 form-group\">\n                <label>Ciudad</label>\n                <input formControlName=\"city\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Ciudad\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleSelect1\">Categoria</label>\n            <select formControlName=\"category\" class=\"form-control\" id=\"exampleSelect1\">\n                <option *ngFor=\"let category of categories\" >{{category}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label>Subcategorias</label>\n            <input formControlName=\"subjects\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"isInvalid('name')\" placeholder=\"Subcategorias\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleTextarea\">Biografía</label>\n            <textarea formControlName=\"bio\" class=\"form-control\" [class.is-invalid]=\"isInvalid('email')\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n        </div>\n\n\n        <p class=\"lead\" align=\"center\">\n            <a [routerLink]=\"['/tutors']\" class=\"btn btn-danger m-2\">Atras</a>\n            <button type=\"submit\" class=\"btn btn-primary m-2\">Guardar</button>\n        </p>\n    </fieldset>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/tutor/tutor.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/tutor/tutor.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tutor works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/tutors/tutors.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/tutors/tutors.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"d-inline animated fadeIn\">Tutores</h1>\n<button [routerLink]=\"['/admin/newtutor']\" class=\" d-inline btn btn-primary float-right\">\n    <i class=\"far fa-plus-square\"></i> Tutor</button>\n<hr>\n\n<div *ngIf=\"loading\" class=\"text-center mt-3 animate__animated animate__fadeIn\">\n    <h4 class=\"alert-heading\">Cargando</h4>\n    <p><i class=\"fas fa-spinner fa-spin fa-4x\"></i></p>\n    <p>Espere por favor.</p>\n</div>\n\n<div class=\"row\">\n    <div *ngFor=\"let tutor of tutors\" class=\"col-12 col-sm-6 col-md-6 col-lg-4 mb-4\">\n        <div class=\"card animated fadeIn\">\n            <div class=\"row\">\n                <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 mb-4\">\n                    <img class=\"m-1 w-100 img-fluid\" style=\"max-height: 200px;\" src={{tutor.imageurl}} alt=\"{{tutor.name}}\">\n                </div>\n                <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 mb-8\">\n                    <h3><b>{{tutor.name}} {{tutor.lastname}}</b></h3>\n                    <h4>({{tutor.category}})</h4>\n                    <p><i>{{tutor.bio}}.</i></p>\n                    <p><i>{{tutor.subjects}}.</i></p>\n                    <p>{{tutor.email}} -- {{tutor.phone}}</p>\n                    <p>Valor/hora desde: {{tutor.value | currency:'$':'symbol':'1.0'}}, {{tutor.city}}</p>\n                    <button type=\"button\" class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n                        <i>Ver más...</i>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<p class=\"lead\" align=\"center\">\n    <a [routerLink]=\"['/home']\" class=\"btn btn-danger m-2\">Atras</a>\n</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/admin/admin.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/admin/admin.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"navbar lead\" align=\"center\">\n    <a [routerLink]=\"['requests']\"><i class=\"far fa-list-alt fa-2x\"></i></a>\n    <a [routerLink]=\"['tutors']\"><i class=\"far fa-address-card fa-2x\"></i></a>\n    <a [routerLink]=\"['categories']\"><i class=\"fab fa-buffer fa-2x\"></i></a>\n    <a [routerLink]=\"['info']\"><i class=\"fas fa-info fa-2x\"></i></a>\n    <a (click)=\"logout()\"><i class=\"fas fa-sign-out-alt fa-2x\" style=\"color: red;\"></i> </a>\n</p>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"animated fadeIn\">Ingresar</h1>\n<hr>\n\n<div id=\"login\">\n    <div class=\"container\">\n        <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\n            <div id=\"login-column\" class=\"col-md-6\">\n                <div id=\"login-box\" class=\"col-md-12\">\n\n                    <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\" class=\"form\">\n\n                        <div class=\"form-group\">\n                            <label for=\"username\">Usuario:\n                                <span *ngIf=\"loginForm.submitted && loginForm.controls['email'].errors\" class=\"text-danger animated fadeIn\"> <i>obligatorio</i></span>\n                            </label><br>\n                            <input [(ngModel)]=\"user.email\" type=\"text\" name=\"email\" class=\"form-control\" required email>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"password\">Contraseña:\n                                <span *ngIf=\"loginForm.submitted && loginForm.controls['password'].errors\" class=\"text-danger animated fadeIn\"> <i>obligatoria</i> </span>\n                            </label><br>\n                            <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" class=\"form-control\" required>\n                        </div>\n\n                        <div class=\"form-group\" align=\"center\">\n                            <label for=\"remember-me\" class=\"text-info\"><span>recordarme</span> <span><input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\"></span></label><br>\n                            <a [routerLink]=\"['/home']\" class=\"btn btn-danger m-2\">Atras</a>\n                            <button class=\"btn btn-primary\" type=\"submit\">Ingresar</button>\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_categories_newcategory_newcategory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categories/newcategory/newcategory.component */ "./src/app/components/categories/newcategory/newcategory.component.ts");
/* harmony import */ var _components_page_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page/home/home.component */ "./src/app/components/page/home/home.component.ts");
/* harmony import */ var _components_page_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page/about/about.component */ "./src/app/components/page/about/about.component.ts");
/* harmony import */ var _components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categories/categories/categories.component */ "./src/app/components/categories/categories/categories.component.ts");
/* harmony import */ var _components_categories_category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/categories/category/category.component */ "./src/app/components/categories/category/category.component.ts");
/* harmony import */ var _components_requests_request_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/requests/request/request.component */ "./src/app/components/requests/request/request.component.ts");
/* harmony import */ var _components_users_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/users/admin/admin.component */ "./src/app/components/users/admin/admin.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_requests_requests_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/requests/requests/requests.component */ "./src/app/components/requests/requests/requests.component.ts");
/* harmony import */ var _components_requests_showrequest_showrequest_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/requests/showrequest/showrequest.component */ "./src/app/components/requests/showrequest/showrequest.component.ts");
/* harmony import */ var _components_tutors_tutors_tutors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tutors/tutors/tutors.component */ "./src/app/components/tutors/tutors/tutors.component.ts");
/* harmony import */ var _components_page_info_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page/info/info.component */ "./src/app/components/page/info/info.component.ts");
/* harmony import */ var _components_tutors_newtutor_newtutor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tutors/newtutor/newtutor.component */ "./src/app/components/tutors/newtutor/newtutor.component.ts");
















const routes = [
    { path: '', component: _components_page_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'home', component: _components_page_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'categories', component: _components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"] },
    { path: 'category/:id', component: _components_categories_category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'request', component: _components_requests_request_request_component__WEBPACK_IMPORTED_MODULE_8__["RequestComponent"] },
    { path: 'about', component: _components_page_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    //Admin
    { path: 'login', component: _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    {
        path: 'admin', component: _components_users_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], children: [
            { path: 'requests', component: _components_requests_requests_requests_component__WEBPACK_IMPORTED_MODULE_11__["RequestsComponent"] },
            { path: 'showrequest/:id', component: _components_requests_showrequest_showrequest_component__WEBPACK_IMPORTED_MODULE_12__["ShowrequestComponent"] },
            { path: 'tutors', component: _components_tutors_tutors_tutors_component__WEBPACK_IMPORTED_MODULE_13__["TutorsComponent"] },
            { path: 'newtutor', component: _components_tutors_newtutor_newtutor_component__WEBPACK_IMPORTED_MODULE_15__["NewtutorComponent"] },
            { path: 'categories', component: _components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"] },
            { path: 'newcategory', component: _components_categories_newcategory_newcategory_component__WEBPACK_IMPORTED_MODULE_3__["NewcategoryComponent"] },
            { path: 'info', component: _components_page_info_info_component__WEBPACK_IMPORTED_MODULE_14__["InfoComponent"] },
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Tutoos';
        localStorage.setItem('alert', 'on');
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_categories_newcategory_newcategory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/categories/newcategory/newcategory.component */ "./src/app/components/categories/newcategory/newcategory.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_page_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page/home/home.component */ "./src/app/components/page/home/home.component.ts");
/* harmony import */ var _components_page_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page/about/about.component */ "./src/app/components/page/about/about.component.ts");
/* harmony import */ var _components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/categories/categories/categories.component */ "./src/app/components/categories/categories/categories.component.ts");
/* harmony import */ var _components_categories_category_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/categories/category/category.component */ "./src/app/components/categories/category/category.component.ts");
/* harmony import */ var _components_requests_request_request_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/requests/request/request.component */ "./src/app/components/requests/request/request.component.ts");
/* harmony import */ var _components_users_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users/admin/admin.component */ "./src/app/components/users/admin/admin.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_requests_requests_requests_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/requests/requests/requests.component */ "./src/app/components/requests/requests/requests.component.ts");
/* harmony import */ var _components_requests_showrequest_showrequest_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/requests/showrequest/showrequest.component */ "./src/app/components/requests/showrequest/showrequest.component.ts");
/* harmony import */ var _components_tutors_tutor_tutor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tutors/tutor/tutor.component */ "./src/app/components/tutors/tutor/tutor.component.ts");
/* harmony import */ var _components_tutors_tutors_tutors_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/tutors/tutors/tutors.component */ "./src/app/components/tutors/tutors/tutors.component.ts");
/* harmony import */ var _components_page_info_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/page/info/info.component */ "./src/app/components/page/info/info.component.ts");
/* harmony import */ var _components_tutors_newtutor_newtutor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/tutors/newtutor/newtutor.component */ "./src/app/components/tutors/newtutor/newtutor.component.ts");




//Forms





//Firebase


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_categories_newcategory_newcategory_component__WEBPACK_IMPORTED_MODULE_7__["NewcategoryComponent"],
            _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
            _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _components_page_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _components_page_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
            _components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_15__["CategoriesComponent"],
            _components_categories_category_category_component__WEBPACK_IMPORTED_MODULE_16__["CategoryComponent"],
            _components_requests_request_request_component__WEBPACK_IMPORTED_MODULE_17__["RequestComponent"],
            _components_users_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
            _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _components_requests_requests_requests_component__WEBPACK_IMPORTED_MODULE_20__["RequestsComponent"],
            _components_requests_showrequest_showrequest_component__WEBPACK_IMPORTED_MODULE_21__["ShowrequestComponent"],
            _components_tutors_tutor_tutor_component__WEBPACK_IMPORTED_MODULE_22__["TutorComponent"],
            _components_tutors_tutors_tutors_component__WEBPACK_IMPORTED_MODULE_23__["TutorsComponent"],
            _components_page_info_info_component__WEBPACK_IMPORTED_MODULE_24__["InfoComponent"],
            _components_tutors_newtutor_newtutor_component__WEBPACK_IMPORTED_MODULE_25__["NewtutorComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            //Formularios
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            //Firebase
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig)
        ],
        providers: [
        // { provide: bucket, useValue: 'gs://fi-re-ba-se.appspot.com/fotos_firebase' }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/categories/categories/categories.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/categories/categories/categories.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/categories.service */ "./src/app/services/categories.service.ts");



let CategoriesComponent = class CategoriesComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    ngOnInit() {
        this.loading = true;
        this.categoriesService.getAll().subscribe(data => {
            this.categories = data;
            this.loading = false;
        });
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories/categories.component.html")).default
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/components/categories/category/category.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/categories/category/category.component.ts ***!
  \**********************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_tutors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/tutors.service */ "./src/app/services/tutors.service.ts");





let CategoryComponent = class CategoryComponent {
    // public tutorModal;
    constructor(route, tutorsService, categoriesService) {
        this.route = route;
        this.tutorsService = tutorsService;
        this.categoriesService = categoriesService;
        this.tutors = [];
    }
    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe(params => {
            this.category = params['id'];
            this.tutors = this.tutorsService.getByCategory(params['id']);
            this.loading = false;
            // this.tutorsService.getByCategory(params['id']).subscribe(data => {
            //   this.tutors = data;
            //   this.loading = false;
            // });
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_tutors_service__WEBPACK_IMPORTED_MODULE_4__["TutorsService"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/category/category.component.html")).default
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/components/categories/newcategory/newcategory.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/categories/newcategory/newcategory.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewcategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcategoryComponent", function() { return NewcategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let NewcategoryComponent = class NewcategoryComponent {
    constructor(formBuilder, categoriesService) {
        this.formBuilder = formBuilder;
        this.categoriesService = categoriesService;
        this.createForm();
        this.loadFormData();
    }
    ngOnInit() { }
    createForm() {
        this.catForm = this.formBuilder.group({
            id: [],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            imageurl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    loadFormData() {
        this.catForm.reset({});
    }
    isInvalid(field) {
        return this.catForm.get(field).invalid && this.catForm.get(field).touched;
    }
    createCategory() {
        if (this.catForm.invalid) {
            console.log("Invalid form");
            return Object.values(this.catForm.controls).forEach(control => {
                control.markAllAsTouched();
            });
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: 'info',
            title: 'Guardando',
            showConfirmButton: false,
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading();
        this.categoriesService.create(this.image, this.catForm.value);
        this.catForm.reset();
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: 'success',
            title: 'Guardada',
            text: 'Se guardó correctamente',
            showConfirmButton: false,
            timer: 1000
        });
    }
    handleImage(event) {
        this.image = event.target.files[0];
        console.log(">> loaded ", this.image.name);
    }
};
NewcategoryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }
];
NewcategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newcategory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newcategory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/newcategory/newcategory.component.html")).default
    })
], NewcategoryComponent);



/***/ }),

/***/ "./src/app/components/page/about/about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/page/about/about.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/about/about.component.html")).default
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/page/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/page/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        this.alert = localStorage.getItem('alert');
    }
    alertOff() {
        // localStorage.setItem('alert', 'off');
        localStorage.removeItem('alert');
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/home/home.component.html")).default
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/page/info/info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/page/info/info.component.ts ***!
  \********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoComponent = class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/info/info.component.html")).default
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/components/requests/request/request.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/requests/request/request.component.ts ***!
  \******************************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let RequestComponent = class RequestComponent {
    // public categoryList: string[];
    constructor(formBuilder, categoriesService, requestsService) {
        this.formBuilder = formBuilder;
        this.categoriesService = categoriesService;
        this.requestsService = requestsService;
        this.createForm();
        this.loadFormData();
    }
    ngOnInit() {
        this.categories = this.categoriesService.setList();
        this.categories.unshift('- selecciona una categoría -');
    }
    createForm() {
        this.reqForm = this.formBuilder.group({
            id: [],
            revised: ['false'],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            imageurl: [],
            documenturl: [],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    loadFormData() {
        this.reqForm.reset({});
    }
    isInvalid(field) {
        return this.reqForm.get(field).invalid && this.reqForm.get(field).touched;
    }
    isInvalidFile(field) {
        // extension: .doc, .docx, .pdf
        return this.reqForm.get(field).invalid && this.reqForm.get(field).touched;
    }
    isInvalidImage(field) {
        // extensión: .jpg, .jpeg, .png
        return this.reqForm.get(field).invalid && this.reqForm.get(field).touched;
    }
    getArray(field) {
        return this.reqForm.get(field);
    }
    handleImage(event) {
        this.image = event.target.files[0];
        console.log(">> image loaded");
    }
    handleDocument(event) {
        this.image = event.target.files[0];
        console.log(">> document loaded");
    }
    createRequest() {
        if (this.reqForm.invalid) {
            console.log("FORM_VALID: ", this.reqForm.valid);
            return Object.values(this.reqForm.controls).forEach(control => {
                control.markAllAsTouched();
            });
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            icon: 'info',
            title: 'Guardando',
            showConfirmButton: false,
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        console.log("FORM_VALID: ", this.reqForm.valid);
        console.log("FORM_VALUE: ", this.reqForm.value);
        this.requestsService.createRequest(this.reqForm.value).subscribe(resp => {
            console.log("RESP: ", resp);
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'Se guardó correctamente',
            showConfirmButton: false,
            timer: 1000
        });
        this.reqForm.reset();
    }
};
RequestComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] }
];
RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/request/request.component.html")).default
    })
], RequestComponent);



/***/ }),

/***/ "./src/app/components/requests/requests/requests.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/requests/requests/requests.component.ts ***!
  \********************************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/requests.service */ "./src/app/services/requests.service.ts");




let RequestsComponent = class RequestsComponent {
    constructor(requestsService) {
        this.requestsService = requestsService;
        this.requests = [];
    }
    ngOnInit() {
        this.loading = true;
        this.requestsService.getAll().subscribe(data => {
            this.requests = data;
            console.log("DATA: ", data);
            console.log("REQUESTS: ", this.requests);
            this.loading = false;
        });
    }
    deleteRequest(request, idx) {
        console.log("component.deleteRequest(): ");
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '¿Está seguro?',
            text: `¿Está seguro que desea borrar la solicitud de  ${request.name}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Borrar'
        }).then((resp) => {
            if (resp.value) {
                this.requestsService.deleteRequest(request.id).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Borrado!',
                    text: `La solicitud ha sido borrada`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.requests.splice(idx, 1);
            }
        });
    }
};
RequestsComponent.ctorParameters = () => [
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"] }
];
RequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/requests/requests.component.html")).default
    })
], RequestsComponent);



/***/ }),

/***/ "./src/app/components/requests/showrequest/showrequest.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/requests/showrequest/showrequest.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShowrequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowrequestComponent", function() { return ShowrequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/requests.service */ "./src/app/services/requests.service.ts");




let ShowrequestComponent = class ShowrequestComponent {
    // public pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
    constructor(router, activatedRoute, requestsService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.requestsService = requestsService;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            console.log(`ShowRequest > ${params['id']}`);
            this.requestsService.getById(params['id']).subscribe((data) => {
                console.log("DATA: ", data);
                this.request = data;
                this.request.id = params['id'];
            });
        });
    }
    revised(request) {
        console.log("REVISADA: ", request.id);
        this.requestsService.revised(request).subscribe(resp => {
            console.log(`revised(${request.id}): ${resp}`);
        });
        this.router.navigate(['/requests']);
    }
};
ShowrequestComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"] }
];
ShowrequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showrequest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./showrequest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/requests/showrequest/showrequest.component.html")).default
    })
], ShowrequestComponent);



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/tutors/newtutor/newtutor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/tutors/newtutor/newtutor.component.ts ***!
  \******************************************************************/
/*! exports provided: NewtutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewtutorComponent", function() { return NewtutorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories.service */ "./src/app/services/categories.service.ts");




let NewtutorComponent = class NewtutorComponent {
    constructor(formBuilder, categoriesService) {
        this.formBuilder = formBuilder;
        this.categoriesService = categoriesService;
        this.createForm();
        this.loadFormData();
    }
    ngOnInit() {
        this.categories = this.categoriesService.setList();
        this.categories.unshift('- selecciona una categoría -');
    }
    createForm() {
        this.tutorForm = this.formBuilder.group({
            id: [],
            imageurl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]],
            bio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(50)]],
            value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            subjects: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    loadFormData() {
        this.tutorForm.reset({});
    }
    isInvalid(field) {
        return this.tutorForm.get(field).invalid && this.tutorForm.get(field).touched;
    }
    isInvalidFile(field) {
        return this.tutorForm.get(field).invalid && this.tutorForm.get(field).touched;
    }
    handleImage(event) {
        this.image = event.target.files[0];
        console.log("IMAGE: ", this.image);
    }
    createTutor(form) { }
};
NewtutorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }
];
NewtutorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newtutor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newtutor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/newtutor/newtutor.component.html")).default
    })
], NewtutorComponent);



/***/ }),

/***/ "./src/app/components/tutors/tutor/tutor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/tutors/tutor/tutor.component.ts ***!
  \************************************************************/
/*! exports provided: TutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorComponent", function() { return TutorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TutorComponent = class TutorComponent {
    constructor() { }
    ngOnInit() {
    }
};
TutorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tutor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/tutor/tutor.component.html")).default
    })
], TutorComponent);



/***/ }),

/***/ "./src/app/components/tutors/tutors/tutors.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/tutors/tutors/tutors.component.ts ***!
  \**************************************************************/
/*! exports provided: TutorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorsComponent", function() { return TutorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tutors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tutors.service */ "./src/app/services/tutors.service.ts");



let TutorsComponent = class TutorsComponent {
    constructor(tutorsService) {
        this.tutorsService = tutorsService;
        this.tutors = [];
        this.loading = true;
        this.tutorsService.getAll().subscribe(data => {
            this.tutors = data;
            this.loading = false;
        });
    }
    ngOnInit() {
    }
};
TutorsComponent.ctorParameters = () => [
    { type: src_app_services_tutors_service__WEBPACK_IMPORTED_MODULE_2__["TutorsService"] }
];
TutorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tutors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutors/tutors/tutors.component.html")).default
    })
], TutorsComponent);



/***/ }),

/***/ "./src/app/components/users/admin/admin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/admin/admin.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdminComponent = class AdminComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        console.log("admin.component.constructor()"); //LOG
    }
    ngOnInit() {
    }
    logout() {
        // this.auth.logout();
        this.router.navigateByUrl('/login');
    }
};
AdminComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/admin/admin.component.html")).default
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_admin_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/admin.model */ "./src/app/models/admin.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = new _models_admin_model__WEBPACK_IMPORTED_MODULE_2__["AdminModel"];
        this.rememberme = false;
    }
    ngOnInit() {
        if (localStorage.getItem('email')) {
            this.user.email = localStorage.getItem('email');
            this.rememberme = true;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/models/admin.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/admin.model.ts ***!
  \***************************************/
/*! exports provided: AdminModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModel", function() { return AdminModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AdminModel {
}


/***/ }),

/***/ "./src/app/models/category.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/category.model.ts ***!
  \******************************************/
/*! exports provided: CategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModel", function() { return CategoryModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CategoryModel {
    constructor(name, imageurl) {
        this.id = '';
        this.name = name;
        this.imageurl = imageurl;
        this.tutors = 0;
    }
}


/***/ }),

/***/ "./src/app/models/request.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/request.model.ts ***!
  \*****************************************/
/*! exports provided: RequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModel", function() { return RequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class RequestModel {
    constructor(name, phone, email, category, description, documenturl, imageurl) {
        this.id = '';
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.category = category;
        this.description = description;
        this.documenturl = documenturl;
        this.imageurl = imageurl;
        this.revised = false;
    }
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() { }
    login(user) {
        console.log("login called");
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/category.model */ "./src/app/models/category.model.ts");




//firbase


let CategoriesService = class CategoriesService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'https://tutoo-app.firebaseio.com';
        this.list = [];
        this.categories = [];
        this.load();
    }
    load() {
        this.getAll().subscribe(data => {
            this.categories = data;
        });
    }
    getAll() {
        return this.http.get(`${this.url}/categories.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => this.createArray(resp)));
    }
    getById() { }
    createArray(categoryObject) {
        const categories = [];
        if (categoryObject === null) {
            return [];
        }
        Object.keys(categoryObject).forEach(key => {
            const category = categoryObject[key];
            category.id = key;
            categories.push(category);
        });
        console.log("getAll ==>", categories);
        return categories;
    }
    create(image, data) {
        console.log("CategoryService.createCategory(): ");
        this.uploadData(image, data);
    }
    createCategory(image, data) {
        console.log("CategoryService.createCategory(): ");
        this.uploadData(image, data);
    }
    uploadData(image, data) {
        console.log("CategoryService.uploadImageCategory(): ");
        this.imagePath = `categories/img/${image.name}`;
        let imageRef = this.storage.ref(this.imagePath);
        let task = this.storage.upload(this.imagePath, image);
        /* upload image */
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            imageRef.getDownloadURL().subscribe(url => {
                this.imageUrl = url;
                console.log("IMAGE_URL: ", url);
                /* save post + img */
                let categoryDTO = new _models_category_model__WEBPACK_IMPORTED_MODULE_5__["CategoryModel"](data.name, this.imageUrl);
                console.log("DATA: ", categoryDTO);
                this.post(categoryDTO).subscribe((resp) => {
                    data.id = resp.name;
                    console.log("RESP: ", resp);
                });
            });
        })).subscribe();
    }
    post(category) {
        console.log("CategoryService.categoryPost(): ", category);
        return this.http.post(`${this.url}/categories.json`, category);
    }
    setList() {
        if (this.categories.length === 0) {
            this.load;
        }
        let categories = [];
        for (let index in this.categories) {
            categories.push(this.categories[index].name);
        }
        this.list = [...new Set(categories)];
        return [...new Set(categories)];
    }
};
CategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriesService);



/***/ }),

/***/ "./src/app/services/requests.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/requests.service.ts ***!
  \**********************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/request.model */ "./src/app/models/request.model.ts");





let RequestsService = class RequestsService {
    constructor(http) {
        this.http = http;
        this.url = 'https://tutoo-app.firebaseio.com';
        this.requests = [];
    }
    loadAll() { }
    getAll() {
        console.log("getRequests() - -");
        return this.http.get(`${this.url}/requests.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => this.createArray(resp)));
    }
    createArray(requestObject) {
        const requests = [];
        if (requestObject === null) {
            return [];
        }
        Object.keys(requestObject).forEach(key => {
            const request = requestObject[key];
            request.id = key;
            requests.push(request);
            // console.log("getRequest/createArray(): ", requests);
        });
        return requests;
    }
    deleteRequest(id) {
        return this.http.delete(`${this.url}/requests/${id}.json`);
    }
    getById(id) {
        return this.http.get(`${this.url}/requests/${id}.json`);
    }
    revised(request) {
        const requestDTO = Object.assign({}, request);
        requestDTO.revised = true;
        delete requestDTO.id;
        return this.http.put(`${this.url}/requests/${request.id}.json`, requestDTO);
    }
    createRequest(request) {
        let imageurl;
        let docurl;
        let requestDTO = new _models_request_model__WEBPACK_IMPORTED_MODULE_4__["RequestModel"](request.name, request.phone, request.email, request.category, request.description, imageurl, docurl);
        console.log("Request to post: ==>", requestDTO);
        return this.http.post(`${this.url}/requests.json`, requestDTO)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => {
            request.id = resp.name;
            return request;
        }));
    }
    post(request) {
        console.log("CategoryService.categoryPost(): ", request);
        return this.http.post(`${this.url}/requests.json`, request);
    }
};
RequestsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RequestsService);



/***/ }),

/***/ "./src/app/services/tutors.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/tutors.service.ts ***!
  \********************************************/
/*! exports provided: TutorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorsService", function() { return TutorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let TutorsService = class TutorsService {
    constructor(http) {
        this.http = http;
        this.url = 'https://tutoo-app.firebaseio.com';
        this.tutors = [];
        this.load();
    }
    load() {
        this.http.get(`${this.url}/tutors.json`).subscribe((data) => {
            this.tutors = data;
        });
    }
    getAll() {
        return this.http.get(`${this.url}/tutors.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => this.createArray(resp)));
    }
    createArray(tutorObject) {
        const tutors = [];
        if (tutorObject === null) {
            return [];
        }
        Object.keys(tutorObject).forEach(key => {
            const category = tutorObject[key];
            category.id = key;
            tutors.push(category);
        });
        console.log("getAllTutors ==> ", tutors);
        this.tutors = tutors;
        return tutors;
    }
    getByCategory(category) {
        let tutorsFiltered = [];
        for (let tutor of this.tutors) {
            if (tutor.category === category) {
                tutorsFiltered.push(tutor);
            }
        }
        console.log(`getByCategory( ${category} ) ==> `, tutorsFiltered);
        return tutorsFiltered;
    }
    getById() { }
    addTutor(tutor) {
        let categoryId = tutor.category;
        let nTutorsUrl = `${this.url}/categories/${categoryId}/tutors.json`;
    }
};
TutorsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TutorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TutorsService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBr2abTJTug_rCcAemKXVZpJKr44H7VXos",
        authDomain: "tutoo-app.firebaseapp.com",
        databaseURL: "https://tutoo-app.firebaseio.com",
        projectId: "tutoo-app",
        storageBucket: "tutoo-app.appspot.com",
        messagingSenderId: "173376322602",
        appId: "1:173376322602:web:1ca7703f64132ac2669753",
        measurementId: "G-0QSQM1LFST"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nano/Code/upload/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map