import { Component, OnInit } from '@angular/core';
import { movies, moviesData } from 'src/app/models/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.less']
})
export class FirstTableComponent {
  movies: movies;

  constructor(movieService: MovieService) { 
    this.movies = movieService.serverMoviesData;
    console.log(this.movies);
  }


}
