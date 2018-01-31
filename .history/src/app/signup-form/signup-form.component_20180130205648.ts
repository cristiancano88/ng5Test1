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
      email: new FormControl('', Validators.required),
      password: new FormGroup({
          pwd: new FormControl(),
          confirmPwd: new FormControl()
      }),
      gender: new FormControl(),
      terms: new FormControl()
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
