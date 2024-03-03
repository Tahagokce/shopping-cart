import {Component, OnInit} from '@angular/core';
import {MenuItem} from "./model/MenuItem";
import MockData from "../../../util/MockData";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.fetchMenus()
      .then(response => {
        this.menuItems = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async fetchMenus(): Promise<MenuItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const menuItems = MockData.menuItems;
        resolve(menuItems);
      }, 500);
    });
  }
}
