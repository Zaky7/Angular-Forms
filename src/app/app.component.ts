import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  @ViewChild('username') userInput: ElementRef;


  suggestUserName() {
    const suggestedName = 'Superuser' + Math.round(Math.random() * 100);
    this.userInput.nativeElement.value = suggestedName;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.form);
  }
}
