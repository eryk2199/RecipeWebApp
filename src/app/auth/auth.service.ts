import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = "http://127.0.0.1:5118"
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.url + "/login?useCookies=true",{ email, password }, { observe: 'response'});
  }

  register(email: string, password: string) {
    return this.http.post(this.url + "/register", {email, password})
  }
}
