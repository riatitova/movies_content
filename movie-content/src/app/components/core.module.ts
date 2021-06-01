import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstTableComponent } from './first-table/first-table.component';

@NgModule({
  declarations: [FirstTableComponent],
  imports: [CommonModule, RouterModule],
  exports: [FirstTableComponent],
})
export class CoreModule {}
