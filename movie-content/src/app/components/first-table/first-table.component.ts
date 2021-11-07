import { Component, DoCheck } from '@angular/core';
import { movies, moviesData } from 'src/app/models/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.less'],
})
export class FirstTableComponent implements DoCheck {
  displayedColumns: string[] = [
    'name',
    'date',
    'director',
    'screenwriter',
    'producer',
  ];

  dataSource: movies = moviesData;
  moviesFirstPage: movies = [];
 

  constructor(private movieService: MovieService) {
    this.moviesFirstPage = this.movieService.getMovies('первая');
    this.dataSource = this.moviesFirstPage;
  }

  // I know it's a bad way, but mat-table doesn't work with async pipe
  ngDoCheck(): void {
    this.moviesFirstPage =
      JSON.parse(String(localStorage.getItem('first-page-movies'))) ||
      moviesData;
    this.dataSource = this.moviesFirstPage;
  }
}
