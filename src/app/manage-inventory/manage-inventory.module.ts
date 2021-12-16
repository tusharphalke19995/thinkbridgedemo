import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntDesignModule } from '../ant-design/ant-design.module'
import { ManagerFAQRoutingModule } from './manage-inventory-routing.module';
import { ManageInventoryDetailsComponent } from './manage-inventory-details/manage-inventory-details.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManageInventoryDetailsComponent,InventoryListComponent],
  imports: [
    CommonModule,
    ManagerFAQRoutingModule,
    AntDesignModule,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class ManagerFAQModule { }
