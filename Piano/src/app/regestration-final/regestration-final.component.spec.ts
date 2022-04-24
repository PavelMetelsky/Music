import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestrationFinalComponent } from './regestration-final.component';

describe('RegestrationFinalComponent', () => {
  let component: RegestrationFinalComponent;
  let fixture: ComponentFixture<RegestrationFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestrationFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestrationFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
