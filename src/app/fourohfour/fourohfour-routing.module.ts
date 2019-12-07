import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourohfourComponent } from './fourohfour.component';

const routes: Routes = [{ path: '', component: FourohfourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourohfourRoutingModule { }
