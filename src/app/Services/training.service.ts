import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { training } from '../component/training/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  baseUrl:string = "http://localhost:8080/training";

  constructor(private http:HttpClient) { }

  // baseUrl:string = "http://localhost:3000/training/register";
  registerTraining(trainingObj:training)
  {     
      console.log("befor hitting save rest api:" + trainingObj);
      return this.http.post(this.baseUrl+'/register/',trainingObj);							
  }

// http://localhost:8080/training/courses/id
  public getCourseDtlsById(id:number)
  {
    console.log(this.http.get<any>(this.baseUrl+id));
    return this.http.get<any>(this.baseUrl+"/courses/"+id);
  }


}
