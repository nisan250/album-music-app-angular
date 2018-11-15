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

/***/ "./src/app/albums/album-detail.component.css":
/*!***************************************************!*\
  !*** ./src/app/albums/album-detail.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtcy9hbGJ1bS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/albums/album-detail.component.html":
/*!****************************************************!*\
  !*** ./src/app/albums/album-detail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card' *ngIf='album'>\n  <div class='card-header'>\n      {{pageTitle + ':  ' + album.albumName}}\n  </div>\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/albums/album-detail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/albums/album-detail.component.ts ***!
  \**************************************************/
/*! exports provided: AlbumDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDetailComponent", function() { return AlbumDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumDetailComponent = /** @class */ (function () {
    function AlbumDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pageTitle = 'Album Detail';
    }
    AlbumDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += ": " + id;
        this.album = {
            "albumId": 10,
            "albumName": "demo album six",
            "artist": "demo artist",
            "genre": "demo genre",
            "releaseDate": "April 1, 1111",
            "price": 30,
            "rating": 4.9,
            "image": "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
        };
    };
    AlbumDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/albums']);
    };
    AlbumDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./album-detail.component.html */ "./src/app/albums/album-detail.component.html"),
            styles: [__webpack_require__(/*! ./album-detail.component.css */ "./src/app/albums/album-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
}());



/***/ }),

/***/ "./src/app/albums/album-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/albums/album-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead th{\r\n  color: #3192a1;\r\n}\r\n\r\ntbody td{\r\n  color: #649aa3;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW1zL2FsYnVtLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWxidW1zL2FsYnVtLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoZWFkIHRoe1xyXG4gIGNvbG9yOiAjMzE5MmExO1xyXG59XHJcblxyXG50Ym9keSB0ZHtcclxuICBjb2xvcjogIzY0OWFhMztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/albums/album-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/albums/album-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        {{pageTitle}}\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">Filter By</div>\r\n            <div class=\"col-md-4\">\r\n                <input type='text'\r\n                [(ngModel)]='listFilter' />\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-md-6\">\r\n                <h4>Filterd by: {{listFilter}}</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\" *ngIf=\"albums && albums.length\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            <button class=\"btn btn-info\"\r\n                                    (click)=\"toggleImage()\">\r\n                                    {{isImageShow ? 'Hide Image' : 'Show Image'}}\r\n                            </button>\r\n                        </th>\r\n                        <th>Album name</th>\r\n                        <th>Artist</th>\r\n                        <th>Genre</th>\r\n                        <th>Release Date</th>\r\n                        <th>price</th>\r\n                        <th>Rating</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let album of filteredAlbums\">\r\n                    <td  class=\"align-middle\">\r\n                      <img *ngIf=isImageShow\r\n                        [title]=\"album.albumName | uppercase\"\r\n                        [src]=\"album.image\"\r\n                        [style.width.px]=\"imageWidth\"/></td>\r\n                    <td class=\"align-middle\">{{album.albumName}}</td>\r\n                    <td class=\"align-middle\">{{album.artist}}</td>\r\n                    <td class=\"align-middle\">{{album.genre}}</td>\r\n                    <td class=\"align-middle\">{{album.releaseDate | date}}</td>\r\n                    <td class=\"align-middle\">{{album.price | currency | lowercase}} ({{album.price | convertPriceToText: 15}})</td>\r\n                    <td class=\"align-middle\"><fma-rating [rating]='album.rating' (ratingClicked)='onRatingClicked($event)'></fma-rating></td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/albums/album-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/albums/album-list.component.ts ***!
  \************************************************/
/*! exports provided: AlbumListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumListComponent", function() { return AlbumListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album.service */ "./src/app/albums/album.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumListComponent = /** @class */ (function () {
    //no need for _private, with the private in the parameter constructor , typescript do for us automaticaly
    //private _albumService;
    function AlbumListComponent(albumService) {
        this.albumService = albumService;
        this.pageTitle = 'Album Music List';
        this.imageWidth = 52;
        this.isImageShow = true;
        //this._albumService = albumService;
        // this.listFilter =  ''
    }
    Object.defineProperty(AlbumListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredAlbums = this.listFilter ? this.performFilter(this.listFilter) : this.albums;
        },
        enumerable: true,
        configurable: true
    });
    AlbumListComponent.prototype.onRatingClicked = function (message) {
        console.log(message);
    };
    AlbumListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.albums.filter(function (album) {
            return album.albumName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    AlbumListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Album List Component initiated!!');
        this.albumService.getAlbums().subscribe(function (albums) {
            _this.albums = albums;
            _this.filteredAlbums = _this.albums;
        }, function (error) { return _this.errorMessage = error; });
    };
    AlbumListComponent.prototype.toggleImage = function () {
        this.isImageShow = !this.isImageShow;
    };
    AlbumListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fma-albums',
            template: __webpack_require__(/*! ./album-list.component.html */ "./src/app/albums/album-list.component.html"),
            styles: [__webpack_require__(/*! ./album-list.component.css */ "./src/app/albums/album-list.component.css")],
        }),
        __metadata("design:paramtypes", [_album_service__WEBPACK_IMPORTED_MODULE_1__["AlbumService"]])
    ], AlbumListComponent);
    return AlbumListComponent;
}());



/***/ }),

/***/ "./src/app/albums/album.service.ts":
/*!*****************************************!*\
  !*** ./src/app/albums/album.service.ts ***!
  \*****************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumService = /** @class */ (function () {
    function AlbumService(http) {
        this.http = http;
        this.albumUrl = 'api/songs/songs.json';
    }
    AlbumService.prototype.getAlbums = function () {
        // return this.http.get<IAlbum[]>(this.albumUrl);
        return this.http.get(this.albumUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AlbumService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            //client-side or network error
            errorMessage = "error  " + err.error.message;
        }
        else {
            //backend error with response code
            errorMessage = "error " + err.error.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    AlbumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlbumService);
    return AlbumService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = 'Album Music App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fma-root',
            // templateUrl: './app.component.html',
            // styleUrls: ['./app.component.css']
            template: "\n    <nav class=\"navbar navbar-expand navbar-light bg-light\">\n      <a class='navbar-brand'>{{pageTitle}}</a>\n      <ul class='nav nav-pills'>\n        <li><a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a></li>\n        <li><a class=\"nav-link\" [routerLink]=\"['/albums']\">Albums List</a></li>\n      </ul>\n    </nav>\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  "
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _albums_album_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./albums/album-list.component */ "./src/app/albums/album-list.component.ts");
/* harmony import */ var _shared_convert_price_to_text_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/convert-price-to-text.pipe */ "./src/app/shared/convert-price-to-text.pipe.ts");
/* harmony import */ var _shared_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/rating.component */ "./src/app/shared/rating.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _albums_album_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./albums/album-detail.component */ "./src/app/albums/album-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { AppRoutingModule } from './app-routing.module';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _albums_album_list_component__WEBPACK_IMPORTED_MODULE_6__["AlbumListComponent"],
                _shared_convert_price_to_text_pipe__WEBPACK_IMPORTED_MODULE_7__["ConvertPriceToTextPipe"],
                _shared_rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _albums_album_detail_component__WEBPACK_IMPORTED_MODULE_10__["AlbumDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // AppRoutingModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'albums', component: _albums_album_list_component__WEBPACK_IMPORTED_MODULE_6__["AlbumListComponent"] },
                    { path: 'albums/:id', component: _albums_album_detail_component__WEBPACK_IMPORTED_MODULE_10__["AlbumDetailComponent"] },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' },
                ], { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"text-center\">\r\n        <img src=\"./assets/images/logo.jpg\"\r\n             class=\"img-responsive center-block\"\r\n             style=\"max-height:300px;padding-bottom:50px\" />\r\n      </div>\r\n\r\n      <div class=\"text-center\">welcome to</div>\r\n      <div class=\"text-center\">\r\n        <h3>Album Music App </h3>\r\n      </div>\r\n      <div class=\"text-center\">with Angular 7</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.pageTitle = 'Welcome';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/convert-price-to-text.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/convert-price-to-text.pipe.ts ***!
  \******************************************************/
/*! exports provided: ConvertPriceToTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertPriceToTextPipe", function() { return ConvertPriceToTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertPriceToTextPipe = /** @class */ (function () {
    function ConvertPriceToTextPipe() {
    }
    ConvertPriceToTextPipe.prototype.transform = function (value, target) {
        return value > target ? 'expensive price' : 'good price';
    };
    ConvertPriceToTextPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'convertPriceToText'
        })
    ], ConvertPriceToTextPipe);
    return ConvertPriceToTextPipe;
}());



/***/ }),

/***/ "./src/app/shared/rating.component.css":
/*!*********************************************!*\
  !*** ./src/app/shared/rating.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n  overflow: hidden;\r\n}\r\ndiv {\r\n  cursor: pointer;\r\n}\r\n.fa-star {\r\n  color: gold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yYXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9wIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmRpdiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mYS1zdGFyIHtcclxuICBjb2xvcjogZ29sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/rating.component.html":
/*!**********************************************!*\
  !*** ./src/app/shared/rating.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\r\n  [style.width.px]=\"starWidth\"\r\n  [title]=\"rating\"\r\n  (click)='onClick()'>\r\n  <div style=\"width: 80px\">\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/rating.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/rating.component.ts ***!
  \********************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RatingComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    RatingComponent.prototype.onClick = function () {
        this.ratingClicked.emit("you clicked the rating: " + this.rating + " ");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RatingComponent.prototype, "ratingClicked", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fma-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/shared/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/shared/rating.component.css")]
        })
    ], RatingComponent);
    return RatingComponent;
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

module.exports = __webpack_require__(/*! D:\apps\album-music-app-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map