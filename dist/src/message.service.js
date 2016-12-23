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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        // private messagesUrl = 'http://date.jsontest.com';  // URL to web api
        this.messagesUrl = 'http://localhost/angularBack/public/MessageBoard/Api'; // URL to web api
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get(this.messagesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //
    // getMessage(id: number): Promise<Message> {
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.get(url)
    //     .toPromise()
    //     .then(response => response.json().data as Message)
    //     .catch(this.handleError);
    // }
    //
    // create(name: string): Promise<Message> {
    //   return this.http
    //     .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
    //     .toPromise()
    //     .then(res => res.json().data)
    //     .catch(this.handleError);
    // }
    //
    // update(hero: Message): Promise<Message> {
    //   const url = `${this.heroesUrl}/${hero.id}`;
    //   return this.http
    //     .put(url, JSON.stringify(hero), { headers: this.headers })
    //     .toPromise()
    //     .then(() => hero)
    //     .catch(this.handleError);
    // }
    //
    // delete(id: number): Promise<void> {
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.delete(url, { headers: this.headers })
    //     .toPromise()
    //     .then(() => null)
    //     .catch(this.handleError);
    // }
    //
    //
    MessageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
;
//# sourceMappingURL=message.service.js.map