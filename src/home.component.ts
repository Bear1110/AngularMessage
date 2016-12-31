import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container" mouseWheel (mouseWheelUp)="mouseWheelUpFunc(event)" (mouseWheelDown)="mouseWheelDownFunc(event)">
    <div class="jumbotron">
    <h1>歡迎來到 Bear !</h1>
      <p>Angular 2 的 建置</p>
    </div>
    <h1>首頁</h1>
    <h4 style="color:green">{{mouseWheelDir}}</h4>
  </div>

  `,
})
export class HomeComponent {
  mouseWheelDir: string = '';

  mouseWheelUpFunc() {
    this.mouseWheelDir = 'upward direction';
  }

  mouseWheelDownFunc() {
    this.mouseWheelDir = 'downward direction';
  }
}
