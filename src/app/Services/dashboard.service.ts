import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dashboard } from '../Model/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // dUsersList:dashboard[]=[];
  constructor(private httpServ: HttpClient) { }

  baseUrl:string="http://localhost:8080/training/dashboard";

  //getDashboardUsersList
  public getDashboardUsersList()
  {
    console.log("getDashboardUsersList() method : " +this.httpServ.get<dashboard[]>(this.baseUrl));
    return this.httpServ.get<dashboard[]>(this.baseUrl);
  }
}
