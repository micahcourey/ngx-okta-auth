import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { NgxOktaAuthComponent } from './ngx-okta-auth.component';



@NgModule({
  imports: [ CommonModule ],
  declarations: [ NgxOktaAuthComponent ],
  entryComponents: [ NgxOktaAuthComponent ]
})
export class NgxOktaAuthModule { 
  constructor(private injector: Injector) {
    const ngxOktaAuthElement = createCustomElement(NgxOktaAuthComponent, { injector });
    customElements.define('okta-auth', ngxOktaAuthElement);
  }
}
