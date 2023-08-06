import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptsComponent } from './attempts.component';

describe('AttemptsComponent', () => {
  let component: AttemptsComponent;
  let fixture: ComponentFixture<AttemptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttemptsComponent]
    });
    fixture = TestBed.createComponent(AttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
