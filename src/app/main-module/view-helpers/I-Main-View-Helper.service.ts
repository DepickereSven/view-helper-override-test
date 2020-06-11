import { InjectionToken, Type } from "@angular/core"

export interface IMainViewHelperService {
  getName(): string;
}

export const MAIN_VIEW_HELPER_SERVICE = new InjectionToken<IMainViewHelperService>('VIEW_HELPER_SERVICE');

export interface MainViewHelpersConfig {
  service: Type<IMainViewHelperService>;
}
