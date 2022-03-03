import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';



@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  addForm: any;
  user: any;
  size: number | undefined; //modified to fix error, to check???
  submitted: boolean = false;
  invalidRegisteration: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loginService
      .getPassword(this.addForm.controls.email.value)
      .subscribe((data) => {
        this.size = Object.keys(data).length;
        console.log(this.size);
      });
    if (this.addForm.invalid) {
      return;
    }
    if (this.size == 0) {
      this.loginService
        .registerUser(this.addForm.value)
        .subscribe((data) => {});
      this.router.navigateByUrl('/home');
    } else {
      this.invalidRegisteration = true;
    }
  }
}
