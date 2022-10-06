import { Component, OnInit } from '@angular/core';
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
  UserDeatils:any={1000:{acono:1000,username:"ajith",password:"123",balance:"100000"}
  ,1001:{acono:1001,username:"ajay",password:"123",balance:"500000"}
  ,1002:{acono:1002,username:"amal",password:"123",balance:"4500"}
  ,1003:{acono:1003 ,username:"suresh",password:"123",balance:"39000"}}
  constructor(private router:Router,private ds:DataService) { }

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
  var acnum=this.uplc
  var psw=this.psw
  
  const result=this.ds.login(acnum,psw)
  if(result){
    alert('login sucessfull')
  this.router.navigateByUrl('dashboard')
  }
}}