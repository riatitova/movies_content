import { Injectable } from '@angular/core';
import { movies, moviesData } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovies(page: string): movies {
    if (page === 'первая') {
      return (
        JSON.parse(String(localStorage.getItem('first-page-movies'))) ||
        moviesData
      );
    } else {
      return (
        JSON.parse(String(localStorage.getItem('second-page-movies'))) ||
        moviesData
      );
    }
  }
}
