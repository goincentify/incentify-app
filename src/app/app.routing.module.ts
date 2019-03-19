import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, UserComponent } from '@app/pages';
import { UserResolve } from './service';
import { AuthGuard } from '@app/core'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, resolve: { users: UserResolve }, canActivate: [AuthGuard], },
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
