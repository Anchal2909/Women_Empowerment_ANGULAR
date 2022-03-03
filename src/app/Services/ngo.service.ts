import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ngo } from '../component/ngo/ngo';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
 
  ngoList:ngo[]=[];
  ngoId:any;
  
  baseUrl:string="http://localhost:3000/ngoList";
  constructor(private httpServ: HttpClient) { }

   //getVolunteersList
   public getNgoList()
   {
     console.log("getNgoList() method : " +this.httpServ.get<ngo[]>(this.baseUrl));
     return this.httpServ.get<ngo[]>(this.baseUrl);
   }
}
