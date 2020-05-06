import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'john';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleLogin() {
    this.invalidLogin = !(this.username === 'john' && this.password === 'password');
  }
}
