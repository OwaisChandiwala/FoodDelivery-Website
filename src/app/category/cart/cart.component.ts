import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from 'src/app/connect.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private connectService: ConnectService, private activRoute: ActivatedRoute){}

  prodId:any
  category:any=""
  Product:any
  cartProduct:any=[]
  totalPrice:number=0
  ngOnInit(){

    this.activRoute.params.subscribe((id)=>{
      this.prodId = id['pid']
      this.category=id['cat']
      // console.log(this.prodId, this.category)
    })

    if(this.category=="pizza"){
      this.connectService.getPizzaSearchDetails(this.prodId).subscribe((data)=>{
        this.Product=data
        console.log(this.Product)
        let obj:any = new Object();
        obj.name = this.Product[0].PizzaName
        obj.price = this.Product[0].Price
        obj.category = this.Product[0].CATEGORY
      //  this.cartProduct.push(obj)

      this.connectService.addcartDetails(obj).subscribe(()=>{
        console.log(obj)
        location.reload()
      })

      })
    }
    else if(this.category=="burgers"){
      this.connectService.getBurgersSearchDetails(this.prodId).subscribe((data)=>{
        this.Product=data
        console.log(this.Product)
        let obj:any = new Object();
        obj.name = this.Product[0].BurgerName
        obj.price = this.Product[0].PRICE
        obj.category = this.Product[0].CATEGORY
      //  this.cartProduct.push(obj)

      this.connectService.addcartDetails(obj).subscribe(()=>{
        console.log(obj)
        location.reload()
      })
      })
    }
    else if(this.category=="shawarma"){
      this.connectService.getshawarmasSearchDetails(this.prodId).subscribe((data)=>{
        this.Product=data
        console.log(this.Product)
        let obj:any = new Object();
        obj.name = this.Product[0].ShawarmaName
        obj.price = this.Product[0].Price
        obj.category = this.Product[0].CATEGORY
      //  this.cartProduct.push(obj)
      this.connectService.addcartDetails(obj).subscribe(()=>{
        console.log(obj)
        location.reload()
      })
      })
    }


    this.connectService.getcartDetails().subscribe((data)=>{
      this.cartProduct=data
      console.log(this.cartProduct)

      for(let i of this.cartProduct){
        this.totalPrice= this.totalPrice+i.price
      }
    })

    }

    // delete
    deleteall(){
      this.connectService.deletecart().subscribe((data)=>{
        alert('data deleted!')
        location.reload()
      })
    }



}
