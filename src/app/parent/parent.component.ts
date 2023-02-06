import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { AppComponent } from '../app.component';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  counter = 0;
  @Input() plus : string ='';
  @Input() minus : string='';
  @Input() reset : string='';
  @Output() val = new EventEmitter<number>();

  fun(sym : string){
    if(sym == '+'){
      this.counter++;
    }
    else if(sym == '-'){
      this.counter--;
    }
    else if(sym == '0'){
      this.counter = 0;
    }
    this.val.emit(this.counter);

  }

  
}
