import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiamondPriceFormComponent } from '../diamond-price-form/diamond-price-form.component';
import { CarPriceFormComponent } from '../car-price-form/car-price-form.component';
import { HomeModule } from '../home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DiamondPriceListComponent } from '../diamond-price-list/diamond-price-list.component';
import { DiamondAttributesRetrieveComponent } from '../diamond-attributes-retrieve/diamond-attributes-retrieve.component';



@NgModule({
  declarations: [
    DiamondPriceFormComponent,
    CarPriceFormComponent,
    DiamondPriceListComponent,
    DiamondAttributesRetrieveComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class MlformsModule { }
