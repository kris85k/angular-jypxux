import { Component } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { items } from './items';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html'
  })
export class MenuComponent  {
   public items: any[] = items;
}
