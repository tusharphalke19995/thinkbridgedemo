import { Component} from '@angular/core';


@Component({
  selector: 'app-manager-faq',
  templateUrl: './manager-faq-details.component.html',
})
export class ManagerFAQDetailsComponent {

  header = ["Category","FAQs","Last Updated"]

  konnecteum = [{Category:"Profile Creation",FAQ:"12",Last_Updated:"15 March,2020"},
             {Category:"Post Project",FAQ:"14",Last_Updated:"12 Feb,2021"}];
  
  employer = [{Category:"Profile Creation",FAQ:"12",Last_Updated:"15 March,2020"},
             {Category:"Post Project",FAQ:"14",Last_Updated:"12 Feb,2021"}];


  gigprenuers = [{Category:"Profile Creation",FAQ:"12",Last_Updated:"15 March,2020"},
             {Category:"Apply Project",FAQ:"14",Last_Updated:"12 Feb,2021"}];

  categoryTypeArray = ["Konnecteum","Employer","Gigprenuers" ];
  isVisible = false;
  selectedCategory = "Konnecteum";
  category;
  deleteModalFlag =false;
  modifyQuestionFlag =false;
  selectedDetail = 0;
  selectedArray;
  modifyArray =  this.konnecteum;
 
  popupCreate(){
      this.isVisible = true;
  }
  handleOk(): void {
      this.category = (<HTMLInputElement>document.getElementById("category-name")).value;
      
      if(this.selectedCategory == "Konnecteum"){
        this.konnecteum.push({Category : this.category,FAQ:"0",Last_Updated:"12 May,2021"})
      }
      else if(this.selectedCategory == "Employer"){
        this.employer.push({Category : this.category,FAQ:"0",Last_Updated:"12 May,2021"})
      }
      else{
        this.gigprenuers.push({Category : this.category,FAQ:"0",Last_Updated:"12 May,2021"})
      }
      console.log('Button ok clicked!');
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
      if(this.selectedArray == "Konnecteum"){
        this.konnecteum.splice(this.selectedDetail,1)
      }
      else if(this.selectedArray == "Employer"){
        this.employer.splice(this.selectedDetail,1)
      }
      if(this.selectedArray == "Gigprenuers"){
        this.gigprenuers.splice(this.selectedDetail,1)
      }

    }
  
    modifyQuestion(i,arrayname){
      this.modifyQuestionFlag = true;
      this.selectedDetail = i;
      this.selectedArray = arrayname;
      if(this.selectedArray == "Konnecteum"){ 
        this.modifyArray = this.konnecteum;
      }
      else if(this.selectedArray == "Employer"){ 
        this.modifyArray = this.employer;
      }
      else if(this.selectedArray == "Gigprenuers"){ 
        this.modifyArray = this.gigprenuers;
      }
      
    }
    CancelModify(){
      this.modifyQuestionFlag = false;
    }
    ConfirmModify(){
      this.modifyQuestionFlag = false;
      if(this.selectedArray == "Konnecteum"){ 
         this.konnecteum[this.selectedDetail].Category= (<HTMLInputElement>document.getElementById("modifiedcategory")).value;
         this.konnecteum[this.selectedDetail].FAQ= (<HTMLInputElement>document.getElementById("modifiedFAQ")).value
      }
      else if(this.selectedArray == "Employer"){ 
        this.employer[this.selectedDetail].Category= (<HTMLInputElement>document.getElementById("modifiedcategory")).value;
        this.employer[this.selectedDetail].FAQ= (<HTMLInputElement>document.getElementById("modifiedFAQ")).value
     }
      else  if(this.selectedArray == "Gigprenuers"){ 
      this.gigprenuers[this.selectedDetail].Category= (<HTMLInputElement>document.getElementById("modifiedcategory")).value;
      this.gigprenuers[this.selectedDetail].FAQ= (<HTMLInputElement>document.getElementById("modifiedFAQ")).value
   }
    }
}
