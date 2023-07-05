import { Component } from '@angular/core';
import { ConnectService } from '../connect.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent {

  constructor(private connectService: ConnectService){}
  updateProduct = new FormGroup({ // control form
    prodName : new FormControl(),
    prodID : new FormControl(),
    prodImg : new FormControl(), // control input field which data will be inserted
    category : new FormControl(),
    prodPrice: new FormControl(),
    prodQty: new FormControl(),

  })

  imgurl:any="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-plus-icon-png-image_991993.jpg"
  selectImage(event:any){
    let file = event.target.files[0]
    console.log(file)

    // Convert file data into Base64 Format
    var filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () =>{
      this.imgurl = filereader.result
      console.log(this.imgurl)
    }

   }



  updateData(){
    this.updateProduct.patchValue({
      prodImg: this.imgurl
    })
    console.log(this.updateProduct.value)
    this.connectService.updateProd(this.updateProduct.value,this.updateProduct.value.prodID).subscribe(()=>{
      alert("Data Updated Successfully")
    })
  }
  }

