import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  @Output() firstnumber = new EventEmitter<number>();
  @Output() secondnumber = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  firstInput=0;
  secondInput=0;
  result=0;

  getNum1(value: string){
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt)) {
      this.firstInput = parsedInt;
      this.firstnumber.emit(this.firstInput);
      console.log(this.firstnumber)  
    }
  };

  getNum2(value: string){
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt)) {
      this.secondInput = parsedInt;
      this.secondnumber.emit(this.secondInput);
      console.log(this.secondnumber) 
    }
  }
} 
