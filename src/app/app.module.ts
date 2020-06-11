import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { OverridableViewHelper } from './overridable-view.helper';

@NgModule({
  imports:      [ 
    BrowserModule,
     FormsModule,
      MainModule.forRoot({ viewHelpers: {defaultViewHelper: OverridableViewHelper} })
       ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
