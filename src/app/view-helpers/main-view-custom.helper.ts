import { Injectable } from '@angular/core';
import { IMainViewHelperService } from "../main/view-helpers/I-Main-View-Helper.service";

@Injectable()
export class MainViewCustomHelper implements IMainViewHelperService{

  getName(): string {
    return 'Mister Bond, James Bond!';
  }
}
