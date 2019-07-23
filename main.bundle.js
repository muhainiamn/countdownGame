webpackJsonp([1,4],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AiService = (function () {
    function AiService() {
    }
    AiService.prototype.makeMove = function (countdown) {
        var num = ((countdown - 1) % 4);
        if (num != 0) {
            return num;
        }
        else {
            return this.getRandomInt(1, 3);
        }
    };
    AiService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AiService);
    return AiService;
}());
//# sourceMappingURL=D:/angular_projects/countdownPage/src/ai.service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountdownService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountdownService = (function () {
    function CountdownService() {
        this.countdown = 20;
    }
    CountdownService.prototype.setCountdown = function (amount) {
        this.countdown = amount;
        return this.countdown;
    };
    CountdownService.prototype.decrementCountdown = function (amount) {
        this.countdown -= amount;
        if (this.countdown <= 1) {
            this.countdown = 1;
        }
        return this.countdown;
    };
    CountdownService.prototype.isCountdownOne = function () {
        if (this.countdown == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    CountdownService.prototype.getCountdown = function () {
        return this.countdown;
    };
    CountdownService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CountdownService);
    return CountdownService;
}());
//# sourceMappingURL=D:/angular_projects/countdownPage/src/countdown.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 350;


/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(460);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/angular_projects/countdownPage/src/main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__countdown_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ai_service__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(countdownService, aiService) {
        this.countdownService = countdownService;
        this.aiService = aiService;
        this.title = 'Countdown Game';
        this.countdown = 1;
        this.timeout = 600;
        this.isGameEnded = false;
        this.countdown = countdownService.getCountdown();
        this.playerTurn = 1;
        this.disableButtons = false;
    }
    AppComponent.prototype.decrementCountdown = function (amount) {
        this.countdown = this.countdownService.decrementCountdown(amount);
    };
    AppComponent.prototype.playerPlayed = function (amount) {
        var _this = this;
        this.disableButtons = true;
        var i = 0;
        for (var i = 0; i < amount; i++) {
            setTimeout(function () {
                _this.decrementCountdown(1);
            }, this.timeout * (i));
        }
        setTimeout(function () {
            _this.changePlayerTurn();
        }, this.timeout * (i - 1));
    };
    AppComponent.prototype.changePlayerTurn = function () {
        var _this = this;
        if (this.countdown == 1) {
            this.isGameEnded = true;
        }
        else if (this.playerTurn == 1) {
            this.playerTurn = 2;
            setTimeout(function () {
                _this.playerPlayed(_this.aiService.makeMove(_this.countdown));
            }, this.timeout * 2);
        }
        else {
            this.disableButtons = false;
            this.playerTurn = 1;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(622),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__countdown_service__["a" /* CountdownService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__countdown_service__["a" /* CountdownService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_ai_service__["a" /* AiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_ai_service__["a" /* AiService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/angular_projects/countdownPage/src/app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__display_display_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__control_control_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__countdown_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ai_service__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__display_display_component__["a" /* DisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_6__control_control_component__["a" /* ControlComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__countdown_service__["a" /* CountdownService */], __WEBPACK_IMPORTED_MODULE_8__ai_service__["a" /* AiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/angular_projects/countdownPage/src/app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlComponent = (function () {
    function ControlComponent() {
        this.decrementCountdown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    ControlComponent.prototype.ngOnInit = function () {
        this.playerTurn = 1;
    };
    ControlComponent.prototype.countdownDecremented = function (amount) {
        this.decrementCountdown.emit(amount);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], ControlComponent.prototype, "decrementCountdown", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], ControlComponent.prototype, "countdown", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], ControlComponent.prototype, "playerTurn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ControlComponent.prototype, "disableButtons", void 0);
    ControlComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-control',
            template: __webpack_require__(623),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], ControlComponent);
    return ControlComponent;
}());
//# sourceMappingURL=D:/angular_projects/countdownPage/src/control.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayComponent = (function () {
    function DisplayComponent() {
    }
    DisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], DisplayComponent.prototype, "countdown", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], DisplayComponent.prototype, "playerTurn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], DisplayComponent.prototype, "isGameEnded", void 0);
    DisplayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-display',
            template: __webpack_require__(624),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayComponent);
    return DisplayComponent;
}());
//# sourceMappingURL=D:/angular_projects/countdownPage/src/display.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/angular_projects/countdownPage/src/environment.js.map

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "h1 {text-align:  center}"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "h2 {text-align: center}\r\ndiv {width: 350px ; -ms-flex-line-pack: center ; align-content: center ; margin: auto }\r\nbutton {width: 100px; height: 40px }"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "h1 {text-align: center}\r\nh2 {text-align: center}\r\ndiv {width: 100% ;}\r\n.playerTurn {background: greenyellow}\r\n.computerTurn {background: red}\r\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<app-display [countdown] = \"countdown\" [playerTurn] = \"playerTurn\" [isGameEnded] = \"isGameEnded\"></app-display>\n<app-control [countdown] = \"countdown\" [playerTurn] = \"playerTurn\" [disableButtons] = \"disableButtons\" (decrementCountdown) = \"playerPlayed($event)\"></app-control>\n\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "\n<div>\n<h2> Choose a number to substract </h2>\n<button id=\"button1\" (click) = \"countdownDecremented(1)\" [disabled] = \"countdown < 2 || disableButtons\" >1</button>\n<button id=\"button2\" (click) = \"countdownDecremented(2)\" [disabled] = \"countdown < 3 || disableButtons\" >2</button>\n<button id=\"button3\" (click) = \"countdownDecremented(3)\" [disabled] = \"countdown < 4 || disableButtons\">3</button>\n</div>\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "\n<h1>{{countdown}}</h1>\n<div id = \"turnDiv\" [class.playerTurn] = \"playerTurn == 1\" [class.computerTurn] = \"playerTurn == 2\">\n    <h2 *ngIf = \"playerTurn == 1 && !isGameEnded\" > Player's Turn </h2>\n    <h2 *ngIf = \"playerTurn == 2 && !isGameEnded\"> Computer's Turn </h2>\n    <h2 *ngIf = \"playerTurn == 1 && isGameEnded\"> Game Ended : Player Won </h2>\n    <h2 *ngIf = \"playerTurn == 2 && isGameEnded\"> Game Ended : Computer Won </h2>\n</div>\n\n"

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ })

},[639]);
//# sourceMappingURL=main.bundle.map