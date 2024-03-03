import {Component, OnInit} from '@angular/core';
import {ItemContent} from './model/ItemContent';
import MockData from '../../../util/MockData';
import {select, Store} from '@ngrx/store';
import {selectMenuId} from './store/item.selector';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    items: ItemContent[] = [];

    constructor(private store: Store<{ menu: { menuId: number } }>) {
    }

    ngOnInit(): void {
        this.getItems();
    }

    getItems() {
        this.store.pipe(
            select(selectMenuId),
            map(menuId => MockData.cartItems.filter(item => item.menuId === menuId)),
        ).subscribe(filteredItems => {
            this.items = filteredItems;
        });
    }

}
