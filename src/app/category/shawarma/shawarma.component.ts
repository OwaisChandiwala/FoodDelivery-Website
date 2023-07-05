import { Component } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';

@Component({
  selector: 'app-shawarma',
  templateUrl: './shawarma.component.html',
  styleUrls: ['./shawarma.component.css']
})
export class ShawarmaComponent {

  constructor(private ConnectService: ConnectService) {
  }

  ngOnInit(){
    this.getShawarma()
  }

//Shawarma section
Shawarmalist:any
getShawarma(){
  this.ConnectService.getshawarmasDetails().subscribe((mongoDBdata)=>{
    this.Shawarmalist = mongoDBdata
    console.log(this.Shawarmalist)
  })
}


}
