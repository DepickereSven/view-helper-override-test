import { Injectable, VERSION } from '@angular/core';

@Injectable()
export class MainViewHelper {
  
  getName(): string {
    return 'Angular ' + VERSION.major;
  }
}
