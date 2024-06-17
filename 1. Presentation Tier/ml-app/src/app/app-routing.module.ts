import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiamondPriceFormComponent } from './diamond-price-form/diamond-price-form.component';
import { CarPriceFormComponent } from './car-price-form/car-price-form.component';
import { DiamondPriceListComponent } from './diamond-price-list/diamond-price-list.component';
import { DiamondAttributesRetrieveComponent } from './diamond-attributes-retrieve/diamond-attributes-retrieve.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "new-diamond-price", component: DiamondPriceFormComponent},
  {path: "new-car-price", component: CarPriceFormComponent},
  {path: "diamond-list", component: DiamondPriceListComponent},
  {path: "diamond-retrieve", component: DiamondAttributesRetrieveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
