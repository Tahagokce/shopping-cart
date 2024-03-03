import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CartComponent} from "../../app/modules/cart/cart.component";
import {CommonModule} from "@angular/common";
import {CartModule} from "../../app/modules/cart/cart.module";
import {StoreModule} from "@ngrx/store";


const meta: Meta<CartComponent> = {
    title: 'Example/Cart',
    component: CartComponent,
    tags: ['autodocs'],
    render: (args) => ({props: args}),
    decorators: [
        moduleMetadata({
            imports: [CommonModule, CartModule, StoreModule.forRoot({}, {}),],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<CartComponent>;

export const showCart: Story = {
    args: {
        cart: {
            cartTotalPrice: 11019,
            items: [
                {
                    "id": 4,
                    "menuId": 1,
                    "price": 920,
                    "currency": "$",
                    "content": "Ürün 4",
                    "img": "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg",
                    "quantity": 1,
                    "vasItems": [
                        // @ts-ignore
                        {
                            "id": 96,
                            "menuId": 3,
                            "content": "+ Vas 7",
                            "price": 191,
                            "currency": "$",
                            "img": "",
                            "quantity": 2
                        }
                    ],
                    "plu": 100,
                    "totalPrice": 0
                },
                {
                    "id": 6,
                    "menuId": 1,
                    "price": 530,
                    "currency": "$",
                    "content": "Ürün 6",
                    "img": "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg",
                    "quantity": 1,
                    "vasItems": [
                        // @ts-ignore
                        {
                            "id": 99,
                            "menuId": 1,
                            "content": "+ Vas 10",
                            "price": 114,
                            "currency": "$",
                            "img": "",
                            "quantity": 3
                        },
                        // @ts-ignore
                        {
                            "id": 95,
                            "menuId": 3,
                            "content": "+ Vas 6",
                            "price": 164,
                            "currency": "$",
                            "img": "",
                            "quantity": 1
                        }
                    ],
                    "plu": 100,
                    "totalPrice": 0
                },
                {
                    "id": 1,
                    "menuId": 1,
                    "price": 2003,
                    "currency": "$",
                    "content": "Ürün 1",
                    "img": "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg",
                    "quantity": 4,
                    "vasItems": [
                        // @ts-ignore
                        {
                            "id": 92,
                            "menuId": 3,
                            "content": "+ Vas 3",
                            "price": 174,
                            "currency": "$",
                            "img": "",
                            "quantity": 1
                        },
                        // @ts-ignore
                        {
                            "id": 90,
                            "menuId": 3,
                            "content": "+ Vas 1",
                            "price": 165,
                            "currency": "$",
                            "img": "",
                            "quantity": 3
                        }
                    ],
                    "plu": 100,
                    "totalPrice": 0
                }
            ]
        }
    },
};
