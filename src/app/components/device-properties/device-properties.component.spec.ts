import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePropertiesComponent } from './device-properties.component';

describe('DevicePropertiesComponent', () => {
  let component: DevicePropertiesComponent;
  let fixture: ComponentFixture<DevicePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicePropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
