import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    
  onLoginSuccess(loginEvt: CustomEvent) {
    console.log('consumer', loginEvt.detail)
    localStorage.setItem('sessionToken', loginEvt.detail);
    this.router.navigate(['/secure']);
  }

}
