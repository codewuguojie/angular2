
/*模块*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({

  /*声明模块中有什么东西 (只能是组件，指令�,
    HeaderComponent��管道)*/
  declarations: [
    AppComponent
  ],

  /*声明需要的其他东西(模块等)*/
  imports: [
    BrowserModule
  ],

  /*模块中提供了什么服务*/
  providers: [],

  /*声明了模块的主组件*/
  bootstrap: [AppComponent]
})
export class AppModule { }
