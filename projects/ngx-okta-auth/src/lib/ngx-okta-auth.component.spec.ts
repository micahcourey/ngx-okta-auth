import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOktaAuthComponent } from './ngx-okta-auth.component';

describe('NgxOktaAuthComponent', () => {
  let component: NgxOktaAuthComponent;
  let fixture: ComponentFixture<NgxOktaAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOktaAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOktaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
