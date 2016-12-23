import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  selector: 'message-board',
  template: `
  <form class="form-horizontal">

  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">留言板</h3>
    </div>
    <div class="panel-body">
    </div>
  </div>
  {{messages}}.....-.-
  <div *ngFor="let message of messages" class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Panel primary</h3>
    </div>
    <div  class="panel-body">
      {{message.content}}}
    </div>
  </div>
</form>
  `,
})
export class MessageBoardComponent implements OnInit {
  messages: Message[];
  selectedMessage: Message;
  test: string = "123";

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.messageService.getMessages().then(messages => this.messages = messages);
    console.log(this.messages);
  }
  //
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }
  //
  // delete(hero: Hero): void {
  //   this.heroService
  //     .delete(hero.id)
  //     .then(() => {
  //       this.heroes = this.heroes.filter(h => h !== hero);
  //       if (this.selectedHero === hero) { this.selectedHero = null; }
  //     });
  // }
  //
  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }

}
