import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'mfx-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie;
  gonzaloCastillo: Array<String> = ['mmg','mmg','mmg'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie)
  }

  loadDetails() {
    
  }

}
