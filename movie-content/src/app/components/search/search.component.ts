import { Component } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {

  searchedMovie: string;

  constructor() { 
    this.searchedMovie = '';
  }

  search(movie: string) {
    console.log(movie)
  }
}
