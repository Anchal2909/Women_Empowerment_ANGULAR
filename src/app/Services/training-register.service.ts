import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { training } from '../component/training/training';
import { register } from '../component/trainings-register/register';

@Injectable({
  providedIn: 'root'
})
export class TrainingRegisterService {

//  // baseUrl:string = "http://localhost:3000/training";
//   baseUrl:string = "http://localhost:8080/training/register";

//   constructor(private http:HttpClient) { }

//   registerTraining(trainingObj:training)
//   {     
//         console.log("befor hitting save rest api:" + trainingObj);
//         return this.http.post(this.baseUrl,trainingObj);							
//   }

  // getTechnologies(): register[] {
  //   let technologies = [
  //  new register(11, 'Computer training'),
  //  new register(12, 'Stitching'),
  //  new register(13, 'Beautician'),
  //  new register(14, 'Modelling')		 
  //   ]	 
  //   return technologies;	  
// }

//  createUser(user: User) {
//          //Log user data in console
//          console.log("User Name: " + user.userName);
//    console.log("Profile Id: " + user.profile?.prId);
//    console.log("Profile Name: " + user.profile?.prName);
//    for (let i=0; i < user.technologies.length; i++) {
//           console.log("Technology Id: " + user.technologies[i].techId);
//       console.log("Technology Name: " + user.technologies[i].techName);
//          }
//  }   
}
