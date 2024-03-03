import {Component, Input} from '@angular/core';
import {CartItem} from "../models/CartItem";
import {calculatePrice} from "../store/cart.reducer";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() item: CartItem = new CartItem();

  calculateTotal(cartItem: CartItem): number {
    return calculatePrice(cartItem)
  }
}
