import { Component } from '@angular/core';
import { movies, moviesData } from 'src/app/models/movies';
import { MovieService } from 'src/app/services/movie.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.less'],
})
export class FirstTableComponent {
  movies: movies;
  displayedColumns: string[] = [
    'name',
    'date',
    'director',
    'screenwriter',
    'producer',
  ];
  dataSource: movies;

  constructor(movieService: MovieService, tableService: TableService) {
    this.movies = movieService.serverMoviesData;
    this.dataSource = this.movies;
    tableService.searchMovie(this.movies, 'мстители');
  }

}
