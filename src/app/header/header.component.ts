import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


 dis:any="none"
 bot:any="none"
 show(){
  this.dis=="none"? this.dis="block" :this.dis="none"
 }
 hide(){
  this.dis=="none"? this.dis="block" :this.dis="none"
 }
 show1(){
  this.bot=="none"? this.bot="block" :this.bot="none"

 }
 hide1(){
  this.bot=="none"? this.bot="block" :this.bot="none"
 }
 constructor(private router: Router, private connectservice: ConnectService, private http: HttpClient){
 }
 openForm(){
this.router.navigate(['addProd'])
 }



 Product:any
 burger:any
 pizza:any
 shawarma:any
 searchProduct(name:any){
        this.connectservice.getBurgersDetails().subscribe(mdata=>{
          this.burger = mdata
          console.log(this.burger)

        for(let d of this.burger){
          if(name == d.BurgerName){
            this.Product = d
          }
        }
        console.log(this.Product)

      })
    }




}
