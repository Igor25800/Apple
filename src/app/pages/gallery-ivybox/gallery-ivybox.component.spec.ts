import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryIvyboxComponent } from './gallery-ivybox.component';

describe('GalleryIvyboxComponent', () => {
  let component: GalleryIvyboxComponent;
  let fixture: ComponentFixture<GalleryIvyboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryIvyboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryIvyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
