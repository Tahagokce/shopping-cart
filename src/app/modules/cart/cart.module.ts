import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzCardComponent} from "ng-zorro-antd/card";
import {CartItemComponent} from "./cart-item/cart-item.component";
import {CartComponent} from "./cart.component";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzListComponent, NzListFooterComponent, NzListHeaderComponent, NzListItemComponent} from "ng-zorro-antd/list";
import {CartItemVasItemComponent} from "./cart-item/cart-item-vas-item/cart-item-vas-item.component";
import {NzTypographyComponent} from "ng-zorro-antd/typography";


@NgModule({
  declarations: [
      CartComponent,
      CartItemComponent,
      CartItemVasItemComponent
  ],
  imports: [
    CommonModule,
    NzCardComponent,
    NzRowDirective,
    NzColDirective,
    NzListComponent,
    NzListItemComponent,
    NzListFooterComponent,
    NzListHeaderComponent,
    NzTypographyComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
