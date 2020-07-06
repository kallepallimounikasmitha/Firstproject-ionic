import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { LoginPageModelPage } from './login-page-model.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPageModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class LoginPageModelPageRoutingModule {}
