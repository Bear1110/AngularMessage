import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {JsonpModule} from '@angular/http';
import './rxjs-extensions';

import { XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

//router
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar.component';
import { MessageBoardComponent }  from './message-board.component';
import { HomeComponent }  from './home.component';
import { MessageService } from './message.service';
import { MouseWheelDirective } from './mousewheel.directive';
import { MouseWheelComponent }   from './mouse-wheel.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageBoardComponent,
    HomeComponent,
    MouseWheelDirective,
    MouseWheelComponent
  ],
  providers: [
    MessageService,
    {
      provide: XSRFStrategy,
      useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
