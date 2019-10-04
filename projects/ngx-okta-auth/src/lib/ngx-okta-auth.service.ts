import { Injectable, Inject } from '@angular/core';
import { OKTA_CONFIG } from '@okta/okta-angular';
import { OktaConfig } from '@okta/okta-angular/dist/okta/models/okta.config';

@Injectable({
  providedIn: 'root'
})
export class NgxOktaAuthService {
  config: OktaConfig;

  constructor(@Inject(OKTA_CONFIG) private oktaConfig: OktaConfig) { 
    this.config = this.oktaConfig;
  }

  getOktaConfig(): OktaConfig {
    return this.config;
  }
 
}
