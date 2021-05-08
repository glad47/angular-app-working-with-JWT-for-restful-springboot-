import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private cart:CartServiceService,private http:HttpClient) {}
  model:any = {
    deliveryName: '',
    deliveryStreet: '',
    deliveryState: '',
    deliveryZip: '',
    ccNumber: '',
    ccExpiration: '',
    ccCVV: '',
    tacos : []
  };

  get cartItems(){
    return this.cart.getItemsInCart;
  }
  get cartTotal(){
    return this.cart.getCartTotal;
  }
  onSubmit(){
    this.cart.getItemsInCart().forEach(cartItem => {
      this.model.tacos.push(cartItem.taco);
    });
    const url="http://locakhost:8080/order";
    
   this.http.post(url,this.model,{headers:new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Accept','application/json')})
   .subscribe(r=>this.cart.emptyCart()); 
  }
  ngOnInit(): void {
  }

}
