import { Component} from '@angular/core';


@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory-details.component.html',
})
export class ManageInventoryDetailsComponent {

  header = ["Inventory Name","Long Description","short Description","Price"]

  thinkbridge = [{Category:"Profile Creation",FAQ:"12",Last_Updated:"15 March,2020"},
             {Category:"Post Project",FAQ:"14",Last_Updated:"12 Feb,2021"}];
  

  categoryTypeArray = ["thinkbridge","Employer","Gigprenuers" ];
  isVisible = false;
  selectedCategory = "thinkbridge";
  category;
  deleteModalFlag =false;
  modifyQuestionFlag =false;
  selectedDetail = 0;
  selectedArray;
  modifyArray =  this.thinkbridge;
 
  popupCreate(){
      this.isVisible = true;
  }

  handleOk(): void {
      this.category = (<HTMLInputElement>document.getElementById("category-name")).value;
      
      if(this.selectedCategory == "thinkbridge"){
        this.thinkbridge.push({Category : this.category,FAQ:"0",Last_Updated:"12 May,2021"})
      }
     
      console.log('Button ok clicked!', this.category);
      this.isVisible = false;
    }
  
    handleCancel(): void {
      console.log('Button cancel clicked!')
      this.isVisible = false;
    }

    selectCategory(obj){
      this.selectedCategory = obj;
    }

    deleteModal(i,arrayname){
      this.deleteModalFlag = true;
      this.selectedDetail = i;
      this.selectedArray = arrayname;
      console.log(this.selectedArray)
    }

    CancelDelete(){
      this.deleteModalFlag = false;
    }
  
    ConfirmDelete(){
      this.deleteModalFlag = false;
      if(this.selectedArray == "thinkbridge"){
        this.thinkbridge.splice(this.selectedDetail,1)
      }
    }
  
    modifyQuestion(i,arrayname){
      this.modifyQuestionFlag = true;
      this.selectedDetail = i;
      this.selectedArray = arrayname;
      if(this.selectedArray == "thinkbridge"){ 
        this.modifyArray = this.thinkbridge;
      }
    }

    CancelModify(){
      this.modifyQuestionFlag = false;
    }

    ConfirmModify(){
      this.modifyQuestionFlag = false;
      if(this.selectedArray == "thinkbridge"){ 
         this.thinkbridge[this.selectedDetail].Category= (<HTMLInputElement>document.getElementById("modifiedcategory")).value;
         this.thinkbridge[this.selectedDetail].FAQ= (<HTMLInputElement>document.getElementById("modifiedFAQ")).value
      }
     
    }
}
