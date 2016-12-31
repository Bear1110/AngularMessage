import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
    <h1>歡迎來到 Bear !</h1>
      <p>Angular 2 的 建置</p>
    </div>
    <h1>首頁</h1>
  </div>
  `,
})
export class HomeComponent {

  ngAfterViewInit() {
    $(".container").append("<h1>jQuery test</h1>");
  }
}
