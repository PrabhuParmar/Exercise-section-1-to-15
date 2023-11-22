import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RestaurantItemList } from 'src/app/interface/restaurant-item-list';
import { MenuListService } from 'src/app/service/menu-list.service';

@Component({
  selector: 'app-restaurant-item-display',
  templateUrl: './restaurant-item-display.component.html',
  styleUrls: ['./restaurant-item-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantItemDisplayComponent {
  @Input() restaurantItemListData: RestaurantItemList[] = [];
  tooltipStatus: boolean = true
  constructor(private menuListService: MenuListService) { }

  itemAddToMenu = (item: RestaurantItemList) => {
    this.menuListService.setAddedMenuItem(item);
  };
};
