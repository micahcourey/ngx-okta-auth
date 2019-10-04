import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  entryComponents: [LoginComponent]
})
export class LoginModule { 
  constructor(private injector: Injector) {
    const loginElement = createCustomElement(LoginComponent, { injector });
    customElements.define('okta-login', loginElement);
  }
}
