import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';

@NgModule({
  declarations: [UserLandingPageComponent],
  imports: [CommonModule, UserRoutingModule, , LayoutModule, SafeModule],
})
export class UserModule {}
