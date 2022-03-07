import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { FaqComponent } from './component/faq/faq.component';
import { HomeComponent } from './component/home/home.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { NgoDetailsComponent } from './component/ngo-details/ngo-details.component';
import { NgoComponent } from './component/ngo/ngo.component';
import { TrainingComponent } from './component/training/training.component';
import { TrainingsRegisterComponent } from './component/trainings-register/trainings-register.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserSignupComponent } from './component/user-signup/user-signup.component';
// import { UserSignupComponent } from './component/user-signup/user-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './component/payment/payment.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'mainPage', component: MainPageComponent }, //try
  { path: 'home', component: HomeComponent },
  // {path:'user',component:UpdateUserComponent},
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignupComponent },
  // {path:'ngo', component:NgoRegisterComponent},
  // {path :'ngologin', component: NgoLoginComponent},
  // {path:'ngoprograms', component:NgoVolunteerPgInfoComponent},
  // {path:'vList',component:NgoVolunteerListComponent},
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ngo', component: NgoComponent }, //nikhil
  //{path:'ngoList', component:NgoComponent},                     //try
  // {path:'ngoDetails/:ngoId', component:NgoDetailsComponent},    //try
  { path: 'ngoDetails', component: NgoDetailsComponent }, //try
  // {path:'trainings/:ngoId',component:TrainingComponent},               //try
  { path: 'trainings', component: TrainingComponent },
  // {path:'register/:ngoId',component:TrainingsRegisterComponent}        //try
  { path: 'register', component: TrainingsRegisterComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
