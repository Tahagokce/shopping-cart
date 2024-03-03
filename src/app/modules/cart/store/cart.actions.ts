import {createAction, props} from '@ngrx/store';
import {ItemContent} from "../../item/model/ItemContent";

export const addItem = createAction('[Cart Component] Add Item', props<{item: ItemContent}>());
export const addVasItem = createAction('[Cart Component] Add Vas Item', props<{itemId: number, vasItem: ItemContent}>());
export const removeItem = createAction('[Cart Component] Remove Item', props<{itemId: number}>());
export const removeVasItem = createAction('[Cart Component] Remove Vas Item', props<{itemId: number, vasItemId: number}>());
export const clear = createAction('[Cart Component] Clear');
