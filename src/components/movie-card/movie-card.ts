import { Component } from '@angular/core';

/**
 * Generated class for the MovieCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.html'
})
export class MovieCardComponent {

  text: string;

  constructor() {
    console.log('Hello MovieCardComponent Component');
    this.text = 'Hello World';
  }

}
