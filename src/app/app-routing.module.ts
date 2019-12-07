import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourohfourComponent } from './fourohfour/fourohfour.component';

const routes: Routes = [{ path: 'people-list', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) }, 
{ path: 'planet-list', loadChildren: () => import('./planet/planet.module').then(m => m.PlanetModule) }, 
{ path: 'ship-list', loadChildren: () => import('./ships/ships.module').then(m => m.ShipsModule) },
{ path: 'fourohfour', loadChildren: () => import('./fourohfour/fourohfour.module').then(m => m.FourohfourModule)},
{ path: '',
    redirectTo: '/people-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
