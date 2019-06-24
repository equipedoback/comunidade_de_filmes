import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  api_key="765ea252396a3a5004b96b8940e1661b";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getMovie() {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=' + this.api_key);
  }

}
