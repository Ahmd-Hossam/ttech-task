import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserCService } from './services/user-c.service';

@Component({
  selector: 'app-user-c',
  templateUrl: './user-c.component.html',
  styleUrls: ['./user-c.component.scss']
})
export class UserCComponent implements OnInit {

  userData:any;
  @Output() userName:EventEmitter<any> =new EventEmitter
  constructor(private userAservice:UserCService) { }

  ngOnInit(): void {
    this.userData=this.userAservice.getUserData()
    this.userName.emit(this.userData[0].name)
  }

}
