import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-rounting.module';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
