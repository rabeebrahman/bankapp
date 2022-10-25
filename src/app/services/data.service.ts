import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={headers:new HttpHeaders()}
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

  constructor(private http:HttpClient) {this.getDetails() }
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
  const data={acno:acnum,username,password}
return this.http.post('http://localhost:3006/register',data)
}
login(acnum:any,psw:any){
  const data={acnum,psw}
  return this.http.post('http://localhost:3006/login',data)
}
getToken(){
  // fetch the token from the local storage
  const token=JSON.parse(localStorage.getItem('token') || '' )
  //1.append token inside headers
  //1.2 create headers
  let headers=new HttpHeaders()
  //1.3 append token to header
  if(token){
    options.headers=headers.append('token1',token)
  }
return options

}
deposit(acnum:any,psw:any,amnt:any){
  const data={acnum,pswrd:psw,amnt}
  return this.http.post('http://localhost:3006/deposit',data,this.getToken())
  }



withdraw(acnum: any, pswrd1: any, amnt1: any) {
  const data={acnum,pswrd1,amnt1}
  return this.http.post('http://localhost:3006/withdraw',data,this.getToken())
}
getTransaction(acno:any){
  const data={acno}
  return this.http.post('http://localhost:3006/transaction',data,this.getToken())
}

deleteAcc(acno:any){
  return this.http.delete('http://localhost:3006/deleteacc/'+acno)
}
}