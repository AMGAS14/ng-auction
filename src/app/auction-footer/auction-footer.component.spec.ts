import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionFooterComponent } from './auction-footer.component';

describe('AuctionFooterComponent', () => {
  let component: AuctionFooterComponent;
  let fixture: ComponentFixture<AuctionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
