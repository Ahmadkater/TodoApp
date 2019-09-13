import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname: string ;
  lname: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  age: string;

  constructor() { 
  }

  ngOnInit() {
  }

}
