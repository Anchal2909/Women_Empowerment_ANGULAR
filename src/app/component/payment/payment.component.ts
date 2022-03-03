import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { courses } from 'src/app/Model/courses';
import { PaymentService } from 'src/app/Services/payment.service';
import { TrainingService } from 'src/app/Services/training.service';
import { training } from '../training/training';
import { payment } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [DatePipe]
})
export class PaymentComponent implements OnInit {
  productForm!:FormGroup;//try
  paymentForm!: FormGroup; //to check

  submitted: boolean = false;

  paymentTrnId:any;
  amount: any;
  paymentDate: any;
  userId:any;
  ngoId: any;
  courseId: any;
  currentDate = new Date();

  coursename;

  paymentObj: payment = 
  {
    paymentTrnId:0, amount:0, paymentDate : new Date() ,userId: 0, ngoId:0,courseId: 0,coursename:""
  };

  trainingObj: training = 
  {
    regMstId:0, ngoId: 0, courseId: 0, userId:0
  };

  coursesObj: courses = 
  {
    courseId:0, coursename: "", duration:"", amount:0,ngoId:0
  };


 // coursesObj:any;
 // courseID: any;

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private paymentService: PaymentService,private datePipe: DatePipe,
    private trainingService: TrainingService) {
    
    this.userId = sessionStorage.getItem("userId");
    console.log("session userId for payment :" + sessionStorage.getItem("userId"));
    this.ngoId = sessionStorage.getItem("assignedNgoId");
    console.log("session ngoId for payment :" + sessionStorage.getItem("assignedNgoId"));
    this.courseId = sessionStorage.getItem("courseID");
    console.log("session courseId for payment :" + sessionStorage.getItem("courseID"));
    this.coursename = sessionStorage.getItem("courseName");
   // sessionStorage.setItem("courseName","Boutique");
  }

  ngOnInit(): void {
    //this.paymentDate = this.datePipe.transform(this.currentDate,'yyyy-MM-dd');
    this.paymentForm = this.formBuilder.group({
      coursename: ['', Validators.required],
      amount: ['', Validators.required],
     // paymentDate: ['', Validators.required],
     presentDate:[new Date().toISOString().substring(0,10)],
      duration:['',Validators.required]
    });

    //autopopulate form details
  
    //this.productID = this.actRoute.snapshot.params['id'];

    console.log("course id for load service :" + this.courseId);
    this.loadCourseDetails(this.courseId);
    //this.courseID = this.courseId

  }


  loadCourseDetails(courseId: number){
    console.log("course id passed for load service :" + courseId);
    this.trainingService.getCourseDtlsById(courseId).subscribe(data => {
    this.coursesObj = data;
    console.log("course obj data returned course name:" + this.coursesObj.coursename);
    console.log("course obj data returned amount:" + this.coursesObj.amount);
    console.log("course obj data returned duration:" + this.coursesObj.duration);
    this.paymentForm.controls['coursename'].setValue(this.coursesObj['coursename']);
    this.paymentForm.controls['amount'].setValue(this.coursesObj['amount']);
    this.paymentForm.controls['duration'].setValue(this.coursesObj['duration']);
    });
    }

  onSubmit()
  {
    //this.paymentObj.coursename = this.paymentForm.controls['coursename'].value;
    this.paymentObj.amount = this.paymentForm.controls['amount'].value;
    //this.paymentObj.amount = this.paymentForm.controls['duration'].value;
    this.paymentObj.paymentDate = this.paymentForm.controls['presentDate'].value;
    this.paymentObj.userId = this.userId;
    this.paymentObj.ngoId = this.ngoId;
    this.paymentObj.courseId = this.courseId;
    console.log("OnSubmit" +this.paymentObj);
    console.log("OnSubmit Payment Date" +this.paymentObj.paymentDate);

    this.submitted = true;
    if (this.paymentForm.invalid) {
      return;
    }
      this.paymentService.createPayment(this.paymentObj)
      .subscribe(data => {
        console.log("payment object added " + this.paymentForm.value);
        console.log("payment object added " + this.paymentObj);
      });

      this.trainingObj.ngoId = this.paymentObj.ngoId;
      this.trainingObj.courseId = this.paymentObj.courseId;
      this.trainingObj.userId = this.paymentObj.userId;
      
      this.trainingService.registerTraining(this.trainingObj)
      .subscribe(data => {
      
       console.log("training pk added " + this.trainingObj.regMstId);
       console.log("training ngo id added " + this.trainingObj.ngoId);
       console.log("training course id added " + this.trainingObj.courseId);
       console.log("training user id added " + this.trainingObj.userId);
       alert("Course Registered Successfully");
       this.router.navigateByUrl('/trainings');
      
     });
  }
  

}
