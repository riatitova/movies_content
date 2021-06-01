import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import RegistrationPageRoutingModule from './first-page-routing.module';
import { CoreModule } from 'src/app/components/core.module';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [CommonModule, RegistrationPageRoutingModule, CoreModule],
})
export class FirstPageModule {}
