import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyoucompComponent } from './thankyoucomp.component';

describe('ThankyoucompComponent', () => {
  let component: ThankyoucompComponent;
  let fixture: ComponentFixture<ThankyoucompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThankyoucompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThankyoucompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
