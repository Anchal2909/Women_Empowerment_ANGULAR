import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TrainingRegisterService } from 'src/app/Services/training-register.service';
import { TrainingService } from 'src/app/Services/training.service';
import { training } from './training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ngoId:any;
  ngoIdDetail:any;
  courseId: any;
  userId: any;
  trainingObj: training = 
  {
    regMstId:0, ngoId: 0, courseId: 0, userId:0
  };
  ngoIdBySession:any;
  
  // constructor(
  //   private activatedroute: ActivatedRoute
  // ) {
  //   // this.ngoId = this.activatedroute.queryParams.subscribe(data => {
  //   //   console.log("Ngo id in Training component:"+this.ngoId);
  //   this.activatedroute.params.subscribe(data => {
  //     console.log("Ngo id in Training component:"+data);
  //   })
  // }
  constructor(private activatedroute:ActivatedRoute,
    private router:Router,
   ) { 

    this.userId = sessionStorage.getItem("userId");
    console.log("session userId :" + sessionStorage.getItem("userId"));
   }
  ngOnInit(): void {
    this.getNgoID();
  }

  public getNgoID(){
     this.ngoIdDetail=sessionStorage.getItem("assignedNgoId");
    console.log("Ngo is is "+this.ngoId);
  }
  // ngOnInit(): void {
  //   this.activatedroute.paramMap.subscribe(data => { 
  //     console.log("Ngo id in training is :"+ data.get('ngoId'));
  //     this.ngoId = data.get('ngoId'); 
  // });
  
  //  }

  //ngo 1
assignCourse1() {
  sessionStorage.setItem("courseID","10011");//course id - 10011 : Special Women-Centric Projects
  this.courseId = sessionStorage.getItem("courseID");
  console.log("session course Id :" + sessionStorage.getItem("courseID"));
  this.ngoId = sessionStorage.getItem("assignedNgoId");
  console.log("session ngo Id :" + sessionStorage.getItem("assignedNgoId"));
  alert("Do you want to proceed for payment ?");
  this.router.navigateByUrl('/payment');
}

assignCourse2() {
  sessionStorage.setItem("courseID","10016");//course id - 10016 : Fashion Designing
  this.courseId = sessionStorage.getItem("courseID");
  console.log("session course Id :" + sessionStorage.getItem("courseID"));
  this.ngoId = sessionStorage.getItem("assignedNgoId");
  console.log("session ngo Id :" + sessionStorage.getItem("assignedNgoId"));
  alert("Do you want to proceed for payment ?");
 this.router.navigateByUrl('/payment');
}

assignCourse3() {
  sessionStorage.setItem("courseID","10017");//course id - 10017 : Food Processing
  this.courseId = sessionStorage.getItem("courseID");
  console.log("session course Id :" + sessionStorage.getItem("courseID"));
  this.ngoId = sessionStorage.getItem("assignedNgoId");
  console.log("session ngo Id :" + sessionStorage.getItem("assignedNgoId"));
  alert("Do you want to proceed for payment ?");
 this.router.navigateByUrl('/payment');
}

//ngo 2
assignCourse4() {
  sessionStorage.setItem("courseID","10012");//course id - 10012 :Entrepreneurial Initiatives
  this.courseId = sessionStorage.getItem("courseID");
  console.log("session course Id :" + sessionStorage.getItem("courseID"));
  this.ngoId = sessionStorage.getItem("assignedNgoId");
  console.log("session ngo Id :" + sessionStorage.getItem("assignedNgoId"));
  alert("Do you want to proceed for payment ?");
 this.router.navigateByUrl('/payment');
}

assignCourse5() {
  sessionStorage.setItem("courseID","10016");//course id - 10016 :Fashion Designing
  this.courseId = sessionStorage.getItem("courseID");
  console.log("session course Id :" + sessionStorage.getItem("courseID"));
  this.ngoId = sessionStorage.getItem("assignedNgoId");
  console.log("session ngo Id :" + sessionStorage.getItem("assignedNgoId"));
  alert("Do you want to proceed for payment ?");
 this.router.navigateByUrl('/payment');
}
//ngo 3
assignCourse6() {
  sessionStorage.setItem("courseID","10013");//course id - 10013 :Tailoring
  this.courseId = sessionStorage.getItem("courseID");
  console.log("session course Id :" + sessionStorage.getItem("courseID"));
  this.ngoId = sessionStorage.getItem("assignedNgoId");
  console.log("session ngo Id :" + sessionStorage.getItem("assignedNgoId"));
  alert("Do you want to proceed for payment ?");
 this.router.navigateByUrl('/payment');
}

assignCourse7() {
  sessionStorage.setItem("courseID","10015");//course id - 10015 :Agriculture
  this.courseId = sessionStorage.getItem("courseID");
  console.log("session course Id :" + sessionStorage.getItem("courseID"));
  this.ngoId = sessionStorage.getItem("assignedNgoId");
  console.log("session ngo Id :" + sessionStorage.getItem("assignedNgoId"));
  alert("Do you want to proceed for payment ?");
 this.router.navigateByUrl('/payment');

 //ngo 4
}

}





