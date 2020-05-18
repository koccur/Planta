import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { PlantAddComponent } from './plant-add/plant-add.component';


@NgModule({
  declarations: [DashboardComponent, PlantCardComponent, PlantDetailsComponent, PlantAddComponent],
  imports: [
    SharedModule,
    TranslateModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
