import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    movie:any;

  constructor(public navCtrl: NavController,
      private movieProvider: MovieProvider
    ) {
       this.movieProvider.getMovie().subscribe(movies => {
         this.movie = (movies as any).results
         console.log(movies);
       },error => {
           console.log(error);
       })
  }
}