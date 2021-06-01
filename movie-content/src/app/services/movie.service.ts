import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, switchMap } from 'rxjs/operators';
import { moviesData } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesData$: ReplaySubject<any>;
  serverMoviesData: any;

  constructor() {
    this.moviesData$ = new ReplaySubject();
    this.serverMoviesData =  JSON.parse(String(localStorage.getItem('currentUser'))) || moviesData;
  }

  getCovidData$(): Observable<any> {
    return this.moviesData$.asObservable().pipe(
      map((response) => {
        const result = response.Countries.map((value: any) => {
          return { country: value.Country, date: value.Date };
        });
        return result;
      })
    );
  }

  getLastData() {
    
    return this.moviesData$;
  }

  getCurrentCovidApi(): Observable<any> {
    const result$ = fromFetch(this.serverMoviesData).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json();
        }
        return of({ error: true, message: `Error ${response.status}` });
      }),
      catchError((err) => {
        console.error(err);
        return of({ error: true, message: err.message });
      })
    );
    return result$;
  }
}
