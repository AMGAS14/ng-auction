import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionNavbarComponent } from './auction-navbar/auction-navbar.component';
import { AuctionSearchComponent } from './auction-search/auction-search.component';
import { AuctionCarouselComponent } from './auction-carousel/auction-carousel.component';
import { AuctionProductCardListComponent } from './auction-product-card-list/auction-product-card-list.component';
import { AuctionFooterComponent } from './auction-footer/auction-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuctionNavbarComponent,
    AuctionSearchComponent,
    AuctionCarouselComponent,
    AuctionProductCardListComponent,
    AuctionFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
