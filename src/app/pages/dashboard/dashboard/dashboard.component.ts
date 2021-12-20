import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userRole:any;
  active = 1;
  userName:string=''

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.userRole=localStorage.getItem('role')
    //this.userName=this.userRole
  }

  getUserName(name:string){
    this.userName=name
    this.cdr.detectChanges();
  }



}
