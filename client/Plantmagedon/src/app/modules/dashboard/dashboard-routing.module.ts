import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PlantAddComponent } from './plant-add/plant-add.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
//todo: enum -> routingpaths
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'addPlant',
    component: PlantAddComponent
  },
  {
    path: '/:id',
    component: PlantDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
