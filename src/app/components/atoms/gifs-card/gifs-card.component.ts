import { Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interface';

@Component({
  selector: 'atom-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent {
  @Input() gif?: Gif;
}
