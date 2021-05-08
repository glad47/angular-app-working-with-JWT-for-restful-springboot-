import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart:CartServiceService;
  constructor(cart:CartServiceService) {
    this.cart=cart;
   }

  ngOnInit(): void {
  }

}
