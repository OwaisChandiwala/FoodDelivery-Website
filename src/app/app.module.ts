import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
// import { AuthModule } from './auth/auth.module';
// import { CategoryModule } from './category/category.module';
import { AboutMeComponent } from './about-me/about-me.component';

import { WildcardComponent } from './wildcard/wildcard.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCompModule } from './material-comp/material-comp.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
// import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateprodComponent } from './updateprod/updateprod.component';
import { PaymentComponent } from './payment/payment.component';
// import { RouterComponent } from './memberships/router/router.component';
// import { MembershipsComponent } from './memberships/memberships.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        AboutComponent,
        ContactComponent,
        AboutMeComponent,

        WildcardComponent,
        Comp1Component,
        Comp2Component,
        UsersComponent,
        MainComponent,
        AddProductComponent,
        UpdateprodComponent,
        PaymentComponent,
        // RouterComponent,
        // MembershipsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialCompModule,
        HttpClientModule,
        // CategoryModule,

    ]
})
export class AppModule { }
