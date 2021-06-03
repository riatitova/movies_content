import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstTableComponent } from './first-table/first-table.component';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ButtonComponent } from './button/button.component';
import {MatButtonModule} from '@angular/material/button';
import { SecondTableComponent } from './second-table/second-table.component';

@NgModule({
  declarations: [FirstTableComponent, SearchComponent, DatepickerComponent, ButtonComponent, SecondTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [FirstTableComponent, SearchComponent, DatepickerComponent, ButtonComponent, SecondTableComponent],
})
export class CoreModule {}
