import { Injectable } from '@angular/core';
import { inventoryList } from "../data/data";
import { Inventory } from "../model/inventory";

@Injectable({
  providedIn: 'root'
})
export class GetAllInventoryService {

  inventoryList: Inventory[] = inventoryList;
  constructor() { }

  getAllInventory() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.inventoryList };
        resolve(data);
      }, 2000);
    });
  }

}
