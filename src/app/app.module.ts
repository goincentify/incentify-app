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

import {
  NavbarComponent,
  DashboardComponent
} from '@app/components'

import { 
  LoginComponent, 
  UserComponent, 
  UserprofileComponent
} from '@app/pages';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    ErrorDialogComponent,
    DashboardComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [ErrorDialogComponent],
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
