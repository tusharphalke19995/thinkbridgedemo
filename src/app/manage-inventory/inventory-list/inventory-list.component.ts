import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllInventoryService } from 'src/app/services/get-all-inventory.service';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrManager } from "ng6-toastr-notifications";
import { Inventory } from 'src/app/model/inventory';
import { TimeHolder } from 'ng-zorro-antd/time-picker/time-holder';


@Component({
  selector: 'app-question-list',
  templateUrl: './inventory-list.component.html',
  
})
export class InventoryListComponent implements OnInit {

  inventoryList: Inventory[] = [];

  constructor( private router:Router, public toastr: ToastrManager,
    private sharedService: SharedService,    private getAllInventoryService: GetAllInventoryService,  private getAllInventory: GetAllInventoryService){
      sharedService.setViewInventoryId(null);
  }

  ngOnInit() {
    this.getInventoryDetails();
  }

  isVisible = false;
  deleteModalFlag = false;
  modifyInventoryFlag = false;
  selectedInventory = 0;
  inventoryname;
  shortdesciption;
  longdesciption;
  price;
  
  gotToBack(){
   this.router.navigateByUrl("/manage-inventory/manage-inventory-details")
}

  deleteModal(i){
    this.deleteModalFlag = true;
    this.selectedInventory = i;
  }

  CancelDelete(){
    this.deleteModalFlag = false;
  }

  ConfirmDelete(){
    console.log("Inventory Delete");
    this.inventoryList.splice(this.selectedInventory,1);
    this.deleteModalFlag = false;
    this.toastr.successToastr("Selected Inventory delete Successfully")
  }

  modifyInventory(i){
    this.modifyInventoryFlag = true;
    this.selectedInventory = i;
  }

  CancelModify(){
    this.modifyInventoryFlag = false;
  }

  ConfirmModify(){
 
    console.log(" this.inventoryList", this.inventoryList);
    this.inventoryList[this.selectedInventory].inventoryname = (<HTMLInputElement>document.getElementById("modifiedinventoryname")).value;
    this.inventoryList[this.selectedInventory].shortdesciption = (<HTMLInputElement>document.getElementById("modifiedshortdesciption")).value;
    this.inventoryList[this.selectedInventory].longdesciption = (<HTMLInputElement>document.getElementById("modifiedlongdesciption")).value;
    this.inventoryList[this.selectedInventory].price = (<HTMLInputElement>document.getElementById("modifiedprice")).value;
    // this.getAllInventoryService.inventoryList.push(this.createInventoryForm.value);
    this.toastr.successToastr("Selected Inventory modified Successfully");
    this.modifyInventoryFlag = false;
  }

  getInventoryDetails(){
    console.log("get");
    
    const promise = this.getAllInventory.getAllInventory();
    promise.then(
      response => {
        this.inventoryList = response["res"];
        console.log("inventoryList",this.inventoryList);
      },
      error => {
        console.log("error " + error);
      }
    )}

}
