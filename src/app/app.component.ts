import { Component } from '@angular/core';
// import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  template:`<div id="main-ele" [ngClass] = "{'grn': value>0, 'red':value<0,'blk':value==0}">{{value}}</div><app-child [plus]="plus" [minus]="minus" [reset]="reset"
  (val)="something($event)"></app-child>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  plus = '+';
  minus = '-';
  reset = 'Reset';
  value : number = 0;
something(event: number){
  this.value = event;
}
}