import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  users: User[] = [];

  constructor() { }

  registerUser(){
    console.log("registering user");
    this.users.push(this.user);
    this.user = new User();
  }

  ngOnInit() {
  }

}
