import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersComponent } from './users/users.component';
import { ServersManagerComponent } from './servers-manager/servers-manager.component';
import { AuthComponent }  from './auth/auth.component' ;

const appRoutes : Routes = [
  { path: '', component: ServersManagerComponent },
  { path: 'users', component: UsersComponent , children: [
    { path: ':id/:name', component: UserComponent},
    { path: ':id/:name/edit', component: UserEditComponent}
  ]},
  { path: 'auth', component: AuthComponent},
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo:'/page-not-found'}
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
