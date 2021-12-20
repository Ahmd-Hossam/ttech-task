import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserBService } from './services/user-b.service';

@Component({
  selector: 'app-user-b',
  templateUrl: './user-b.component.html',
  styleUrls: ['./user-b.component.scss']
})
export class UserBComponent implements OnInit {
  userData:any;
  @Output() userName:EventEmitter<any> =new EventEmitter
  constructor(private userBservice:UserBService) { }

  ngOnInit(): void {
    this.userData=this.userBservice.getUserData()
    this.userName.emit(this.userData[0].name)
  }

}
