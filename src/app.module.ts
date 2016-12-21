import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//router
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar.component';
import { MessageBoardComponent }  from './message-board.component';
import { HomeComponent }  from './home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageBoardComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
