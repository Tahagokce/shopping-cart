import {createAction, props} from '@ngrx/store';

export const setMenuId = createAction('[Menu Component] Set Menu Id', props<{ menuId: number }>());
