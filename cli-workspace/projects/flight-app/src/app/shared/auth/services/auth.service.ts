import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string;

  constructor() {
  }

  login() {
    this.userName = 'Florian';
  }

  logout() {
    this.userName = null;
  }

}
