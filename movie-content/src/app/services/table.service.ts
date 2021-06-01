import { Injectable } from '@angular/core';
import { movies, movie } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  data: movies;

  constructor() {
    this.data = [];
  }

  searchMovie(allMovies: movies, movie: string): movies {
    const searchedElement = movie.toLowerCase();
    const result: movies = [];
    allMovies.forEach((value: movie) => {
      const movie = value.name.toLowerCase();
      if (movie.includes(searchedElement)) {
        result.push(value);
      }
    });
    console.log(result)
    return result;
  }
}
