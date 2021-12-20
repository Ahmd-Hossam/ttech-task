import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAService {

  constructor() { }

  getUserData(){
    const userAData=[
      {
        name:"ahmed Ali",
        img:"https://media.istockphoto.com/photos/cool-african-man-picture-id544358094?k=20&m=544358094&s=612x612&w=0&h=QO2YDUbPLyv0BfHQbEHMrSLcuT3mrZ-HpO8ynbEstf4=",
        age:25,
        address:"cairo",
        mobile:"010012356889",
        position:"front end developer "
      }
    ]
    return userAData
  }
}
