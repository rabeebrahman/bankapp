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


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    this.dashh=this.ds.currentuser
    this.sdate=Date
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert('please login first')
      this.router.navigateByUrl('')
    }
  }


  deposit(){
 var acnum2=this.depositForm.value.acnum
 var amnt2=this.depositForm.value.amnt
 var psw2=this.depositForm.value.psw

 const result=this.ds.deposit(acnum2,psw2,amnt2)
 if(result){
  alert(`${amnt2}is credited,new balance is ${result}`)
 }
  }
  logOut(): void{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.router.navigateByUrl('')
  
  }
  delete(){
    this.acnum=JSON.parse(localStorage.getItem('currentAcno') || '' )
  }
  onCancel(){
    this.acnum=""
  }

  withdraw(): void{
    var acnum3=this.withdrawForm.value.acnum1
    var amnt3=this.withdrawForm.value.amnt1
    var psw3=this.withdrawForm.value.psw1
    const result=this.ds.withdraw(acnum3,psw3,amnt3)
    if(result){
      alert(`${amnt3}is Debited,new balance is ${result}`)
     }
  }

}
