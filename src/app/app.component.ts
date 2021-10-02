import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Calculator';
  num1=0;
  num2=0;
  result=0;

  getNum1(value: string){
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt)) {
      this.num1 = parsedInt;  
    }
  };

  getNum2(value: string){
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt)) {
      this.num2 = parsedInt;  
    }
  };

  add(){
    this.result = this.num1 + this.num2;
    console.log(this.result);
  };
  sub(){
    this.result = this.num1 - this.num2;
    console.log(this.result);
  };
  mul(){
    this.result = this.num1 * this.num2;
    console.log(this.result);
  };
  div(){
    this.result = this.num1 / this.num2;
    console.log(this.result);
  };


}
