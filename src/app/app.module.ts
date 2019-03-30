import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './service/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { UserService, UserResolve } from "@app/service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthService, ErrorDialogComponent, TokenStorage } from "@app/core"
import { Interceptor } from './interceptor';

import { ProfileComponent } from './components/profile/profile/profile.component';
import { OrdersComponent } from './components/profile/orders/orders.component';
import { RedeempointsComponent } from './components/profile/redeempoints/redeempoints.component';
import { SecurityComponent } from './components/profile/security/security.component';
import { PaymentComponent } from './components/profile/payment/payment.component';

import {
  NavbarComponent,
  DashboardComponent,
  RewardsItemsComponent
} from '@app/components'

import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { TierDescription, StatisticInfoComponent, RewardInfoComponent } from './dialogs';

import { 
  LoginComponent, 
  UserComponent, 
  UserprofileComponent
} from '@app/pages';
import { AlertComponent } from './dialogs/alert/alert.component';


@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    ErrorDialogComponent,
    DashboardComponent,
    UserprofileComponent,
    ProfileComponent,
    OrdersComponent,
    RedeempointsComponent,
    SecurityComponent,
    PaymentComponent,
    MarketplaceComponent,
    RewardsItemsComponent,
    StatisticInfoComponent,
    TierDescription,
    RewardInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [ErrorDialogComponent, StatisticInfoComponent, RewardInfoComponent, TierDescription],
  providers: [ErrorDialogComponent, UserService, AuthService, TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule{
  constructor() {}
}
