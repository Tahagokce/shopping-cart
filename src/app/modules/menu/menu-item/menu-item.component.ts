import {Component, Input} from '@angular/core';
import {MenuItem} from "../model/MenuItem";
import {setMenuId} from "../../item/store/item.actions";
import {select, Store} from "@ngrx/store";
import {selectMenuId} from "../../item/store/item.selector";

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
    @Input() menuItem!: MenuItem;
    selectedMenuId: number = 0;

    constructor(private store: Store) {
        this.setSelectedMenuId()
    }

    setMenuId(id: number) {
        this.store.dispatch(setMenuId({menuId: id}));
    }


    setSelectedMenuId() {
        this.store.pipe(
            select(selectMenuId),
        ).subscribe(menuId => {
            this.selectedMenuId = menuId;
        });
    }
}
