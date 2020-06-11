import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './view/app.component';
import { MainModule } from './main-module/main.module';
import { MainViewCustomHelper } from "./view-helpers/main-view-custom.helper";

@NgModule({
  imports:      [ 
    BrowserModule,
     FormsModule,
      MainModule.forRoot({service: MainViewCustomHelper})
       ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
