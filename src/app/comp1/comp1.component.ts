import { Component } from '@angular/core';
import { TransService } from '../trans.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
constructor(private serv:TransService){}
ngOnInit(){
  this.getCakes
}
// cakesAPi:any =[{
//   Name: "Chocolate Cake",
//   Price: 350,
//   ImagePath: "https://plus.unsplash.com/premium_photo-1663840175559-9f460a3eb29c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   Quantity: "1kg"
// },
// {
//   Name: "Vanilla Cake",
//   Price: 320,
//   ImagePath: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
//   Quantity: "1kg"
// }

cakes:any
getCakes(){
  this.cakes=this.serv.cakesAPi
}

}
