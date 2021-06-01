import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsNovaComponent } from './maps-nova.component';

describe('MapsNovaComponent', () => {
  let component: MapsNovaComponent;
  let fixture: ComponentFixture<MapsNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsNovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
