import { Component, OnInit, Output,EventEmitter, AfterContentInit } from '@angular/core';

import { UserAService } from './services/user-a.service';

@Component({
  selector: 'app-user-a',
  templateUrl: './user-a.component.html',
  styleUrls: ['./user-a.component.scss']
})
export class UserAComponent implements OnInit, AfterContentInit {
  userData:any
  @Output() userName:EventEmitter<any>=new EventEmitter()
  constructor(private userAservice:UserAService) { }
  
  ngOnInit(): void {
    this.userData=this.userAservice.getUserData()
    this.userName.emit(this.userData[0].name)
  }

  ngAfterContentInit(){

  }
}
