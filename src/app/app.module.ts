import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { UserService } from "./service/app.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { LoginComponent, UserComponent } from '@app/pages';
import { AuthService, ErrorDialogComponent, TokenStorage, TokenStorageService } from "@app/core"
import { Interceptor } from './interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    ErrorDialogComponent
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
  providers: [ErrorDialogComponent, UserService, AuthService, TokenStorage, TokenStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
