import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {LayoutComponent} from "../component/layout/layout.component";
import {ContentComponent} from "../component/layout/content/content.component";
import {FooterComponent} from "../component/layout/footer/footer.component";
import {SiderComponent} from "../component/layout/sider/sider.component";
import {MenuModule} from "./modules/menu/menu.module";
import {CartModule} from "./modules/cart/cart.module";
import {ItemModule} from "./modules/item/item.module";
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ContentComponent,
    FooterComponent,
    SiderComponent,
  ],
    imports: [
        BrowserModule,
        NzLayoutModule,
        MenuModule,
        CartModule,
        ItemModule,
        HttpClientModule,
        StoreModule.forRoot({}, {}),
    ],
  providers: [ItemModule, MenuModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
