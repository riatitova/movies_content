import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import 'moment/locale/ru';
import { moviesData } from 'src/app/models/movies';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DatepickerComponent {
  @Input()
  currentPage: string = '';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  endDate: Date;
  startDate: Date;
  allDates: Date[];

  constructor(private tableService: TableService) {
    this.endDate = new Date();
    this.startDate = new Date();
    this.allDates = moviesData.map((value) => new Date(value.date));
    this.getValues();
  }

  getValues() {
    this.range.valueChanges.subscribe((value) => {
      if (value.end !== null) {
        this.endDate = new Date(value.end);
      }
      if (value.start !== null) {
        this.startDate = new Date(value.start);
      }
      if (value.start !== null && value.end !== null) {
        this.tableService.filterByDate(
          this.allDates,
          this.startDate,
          this.endDate,
          this.currentPage
        );
      }
    });
  }
}
