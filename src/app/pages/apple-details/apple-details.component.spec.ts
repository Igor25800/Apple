import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleDetailsComponent } from './apple-details.component';

describe('AppleDetailsComponent', () => {
  let component: AppleDetailsComponent;
  let fixture: ComponentFixture<AppleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
