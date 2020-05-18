//todo: enum -> routingpaths
import { Routes } from '@angular/router';
import { DashboardComponent } from '@src/app/modules/dashboard/dashboard.component';
import { PlantAddComponent } from '@src/app/modules/dashboard/plant-add/plant-add.component';
import { PlantDetailsComponent } from '@src/app/modules/dashboard/plant-details/plant-details.component';

export const routes: Routes = [
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
