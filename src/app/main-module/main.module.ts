import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './view/main.component';
import { HelloComponent } from './view/hello.component';
import { MAIN_VIEW_HELPER_SERVICE, MainViewHelpersConfig } from './view-helpers/I-Main-View-Helper.service';
import { MainViewHelper } from "./view-helpers/main-view.helper";

@NgModule({
  imports: [BrowserModule],
  declarations: [MainComponent, HelloComponent],
  exports: [MainComponent]
})
export class MainModule {
  static forRoot(config?: MainViewHelpersConfig): ModuleWithProviders {
    return {
      ngModule: MainModule,
      providers: [
        {
          provide: MAIN_VIEW_HELPER_SERVICE,
          useClass: config && config.service
        }
      ]
    }
  }
}
