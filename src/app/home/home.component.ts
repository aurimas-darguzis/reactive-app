import { Component, ViewEncapsulation } from '@angular/core';
import { ItemsService, Item } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  items: Item[];

  constructor(
    private itemsService: ItemsService
  ) {
    this.itemsService.items$
      .subscribe(items => this.items = items);

    this.itemsService.loadItems();
   }



}
