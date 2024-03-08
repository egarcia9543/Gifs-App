import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonPlaceholder: string = '';
  @Input() buttonClass: string = '';

}
