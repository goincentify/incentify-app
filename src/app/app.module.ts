import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RewardInfoComponent, StatisticInfoComponent, TierDescription } from '@app/_dialogs';
import { AlertComponent, ActivityComponent, QuickViewComponent, NavbarComponent, RewardsItemsComponent } from '@app/_components';
import { CommunicationComponent, OrdersComponent, PaymentComponent, ProfileComponent, RedeempointsComponent, SecurityComponent } from '@app/pages/profile';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent, LoginComponent, AdminComponent, DashboardComponent, HomeComponent, MarketplaceComponent, ShoppingcartComponent, UserprofileComponent } from './pages';
import { AnnouncementsComponent } from './_components/announcements/announcements.component';
// import { MatCarouselModule } from '@ngmodule/material-carousel';

// used to create fake backend
import { ErrorInterceptor, shoppingAPIProvider, userAPIProvider, JwtInterceptor } from './_helpers';;

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatExpansionModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        FlexLayoutModule,
        ScrollDispatchModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        AdminComponent,
        AnnouncementsComponent,
        DashboardComponent,
        QuickViewComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
        QuickViewComponent,
        ActivityComponent,
        DashboardComponent,
        RewardsItemsComponent,
        RewardInfoComponent,
        StatisticInfoComponent,
        TierDescription,
        OrdersComponent,
        SecurityComponent,
        CommunicationComponent,
        PaymentComponent,
        RedeempointsComponent,
        ProfileComponent,
        HomeComponent,
        MarketplaceComponent,
        ShoppingcartComponent,
        UserprofileComponent,
        AnnouncementsComponent],
    entryComponents: [StatisticInfoComponent, RewardInfoComponent, TierDescription],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        userAPIProvider,
        shoppingAPIProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }