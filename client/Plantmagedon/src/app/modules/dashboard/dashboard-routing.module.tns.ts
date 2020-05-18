import { NgModule } from '@angular/core';
import { routes } from '@src/app/modules/dashboard/dashboard.routes';
import { NativeScriptRouterModule } from "nativescript-angular/router";



@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})

export class DashboardRoutingModule {
}
