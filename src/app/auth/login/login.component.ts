import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginModel } from '../interface/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;
  loginCredential: LoginModel = {
    username: '',
    password: ''
  }
  incorrectLogin: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login():void {
    this.authService.login(this.myForm.value)
    .subscribe({
      next: res => this.incorrectLogin = res,
      error: err => console.log(err)
    })
  }

}
