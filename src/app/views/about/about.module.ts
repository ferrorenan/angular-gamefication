import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutRoutingModule} from './about-routing.module';
import {CharactersModule} from '../../characters/characters.module';



@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    AboutRoutingModule,
    CharactersModule,
    CommonModule
  ]
})
export class AboutModule { }
