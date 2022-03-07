import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashboard } from 'src/app/Model/dashboard';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dUsersList: dashboard[] = [];
  constructor(private router: Router, private httpServ: DashboardService) {
    if (
      sessionStorage.getItem('AdminLogin') == 'false' ||
      sessionStorage.getItem('AdminLogin') == null
    ) {
      this.router.navigateByUrl('/adminlogin');
    }
  }

  ngOnInit(): void {
    this.getDashboardUsersList();
  }

  public getDashboardUsersList() {
    return this.httpServ
      .getDashboardUsersList()
      .subscribe((response: dashboard[]) => {
        console.log('getting response  ');
        this.dUsersList = response;
        console.log(this.dUsersList);
      });
  }
}
