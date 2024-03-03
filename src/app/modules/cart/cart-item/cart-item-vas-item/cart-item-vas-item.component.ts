import {Component, Input} from '@angular/core';
import {CartItem} from "../../models/CartItem";
import {calculatePrice} from "../../store/cart.reducer";

@Component({
  selector: 'app-cart-item-vas-item',
  templateUrl: './cart-item-vas-item.component.html',
  styleUrl: './cart-item-vas-item.component.css'
})
export class CartItemVasItemComponent {
  @Input() vasItems: CartItem[] = [];

  calculateTotal(cartItem: CartItem): number {
    return calculatePrice(cartItem)
  }
}
