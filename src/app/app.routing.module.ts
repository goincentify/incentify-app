import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core';
import { LoginComponent, UserComponent, UserprofileComponent } from '@app/pages';
import { CurrentUserResolve } from './service/user.resolve';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { OrdersComponent } from './components/profile/orders/orders.component';
import { RedeempointsComponent } from './components/profile/redeempoints/redeempoints.component';
import { SecurityComponent } from './components/profile/security/security.component';
import { PaymentComponent } from './components/profile/payment/payment.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, resolve: { user: CurrentUserResolve }, canActivate: [AuthGuard] },
  { path: 'marketplace', component: MarketplaceComponent, canActivate: [AuthGuard] },
  { path: 'marketplace/:filter', component: MarketplaceComponent, canActivate: [AuthGuard] },
  {
    path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard],
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'redeem', component: RedeempointsComponent, resolve: { user: CurrentUserResolve } },
      { path: 'security', component: SecurityComponent },
      { path: 'payment', component: PaymentComponent },
      //     { path: 'communication', component: CommunicationComponent },
      { path: 'profile', component: ProfileComponent, resolve: { user: CurrentUserResolve } },
      { path: '**', redirectTo: 'profile' },
      ]
    },
    { path: '**', redirectTo: 'user' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
