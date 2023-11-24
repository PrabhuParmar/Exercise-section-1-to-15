import { Injectable } from '@angular/core';
import { RestaurantItemList } from '../interface/restaurant-item-list';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {
  menuListData: RestaurantItemList[] = [];
  menuList: RestaurantItemList[] = [];
  groupByCategory: any[] = [];

  // Add new Restaurant Item 
  setAddedMenuItem = (item: RestaurantItemList) => {
    this.menuListData.push(item);
    // count Quantity 
    const countRestaurantItem = this.menuListData.reduce((setQuantity: number | any, value: RestaurantItemList | any) => {
      return {
        ...setQuantity,
        [value.id]: (setQuantity[value.id] || 0) + 1,
      };
    }, {});

    this.menuListData = this.menuListData.map((item: RestaurantItemList | any) => {
      item["count"] = countRestaurantItem[item.id];
      return item;
    });

    //   Filter Menulist
    const itemId = this.menuListData.map(({ id }) => id);
    this.menuList = this.menuListData.filter(({ id }, index) =>
      !itemId.includes(id, index + 1));

    // Set MenuData category wise 
    const groupData = this.menuList.reduce((group: object | any, item: RestaurantItemList) => {
      const { category } = item;
      group[category] = group[category] ?? [];
      group[category].push(item);
      return group;
    }, {});

    //Get the categories and item related.
    this.groupByCategory = Object.keys(groupData).map(key => ({
      category: key,
      products: groupData[key]
    }));
  };

  // Remove Item 
  removeData = (restaurantItem: RestaurantItemList) => {
    const index = this.groupByCategory.map(object => object.category).indexOf(restaurantItem.category);
    this.groupByCategory.map((object: RestaurantItemList | any) => {

      // remove Item 
      object.products = object.products.filter((item: RestaurantItemList) => {
        return item.id !== restaurantItem.id;
      });

      // remove category 
      if (object.category === restaurantItem.category) {
        if (object.products.length == 0) {
          this.groupByCategory.splice(index, 1);
        };
      };
    });
    // menuList Data Remove and set updated Data in MenuListData
    const restaurantItemIndex = this.menuList.findIndex(object => {
      return object.id === restaurantItem.id;
    });
    this.menuList.splice(restaurantItemIndex, 1);

    this.menuListData = this.menuList;
  };
};
