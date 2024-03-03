import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from "./item.component";
import {NzCardModule} from 'ng-zorro-antd/card'
import {ItemContentComponent} from "./item-content/item-content.component";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {StoreModule} from "@ngrx/store";
import {menuReducer} from "./store/item.reducer";
import {cartReducer} from "../cart/store/cart.reducer";
import {NzIconDirective, NzIconModule} from "ng-zorro-antd/icon";
import {HomeOutline, MenuOutline, MinusOutline, PlusOutline} from "@ant-design/icons-angular/icons";


@NgModule({
    declarations: [
        ItemComponent,
        ItemContentComponent,
    ],
    exports: [
        ItemComponent
    ],
    imports: [
        CommonModule,
        NzCardModule,
        NzColDirective,
        NzRowDirective,
        NzButtonComponent,
        StoreModule.forFeature('menu', menuReducer),
        StoreModule.forFeature('cart', cartReducer),
        NzIconDirective,
        NzIconModule.forChild([HomeOutline, MenuOutline, PlusOutline, MinusOutline]),

    ]
})
export class ItemModule {
}
