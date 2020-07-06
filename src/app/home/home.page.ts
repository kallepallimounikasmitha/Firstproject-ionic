import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  registerForm: FormGroup;

  constructor(private route: Router) {

    
  }

  ngOnInit(){
    this.registerForm= new FormGroup({
      'fName': new FormControl(null,Validators.required),
      'lName': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required)
    
    });
  }


  onSubmit(){
    console.log(this.registerForm.value);
    localStorage.setItem('form', JSON.stringify(this.registerForm.value));
    this.route.navigate(['/login-page-model']);
  }


}
