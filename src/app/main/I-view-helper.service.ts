import { InjectionToken, Type } from "@angular/core"
import { DefaultViewHelper } from './default-view.helper';

export interface IViewHelperService {
  defaultViewHelper: DefaultViewHelper;
}

export const VIEW_HELPER_SERVICE = new InjectionToken<IViewHelperService>('VIEW_HELPER_SERVICE');

export interface ViewHelpersConfig {
  viewHelpers: Type<IViewHelperService>;
}