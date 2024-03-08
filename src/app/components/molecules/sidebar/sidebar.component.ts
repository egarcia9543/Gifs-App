import { Component } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'molecule-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public sideMenuTitle = 'Gifs App';
  public staticMenuItemClass = 'btn btn-light mb-2 w-100';

  constructor(private gifsService: GifsService) { }

  get tags() {
    return this.gifsService.tagsHistory
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
