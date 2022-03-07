import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute, Router } from '@angular/router';
import { NgoService } from 'src/app/Services/ngo.service';
import { ngodetails } from './ngo-details';

@Component({
  selector: 'app-ngo-details',
  templateUrl: './ngo-details.component.html',
  styleUrls: ['./ngo-details.component.css']
})
export class NgoDetailsComponent implements OnInit {
  ngoId:any;
  ngodetail : ngodetails | undefined;
  //sub:any;
  // ngo:any;
  // p:any;
 // id=100;
  constructor(private activatedroute:ActivatedRoute,
              private router:Router,
              private ngoService:NgoService
             ) { }

  ngOnInit(): void {
  //     this.activatedroute.paramMap.subscribe(data => { 
  //     console.log("Ngo id passed is :"+ data.get('ngoId'));
  //     this.ngoId = data.get('ngoId'); 
    this.getNgoDetails();
  // });
  }
  public getNgoDetails(){
     this.ngoId=sessionStorage.getItem("assignedNgoId");
    console.log("Ngo is is "+this.ngoId);
  }
  viewCourses(): void {

    // sessionStorage.setItem('assignedNgoId', JSON.stringify(this.ngo.ngoId));
    // sessionStorage.setItem("assignedNgoId", ngo.ngoId.toString());
    // console.log("Ngo id passed from session storage is:"+ngo.ngoId);
    //this.router.navigate(['trainings']);
    this.router.navigateByUrl('/trainings');
    };
 
  

}
