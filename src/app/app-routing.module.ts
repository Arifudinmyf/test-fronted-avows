import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/@core/helper/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //   import('../app/components/dashboard/dashboard.module').then((e) => e.DashboardModule),
  //   canActivate: [AuthGuard]
  // },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./login/login.module').then((e) => e.LoginModule)
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
