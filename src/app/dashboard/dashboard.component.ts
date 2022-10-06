import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dashh=''

 acnum=""
 amnt=""
 psw=""

 acnum1=""
 amnt1=""
 psw1=""



  constructor(private ds:DataService) { 
    this.dashh=this.ds.currentuser
  }

  ngOnInit(): void {
  }
  deposit(){
 var acnum2=this.acnum
 var amnt2=this.amnt
 var psw2=this.psw

 const result=this.ds.deposit(acnum2,psw2,amnt2)
 if(result){
  alert(`${amnt2}is credited,new balance is ${result}`)
 }
  }
  withdraw(){
    var acnum3=this.acnum1
    var amnt3=this.amnt1
    var psw3=this.psw1
    const result=this.ds.withdraw(acnum3,psw3,amnt3)
    if(result){
      alert(`${amnt3}is Debited,new balance is ${result}`)
     }
  }

}
