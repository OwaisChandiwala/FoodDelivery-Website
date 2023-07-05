import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AboutComponent } from "./about/about.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { BurgerComponent } from "./category/burger/burger.component";
import { CategoryModule } from "./category/category.module";
import { PizzaComponent } from "./category/pizza/pizza.component";
import { ShawarmaComponent } from "./category/shawarma/shawarma.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UpdateprodComponent } from "./updateprod/updateprod.component";

const routes: Routes=[
  {
    path:'', component:HomeComponent
  },
  {
    path:"update", component:UpdateprodComponent
  },
  {
    path:'addProd' , component: AddProductComponent
  },
  {
    path:'about', component:AboutComponent,children:[
      {
      path:'aboutMe', component:AboutMeComponent
    },
    ],
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'user', component:UsersComponent
  },
  {
    path:'cat', loadChildren: ()=> import("./category/category.module").then(mod =>mod.CategoryModule)
  },
  {
    path:'auth', loadChildren: ()=> import('./auth/auth.module').then(md => md.AuthModule)
  }


];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:  [RouterModule]
})
export class AppRoutingModule{ }
