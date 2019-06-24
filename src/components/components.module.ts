import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import MovieCardComponent from './movie-card/movie-card';
@NgModule({
	declarations: [MovieCardComponent],
	imports: [IonicModule.forRoot(MovieCardComponent)],
	exports: [MovieCardComponent]
})
export class ComponentsModule {}
