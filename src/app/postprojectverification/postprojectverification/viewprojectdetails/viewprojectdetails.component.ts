import { Component } from '@angular/core';

@Component({
  selector: 'app-viewprojectdetails',
  templateUrl: './viewprojectdetails.component.html',
})
export class ViewprojectdetailsComponent {

  projectDetails = [{Field:"PROJECT NAME",Information:"Sketchup shed drawing architecht and 3d Model rendered need completed under 24 hrs.",Action:"Approve",Comment:"-"},
  {Field:"Description",Information:"There are many variations of passages of lorem ipsum available.but majority have suffered altration in some form,by inject humour or randomized words by which don't look even slightly believable.If You are going to use passage of lorem ipsum,you need to be sure there isn't any thing embarrasing hidden in the middle of text",Action:"Approve",Comment:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"},
  {Field:"DOCUMENTS   ",Information:[{doc_name:"Design Sample.psd"},{doc_name:"Sample Documenr.pdf"}],Action:"Action",Comment:"-"},
  {Field:"ADDED QUESTIONS",Information:"What Challenging part of this job are you most experienced in?Do you have any suggestions o make this project run successfull?Require bulk video content download from website subscription for offline viewing?",Action:"Action",Comment:"-"}]
  actionArray = ["Approve","Reject","Reject with Reason"]
  isVisible = false;
  selectedAction;
  selecteddetail;
  popupCreate(i){
      this.isVisible = true;
      this.selecteddetail = i;
      this.selectedAction = this.projectDetails[i].Action
      
  }
  handleOk(): void {
      console.log('Button ok clicked!');
      this.isVisible = false;
      this.projectDetails[this.selecteddetail].Action = this.selectedAction
    }
  
    handleCancel(): void {
      console.log('Button cancel clicked!');
   
      this.isVisible = false;
    }
    
    selectAction(iObj): void{
      this.selectedAction = iObj;
      
    }
}
