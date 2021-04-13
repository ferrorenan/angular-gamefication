import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreComponent } from './explore.component';
import { ExploreRoutingModule } from './explore-routing.module';
import {PanelModule} from '../../components/panel/panel.module';
import {CardModule} from '../../components/card/card.module';

@NgModule({
  declarations: [
    ExploreComponent,
  ],
  imports: [
    CommonModule,
    PanelModule,
    CardModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
