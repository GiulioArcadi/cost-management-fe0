import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user/user';
import { LoginRegistrationService } from 'src/app/services/login-registration-service/login-registration.service';
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
