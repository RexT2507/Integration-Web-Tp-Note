import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegePageComponent } from './vege-page.component';

describe('VegePageComponent', () => {
  let component: VegePageComponent;
  let fixture: ComponentFixture<VegePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
