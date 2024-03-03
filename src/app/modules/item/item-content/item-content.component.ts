import {Component, Input} from '@angular/core';
import {ItemContent} from "../model/ItemContent";
import {Store} from "@ngrx/store";
import {addItem, removeItem} from "../../cart/store/cart.actions";

@Component({
    selector: 'app-item-content',
    templateUrl: './item-content.component.html',
    styleUrl: './item-content.component.css'
})
export class ItemContentComponent {
    @Input() cartItem!: ItemContent;

    constructor(private store: Store) {
    }

    addItemToCart() {
        this.store.dispatch(addItem({item: this.cartItem}));

    }

    removeItemToCart() {
        this.store.dispatch(removeItem({itemId: this.cartItem.id}));
    }
}
