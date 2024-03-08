import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() titleText: string = '';
  @Input() titleClass: string = '';
}
