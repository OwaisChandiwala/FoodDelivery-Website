import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule} from '@angular/material/grid-list'
import { CategoryRoutingModule } from './category-routing.module';
import { PizzaComponent } from './pizza/pizza.component';
import { BurgerComponent } from './burger/burger.component';
import { ShawarmaComponent } from './shawarma/shawarma.component';
import { CartComponent } from './cart/cart.component'

@NgModule({
  declarations: [
    PizzaComponent,
    BurgerComponent,
    ShawarmaComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatGridListModule,
  ]
})
export class CategoryModule { }
