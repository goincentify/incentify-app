import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core';
import { LoginComponent, UserComponent, UserprofileComponent } from '@app/pages';
import { CurrentUserResolve } from './service/user.resolve';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, resolve: { user: CurrentUserResolve }, canActivate: [AuthGuard] },
  {
    path: 'userprofile', component: UserprofileComponent, resolve: { user: CurrentUserResolve }, canActivate: [AuthGuard],
    // children: [
    //     { path: '', component: OrdersComponent },
    //     { path: 'orders', component: OrdersComponent },
    //     { path: 'security', component: SecurityComponent },
    //     { path: 'communication', component: CommunicationComponent },
    //     { path: 'payment', component: PaymentComponent },
    //     { path: 'redeem', component: RedeempointsComponent },
    //     { path: 'profile', component: ProfileComponent },
    //   ]
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
