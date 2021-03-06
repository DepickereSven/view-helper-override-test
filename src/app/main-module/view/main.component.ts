import { Component, OnInit, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMainViewHelperService, MAIN_VIEW_HELPER_SERVICE } from '../view-helpers/I-Main-View-Helper.service';

@Component({
  selector: 'main',
  template: `
  <hello [name]="name$ | async"></hello>
  <p>
    Start editing to see some magic happen :)
  </p>
  `
})
export class MainComponent implements OnInit {

  name$ = new BehaviorSubject<string>('');
  
  vh: any;

  constructor(@Inject(MAIN_VIEW_HELPER_SERVICE) vh: IMainViewHelperService){
    this.vh = vh;
  }

  ngOnInit(): void {
    console.log(this.vh);
    this.name$.next(this.vh.getName());
  }
}
