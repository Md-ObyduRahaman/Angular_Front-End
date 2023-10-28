import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDeniedExceptionComponent } from './access-denied-exception.component';

describe('AccessDeniedExceptionComponent', () => {
  let component: AccessDeniedExceptionComponent;
  let fixture: ComponentFixture<AccessDeniedExceptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessDeniedExceptionComponent]
    });
    fixture = TestBed.createComponent(AccessDeniedExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
