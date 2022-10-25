import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
cacnum:any
transaction:any
  constructor(private ds:DataService) {
    this.cacnum=JSON.parse(localStorage.getItem('currentAcno') || " ")
  this.ds.getTransaction(this.cacnum).subscribe((result:any)=>{
    this.transaction=result.transaction
  },result=>{alert(result.error.message)})
  }

  ngOnInit(): void {
  }

}
