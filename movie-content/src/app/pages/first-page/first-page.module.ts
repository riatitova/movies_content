import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { CoreModule } from 'src/app/components/core.module';
import FirstPageRoutingModule from './first-page-routing.module';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [CommonModule, FirstPageRoutingModule, CoreModule],
})
export class FirstPageModule {}
