import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHoverComponent } from './nav-hover.component';

describe('NavHoverComponent', () => {
  let component: NavHoverComponent;
  let fixture: ComponentFixture<NavHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
