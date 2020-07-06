import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { LoginPageModelPageRoutingModule } from './login-page-model-routing.module';

import { LoginPageModelPage } from './login-page-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginPageModelPageRoutingModule
  ],
  declarations: [LoginPageModelPage]
})
export class LoginPageModelPageModule {}
