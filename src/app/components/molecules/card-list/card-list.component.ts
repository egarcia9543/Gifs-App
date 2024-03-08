import { Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interface';

@Component({
  selector: 'molecule-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input() gifs: Gif[] = [];
}
