import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') signUpForm: NgForm;
test="";
defaultQuestion='pet';
answer="";
genders=['Male', 'Female', 'LGBTQ+'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  //onSubmit(form: NgForm)   {
    //console.log(form.value)
  //}
  //onSubmit() {
    //console.log("clicked");
  //}

  onSubmit(){
    console.log(this.signUpForm);
  }
}
