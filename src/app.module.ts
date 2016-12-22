import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {JsonpModule} from '@angular/http';
import './rxjs-extensions';
//router
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar.component';
import { MessageBoardComponent }  from './message-board.component';
import { HomeComponent }  from './home.component';
import { MessageService } from './message.service';

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
    HomeComponent
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
