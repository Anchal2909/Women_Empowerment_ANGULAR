import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgoService } from 'src/app/Services/ngo.service';
import { TrainingRegisterService } from 'src/app/Services/training-register.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ngo } from '../ngo/ngo';

@Component({
  selector: 'app-trainings-register',
  templateUrl: './trainings-register.component.html',
  styleUrls: ['./trainings-register.component.css']
})
export class TrainingsRegisterComponent implements OnInit {
  ngoId:any;
  registerForm: FormGroup;
  vname:string="";
  vemail:string=""; 
  vcontact:string=""; 
  vngo:string=""; 

  //try 3
//   selectedNgo: String = "--Choose Ngo--";
//   Ngos: Array<any> = [
// 	{ ngoName: 'Smile' , courseName: ['Stitching', 'Fashion Designing', 'Special Women-Centric Projects']} ,
// 	{ ngoName: 'Trust', courseName: ['Food Processing','Tailoring','Agriculture','Entrepreneurial Initiatives']} ,
// 	{ ngoName: 'Mejwan', courseName: ['Stitching','Special Women-Centric Projects','Agriculture']} ,
// 	{ ngoName: 'Help Age India', courseName: ['Fashion Designing','Food Processing','Tailoring','Entrepreneurial Initiatives']} ,
//     { ngoName: 'Goonj', courseName: ['Fashion Designing','Food Processing']} ,
// ];
// courseName: Array<any> = [];
// changeNgo(ngo: any) { //Angular 11
// 		this.courseName = this.Ngos.find((ng: any) => ng.ngoName == ngo.target.value).courseName; //Angular 11
// }
 

  constructor(private activatedroute:ActivatedRoute,
    private router:Router,
    private registerService:TrainingRegisterService,//try
	private fb:FormBuilder  //try
   ) { 
		
	   this.registerForm = new FormGroup({
		var_name: new FormControl(''),
		var_email: new FormControl(''),
		var_contact: new FormControl(''),
		var_ngo: new FormControl('')
	  });
   }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(data => { 
    //   console.log("Ngo id in Training-register is :"+ data.get('ngoId'));
      this.ngoId = data.get('ngoId'); 

	  this.registerForm.patchValue(
	  {
		"var_ngo":"Prerana Foundations"
	  });
      //this.allTechnologies = this.registerService.getTechnologies();//try

	//   this.registerForm = this.fb.group({
	// 	// ngo: [null]
	//   });
  });

//   onSubmit(value: string): void {    
//     console.log('you submitted value: ', value);
//     this.vname=this.registerForm.value.var_name;
//     this.vemail=this.registerForm.value.var_email;
// 	this.vcontact=this.registerForm.value.var_contact;
// 	this.vngo=this.registerForm.value.var_ngo
//   }

//   submit() {
//     console.log("Form Submitted")
//     console.log(this.registerForm.value)
//   }

// onSubmit()
// {    
// 	//console.log("Form Submitted");
// 	console.log(this.registerForm.value);
//     // console.log('you submitted value: ', value);
//     // this.vname=this.myForm.value.var_name;
//     // this.vpsw=this.myForm.value.var_psw;
//   }

  //Register form-try

  //try 3


  


  // try 1
  /* 
  isValidFormSubmitted = false;
	// allProfiles: Profile[] = [];
	allTechnologies: register[] = [];
	// user = {} as User;

  onFormSubmit(form: NgForm) {
		this.isValidFormSubmitted = false;
		if (form.valid) {
			this.isValidFormSubmitted = true;
		} else {
			return;
		}
		// let userName = form.controls['name'].value;
		// let userProfile: Profile = form.controls['profile'].value;
		let userTechnologies: register[] = form.controls['selectedTechs'].value;

		// let newUser = {} as User;
		// newUser.userName = userName;
		// newUser.profile = userProfile;
		// newUser.technologies = userTechnologies;
		// this.registerService.createUser(newUser);
		// this.resetForm(form);
	}
	resetForm(form: NgForm) {
		form.resetForm();
		// this.user.profile = null;
		// this.user.userName = '';
	}
	// setDefaultValues() {
	// 	this.user.userName = "Narendra Modi";
	// 	this.user.profile = this.allProfiles[2];
	// 	this.user.technologies = [
	// 		this.allTechnologies[1],
	// 		this.allTechnologies[3]
	// 	];
	// }
	// onProfileChange() {
	// 	console.log('Profile Changed: ' + this.user.profile?.prName);
	// }
	// compareTech(t1: Technology, t2: Technology): boolean {
	// 	console.log(t1.techId + '-' + t2.techId);
	// 	return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
	// }
 */




	//try 2
	/*
	dropdownList = [];
	selectedItems = [];
	dropdownSettings = {};
	ngOnInit() {
	  this.dropdownList = [
		{ item_id: 1, item_text: 'Mumbai' },
		{ item_id: 2, item_text: 'Bangaluru' },
		{ item_id: 3, item_text: 'Pune' },
		{ item_id: 4, item_text: 'Navsari' },
		{ item_id: 5, item_text: 'New Delhi' }
	  ];
	  this.selectedItems = [
		{ item_id: 3, item_text: 'Pune' },
		{ item_id: 4, item_text: 'Navsari' }
	  ];
	  this.dropdownSettings:IDropdownSettings = {
		singleSelection: false,
		idField: 'item_id',
		textField: 'item_text',
		selectAllText: 'Select All',
		unSelectAllText: 'UnSelect All',
		itemsShowLimit: 3,
		allowSearchFilter: true
	  };
	}
	onItemSelect(item: any) {
	  console.log(item);
	}
	onSelectAll(items: any) {
	  console.log(items);
	}
	*/
  
}
}
function value(value: any, string: any) {
	throw new Error('Function not implemented.');
}

