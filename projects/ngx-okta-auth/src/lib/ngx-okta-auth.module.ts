import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OktaAuthModule } from '@okta/okta-angular';

@NgModule({
  imports: [ 
    CommonModule, 
    OktaAuthModule
  ],
  exports: [  
    OktaAuthModule 
  ]
})
export class NgxOktaAuthModule { }
