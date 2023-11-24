import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { TodayMenuComponent } from './today-menu/today-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddItemFormComponent } from './home/add-item-form/add-item-form.component';
import { RestaurantItemDisplayComponent } from './home/restaurant-item-display/restaurant-item-display.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SpecialItemDirective } from './directive/special-item.directive';
import { IsEllipsisActiveDirectiveDirective } from './directive/is-ellipsis-active-directive.directive';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodayMenuComponent,
    AddItemFormComponent,
    RestaurantItemDisplayComponent,
    HeaderComponent,
    SpecialItemDirective,
    IsEllipsisActiveDirectiveDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
