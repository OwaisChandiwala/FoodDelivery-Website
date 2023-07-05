import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private connectService: ConnectService){}
addProduct = new FormGroup({ // control form
  prodName : new FormControl(),
  prodImg : new FormControl(), // control input field which data will be inserted
  category : new FormControl(),
  prodPrice: new FormControl(),
  prodQty: new FormControl()
})

submitData(){
  console.log(this.addProduct.value)
}


imgurl:any
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



addData(){
  this.addProduct.patchValue({
    prodImg: this.imgurl
  })
  console.log(this.addProduct.value)
  this.connectService.addProductDetails(this.addProduct.value).subscribe(()=>{
    alert("Data Added Successfully")
  })
}
}
