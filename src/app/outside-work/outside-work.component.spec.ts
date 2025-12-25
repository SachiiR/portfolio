import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideWorkComponent } from './outside-work.component';

describe('OutsideWorkComponent', () => {
  let component: OutsideWorkComponent;
  let fixture: ComponentFixture<OutsideWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutsideWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutsideWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
