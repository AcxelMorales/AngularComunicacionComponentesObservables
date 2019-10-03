import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    HomeComponent, 
    PricingComponent
  ],
  exports: [
    HomeComponent, 
    PricingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
