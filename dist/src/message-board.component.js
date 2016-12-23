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
var router_1 = require('@angular/router');
var message_service_1 = require('./message.service');
var MessageBoardComponent = (function () {
    function MessageBoardComponent(messageService, router) {
        this.messageService = messageService;
        this.router = router;
        this.test = "123";
    }
    MessageBoardComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageBoardComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getMessages().then(function (messages) { return _this.messages = messages; });
        console.log(this.messages);
    };
    MessageBoardComponent = __decorate([
        core_1.Component({
            selector: 'message-board',
            template: "\n  <form class=\"form-horizontal\">\n\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">\u7559\u8A00\u677F</h3>\n    </div>\n    <div class=\"panel-body\">\n    </div>\n  </div>\n  {{messages}}.....-.-\n  <div *ngFor=\"let message of messages\" class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Panel primary</h3>\n    </div>\n    <div  class=\"panel-body\">\n      {{message.content}}}\n    </div>\n  </div>\n</form>\n  ",
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router])
    ], MessageBoardComponent);
    return MessageBoardComponent;
}());
exports.MessageBoardComponent = MessageBoardComponent;
//# sourceMappingURL=message-board.component.js.map