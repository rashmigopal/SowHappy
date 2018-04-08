
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isRegister = false;
isLogIn = true;

constructor(private router: Router){}

ngOnInit() {
}

showLogin(){
  this.isRegister = false;
  this.isLogIn = true;
}

showRegister(){
  this.isLogIn = false;
  this.isRegister = true;
}

navigate(){
  this.router.navigate(['dashboard']);
}

}



