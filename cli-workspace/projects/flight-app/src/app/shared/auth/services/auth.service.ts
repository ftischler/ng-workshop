import { Injectable } from '@angular/core';

export interface Credentials {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userName: string;

  private _password = 'test1234';
  private _userName = 'Florian';

  constructor() {
  }

  login(credentials: Credentials): boolean {
    if (this.matchCredentials(credentials)) {
      this.userName = credentials.userName;
      return true;
    }

    return false;
  }

  logout() {
    this.userName = null;
  }

  private matchCredentials(credentials: Credentials): boolean {
    return credentials.userName === this._userName && credentials.password === this._password;
  }
}
