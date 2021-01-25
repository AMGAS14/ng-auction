import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionNavbarComponent } from './auction-navbar.component';

describe('AuctionNavbarComponent', () => {
  let component: AuctionNavbarComponent;
  let fixture: ComponentFixture<AuctionNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
