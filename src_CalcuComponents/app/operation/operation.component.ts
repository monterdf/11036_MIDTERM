import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() operation = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addValue:string='+';
  subValue:string='-';
  mulValue:string='*';
  divValue:string='/';

  
  addEvent(){
    this.operation.emit(this.addValue);
  }

  subEvent(){
    this.operation.emit(this.subValue);
  }

  mulEvent(){
    this.operation.emit(this.mulValue);
  }

  divEvent(){
    this.operation.emit(this.divValue);
  }

}
