import { Injectable, VERSION } from '@angular/core';

@Injectable()
export class DefaultViewHelper {
  
  getName(): string {
    return 'Angular ' + VERSION.major;
  }
}
