import { Injectable } from '@angular/core';
import { movies, movie, moviesData } from '../models/movies';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  data: movies;

  constructor(private movieService: MovieService) {
    this.data = moviesData;
  }

  searchMovie(movie: string): movies {
    const allMovies = this.data;
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

  filterByDate(allMoviesDate: Date[], startDate: Date, endDate: Date): movies {
    const filteredDates = allMoviesDate.map(value => {
      if (value.valueOf() - startDate.valueOf() >= 0) {
       if (endDate.valueOf() - value.valueOf() >= 0) {
         return value;
       }
      }
      return 0;
    });
    const movies = this.movieService.getMovies();
    let isIncludes = false;
    const result = movies.filter(value => {
      filteredDates.forEach(date =>  {
        if (new Date(value.date).valueOf() - date.valueOf() === 0) {
          isIncludes = true;
        }
      });
      if (isIncludes) {
        return value;
      }
      isIncludes = false;
      return;
    });
    this.data = result;
    localStorage.setItem('first-page-movies', JSON.stringify(this.data));
    return result;
  }
}
