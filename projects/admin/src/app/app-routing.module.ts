import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import page-not-found component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import Admin auth guard
import { AdminLoginGuard } from './auth/admin-login.guard';
import { AdminLogoutGuard } from './auth/admin-logout.guard';


const routes: Routes = [
  { path: '', redirectTo: 'adminhome/home', pathMatch: 'full'},
  { path: 'adminhome', loadChildren: () => import('./admin-home/admin-home.module').then(m => m.AdminHomeModule), 
  canActivate:[AdminLogoutGuard] },
  { path: 'adminaboutus', loadChildren: () => import('./admin-aboutus/admin-aboutus.module').then(m => m.AdminAboutusModule), canActivate:[AdminLoginGuard] },
  { path: 'admincontacts', loadChildren: () => import('./admin-contacts/admin-contacts.module').then(m => m.AdminContactsModule), canActivate:[AdminLoginGuard] },
  { path: 'admindashboard', loadChildren: () => import('./admin-dasboard/admin-dasboard.module').then(m => m.AdminDasboardModule), 
  canActivate:[AdminLoginGuard]},
  { path: 'adminsignup', loadChildren: () => import('./admin-signup/admin-signup.module').then(m => m.AdminSignupModule), canActivate:[AdminLogoutGuard] },
  { path: 'adminfoodsitem', loadChildren: () => import('./admin-foodsitem/admin-foodsitem.module')
  .then(m => m.AdminFoodsitemModule), canActivate:[AdminLoginGuard] },
  { path: 'adminchangepassword', loadChildren: () => import('./admin-changepassword/admin-changepassword.module')
  .then(m => m.AdminChangepasswordModule), canActivate:[AdminLogoutGuard] },
  { path: 'adminorders', loadChildren: () => import('./admin-orders/admin-orders.module').then(m => m.AdminOrdersModule), canActivate:[AdminLoginGuard] },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
