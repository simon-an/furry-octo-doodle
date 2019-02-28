import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeLandingPageComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class HomeModule {}
