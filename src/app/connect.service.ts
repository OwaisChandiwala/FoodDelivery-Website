import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {


  // Unlerated Component for Add cart
  // myMethod$: Observable<any>;
  // private myMethodSubject = new Subject<any>();
  // constructor(private http:HttpClient) {
  //   this.myMethod$ = this.myMethodSubject.asObservable();
  // }

  // myMethod(data:any) {
  //     console.log(data)
  //     this.myMethodSubject.next(data);
  // }



  constructor(private http:HttpClient) {}


  //Burgers
  //GET API
  getBurgersDetails(){
    return this.http.get('http://localhost:4500/burgers')
  }
   //search API
   getBurgersSearchDetails(id:any){
    return this.http.get(`http://localhost:4500/burgers/${id}`)
  }
  //Pizza
  //GET API
  getPizzaDetails(){
    return this.http.get('http://localhost:4500/pizza')
  }
  //search API
  getPizzaSearchDetails(id:any){
    return this.http.get(`http://localhost:4500/pizza/${id}`)
  }
   //Burgers
  //GET API
  getshawarmasDetails(){
    return this.http.get('http://localhost:4500/shawarma')
  }
   //search API
   getshawarmasSearchDetails(id:any){
    return this.http.get(`http://localhost:4500/shawarma/${id}`)
  }




   //Add to cart
  //GET API
  getcartDetails(){
    return this.http.get('http://localhost:4500/cart')
  }
  //POST API
  addcartDetails(formData:any){
    return this.http.post('http://localhost:4500/cart/addproduct',formData)
  }

  //delete API
  deletecart(){
    return this.http.delete('http://localhost:4500/cart/remove')
  }




  //POST API
  posturl:any
  addProductDetails(formdata:any){
    console.log(formdata.prodImg)
    if(formdata.category == "Burger"){
      this.posturl='http://localhost:4500/burgers/addproduct'
    }
    else if(formdata.category == "Pizza"){
      this.posturl='http://localhost:4500/pizza/addproduct'
    }
    else if(formdata.category == "Shawarma"){
      this.posturl='http://localhost:4500/shawarma/addproduct'
    }

    return this.http.post(this.posturl, formdata)
  }



  updateUrl:any=""
  // PUT API - Update
  updateProd(formdata:any,id:any){
    if(formdata.category=="burger"){
      this.updateUrl=`http://localhost:4500/burgers/updateProd/${id}`
    }
    else if(formdata.category=="pizza"){
      this.updateUrl=`http://localhost:4500/pizza/updateProd/${id}`
    }
    else if(formdata.category=="shawarma"){
      this.updateUrl=`http://localhost:4500/shawarma/updateProd/${id}`
    }

    return this.http.put(this.updateUrl,formdata)
  }





}
