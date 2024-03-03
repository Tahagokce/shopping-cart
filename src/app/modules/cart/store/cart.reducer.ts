import {Action, createReducer, on} from '@ngrx/store';
import {addItem, removeItem} from "./cart.actions";
import {CartItem} from "../models/CartItem";
import {ItemContent} from "../../item/model/ItemContent";
import MockData from "../../../../util/MockData";

export type CartState = { items: CartItem[], cartTotalPrice: number }

export const initialState: CartState = {
    items: [],
    cartTotalPrice: 0
};

const _cartReducer = createReducer(
    initialState,
    on(addItem, (state, {item}) => (prepareItemToAdd(state, item))),
    //on(addVasItem, (state, {itemId, vasItem}) => ({...state, state})),
    on(removeItem, (state,{itemId}) => (removeItemToCart(state, itemId))),
    //on(removeVasItem, (state) => state - 1),
    //on(clear, (state) => 0)
);

export function cartReducer (state: CartState, action: Action) {
    return _cartReducer(state, action)
}

const removeItemToCart = (state: CartState, id: number): CartState  => {
    const items = ifItemHasAlreadyCurrentBeenDecreaseQuantityElseRemoveItem(state, id);

    return {items, cartTotalPrice: cartTotalPrice(items)} as CartState
}


const prepareItemToAdd = (state: CartState, itemToBeAdded: ItemContent): CartState => {
    const items = ifItemHasAlreadyBeenAddedIncreaseQuantityElseAddNewItem(state, itemToBeAdded);

    return {items, cartTotalPrice: cartTotalPrice(items)} as CartState
}

const ifItemHasAlreadyCurrentBeenDecreaseQuantityElseRemoveItem = (state: CartState, id: number): CartItem[] => {
    let cartItems: CartItem[] = [...state.items];
    const item = cartItems.find(item => item.id === id);

    if (item && item?.quantity > 1) {
        cartItems = cartItems.filter(it => it.id !== item.id)
        cartItems.push({...item, quantity: item.quantity - 1} as CartItem);
    } else {
        cartItems = [...cartItems.filter(item => item.id !== id)];
    }

    return cartItems;
}

const cartTotalPrice = (items: CartItem[]): number => {
    let totalPrice = 0;

    for (const item of items) {
        totalPrice += calculatePrice(item);
    }

    return totalPrice;
}


const ifItemHasAlreadyBeenAddedIncreaseQuantityElseAddNewItem = (state: CartState, itemToBeAdded: ItemContent): CartItem[] => {
    let cartItems: CartItem[] = [...state.items];
    const item = cartItems.find(item => item.id === itemToBeAdded.id);

    if (item) {
        cartItems = cartItems.filter(it => it.id !== item.id)
        cartItems.push({...item, quantity: item.quantity + 1} as CartItem);
    } else {
        cartItems.push(prepareItemContentForCart(itemToBeAdded));
    }

    return cartItems;
}

const prepareItemContentForCart = (item: ItemContent): CartItem => {
    const cartItem: CartItem = new CartItem();
    cartItem.img = item.img;
    cartItem.price = item.price;
    cartItem.plu = 100;
    cartItem.vasItems = MockData.getRandomVasItem();
    cartItem.quantity = 1;
    cartItem.currency = item.currency;
    cartItem.id = item.id;
    cartItem.content = item.content;
    cartItem.menuId = item.menuId

    return cartItem;
}

export const calculatePrice = (cartItem: CartItem): number => {
    let total = 0;

    total += cartItem.price * cartItem.quantity;

    if (Array.isArray(cartItem.vasItems)){

        for (const vasItem of cartItem.vasItems) {
            total += vasItem.price * vasItem.quantity;
        }

    }

    return total;
}
