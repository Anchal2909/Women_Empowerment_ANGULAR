import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { payment } from '../component/payment/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl="http://localhost:8080/payment/payfee";
  constructor(private http:HttpClient) { }

  createPayment(p:payment)
  {     					
          return this.http.post(this.baseUrl,p);							
  }
}
