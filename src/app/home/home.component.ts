import { Component } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(){
    this.getDate()
    this.show()
    this.bott()
    this.show2("all")
  }

status:any
  show2(prod:any){
    if(prod=="all"){
      this.getburgers()
      this.getpizza()
      this.getShawarma()
      this.status='all'
    }
    else if(prod=="shawarmas"){
      this.status="shawarmas"
    }
    else if(prod == "burgers"){
      this.status="burgers"
    }
    else if(prod=="pizzas"){
      this.status="pizzas"
    }

  }


dis11:any
dis12:any
dis13:any
col1:any
col2:any
col3:any
  showMenu(display:any){
    display=='dis11'? (this.dis11="block", this.col1="yellow"):(display=='dis12'? (this.dis12="block", this.col2="yellow"): (this.dis13="block", this.col3="yellow"))
  }

  hideMenu(display:any){
    display=='dis11'? (this.dis11="none",this.col1="white"):(display=='dis12'? (this.dis12="none",this.col2="white"): (this.dis13="none",this.col3="white"))
  };
  Price1=19
  Price2=16
  Price3=20



  today:any=Date()
  getDate(){
    setInterval(()=>{
      this.today=Date()
    },1000)
  }
  customer:any=0
  MyCustomer=999
  show(){
    setInterval(()=>{
      if(this.customer==this.MyCustomer){
        this.customer=this.MyCustomer
      }
      else{
        this.customer++
      }
    })
  }
  client:any=0;
  myclient:any=650;
  bott(){
    setInterval(()=>{
      if(this.client==this.myclient){
        this.client=this.myclient
      }
      else{
        this.client++
      }
    })
  }


  //Get burgers details
  constructor(private  ConnectService: ConnectService, private router : Router){ // injecting
  }

  burgerslist:any
    getburgers(){
      this.ConnectService.getBurgersDetails().subscribe((mongoDBdata)=>{
        this.burgerslist = mongoDBdata
        console.log(this.burgerslist)
      })
    }


//Pizza section
pizzalist:any
getpizza(){
  this.ConnectService.getPizzaDetails().subscribe((mongoDBdata)=>{
    this.pizzalist = mongoDBdata
    console.log(this.pizzalist)
  })
}


//Shawarma section
Shawarmalist:any
getShawarma(){
  this.ConnectService.getshawarmasDetails().subscribe((mongoDBdata)=>{
    this.Shawarmalist = mongoDBdata
    console.log(this.Shawarmalist)
  })
}


  showburger(){
    this.router.navigate(['cat/burger'])
  }

  addtocart(id:any,cat:any){
    this.router.navigate(['cat/cart',id,cat]);
  }



}

