import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {
  @Input() public url!: string;
  public isLoaded: boolean = false;

  public onLoad(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  }
}
