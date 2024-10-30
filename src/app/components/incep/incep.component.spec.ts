import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncepComponent } from './incep.component';

describe('IncepComponent', () => {
  let component: IncepComponent;
  let fixture: ComponentFixture<IncepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
