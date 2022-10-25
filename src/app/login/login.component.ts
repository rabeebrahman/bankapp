import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  uplc=""
acursno="Enter Your Account Number"
psw=""

loginForm=this.fb.group({
  
  uplc:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

})


  UserDeatils:any={1000:{acono:1000,username:"ajith",password:"123",balance:"100000"}
  ,1001:{acono:1001,username:"ajay",password:"123",balance:"500000"}
  ,1002:{acono:1002,username:"amal",password:"123",balance:"4500"}
  ,1003:{acono:1003 ,username:"suresh",password:"123",balance:"39000"}}
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

//   login(a:any,b:any){
 
    
//     var acnum=a.value
//     var psw=b.value
//     if(acnum in this.UserDeatils){
// if(psw==this.UserDeatils[acnum]["password"]){
//   alert("login successfull")
  

// }
// else{
//   alert("incorrect password")
// }
//     }
//     else{
//       alert("Account Number doesnt Exist")
//     }
//   }
// }

login(){
  var acnum=this.loginForm.value.uplc
  var psw=this.loginForm.value.psw
  

  if(this.loginForm.valid){
  this.ds.login(acnum,psw).subscribe((result:any)=>{
   localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
   localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
   localStorage.setItem('token',JSON.stringify(result.token))
    alert(result.message)
    this.router.navigateByUrl('/dashboard')}
    ,result=>{alert(result.error.message)})
    

  }
  else{
    alert('invalid form')
  }
  
}}