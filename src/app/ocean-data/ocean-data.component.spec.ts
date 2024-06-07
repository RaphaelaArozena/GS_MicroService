import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanDataComponent } from './ocean-data.component';

describe('OceanDataComponent', () => {
  let component: OceanDataComponent;
  let fixture: ComponentFixture<OceanDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OceanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
