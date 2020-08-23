import { movie } from './movies.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  selectedMovie: movie;
  moviePrice: number;
  movieList: movie[] = [
    {
      id: 1,
      movieName: 'Coraline',
      price: '7.13',
      movieDate: '7/9/2017',
    },
    {
      id: 2,
      movieName: 'Finding Dory',
      price: '10.09',
      movieDate: '12/12/2016',
    },
    {
      id: 3,
      movieName: 'The Wailing',
      price: '10.69',
      movieDate: '3/9/2017',
    },
    {
      id: 4,
      movieName: 'The Void',
      price: '8.85',
      movieDate: '10/30/2017',
    },
    {
      id: 5,
      movieName: 'Tower',
      price: '8.47',
      movieDate: '4/6/2017',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  setMovie(movieIndex: number): void {
    // if (this.selectedMovie === this.movieList[movieIndex]) {
    //   this.unsetMovie();
    // } else {
    this.selectedMovie = this.movieList[movieIndex];
    this.moviePrice = parseFloat(this.selectedMovie.price);
    // }
  }
  unsetMovie(): void {
    this.selectedMovie = undefined;
  }
}
