import { Component, OnInit, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IViewHelperService, VIEW_HELPER_SERVICE } from './I-view-helper.service';

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

  constructor(@Inject(VIEW_HELPER_SERVICE) vh: IViewHelperService){
    this.vh = vh;
    console.log(vh);
  }

  ngOnInit(): void {
    this.name$.next(this.vh.getName());
  }
}
