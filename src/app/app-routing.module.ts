import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent, LoginComponent, DashboardComponent, AdminComponent, HomeComponent, MarketplaceComponent, ShoppingcartComponent, UserprofileComponent } from '@app/pages';
import { AuthGuard } from './_guards';
import { CommunicationComponent, PaymentComponent, ProfileComponent, RedeempointsComponent, SecurityComponent, OrdersComponent } from './pages/profile';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'marketplace', component: MarketplaceComponent, canActivate: [AuthGuard] },
    { path: 'marketplace/:filter', component: MarketplaceComponent, canActivate: [AuthGuard] },
    {
        path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: OrdersComponent },
            { path: 'orders', component: OrdersComponent },
            { path: 'security', component: SecurityComponent },
            { path: 'communication', component: CommunicationComponent },
            { path: 'payment', component: PaymentComponent },
            { path: 'redeem', component: RedeempointsComponent },
            { path: 'profile', component: ProfileComponent },
        ]
    },
    { path: 'shoppingcart', component: ShoppingcartComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
