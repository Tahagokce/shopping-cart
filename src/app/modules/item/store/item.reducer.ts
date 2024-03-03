import {Action, createReducer, on} from '@ngrx/store';
import {setMenuId} from './item.actions';

export const menuId: number = 1;

const _menuReducer = createReducer(
    menuId,
    on(setMenuId, (state, { menuId }) => (menuId))
);

export function menuReducer(state: number, action: Action) {
    return _menuReducer(state, action);
}
