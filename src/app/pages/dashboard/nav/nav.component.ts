import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() userName:any
  constructor(private Router:Router, private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('role')
    this.Router.navigate(['/login'])
    this.toaster.success("Logged out successfully !")
  }

}
