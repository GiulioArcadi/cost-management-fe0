import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user/user';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { LoginRegistrationService } from 'src/app/services/login-registration-service/login-registration.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  user = new User();
  msg = "";
  constructor(private service : LoginRegistrationService,private auth : AuthenticationService) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.service.loginUser(this.user).subscribe(
      response => {
        console.log(this.user);
        console.log("response recived");
        console.log(response);
        if(response){
          this.auth.authenticate();
        }
        else
        {this.msg = "Email o Password errati";}
      },
      error => {
        console.log("exception occurred");
        this.msg = "inserisci correttamente Email e Password";
      }
    );
  }

  prova()
  {
    this.auth.authenticate();
  }

}
