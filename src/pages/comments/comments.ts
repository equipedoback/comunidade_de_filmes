import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  Comments=[
    {
      comment:"Adorei o Filme",
      date:new Date()
    },
    {
      comment:"Realmente muito bom",
      date:new Date()
    }
  ];
  movie_id:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
      this.movie_id = this.navParams.get('movier_id');
    }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

}
