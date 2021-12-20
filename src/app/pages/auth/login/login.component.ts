import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordDisplayed: boolean=false;
  loginForm:any;
  isFormSubmitted: boolean=false;
  loadingSpinnerEnabled: boolean=false;
  constructor(private fb: FormBuilder,private router: Router, private toaster:ToastrService) { }

  ngOnInit() {
    this.initLoginForm()
  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
    })
  }

  get username() {
    return <FormArray>this.loginForm.get('username')
  }
 

  login(){
    this.isFormSubmitted = true
    if(this.loginForm.valid){
      this.isFormSubmitted = false
      let userName=this.loginForm.value.username;
      if(userName ==="UserA" || userName ==="UserB" || userName ==="UserC" || userName ==="Admin"){
        this.router.navigate(['/dashboard'])
        this.toaster.success("Welcome " + userName)
        localStorage.setItem("role", userName)
      }else{
        this.toaster.error("user not exist")
      }
    }
  }
}
