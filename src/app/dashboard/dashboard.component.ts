import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dashh=''

 acnum:any
sdate:any
 withdrawForm=this.fb.group({
  acnum1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

})
depositForm=this.fb.group({
  acnum:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amnt:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

})


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) 
  { 
    if(localStorage.getItem('currentUser')){
    this.dashh=JSON.parse(localStorage.getItem('currentUser') || " ")
    }
    this.sdate=Date
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert('please login first')
      this.router.navigateByUrl('')
    }
  }


  deposit(){
 var acnum2=this.depositForm.value.acnum
 var amnt2=this.depositForm.value.amnt
 var psw2=this.depositForm.value.psw
 if(this.depositForm.valid){

this.ds.deposit(acnum2,psw2,amnt2).subscribe((result:any)=>{
  alert(result.message)
},result=>{alert(result.error.message)})
  
}
  // let UserDeatils=this.ds.UserDeatils
  else{
    alert("invalid form")
  }}
  
  logOut(): void{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  
  }
  delete(){
    this.acnum=JSON.parse(localStorage.getItem('currentAcno') || '' )
  }
  onCancel(){
    this.acnum=""
  }
  ondelete(event:any){
    // alert(event)
    this.ds.deleteAcc(event).subscribe((result:any)=>{
      alert(result.message)
      this.logOut()
      // this.router.navigateByUrl('')
    },result=>{alert(result.error.message)})
  }

  withdraw(): void{
    var acnum3=this.withdrawForm.value.acnum1
    var amnt3=this.withdrawForm.value.amnt1
    var psw3=this.withdrawForm.value.psw1
    if(this.withdrawForm.valid){
this.ds.withdraw(acnum3,psw3,amnt3).subscribe((result:any)=>{
  alert(result.message)
},result=>{alert(result.error.message)})
  
   
  }
  else{
    alert("invalid form")
  }}

}

