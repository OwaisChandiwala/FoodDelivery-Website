import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from 'src/app/connect.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  constructor(private  ConnectService: ConnectService,private router: Router){ // injecting
  }
  ngOnInit(){
    this.getburgers()
  }
  burgerslist:any
  getburgers(){
    this.ConnectService.getBurgersDetails().subscribe((mongoDBdata)=>{
      this.burgerslist = mongoDBdata
      console.log(this.burgerslist)
    })
  }

  addtocart(id:any){
      this.router.navigate(['/cart',id])
  }

}
