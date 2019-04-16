import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { SafeListComponent } from './container/safe-list/safe-list.component';
import { SafeListElementComponent } from './container/safe-list-element/safe-list-element.component';
import { SafeRowComponent } from './components/safe-row/safe-row.component';
import {
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatBadgeModule,
  MatCardModule,
} from '@angular/material';
import { TaskCounterComponent } from './container/task-counter/task-counter.component';
import { TaskListComponent } from './container/task-list/task-list.component';
import { TaskListElementComponent } from './container/task-list-element/task-list-element.component';

@NgModule({
  declarations: [
    AdminLandingPageComponent,
    SafeListComponent,
    SafeListElementComponent,
    SafeRowComponent,
    TaskCounterComponent,
    TaskListComponent,
    TaskListElementComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    SafeModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule,
  ],
  exports: [SafeListElementComponent, SafeRowComponent],
})
export class AdminModule {}
