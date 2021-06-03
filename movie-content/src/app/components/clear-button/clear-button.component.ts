import { Component, Input } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.less'],
})
export class ClearButtonComponent {
  @Input()
  page: string = '';

  constructor(private tableService: TableService) {}
  
  clear(): void {
    this.tableService.clear(this.page);
  }
}
