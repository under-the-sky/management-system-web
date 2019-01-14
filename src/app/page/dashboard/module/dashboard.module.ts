import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalysisComponent } from '../analysis/analysis.component';
import { DashboardComponent } from '../dashboard.component';

import { MonitorComponent } from '../monitor/monitor.component';
import { WorkplaceComponent } from '../workplace/workplace.component';

import { LayoutsModule } from '../../../layouts/layouts.module';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule,
    LayoutsModule
  ],
  declarations: [DashboardComponent, AnalysisComponent, MonitorComponent, WorkplaceComponent]
})
export class DashboardModule { }
