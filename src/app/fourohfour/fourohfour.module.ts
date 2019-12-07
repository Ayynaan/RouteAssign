import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourohfourRoutingModule } from './fourohfour-routing.module';
import { FourohfourComponent } from './fourohfour.component';


@NgModule({
  declarations: [FourohfourComponent],
  imports: [
    CommonModule,
    FourohfourRoutingModule
  ]
})
export class FourohfourModule { }
