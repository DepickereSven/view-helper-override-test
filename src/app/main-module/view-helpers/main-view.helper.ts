import { Injectable, VERSION } from '@angular/core';
import { IMainViewHelperService } from "./I-Main-View-Helper.service";

@Injectable()
export class MainViewHelper implements IMainViewHelperService{
  
  getName(): string {
    return 'Angular ' + VERSION.major;
  }
}
