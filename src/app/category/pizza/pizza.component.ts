import { Component } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {

  constructor(private ConnectService: ConnectService ){}
ngOnInit(){
  this.getpizza()
}
Price1=20
Price2=19
pizzalist:any
getpizza(){
  this.ConnectService.getPizzaDetails().subscribe((mongoDBdata)=>{
    this.pizzalist = mongoDBdata
    console.log(this.pizzalist)
  })
}



}
