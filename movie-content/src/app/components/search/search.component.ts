import { Component, Input } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  @Input()
  currentPage: string = '';

  searchedMovie: string;

  constructor(private tableService: TableService) { 
    this.searchedMovie = '';
  }

  search(movie: string) {
    this.tableService.searchMovie(movie, this.currentPage);
  }
}
