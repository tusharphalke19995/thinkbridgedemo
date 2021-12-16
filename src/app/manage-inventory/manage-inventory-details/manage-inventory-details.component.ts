import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SharedService } from "src/app/services/shared.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { GetAllInventoryService } from "src/app/services/get-all-inventory.service";
import { Router } from "@angular/router";
import { GetInventoryService } from "src/app/services/get-inventory.service";

@Component({
  selector: "app-manage-inventory",
  templateUrl: "./manage-inventory-details.component.html",
})
export class ManageInventoryDetailsComponent implements OnInit {
  createInventoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastrManager,
    private router: Router, private getInventoryService : GetInventoryService, 
    private sharedService: SharedService,
    private getAllInventory: GetAllInventoryService
  ) {
    sharedService.setViewInventoryId(0);
    this.createInventoryForm = formBuilder.group({
      id: [0],
      inventoryname: ["", Validators.required],
      shortdesciption: ["", Validators.required],
      longdesciption: ["", Validators.required],
      price: ["", [Validators.min(0)]],
    });
  }

  ngOnInit() {}
  header = ["Inventory Name", "Long Description", "short Description", "Price"];

  isVisible = false;

  popupCreate() {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log("form value " + JSON.stringify(this.createInventoryForm.value));
    this.getInventoryService.inventoryList.push(this.createInventoryForm.value);
    if (this.createInventoryForm.valid) {
      this.toastr.successToastr("New Inventory added Successfully!");
      this.router.navigateByUrl("/manage-inventory/inventory-list");
    } else {
      this.toastr.warningToastr("This is not a valid form.", "Alert!");
    }
    this.resetForm();
    this.isVisible = false;
  }


  resetForm(){
    console.log('reset',this.createInventoryForm)
    this.createInventoryForm.reset();
  }


  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
  }
}
