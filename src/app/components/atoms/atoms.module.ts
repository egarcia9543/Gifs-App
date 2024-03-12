import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { GifsCardComponent } from './gifs-card/gifs-card.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    SearchBoxComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ButtonComponent,
    TitleComponent,
    SearchBoxComponent,
    GifsCardComponent
  ]
})
export class AtomsModule { }
