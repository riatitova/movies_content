import { Injectable } from '@angular/core';
import { movies, movie, moviesData } from '../models/movies';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  dataFirstPage: movies;
  dataSecondPage: movies;

  constructor(private movieService: MovieService) {
    this.dataFirstPage = this.movieService.getMovies('первая');
    this.dataSecondPage = this.movieService.getMovies('вторая');
  }

  searchMovie(movie: string, currentPage: string): movies {
    let allMovies;
    if (currentPage === 'первая') {
      this.dataFirstPage = this.movieService.getMovies(currentPage);
      allMovies = this.dataFirstPage;
    } else {
      this.dataSecondPage = this.movieService.getMovies(currentPage);
      allMovies = this.dataSecondPage;
    }
    const searchedElement = movie.toLowerCase();
    const result: movies = [];
    allMovies.forEach((value: movie) => {
      const movie = value.name.toLowerCase();
      if (movie.includes(searchedElement) && searchedElement.length !== 0) {
        result.push(value);
      }
    });
    if (result.length === 0) {
      currentPage === 'первая'
        ? (this.dataFirstPage = moviesData)
        : (this.dataSecondPage = moviesData);
      this.checkPage(currentPage);
      return moviesData;
    }
    currentPage === 'первая'
      ? (this.dataFirstPage = result)
      : (this.dataSecondPage = result);
    this.checkPage(currentPage);
    return result;
  }

  filterByDate(
    allMoviesDate: Date[],
    startDate: Date,
    endDate: Date,
    currentPage: string
  ): movies {
    const filteredDates = allMoviesDate.map((value) => {
      if (value.valueOf() - startDate.valueOf() >= 0) {
        if (endDate.valueOf() - value.valueOf() >= 0) {
          return value;
        }
      }
      return 0;
    });
    const movies = this.movieService.getMovies(currentPage);
    let isIncludes = false;
    const result = movies.filter((value) => {
      filteredDates.forEach((date) => {
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
    currentPage === 'первая'
      ? (this.dataFirstPage = result)
      : (this.dataSecondPage = result);
    this.checkPage(currentPage);
    return result;
  }

  checkPage(currentPage: string): void {
    if (currentPage === 'первая') {
      localStorage.setItem(
        'first-page-movies',
        JSON.stringify(this.dataFirstPage)
      );
    } else {
      localStorage.setItem(
        'second-page-movies',
        JSON.stringify(this.dataSecondPage)
      );
    }
  }
}
