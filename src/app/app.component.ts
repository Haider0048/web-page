import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  integerRegex = /^\d+$/
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  title = 'web-page';
  Ischecked : boolean = false;

 

  registerForm = new FormGroup({
    fname : new FormControl("", [Validators.required, Validators.maxLength(16)]),
    lname : new FormControl("", [Validators.required, Validators.maxLength(16)]),
    age : new FormControl("", [Validators.required, Validators.maxLength(60), Validators.minLength(18), Validators.pattern(this.integerRegex)]),
    mobile : new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
    email : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
    password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    confirm_password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
   
  })

  getControl(name: any) : AbstractControl | null {
    return(this.registerForm.get(name))
  }

  registerFn() {
    console.log(this.registerForm.value)
  }

 

}
