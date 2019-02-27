import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWithSidenavComponent } from './header-with-sidenav/header-with-sidenav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

const imports = [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule];

@NgModule({
  declarations: [HeaderWithSidenavComponent],
  imports: [CommonModule, ...imports],
  exports: [HeaderWithSidenavComponent, ...imports],
})
export class LayoutModule {}
