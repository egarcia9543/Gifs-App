import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TitleComponent,
    SearchBoxComponent
  ]
})
export class AtomsModule { }
