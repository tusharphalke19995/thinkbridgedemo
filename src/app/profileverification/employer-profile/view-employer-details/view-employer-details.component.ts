import { Component } from '@angular/core';
import { FormGroup ,  FormBuilder } from '@angular/forms';
import { from } from 'rxjs';

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

  rejectReason = [{Reason:"It's Off Topic",Description:"This post is not relevant to current defined topic"},
  {Reason:"Inappropriate Content",Description:"This post contains content that a reasonable person would consider offensive,abusive or violation of our guidelines"},
  {Reason:"It's Spam",Description:"This post is an advertisement or vandalism.It's not useful or relevant to the current topic."},
  {Reason:"Provided Personl Information",Description:"Personal data means any informaion related to an identified or identifiable natural person.(Name,Email,Address,Mobile number,Skype,LinkedIn or any other websites not allowed on konnecteum terms and conditons.)"},
  {Reason:"Something else",Description:"This post requires attention for other reason that not listed above."}]
  actionArray = ["Approve","Reject"]
  isVisible = false;
  selectedAction;
  selecteddetail;
  selectedReason : any =[];
  commentFlag = false;

  rejectForm : FormGroup;

  constructor(private fb: FormBuilder){}
  popupCreate(){
      this.isVisible = true;
      
  }
  handleOk(): void {
      console.log('Button ok clicked!');
      this.isVisible = false;
    }
  
    handleCancel(): void {
      console.log('Button cancel clicked!')
      this.isVisible = false;
      this.selectedAction = "";
    }
    selectAction(iObj): void{
      this.selectedAction = iObj;
      
    }

    onChange(i, isChecked){
      if(isChecked){
        this.selectedReason.push(this.rejectReason[i]);
        if(i == 4){
          this.commentFlag = true;
        }
      }
      else{
        if(i == 4){
          this.commentFlag = false;;
        }
        for(let j=0;j<this.selectedReason.length;j++){
          if(this.selectedReason[j].Reason === this.rejectReason[i].Reason){
            this.selectedReason.splice(j,1)
          }
        }
      }

      console.log(this.selectedReason,"selectedReason")

    }
}
