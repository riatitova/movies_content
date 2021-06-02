import { Injectable } from '@angular/core';
import { movies, movie, moviesData } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  data: movies;

  constructor() {
    this.data = moviesData;
  }

  searchMovie(allMovies: movies, movie: string): movies {
    const searchedElement = movie.toLowerCase();
    const result: movies = [];
    allMovies.forEach((value: movie) => {
      const movie = value.name.toLowerCase();
      if (movie.includes(searchedElement) && searchedElement.length !== 0) {
        result.push(value);
      };
    });
    if (result.length === 0) {
      this.data = moviesData;
      localStorage.setItem('first-page-movies', JSON.stringify(this.data));
      return moviesData;
    }
    this.data = result;
    localStorage.setItem('first-page-movies', JSON.stringify(this.data));
    return result;
  }
}
