import { Component, OnInit } from '@angular/core';
import { RestaurantItemList } from '../interface/restaurant-item-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurantItemList: RestaurantItemList[] = [];

  // set Restaurant Item list 
  restaurantItemData = (item: RestaurantItemList) => {
    this.restaurantItemList.push({
      ...item,
      id: this.restaurantItemList.length + 1
    });
    localStorage.setItem("itemList", JSON.stringify(this.restaurantItemList));
  };

  ngOnInit(): void {
    let getItem: RestaurantItemList | any = localStorage.getItem("itemList");
    if (getItem !== null) {
      this.restaurantItemList = JSON.parse(getItem);
    };
  };
};
