import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

interface Token {
  exp: number;
  user: {
    id: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = "https://bookstore21.s1810456031.student.kwmhgb.at/api/auth";

  constructor(private http: HttpClient) { }

  login (email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      'email': email,
      'password': password
    });
  }

  public setSessionStorage(token: string) {
    const decodedToken = jwt_decode(token) as Token;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);
  }

  public getCurrentUserId() {
    return Number.parseInt(sessionStorage.getItem("userId"));
  }

  public logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    console.log("logged out");
  }

  isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      let token: string = sessionStorage.getItem("token");
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);

      if (expirationDate < new Date()) {
        console.log("token expired");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userId");
        return false;
      } else {
        return true
      }
      
    } else {
      return false;
    }
  }
}
