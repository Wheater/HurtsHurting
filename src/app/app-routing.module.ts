import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WodComponent } from './wod/wod.component';
import { AboutComponent } from './about/about.component';
import { WodManagementComponent } from './wod-management/wod-management.component';

const routes = [
  { path: 'wod', component: WodComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wod/:searchText', component: WodComponent },
  { path: 'wod-management', component: WodManagementComponent },
  { path: '',   redirectTo: '/wod', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}