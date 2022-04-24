import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestrationDataComponent } from './regestration-data.component';

describe('RegestrationDataComponent', () => {
  let component: RegestrationDataComponent;
  let fixture: ComponentFixture<RegestrationDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestrationDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
