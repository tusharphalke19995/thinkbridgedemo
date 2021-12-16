import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ManageInventoryDetailsComponent } from './manage-inventory-details/manage-inventory-details.component';

const routes: Routes = [
  {
    path : 'manage-inventory-details',
    component : ManageInventoryDetailsComponent,
    data : {
      title : 'ManagerInventory'
    }
  },
  {
    path : 'inventory-list',
    component :InventoryListComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerFAQRoutingModule { }
