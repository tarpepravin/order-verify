import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderVerifiedMessageComponent } from './order-verified-message.component';

describe('OrderVerifiedMessageComponent', () => {
  let component: OrderVerifiedMessageComponent;
  let fixture: ComponentFixture<OrderVerifiedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderVerifiedMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderVerifiedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
