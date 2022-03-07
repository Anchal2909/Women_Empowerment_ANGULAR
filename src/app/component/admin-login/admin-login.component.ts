import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  loginForm: any = FormGroup;

  submitted: boolean = false;
  invalidLogin: boolean = false;
  //checkLogin: boolean = false;

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
      .checkAdmin(
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value
      )
      .subscribe((data) => {
        //this.checkLogin = data;
        this.checkBoolean(data);
      });
  }

  checkBoolean(chkBoolean: boolean) {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(chkBoolean);
    if (chkBoolean) {
      this.invalidLogin = false;

      sessionStorage.setItem('AdminLogin', 'true');

      this.router.navigateByUrl('/dashboard');
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
