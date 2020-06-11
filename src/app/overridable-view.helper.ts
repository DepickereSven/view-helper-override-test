import { Injectable, VERSION } from '@angular/core';

@Injectable()
export class OverridableViewHelper {
  

  getName(): string {
    return 'Angular ' + VERSION.major;
  }
}
