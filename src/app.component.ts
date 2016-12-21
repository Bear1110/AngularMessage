import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav-bar></nav-bar>
  <div class="container">
    <div class="jumbotron">
    <h1>歡迎來到 Bear !</h1>
      <p>Angular 2 的 建置</p>
    </div>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
}
