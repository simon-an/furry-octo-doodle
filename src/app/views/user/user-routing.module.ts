import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
// import { SafeResolverService } from '~core/services/safe-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UserLandingPageComponent,
  },
  {
    path: 'safes/:id',
    component: SafePageComponent,
    // resolve: {
    //   safe: SafeResolverService,
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
