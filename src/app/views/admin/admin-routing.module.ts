import { TaskApprovalComponent } from './container/task-approval/task-approval.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { TaskListComponent } from './container/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingPageComponent,
    children: [
      {
        path: '',
        component: TaskListComponent,
        outlet: 'tasks',
      },
      {
        path: 'tasks/:id',
        component: TaskApprovalComponent,
        outlet: 'tasks',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
