import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxOktaAuthModule, LoginModule } from 'ngx-okta-auth';
import { OKTA_CONFIG } from '@okta/okta-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SecureComponent } from './secure/secure.component';

const oktaConfig = {
  issuer: 'https://dev-231587.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa1fkpyp3ucZzq7r357',
  pkce: true,
  logo: '../assets/softrams.png'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOktaAuthModule,
    LoginModule,
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
