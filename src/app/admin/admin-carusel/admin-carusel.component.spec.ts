import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCaruselComponent } from './admin-carusel.component';

describe('AdminCaruselComponent', () => {
  let component: AdminCaruselComponent;
  let fixture: ComponentFixture<AdminCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
