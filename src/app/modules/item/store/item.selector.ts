import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectMenuState = createFeatureSelector<number>('menu');

export const selectMenuId = createSelector(
    selectMenuState,
    (state: number) => state
);
