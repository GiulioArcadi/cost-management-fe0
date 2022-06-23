import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated=false;

  constructor(private router : Router) { }

  authenticate()
  {
    this.isAuthenticated=true;
    this.router.navigate(['/registration']);
  }

  logout() {
    this.isAuthenticated = false;
  }
}
