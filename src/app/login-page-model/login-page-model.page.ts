import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page-model',
  templateUrl: './login-page-model.page.html',
  styleUrls: ['./login-page-model.page.scss'],
})
export class LoginPageModelPage implements OnInit {

  constructor(private route: Router) { }
  loginForm:FormGroup;
  form:any;

  ngOnInit() {

    this.form=   JSON.parse(localStorage.getItem('form'));
    
    this.loginForm= new FormGroup({
      'fname': new FormControl(),
      'pass': new FormControl()
    
    });


  }

  submit(){

    if (this.loginForm.value.fname == this.form.fName && this.loginForm.value.pass == this.form.password) {
      this.route.navigate(["\main"]);  
    }
    else{
      alert("Wrong Credentials")
    }

  }

}
