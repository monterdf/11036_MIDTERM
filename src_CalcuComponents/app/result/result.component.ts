import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() firstnum = 0;
  @Input() secondnum = 0;
  @Input() operat = '';
  @Output() equal = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  firstnumber = this.firstnum;
  secondnumber = this.secondnum;
  resultEqual = 0;

  resultEvent(){
    const fnum = this.firstnum
    const snum = this.secondnum
    if(this.operat == '+'){
      const fequal = fnum + snum
      this.resultEqual = fequal
      this.equal.emit(fequal);
    }
    else if(this.operat == '-'){
      const fequal = fnum - snum
      this.resultEqual = fequal
      this.equal.emit(fequal);

    }
    else if(this.operat == '*'){
      const fequal = fnum * snum
      this.resultEqual = fequal
      this.equal.emit(fequal);
    }
    else if(this.operat == '/'){
      const fequal = fnum / snum
      this.resultEqual = fequal
      this.equal.emit(fequal);
    }
    return(this.resultEqual);
  }

}
