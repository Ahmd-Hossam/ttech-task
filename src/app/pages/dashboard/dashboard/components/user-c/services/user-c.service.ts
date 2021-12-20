import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCService {

  constructor() { }

  getUserData(){
    const userAData=[
      {
        name:"tom saltse",
        img:"https://image.shutterstock.com/image-photo/young-handsome-african-american-man-600w-1777215896.jpg",
        age:37,
        address:"giza",
        mobile:"01212356889",
        position:"product manger "
      }
    ]
    return userAData
  }
}
