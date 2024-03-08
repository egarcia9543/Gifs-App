import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AtomsModule } from '../atoms/atoms.module';
import { CardListComponent } from './card-list/card-list.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    SidebarComponent,
    CardListComponent
  ]
})
export class MoleculesModule { }
