import { Injectable } from '@angular/core';
import { Inventory } from "../model/inventory";
import { inventoryList } from "../data/data";
@Injectable({
  providedIn: 'root'
})
export class GetInventoryService {


  inventory: Inventory;
  inventoryList: Inventory[] = inventoryList;
  constructor() { }

  getInventoryByGivenId(id) {
    this.inventory = this.inventoryList.find(cus => cus._id === id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.inventory);
      }, 2000);
    });
  }
}
