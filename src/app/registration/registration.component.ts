import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistrationService } from '../services/login-registration.service';
import { User } from '../user/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = "";
  
  constructor(private service : LoginRegistrationService,private router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUser(this.user).subscribe( 
      (response : User) => {
        console.log(this.user);
        console.log("response recived");
        console.log(response);
        if(response!=null)
        {
          this.router.navigate(['/login']);
        }
      },
      error => {
        console.log("exeption occurred");
        this.msg = "inserisci correttamente Email e Password";
      }
    );
  }

}
