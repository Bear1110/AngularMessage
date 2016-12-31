import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'mouse-wheel',
  template: `
  <div class="container" mouseWheel (mouseWheelUp)="mouseWheelUpFunc(event)" (mouseWheelDown)="mouseWheelDownFunc(event)">
  <div class="p01"><h1>Page 1</h1></div>
  <div class="p02"><h1>Page 2</h1></div>
  <div class="p03"><h1>Page 3</h1></div>
  <div class="p04"><h1>Page 4</h1></div>
  <div class="p05"><h1>Page 5</h1></div>
  </div>
  `,
  styles:[ `
    .p01{
        background-image:url(http://a1.att.hudong.com/75/94/19300276185521132386943282658.jpg);
        background-size:cover;
        background-repeat: no-repeat;
        height:100vh;
    }
    .p02{
        background-image:url(https://i.ytimg.com/vi/b1-Fj-C4OmE/maxresdefault.jpg);
        background-size:cover;
        background-repeat: no-repeat;
        height:100vh;
    }
    .p03{
        background-image:url(http://img.chinatimes.com/newsphoto/2016-06-26/656/20160626002618.jpg);
        background-size:cover;
        background-repeat: no-repeat;
        height:100vh;
    }
    .p04{
        background-image:url(http://www.cosmicgarden.com.tw/images/bg1.jpg);
        background-size:cover;
        background-repeat: no-repeat;
        height:100vh;
    }
    .p05{
        background-image:url(http://3.bp.blogspot.com/-tWWvpJSWPiM/UhX6bJleaUI/AAAAAAAACh0/QzsiKpnD0og/s1600/4.jpeg);
        background-size:cover;
        background-repeat: no-repeat;
        height:100vh;
    }
  `]
})
export class MouseWheelComponent {
  mouseWheelDir: string = '';
  n  = 1;
  moving = 0;

  mouseWheelUpFunc() {
    let thisObject = this;
    $("html, body").stop();
    if (this.moving == 0) {
        this.moving = 1;
        if (this.n > 1) {
            this.n--;
        }
    }
    this.mouseWheelDir = 'upward direction';
    $("html, body").animate({"scrollTop": $(".p0" + this.n).offset().top}, function(){thisObject.moving = 0;})
  }

  mouseWheelDownFunc() {
    let thisObject = this;
    let num_li = 5;
    $("html, body").stop();
    if (this.moving == 0) {
        this.moving = 1;
        if (this.n < num_li) {
            this.n++;
            console.log(this.n+"++");
        }
    }
    this.mouseWheelDir = 'downward direction';
    $("html, body").animate({"scrollTop": $(".p0" + this.n).offset().top}, function(){thisObject.moving = 0;})
  }
  ngAfterViewInit() {
  }
}
