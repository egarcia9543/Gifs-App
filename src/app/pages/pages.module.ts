import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AtomsModule } from '../components/atoms/atoms.module';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
