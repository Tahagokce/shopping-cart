import {MenuItem} from "../app/modules/menu/model/MenuItem";
import {ItemContent} from "../app/modules/item/model/ItemContent";
import {CartItem} from "../app/modules/cart/models/CartItem";

const menuItems: MenuItem[] = [
  {id: 1, name: 'Daily' },
  {id: 2, name: 'Ala Carte' },
  {id: 3, name: 'Dessert' },
  {id: 4, name: 'Lunch' },
  {id: 5, name: 'Drink' },
];


const cartItems: ItemContent[] = [
  {id: 1, menuId: 1, content: 'Ürün 1', price: 2003.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 2, menuId: 1, content: 'Ürün 2', price: 102.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 3, menuId: 1, content: 'Ürün 3', price: 1009.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 4, menuId: 1, content: 'Ürün 4', price: 920.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 5, menuId: 1, content: 'Ürün 5', price: 450.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 6, menuId: 1, content: 'Ürün 6', price: 530.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 7, menuId: 1, content: 'Ürün 7', price: 300.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 8, menuId: 1, content: 'Ürün 8', price: 5324.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 9, menuId: 1, content: 'Ürün 9', price: 5442.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 10, menuId: 1, content: 'Ürün 10', price: 23.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 11, menuId: 1, content: 'Ürün 11', price: 321.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },

  {id: 12, menuId: 2, content: 'Ürün 1', price: 113.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 13, menuId: 2, content: 'Ürün 2', price: 10.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 14, menuId: 2, content: 'Ürün 3', price: 923.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 15, menuId: 2, content: 'Ürün 4', price: 20.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 16, menuId: 2, content: 'Ürün 5', price: 40.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 17, menuId: 2, content: 'Ürün 6', price: 50.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 18, menuId: 2, content: 'Ürün 7', price: 31.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 19, menuId: 2, content: 'Ürün 8', price: 24.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 20, menuId: 2, content: 'Ürün 9', price: 32.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 21, menuId: 2, content: 'Ürün 10', price: 1.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 22, menuId: 2, content: 'Ürün 11', price: 31.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },


  {id: 23, menuId: 3, content: 'Ürün 1', price: 33.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 24, menuId: 3, content: 'Ürün 2', price: 51.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 25, menuId: 3, content: 'Ürün 3', price: 359.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 26, menuId: 3, content: 'Ürün 4', price: 32.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 27, menuId: 3, content: 'Ürün 5', price: 4544.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 28, menuId: 3, content: 'Ürün 6', price: 135.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 29, menuId: 3, content: 'Ürün 7', price: 530.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 30, menuId: 3, content: 'Ürün 8', price: 534.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 31, menuId: 3, content: 'Ürün 9', price: 32.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 32, menuId: 3, content: 'Ürün 10', price: 12.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 33, menuId: 3, content: 'Ürün 11', price: 21.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },


  {id: 34, menuId: 4, content: 'Ürün 1', price: 203.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 35, menuId: 4, content: 'Ürün 2', price: 10.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 36, menuId: 4, content: 'Ürün 3', price: 5009.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 37, menuId: 4, content: 'Ürün 4', price: 920.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 38, menuId: 4, content: 'Ürün 5', price: 450.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 39, menuId: 4, content: 'Ürün 6', price: 500.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 40, menuId: 4, content: 'Ürün 7', price: 300.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 41, menuId: 4, content: 'Ürün 8', price: 5324.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 42, menuId: 4, content: 'Ürün 9', price: 5432.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 43, menuId: 4, content: 'Ürün 10', price: 123.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 44, menuId: 4, content: 'Ürün 11', price: 1321.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },


  {id: 45, menuId: 5, content: 'Ürün 1', price: 83.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 46, menuId: 5, content: 'Ürün 2', price: 17.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 47, menuId: 5, content: 'Ürün 3', price: 609.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 48, menuId: 5, content: 'Ürün 4', price: 70.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 49, menuId: 5, content: 'Ürün 5', price: 70.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 50, menuId: 5, content: 'Ürün 6', price: 30.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 51, menuId: 5, content: 'Ürün 7', price: 350.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 52, menuId: 5, content: 'Ürün 8', price: 724.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 53, menuId: 5, content: 'Ürün 9', price: 832.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 54, menuId: 5, content: 'Ürün 10', price: 823.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
  {id: 55, menuId: 5, content: 'Ürün 11', price: 321.0, currency: '$', img: "https://www.shutterstock.com/image-vector/simple-business-logo-vector-illustration-260nw-2224622037.jpg" },
];


const vasItems = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: 90 + i,
    menuId: Math.floor(Math.random() * 3) + 1,
    content: `+ Vas ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 100,
    currency: "$",
    img: "",
    quantity: Math.floor(Math.random() * 3) + 1
  };
});


const getRandomVasItem = (): CartItem[] => {

  const randomData: CartItem[] = [];

  while (randomData.length < Math.floor(Math.random() * 3) + 1) {
    const randomIndex = Math.floor(Math.random() * vasItems.length);
    const item: CartItem = vasItems[randomIndex] as CartItem;

    if (!randomData.includes(item)) {
      randomData.push(item);
    }
  }

  debugger
  return randomData;
}


export default {menuItems, cartItems, vasItems, getRandomVasItem};
