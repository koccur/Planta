import { Routes } from '@angular/router';
import { AppComponent } from '@src/app/app.component';

export const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import(`./modules/dashboard/dashboard.module`).then(m => m.DashboardModule)

  },
];
