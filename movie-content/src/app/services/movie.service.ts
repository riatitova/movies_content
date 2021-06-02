import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { movies, moviesData } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  moviesDataFirstPage: movies;

  constructor() {
    this.moviesDataFirstPage = JSON.parse(String(localStorage.getItem('first-page-movies'))) || moviesData;
  }
  
  getMovies(): movies {
    return JSON.parse(String(localStorage.getItem('first-page-movies'))) || moviesData;
  }
}
