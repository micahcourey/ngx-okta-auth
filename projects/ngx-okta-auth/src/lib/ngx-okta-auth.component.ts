import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'auth-ngx-okta-auth',
  template: `
    <p>
      Hello {{name}}
    </p>
  `,
  styles: [`p {color: red}`]
})
export class NgxOktaAuthComponent implements OnInit {
  @Input() public name: string;
  
  constructor() { }

  ngOnInit() {
    if (!this.name || this.name.length === 0) {
      console.error(`Name attribute must be provided!`);
    }
  }

}
