import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsAppleComponent } from './models-apple.component';

describe('ModelsAppleComponent', () => {
  let component: ModelsAppleComponent;
  let fixture: ComponentFixture<ModelsAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsAppleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
