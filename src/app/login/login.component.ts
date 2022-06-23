import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginRegistrationService } from '../services/login-registration.service';
import { User } from '../user/user';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthenticationService } from '../services/authentication.service';

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
