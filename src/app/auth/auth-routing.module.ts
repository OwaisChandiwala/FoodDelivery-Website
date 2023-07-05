import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
// import { WildcardComponent } from '../wildcard/wildcard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [{
path:'sign-in', component:SignInComponent
},
{
path:'account/:id', component:AccountComponent
},
{
  path:'sign-up', component:SignUpComponent
},
// {
//   path:"**", component:WildcardComponent
// },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
