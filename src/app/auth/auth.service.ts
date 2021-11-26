import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  intendeduUrl: string = '';

  constructor() { }

  chechIfUserIsLoggedIn(){
    let statusToken =  localStorage.getItem('token');
    const shoulProceed = Boolean(statusToken);
    return shoulProceed;
  }

}
