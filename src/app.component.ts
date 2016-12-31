import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'my-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  ngAfterViewInit() {
    $("body").append("<h1>fucking test</h1>");
  }
}
