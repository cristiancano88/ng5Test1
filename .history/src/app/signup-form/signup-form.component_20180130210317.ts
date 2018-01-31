// https://code.tutsplus.com/tutorials/introduction-to-forms-in-angular-4-reactive-forms--cms-29787

// Import the API for building a form
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// Import the User model
import { User } from './User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  public genderList: string[];
  signupForm: FormGroup;
  private user: User;
  constructor() {
  }

  ngOnInit() {
    this.genderList =  ['Male', 'Female', 'Others'];

    this.signupForm = new FormGroup ({
      email: new FormControl('',
        [Validators.required, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
      password: new FormGroup({
        pwd: new FormControl('', Validators.required),
        confirmPwd: new FormControl('', Validators.required)
      }),
      gender: new FormControl('', Validators.required),
      // requiredTrue so that the terms field isvalid only if checked
      terms: new FormControl('', Validators.requiredTrue)
    });

    // this.signupForm = new FormGroup ({
    //     email: new FormControl('', Validators.required),
    //     pwd: new FormControl(),
    //     confirmPwd: new FormControl(),
    //     gender: new FormControl(),
    //     terms: new FormControl()
    // });
  }

}
