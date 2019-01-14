import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    LayoutsRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, BasicLayoutComponent],
})
export class LayoutsModule { }
