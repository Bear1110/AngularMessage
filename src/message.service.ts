import { Injectable } from '@angular/core';
import { Message } from './message';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageService {
  // private messagesUrl = 'http://date.jsontest.com';  // URL to web api
  private messagesUrl = 'http://localhost/angularBack/public/MessageBoard/Api';  // URL to web api

  constructor(private http: Http) { }

  getMessages(): Promise<Message[]> {
    return this.http.get(this.messagesUrl)
      .toPromise()
      .then(response => response.json() as Message[])
      .catch(this.handleError);
  }
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
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
};
