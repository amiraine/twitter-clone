webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api-keys.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return masterFirebaseConfig; });
var masterFirebaseConfig = {
    apiKey: "AIzaSyDKrnmtNIgbnADt0GPnH9JB7TZ-Glg1WuM",
    authDomain: "twitter-clone-e1f9a.firebaseapp.com",
    databaseURL: "https://twitter-clone-e1f9a.firebaseio.com",
    projectId: "twitter-clone-e1f9a",
    storageBucket: "twitter-clone-e1f9a.appspot.com",
    messagingSenderId: "219293871914"
};


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*make container fluid light grey.*/\n.search-bar{\n  background-color: white;\n  min-height: 46px;\n  background-image: url('http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png');\n  background-position: center;\n  background-size: 46px;\n  background-repeat: no-repeat;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.nav-bar{\n  text-align: center;\n}\n.search{\n  text-align: center;\n}\n.round-corner{\n  border-radius: 19px;\n}\np{\n  color: #66757f;\n  font-size: 12px;\n}\n.icons:hover{\n  color: #1B95E0;\n  border-bottom: solid 3px #1B95E0;\n}\n.search-twitter{\n  background-color: #f5f8fa;\n  border: 1px solid #e6ecf0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 32px;\n  font-size: 12px;\n}\n.nav-icon{\n  margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title></title>\n  </head>\n  <body>\n    <nav class=\"navbar navbar-expand-lg\">\n      <div class=\"icons\">\n        <a class=\"nav-link\" routerLink=''><img src=\"./assets/home.png\" alt=\"\" class=\"nav-icon\">Home</a>\n      </div>\n      <div class=\"icons\">\n        <a class=\"nav-link\" routerLink='moments'><img src=\"./assets/news.png\" alt=\"\" class=\"nav-icon\">Moments</a>\n      </div>\n      <div class=\"icons\">\n        <a class=\"nav-link\" routerLink='notifications'><img src=\"./assets/note.png\" alt=\"\" class=\"nav-icon\">Notifications</a>\n      </div>\n      <div class=\"icons\">\n        <a class=\"nav-link\" routerLink='messages'><img src=\"./assets/msg.png\" alt=\"\" class=\"nav-icon\">Messages</a>\n      </div>\n      <form class=\"form-inline\">\n        <input class=\"round-corner search-twitter\" type=\"text\" placeholder=\"Search Twitter\">\n        <button class=\"round-corner post-tweet\" name=\"Tweet\" float=\"right\">Tweet</button>\n      </form>\n    </nav>\n  <router-outlet></router-outlet>\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info_component__ = __webpack_require__("../../../../../src/app/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trending_trending_component__ = __webpack_require__("../../../../../src/app/trending/trending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__moments_moments_component__ = __webpack_require__("../../../../../src/app/moments/moments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_keys__ = __webpack_require__("../../../../../src/app/api-keys.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reverse_pipe__ = __webpack_require__("../../../../../src/app/reverse.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: __WEBPACK_IMPORTED_MODULE_13__api_keys__["a" /* masterFirebaseConfig */].apiKey,
    authDomain: __WEBPACK_IMPORTED_MODULE_13__api_keys__["a" /* masterFirebaseConfig */].authDomain,
    databaseURL: __WEBPACK_IMPORTED_MODULE_13__api_keys__["a" /* masterFirebaseConfig */].databaseURL,
    storageBucket: __WEBPACK_IMPORTED_MODULE_13__api_keys__["a" /* masterFirebaseConfig */].storageBucket
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_info_user_info_component__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__trending_trending_component__["a" /* TrendingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__moments_moments_component__["a" /* MomentsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__reverse_pipe__["a" /* ReversePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moments_moments_component__ = __webpack_require__("../../../../../src/app/moments/moments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'moments',
        component: __WEBPACK_IMPORTED_MODULE_3__moments_moments_component__["a" /* MomentsComponent */]
    },
    {
        path: 'notifications',
        component: __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */]
    },
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_2__messages_messages_component__["a" /* MessagesComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-user-info></app-user-info>\n      <app-trending></app-trending>\n    </div>\n    <div class=\"col-md-7\">\n      <app-timeline></app-timeline>\n    </div>\n    <div class=\"col-md-2\">\n<!-- leave empty -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  messages works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/tweet.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tweet; });
var Tweet = /** @class */ (function () {
    function Tweet(name, username, icon, tweet, img, replies, retweets, likes) {
        this.name = name;
        this.username = username;
        this.icon = icon;
        this.tweet = tweet;
        this.img = img;
        this.replies = replies;
        this.retweets = retweets;
        this.likes = likes;
    }
    return Tweet;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, handle) {
        this.name = name;
        this.handle = handle;
        this.tweets = 0;
        this.followers = 0;
        this.following = 0;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/moments/moments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/moments/moments.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  moments works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/moments/moments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MomentsComponent = /** @class */ (function () {
    function MomentsComponent() {
    }
    MomentsComponent.prototype.ngOnInit = function () {
    };
    MomentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-moments',
            template: __webpack_require__("../../../../../src/app/moments/moments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/moments/moments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MomentsComponent);
    return MomentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  notifications works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (!value)
            return;
        return value.reverse();
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: "reverse",
            pure: false
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "../../../../../src/app/timeline.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineService = /** @class */ (function () {
    function TimelineService(database) {
        this.database = database;
        this.tweets = database.list('tweets');
    }
    TimelineService.prototype.getTweets = function () {
        return this.tweets;
    };
    TimelineService.prototype.postTweet = function (newTweet) {
        this.tweets.push(newTweet);
    };
    TimelineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TimelineService);
    return TimelineService;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tweet-input{\n  padding-top: 15px;\n  background-color: #E8F4FB;\n  padding-bottom: 2px;\n  padding-left: 18px;\n}\n.tweet-form{\n  min-width: 95%;\n  word-wrap: normal;\n}\nimg#user{\n  max-width: 32px;\n}\n.icon-spot{\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.twit-content{\n  padding-left: 10px;\n}\n.user-input{\n  margin-top: 10px;\n}\n.the-tl{\n  background-color: white;\n  padding:18px;\n  border: solid 1px #e6ecf0;\n}\n.stat-icon{\n  max-width: 20px;\n  float:left;\n}\nimg.avatar{\n  max-width: 48px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-input\">\n  <div class=\"tweet-input\">\n    <div class=\"row\">\n      <div class=\"col-md-1\">\n        <img src=\"./assets/usericon.png\" id=\"user\">\n      </div>\n      <div class=\"col-md-11\">\n        <textarea class=\"tweet-form\"ref-textarea rows=\"3\" placeholder=\"What's happening?\" [(ngModel)]=\"content\" #newTweet></textarea>\n        <br><button class=\"round-corner post-tweet\" name=\"tweet-submit\" id=\"tweet-submit\" (click)='makeTweet(newTweet.value); content=\"\"'>Tweet</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"the-tl\" *ngFor=\"let tweet of tweets | async | reverse\">\n    <div class=\"new-tweet\">\n      <div class=\"row\">\n        <div class=\"col-md-1 icon-spot\">\n          <img src=\"{{tweet.icon}}\" alt=\"\" class=\"avatar\">\n        </div>\n        <div class=\"col-md-11 twit-content\">\n          <span class=\"display-name\">{{tweet.name}}</span>   <span class=\"handle\">@{{tweet.username}}</span>\n          <br>{{tweet.tweet}}\n          <br><img src=\"{{tweet.img}}\" alt=\"\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <img src=\"./assets/reply.png\" alt=\"\" class=\"stat-icon\">{{tweet.replies}}\n            </div>\n            <div class=\"col-md-2\">\n              <img src=\"./assets/rt.png\" alt=\"\" class=\"stat-icon\"> {{tweet.retweets}}\n            </div>\n            <div class=\"col-md-2\">\n              <img src=\"./assets/like.png\" alt=\"\" class=\"stat-icon\" (click)=\"addLike(clickedTweet)\">{{tweet.likes}}\n            </div>\n            <div class=\"col-md-6\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tweet_model__ = __webpack_require__("../../../../../src/app/models/tweet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline_service__ = __webpack_require__("../../../../../src/app/timeline.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(timelineService) {
        this.timelineService = timelineService;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.tweets = this.timelineService.getTweets();
    };
    TimelineComponent.prototype.makeTweet = function (tweet) {
        var newTweet = new __WEBPACK_IMPORTED_MODULE_1__models_tweet_model__["a" /* Tweet */]('Ami', 'ik4rus', './assets/usericon.png', tweet, '', 0, 0, 0);
        this.timelineService.postTweet(newTweet);
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/timeline.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__timeline_service__["a" /* TimelineService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__timeline_service__["a" /* TimelineService */]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trending/trending.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topic{\n  color: #1B95E0;\n  font-weight: bold;\n}\n.topic:hover{\n  text-decoration: underline;\n}\n.subtitle{\n  font-size: 10px;\n  color:#66757f;\n}\n.trends{\n  margin-top: 15px;\n  padding:18px;\n  background-color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trending/trending.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"trends\">\n  <span class=\"display-name\">Trending topics</span>\n  <br><span class=\"topic\">Generic celebrity</span>\n  <br><sup>something scandalous</sup>\n  <br><span class=\"topic\">#LoremIpsum</span>\n  <br><sup>10.3k tweets</sup>\n  <br><span class=\"topic\">Coffee</span>\n  <br><sup>2.9 million tweets</sup>\n  <br><span class=\"topic\">Bojack Horseman</span>\n  <br><sup>Bojack Horseman's latest role</sup>\n  <br><span class=\"topic\">#HipsterBedtimeStories</span>\n  <br><sup>You probably haven't heard them before</sup>\n  <br><span class=\"topic\">Tuscon, Arizona</span>\n  <br><sup>Amber Alert: Two children abducted</sup>\n  <br><span class=\"topic\">Some athlete</span>\n  <br><sup>This athlete did something cool in their respective sport</sup>\n  <br><span class=\"topic\">NASA</span>\n  <br><sup>New space program announced</sup>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/trending/trending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrendingComponent = /** @class */ (function () {
    function TrendingComponent() {
    }
    TrendingComponent.prototype.ngOnInit = function () {
    };
    TrendingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trending',
            template: __webpack_require__("../../../../../src/app/trending/trending.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trending/trending.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrendingComponent);
    return TrendingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".identity{\n  background-color: white;\n  padding: 10px;\n  margin-top: 10px;\n}\nimg{\n  max-width: 72px;\n}\n.stats{\n  color: #1B95E0;\n  font-weight: bold;\n}\n.small-headers{\n  color: #657786;\n  font-size: 12px;\n}\ninput{\n  background-color: #f5f8fa;\n  border: 1px solid #e6ecf0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 32px;\n  font-size: 12px;\n}\n.icons{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"identity\">\n  <div class=\"me-irl\">\n    <img src=\"./assets/usericon.png\">\n    <br><span class=\"display-name\">{{newUser.name}}</span>\n    <br><span class=\"handle\">@{{newUser.handle}}</span>\n  </div>\n  <div class=\"stats\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <span class=\"small-headers\">Tweets</span>\n        <br><span class=\"stats\">{{newUser.tweets}}</span>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"small-headers\">Following</span>\n        <br><span class=\"stats\">{{newUser.following}}</span>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"small-headers\">Followers</span>\n        <br><span class=\"stats\">{{newUser.followers}}</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"edit-user-info\" *ngIf=\"thisForm\">\n    <form>\n      <input name=\"edit-display\" [(ngModel)]=\"newUser.name\">\n      <input name=\"edit-handle\" [(ngModel)]=\"newUser.handle\">\n      <br>\n      <button name=\"finish-edit\" class=\"round-corner\" (click)=\"finishEditing()\">Finish editing</button>\n    </form>\n  </div>\n  <button name=\"edit\" class=\"round-corner\" (click)=\"editProfile()\">Edit profile</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tweet_model__ = __webpack_require__("../../../../../src/app/models/tweet.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        this.newUser = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]('Ami', 'ik4rus');
        this.newTweet = new __WEBPACK_IMPORTED_MODULE_2__models_tweet_model__["a" /* Tweet */]('Ami', 'ik4rus', './assets/usericon.png', '', '', 0, 0, 0);
        this.thisForm = false;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent.prototype.editProfile = function () {
        this.thisForm = true;
    };
    UserInfoComponent.prototype.finishEditing = function () {
        this.thisForm = false;
    };
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-info',
            template: __webpack_require__("../../../../../src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map