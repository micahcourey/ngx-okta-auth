import { OktaConfig } from '@okta/okta-angular/dist/okta/models/okta.config';
import { NgxOktaAuthService } from './ngx-okta-auth.service';

export function createOktaService(config:OktaConfig) {
  return new NgxOktaAuthService(config);
}