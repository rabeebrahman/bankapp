import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser:any
  currentacno:any

  UserDeatils:any={1000:{acono:1000,username:"ajith",password:123,balance:"100000",transaction:[]}
  ,1001:{acono:1001,username:"ajay",password:"123",balance:"500000",transaction:[]}
  ,1002:{acono:1002,username:"amal",password:"123",balance:"4500",transaction:[]}
  ,1003:{acono:1003 ,username:"suresh",password:"123",balance:"39000",transaction:[]}}

  constructor() {this.getDetails() }
   saveDetails(){
    if(this.UserDeatils)
  {
    localStorage.setItem('database',JSON.stringify(this.UserDeatils))
  }
  if(this.currentuser)
  {
    localStorage.setItem('currentUser',JSON.stringify(this.currentuser))
  }
  if(this.currentacno)
  {
    localStorage.setItem('currentAcno',JSON.stringify(this.currentacno))
  }
}
getDetails(){
  if(localStorage.getItem('database')){
    this.UserDeatils=JSON.parse(localStorage.getItem('database') || '' )
  }
  if(localStorage.getItem('currentUser')){
    this.currentuser=JSON.parse(localStorage.getItem('currentUser') || '' )
  }
  if(localStorage.getItem('currentAcno')){
    this.currentacno=JSON.parse(localStorage.getItem('currentAcno') || '' )
  }
}
register(acnum:any,username:any,password:any){

//   var uname=this.uname
// var pswd=this.pswd   for ref
// var acno=this.acno
let UserDeatils=this.UserDeatils
if(acnum in UserDeatils){
  return false // cause we use dis to return to regis.ts
}


  else{
    UserDeatils[acnum]={acnum,username,password,balance:0,transaction:[]}
  this.saveDetails()
    return true
  }
}
login(acnum:any,psw:any){
  let UserDeatils=this.UserDeatils
 

  if(acnum in this.UserDeatils){
if(psw==this.UserDeatils[acnum]["password"]){
  this.currentuser=UserDeatils[acnum]['username']
  this.currentacno=acnum
  this.saveDetails()
return true
//redirection

}
else{
alert("incorrect password")
return false
}
  }
  else{
    alert("user doesnt exisit")
    return false
  }
}
deposit(acnum:any,psw:any,amnt:any){
  let UserDeatils=this.UserDeatils
  var amount=parseInt(amnt) //to cov string to int casuse we taking input frm 
  if(acnum in UserDeatils){
    if(psw==UserDeatils[acnum]["password"])
    {
      UserDeatils[acnum]['balance']+=amount
      UserDeatils[acnum]['transaction'].push({type:'CREDIT',amount})
      this.saveDetails()
      return UserDeatils[acnum]['balance']
    }
    else{
      alert('incorrect password')
    }
  }
  else{
    alert('incorrect Account number')
    return false
}}



withdraw(acnum: any, pswrd1: any, amnt1: any) {
  let userDetails = this.UserDeatils
  var amount = parseInt(amnt1)
  if (acnum in userDetails) {
    if (pswrd1 == userDetails[acnum]['password']) {
      if (userDetails[acnum]['balance'] >= amount) {
        userDetails[acnum]['balance'] -= amount
        userDetails[acnum]['transaction'].push({ type: 'DEBIT', amount })
        this.saveDetails()
        return userDetails[acnum]['balance']
      }
      else {
        alert('insufficient balance')

      }
    }
    else {
      alert('incorrect password')
    }
  }
  else {
    alert('user not exist')
    return false
  }
}
getTransaction(acno:any){
  return this.UserDeatils[acno]['transaction']
}
}