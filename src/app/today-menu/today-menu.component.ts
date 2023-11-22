import { Component } from '@angular/core';
import { MenuListService } from '../service/menu-list.service';
import { RestaurantItemList } from '../interface/restaurant-item-list';

@Component({
  selector: 'app-today-menu',
  templateUrl: './today-menu.component.html',
  styleUrls: ['./today-menu.component.css']
})
export class TodayMenuComponent {
  groupByCategory: any[] = [];

  constructor(private menuListService: MenuListService) {
    this.groupByCategory = menuListService.groupByCategory;
  };

  // remove Item 
  removeItem = (restaurantItem: RestaurantItemList) => {
    this.menuListService.removeData(restaurantItem);
  };
};
