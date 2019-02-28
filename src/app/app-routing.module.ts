import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from '~core/guards/auth.guard';
import { AdminGuard } from '~core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './views/admin/admin.module#AdminModule',
    canLoad: [AdminGuard],
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'user',
    loadChildren: './views/user/user.module#UserModule',
    canLoad: [],
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomeModule',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
