import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestrationRoleComponent } from './regestration-role.component';

describe('RegestrationRoleComponent', () => {
  let component: RegestrationRoleComponent;
  let fixture: ComponentFixture<RegestrationRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestrationRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestrationRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
