// restaurant item list InterFace 
export interface RestaurantItemList {
    itemName: string;
    imageUrl: string;
    category: string;
    price: number;
    special: boolean;
    id?: number;
    count?: number
}
