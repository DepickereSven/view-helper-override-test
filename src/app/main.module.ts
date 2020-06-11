import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { HelloComponent } from './hello.component';
import { IViewHelperService, VIEW_HELPER_SERVICE, ViewHelpersConfig } from './I-view-helper.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [MainComponent, HelloComponent],
  exports: [MainComponent]
})
export class MainModule {
  static forRoot(config?: ViewHelpersConfig): ModuleWithProviders {
    return {
      ngModule: MainModule,
      providers: [
        {
          provide: VIEW_HELPER_SERVICE,
          useClass: config && config.viewHelpers
        }
      ]
    }
  }
}