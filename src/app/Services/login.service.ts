import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';



@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpService: HttpClient) {}
  baseUrl: string = 'http://localhost:3000/users';

  registerUser(user: User) {
    return this.httpService.post(this.baseUrl, user);
  }

  getPassword(email: string) {
    return this.httpService.get<User>(this.baseUrl + '?email=' + email);
  }
}
