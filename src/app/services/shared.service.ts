import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  viewInventoryId: number;
  
  constructor() {}

  setViewInventoryId(id) {
    this.viewInventoryId = id;
  }

  getViewInventoryId() {
    return this.viewInventoryId;
  }
}
