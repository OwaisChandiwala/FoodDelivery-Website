import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildcardComponent } from '../wildcard/wildcard.component';
import { BurgerComponent } from './burger/burger.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ShawarmaComponent } from './shawarma/shawarma.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
  path:'burger' , component:BurgerComponent
},
{
  path:'cart/:pid/:cat', component:CartComponent
},
{
  path:'pizza', component:PizzaComponent
},
{
  path:'shawarma', component: ShawarmaComponent
},
// {
//   path:'**', component:WildcardComponent
// // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
