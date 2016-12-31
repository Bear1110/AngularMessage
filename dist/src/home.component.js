"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent() {
        this.mouseWheelDir = '';
    }
    HomeComponent.prototype.mouseWheelUpFunc = function () {
        this.mouseWheelDir = 'upward direction';
    };
    HomeComponent.prototype.mouseWheelDownFunc = function () {
        this.mouseWheelDir = 'downward direction';
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\" mouseWheel (mouseWheelUp)=\"mouseWheelUpFunc(event)\" (mouseWheelDown)=\"mouseWheelDownFunc(event)\">\n    <div class=\"jumbotron\">\n    <h1>\u6B61\u8FCE\u4F86\u5230 Bear !</h1>\n      <p>Angular 2 \u7684 \u5EFA\u7F6E</p>\n    </div>\n    <h1>\u9996\u9801</h1>\n    <h4 style=\"color:green\">{{mouseWheelDir}}</h4>\n  </div>\n\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map