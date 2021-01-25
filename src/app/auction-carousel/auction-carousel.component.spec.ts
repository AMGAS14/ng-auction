import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionCarouselComponent } from './auction-carousel.component';

describe('AuctionCarouselComponent', () => {
  let component: AuctionCarouselComponent;
  let fixture: ComponentFixture<AuctionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
