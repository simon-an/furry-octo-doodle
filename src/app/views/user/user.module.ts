import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import {
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { AddSafeItemDialogComponent } from './containers/add-safe-item-dialog/add-safe-item-dialog.component';
import { SafeItemFormComponent } from './components/safe-item-form/safe-item-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserLandingPageComponent, SafePageComponent, AddSafeItemDialogComponent, SafeItemFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    LayoutModule,
    SafeModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [AddSafeItemDialogComponent, SafeItemFormComponent],
  entryComponents: [AddSafeItemDialogComponent],
})
export class UserModule {}
