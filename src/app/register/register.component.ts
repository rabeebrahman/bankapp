import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],acno:[''],pswd:['']

  })


  constructor(private ds:DataService ,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

 register(){
var uname=this.registerForm.value.uname
var pswd=this.registerForm.value.pswd
var acno=this.registerForm.value.acno
const result=this.ds.register(acno,uname,pswd)
if(result){
  alert("Registered ")
  this.router.navigateByUrl('')
}
else{
  alert("user already exist")
}


// let UserDeatils=this.ds.UserDeatils

 } 
}
