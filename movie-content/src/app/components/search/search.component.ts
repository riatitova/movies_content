import { Component } from '@angular/core';
import { movies, moviesData } from 'src/app/models/movies';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  movies: movies;
  searchedMovie: string;

  constructor(private tableService: TableService) { 
    this.searchedMovie = '';
    this.movies = JSON.parse(String(localStorage.getItem('first-page-movies'))) || moviesData;
  }

  search(movie: string) {
    this.tableService.searchMovie(this.movies, movie);
  }
}
