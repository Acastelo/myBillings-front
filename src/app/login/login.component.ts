import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    
    
  }

  logar(user) {
    return this.loginService.login(user).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
