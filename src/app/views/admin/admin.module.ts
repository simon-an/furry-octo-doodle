import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';

@NgModule({
  declarations: [AdminLandingPageComponent],
  imports: [CommonModule, AdminRoutingModule, LayoutModule, SafeModule],
})
export class AdminModule {}
