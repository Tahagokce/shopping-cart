import {ItemContent} from "../../item/model/ItemContent";

export class CartItem extends ItemContent{
    quantity: number = 0;
    vasItems: CartItem[] = [];
    plu: number = 0;
    private totalPrice: number = 0;
}
