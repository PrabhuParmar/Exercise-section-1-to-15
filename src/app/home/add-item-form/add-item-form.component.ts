import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantItemList } from 'src/app/interface/restaurant-item-list';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent {
  @Output() restaurantItem = new EventEmitter<RestaurantItemList>();
  // space Not Allowed validation 
  spaceNotAllowed = (control: AbstractControl) => {
    return control.value !== null && control.value.indexOf(' ') !== -1 ? { spaceNotAllowedStatus: true } : null;
  };

  // price Validation 
  setPriceLimit = (control: AbstractControl) => {
    return control.value <= 0 && control.value !== null ? { tooLittleBudget: true } : null;
  };

  // set restaurantItemForm 
  restaurantItemForm: FormGroup = new FormGroup({
    itemName: new FormControl('', [Validators.required, this.spaceNotAllowed, Validators.pattern('[a-zA-Z ]*')]),
    imageUrl: new FormControl('', [Validators.required, this.spaceNotAllowed]),
    category: new FormControl('south indian', []),
    price: new FormControl(null, [Validators.required, this.setPriceLimit]),
    special: new FormControl(false),
  });

  // Add Item 
  onAddItem = () => {
    this.restaurantItem.emit(this.restaurantItemForm.value);
    this.restaurantItemForm.reset();
    this.restaurantItemForm.patchValue({
      category: 'south indian',
      special: false
    });
  };
};
