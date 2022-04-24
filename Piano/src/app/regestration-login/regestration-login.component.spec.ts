import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestrationLoginComponent } from './regestration-login.component';

describe('RegestrationLoginComponent', () => {
  let component: RegestrationLoginComponent;
  let fixture: ComponentFixture<RegestrationLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestrationLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestrationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
