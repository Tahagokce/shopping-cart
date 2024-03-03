import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzCardComponent} from 'ng-zorro-antd/card'
import {NzButtonComponent} from 'ng-zorro-antd/button'
import {MenuComponent} from "./menu.component";
import {MenuItemComponent} from "./menu-item/menu-item.component";
import {StoreModule} from "@ngrx/store";
import {menuReducer} from "../item/store/item.reducer";
import {NzIconDirective} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    NzCardComponent,
    NzButtonComponent,
    StoreModule.forFeature('menu', menuReducer),
    NzIconDirective,

  ]
})
export class MenuModule { }
