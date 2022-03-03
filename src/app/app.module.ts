import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { FaqComponent } from './component/faq/faq.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import {HttpClientModule} from '@angular/common/http';	
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingComponent } from './component/training/training.component';
// import { UserSignupComponent } from './component/user-signup/user-signup.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { HomeComponent } from './component/home/home.component';
import { UserSignupComponent } from './component/user-signup/user-signup.component';
import { NgoComponent } from './component/ngo/ngo.component';
import { NgoDetailsComponent } from './component/ngo-details/ngo-details.component';
import { TrainingsRegisterComponent } from './component/trainings-register/trainings-register.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PaymentComponent } from './component/payment/payment.component';   

@NgModule({
  declarations: [
    // AppComponent,
    // MainPageComponent,
    // UserLoginComponent,
    // UserSignupComponent,
    // HomeComponent,
    // LoginComponent,
    // AboutComponent,
    // FaqComponent,
    // TrainingComponent
    AppComponent,
    MainPageComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    TrainingComponent,
    UserLoginComponent,
    UserSignupComponent,
    NgoComponent,
    NgoDetailsComponent,
    TrainingsRegisterComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule, //try
    NgMultiSelectDropDownModule.forRoot() //try
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
