import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: any = FormGroup;

  submitted: boolean = false;
  invalidLogin: boolean = false;

  user: any;
  email: string = '';
  pswd: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  onSubmit() {
    this.submitted = true;
    this.loginService
      .getPassword(this.loginForm.controls.email.value)
      .subscribe((data) => {
        this.user = data;

        this.pswd = this.user[0].password;
        this.email = this.user[0].email;
        console.log(this.user[0].password);
        console.log(this.user[0].email);

        console.log(
          'user entered email' + this.loginForm.controls.email.value.toString()
        );
        //console.log(this.user.email);
      });

    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.controls.password.value.toString() == this.pswd) {
      this.invalidLogin = false;
      console.log(this.user[0].email);
      console.log(this.user[0].password);
      localStorage.setItem('username', this.loginForm.controls.email.value);
      // localStorage.setItem('userId', JSON.stringify(this.empObj.empNo));
      sessionStorage.setItem('userId',"13"); // try 
      alert("Logged-in Successfully");
      this.router.navigateByUrl('/home');
      console.log('logged in');
    } else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
