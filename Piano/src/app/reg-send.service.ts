import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegSendService {
  role: string;
  country: string;
  town: string;
  phone: string;

  constructor() { }
  setRole(role: string){
    this.role = role;
  }

  setCountry(country: string){
    this.country = country;
  }

  setTown(town: string){
    this.town = town;
  }

  setPhone(phone: string){
    this.phone = phone;
  }

  sendRegData(){
    
  }
}
