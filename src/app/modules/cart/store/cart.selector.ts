import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CartState} from "./cart.reducer";

export const cartState = createFeatureSelector<CartState>('cart');

export const getCarts = createSelector(
    cartState,
    (state: CartState) => state
);
