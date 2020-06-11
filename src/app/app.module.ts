import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  imports:      [ 
    BrowserModule,
     FormsModule,
      MainModule.forRoot()
       ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
