import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  uplc="Enter Your Account Number"
acusrno=""
psw=""
  UserDeatils:any={1000:{acono:1000,username:"ajith",password:"123",balance:"100000"}
  ,1001:{acono:1001,username:"ajay",password:"123",balance:"500000"}
  ,1002:{acono:1002,username:"amal",password:"123",balance:"4500"}
  ,1003:{acono:1003 ,username:"suresh",password:"123",balance:"39000"}}
  constructor() { }

  ngOnInit(): void {
  }
  acusrnoChange(event:any){
    this.acusrno=event.target.value
    console.log(this.acusrno);
    
  }
  pswChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
  }
  login(){
    var acnum=this.acusrno
    var psw=this.psw
    if(acnum in this.UserDeatils){
if(psw==this.UserDeatils[acnum]["password"]){
  alert("login successfull")
  

}
else{
  alert("incorrect password")
}
    }
    else{
      alert("wrong bitchez")
    }
  }
}
