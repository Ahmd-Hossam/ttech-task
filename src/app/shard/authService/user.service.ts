import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('role');
    return (authToken !== null) ? true : false;
  }
  
}
