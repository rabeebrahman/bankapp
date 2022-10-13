import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input()item:string | undefined
  constructor() { }
  @Output() oncancel=new EventEmitter() //used to create user defined events 
                 

  ngOnInit(): void {

  }
  cancel(){
    this.oncancel.emit()
  
  }

}
