import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserBService {

  constructor() { }
  
  getUserData(){
    const userAData=[
      {
        name:"zak attota",
        img:"https://s3.envato.com/files/173458826/IMG_5584.jpg",
        age:27,
        address:"Alex",
        mobile:"01012356889",
        position:"Back end developer "
      }
    ]
    return userAData
  }
}
