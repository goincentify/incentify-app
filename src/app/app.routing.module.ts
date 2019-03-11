import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, UserComponent } from '@app/pages';
import { UserResolve } from './service';
import { AuthGuard } from '@app/core'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', resolve: { users: UserResolve }, canActivate: [AuthGuard],
    children: [
      { path: 'user', component: UserComponent },
    ]
  },
  { path: '**', redirectTo: '' }
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
export class AppRoutingModule { }
