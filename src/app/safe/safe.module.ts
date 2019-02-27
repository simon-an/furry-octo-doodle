import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePageComponent } from '../views/user/containers/safe-page/safe-page.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [ItemListComponent]
})
export class SafeModule { }
