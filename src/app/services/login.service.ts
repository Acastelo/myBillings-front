import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public API = "http://localhost:8080/"  

  constructor(public http: HttpClient) { }

  login(user: any) {
    return this.http.post(`${this.API}login`, user);
  }
}
