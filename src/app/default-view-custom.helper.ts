import { Injectable } from '@angular/core';

@Injectable()
export class DefaultViewCustomHelper {
  

  getName(): string {
    return 'Mister Bond, James Bond!';
  }
}
