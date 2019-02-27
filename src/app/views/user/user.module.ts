import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { MatListModule, MatIconModule, MatDividerModule } from '@angular/material';
import { SafePageComponent } from './containers/safe-page/safe-page.component';

@NgModule({
  declarations: [UserLandingPageComponent, SafePageComponent],
  imports: [CommonModule, UserRoutingModule, LayoutModule, SafeModule, MatListModule, MatIconModule, MatDividerModule],
})
export class UserModule {}
