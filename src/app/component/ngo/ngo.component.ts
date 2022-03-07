//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgoService } from 'src/app/Services/ngo.service';
import { ngo } from './ngo';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  ngoList:ngo[]=[];
  constructor(private router :Router ,private httpServ: NgoService) { }

  ngOnInit(): void {
    this.getNgoList();
  }

   public getNgoList()
   {
    return this.httpServ
    .getNgoList()
    .subscribe((response: ngo[]) =>{
                            console.log("getting response  ")
                            this.ngoList=response;
                            console.log(this.ngoList);
                              }
              ) 
   }

   assignNGO(ngoId:number ): void {
    // sessionStorage.setItem('assignedNgoId', JSON.stringify(this.ngo.ngoId));
    sessionStorage.setItem("assignedNgoId", ngoId.toString());
    console.log("Ngo id passed from session storage is:"+ngoId);
    this.router.navigateByUrl('/ngoDetails');
    };

}
