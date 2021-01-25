import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionProductCardListComponent } from './auction-product-card-list.component';

describe('AuctionProductCardListComponent', () => {
  let component: AuctionProductCardListComponent;
  let fixture: ComponentFixture<AuctionProductCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionProductCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionProductCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
