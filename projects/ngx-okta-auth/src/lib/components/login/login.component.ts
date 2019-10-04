import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() onSuccess = new EventEmitter()
  signIn;
  oktaUrl: string;
  widget: OktaSignIn;

  constructor(private oktaService: OktaAuthService) {
    this.oktaUrl = this.oktaService.getOktaConfig().issuer.split('/oauth2')[0];
    console.log(this.oktaUrl)
    this.widget = new OktaSignIn({
      baseUrl: this.oktaUrl,
      authParams: {
        pkce: true
      }
    });
    this.signIn = oktaService;

  }

  ngOnInit() {
    this.widget.renderEl({
      el: '#okta-signin-container'},
      (res) => {
        if (res.status === 'SUCCESS') {
          console.log(res.session.token)

          this.widget.hide();
          this.onSuccess.emit(res.session.token);
     
        }
      },
      (err) => {
        throw err;
      }
    );
  }

}
