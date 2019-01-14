import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard.component';
import { AnalysisComponent } from '../analysis/analysis.component';
import { MonitorComponent } from '../monitor/monitor.component';
import { BasicLayoutComponent } from '../../../layouts/basic-layout/basic-layout.component';
import { WorkplaceComponent } from '../workplace/workplace.component';

import { AuthGuard } from '../../../auth/auth.guard';
import { CanDeactivateGuard } from '../../../services/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'analysis',
            component: AnalysisComponent,
            // canDeactivate: [CanDeactivateGuard]
          }, {
            path: 'monitor',
            component: MonitorComponent,
          }, {
            path: 'workspace',
            component: WorkplaceComponent,
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
