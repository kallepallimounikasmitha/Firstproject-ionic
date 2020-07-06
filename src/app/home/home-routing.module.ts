import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms'
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { LoginPageModelPage } from '../login-page-model/login-page-model.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage

    
  },
  {
    path:'login',
    component: LoginPageModelPage
  },
  {
    path:'loginsss',
    component: LoginComponent
  },
  {
    path: 'registration',
    component : RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
