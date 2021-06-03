import { Component, DoCheck } from '@angular/core';
import { movies, moviesData } from 'src/app/models/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.less'],
})
export class SecondTableComponent implements DoCheck {
  displayedColumns: string[] = [
    'name',
    'date',
    'director',
    'screenwriter',
    'producer',
  ];

  dataSourceSecondPage: movies = moviesData;
  moviesSecondPage: movies = [];

  constructor(private movieService: MovieService) {
    this.moviesSecondPage = this.movieService.getMovies('вторая');
    this.dataSourceSecondPage = this.moviesSecondPage;
  }

  // I know it's a bad way, but mat-table doesn't work with async pipe
  ngDoCheck(): void {
    this.moviesSecondPage =
      JSON.parse(String(localStorage.getItem('second-page-movies'))) ||
      moviesData;
    this.dataSourceSecondPage = this.moviesSecondPage;
  }
}
