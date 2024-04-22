import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import page-not-found component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import userslogin auth gaurd component
import { UsersLoginAuthGuard } from './auth/users-login-auth.guard';

// import userslogout guard component
import { UsersLogoutAuthGuard } from './auth/users-logout-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'customershome/home', pathMatch: 'full' },
  { path: 'customershome', loadChildren: () => import('./customers-home/customers-home.module').then(m => m.CustomersHomeModule), canActivate:[UsersLogoutAuthGuard] },
  { path: 'customerssignup', loadChildren: () => import('./customers-signup/customers-signup.module')
  .then(m => m.CustomersSignupModule), canActivate:[UsersLogoutAuthGuard] },
  { path: 'customersaboutus', loadChildren: () => import('./customers-aboutus/customers-aboutus.module')
  .then(m => m.CustomersAboutusModule), canActivate:[UsersLoginAuthGuard] },
  { path: 'customerscontacts', loadChildren: () => import('./customers-contacts/customers-contacts.module')
  .then(m => m.CustomersContactsModule), canActivate:[UsersLoginAuthGuard] },
  { path: 'customerschangepassword', loadChildren: () => import('./customers-changepassword/customers-changepassword.module')
  .then(m => m.CustomersChangepasswordModule), canActivate:[UsersLogoutAuthGuard] },
  { path: 'customersfooditems', loadChildren: () => import('./customers-fooditems/customers-fooditems.module')
  .then(m => m.CustomersFooditemsModule), canActivate:[UsersLoginAuthGuard] },
  { path: 'customerscart', loadChildren: () => import('./customers-cart/customers-cart.module').then(m => m.CustomersCartModule), canActivate:[UsersLoginAuthGuard] },
  { path: 'customersorders', loadChildren: () => import('./customers-orders/customers-orders.module')
  .then(m => m.CustomersOrdersModule), canActivate:[UsersLoginAuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
