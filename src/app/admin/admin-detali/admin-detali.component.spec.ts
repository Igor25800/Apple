import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetaliComponent } from './admin-detali.component';

describe('AdminDetaliComponent', () => {
  let component: AdminDetaliComponent;
  let fixture: ComponentFixture<AdminDetaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
