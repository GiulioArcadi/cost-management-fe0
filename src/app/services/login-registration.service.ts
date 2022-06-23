import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  path = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  public loginUser(user : User): Observable<any>
  {
    return this.http.post<any>(this.path+"/login",user);
  }

  public registerUser(user : User): Observable<any>
  {
    return this.http.post<any>(this.path+"/registration",user);
  }
}
