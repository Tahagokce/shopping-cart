import {Component, Input} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getCarts} from "./store/cart.selector";
import {CartState} from "./store/cart.reducer";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent {
    @Input() cart: CartState = {cartTotalPrice: 0, items: []};

    constructor(private store: Store<{ cart: { menuId: number } }>) {
        this.prepareCarts();
    }

    prepareCarts() {
        this.store.pipe(
            select(getCarts)
        ).subscribe(carts => {
            this.cart = carts;
        });
    }
}
