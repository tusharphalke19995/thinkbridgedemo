import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employer-details',
  templateUrl: './view-employer-details.component.html',
  
})
export class ViewEmployerDetailsComponent{

  employerProfile = [{Field:"FIRST NAME",Information:"Hemant",Action:"Approved",Comment:"-"},
  {Field:"LAST NAME",Information:"Pawale",Action:"Approved",Comment:"-"},
  {Field:"ORGANIZATION",Information:"Reliance Industrial Infrastructure Ltd.",Action:"Action",Comment:"-"},
  {Field:"ADDRESS 1",Information:"Sector B,First floor",Action:"Action",Comment:""},
  {Field:"ADDRESS 2",Information:"Sector B,First floor",Action:"Action",Comment:""}]
  actionArray = ["Approve","Reject","Reject with Reason"]
  isVisible = false;
  selectedAction;
  selecteddetail;
 
  popupCreate(i){
      this.isVisible = true;
      this.selecteddetail = i;
      this.selectedAction =  this.employerProfile[i].Action
  }
  handleOk(): void {
      console.log('Button ok clicked!');
      this.isVisible = false;
      this.employerProfile[this.selecteddetail].Action = this.selectedAction;
    }
  
    handleCancel(): void {
      console.log('Button cancel clicked!')
      this.isVisible = false;
    }
    selectAction(iObj): void{
      this.selectedAction = iObj;
      
    }


}
