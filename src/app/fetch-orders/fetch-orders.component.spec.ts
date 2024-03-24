import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchOrdersComponent } from './fetch-orders.component';

describe('FetchOrdersComponent', () => {
  let component: FetchOrdersComponent;
  let fixture: ComponentFixture<FetchOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
