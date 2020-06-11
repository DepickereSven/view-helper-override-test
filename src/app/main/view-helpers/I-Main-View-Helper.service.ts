import { InjectionToken, Type } from "@angular/core"
import { MainViewHelper } from './main-view.helper';

export interface IMainViewHelperService {
  defaultViewHelper: MainViewHelper;
}

export const MAIN_VIEW_HELPER_SERVICE = new InjectionToken<IMainViewHelperService>('VIEW_HELPER_SERVICE');

export interface MainViewHelpersConfig {
  service: Type<IMainViewHelperService>;
}
