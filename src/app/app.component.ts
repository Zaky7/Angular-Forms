import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModelGroup, FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  @ViewChild('username') userModel: NgModel;
  defaultQuestion = 'pet';
  secretAnswer = '';
  genders = ['Male', 'Female', 'Others'];

  suggestUserName() {
    const suggestedName = 'Superuser' + Math.round(Math.random() * 100);
    // this.userModel.control.setValue(suggestedName);
    this.form.form.patchValue({
      userData: {
       username: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.form);
  }
}
