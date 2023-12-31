import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShawarmaComponent } from './shawarma.component';

describe('ShawarmaComponent', () => {
  let component: ShawarmaComponent;
  let fixture: ComponentFixture<ShawarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShawarmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShawarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
