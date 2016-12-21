import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from './message';

@Component({
  selector: 'message-board',
  template: `
  <form class="form-horizontal">

  <fieldset>
  <div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">Panel primary</h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
  </fieldset>
</form>
  `,
})
export class MessageBoardComponent implements OnInit {
  selectedMessage: Message;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMessage.id]);
  }

}
