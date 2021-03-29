import { Component } from '@angular/core';

@Component({
  selector: 'app-employer-verification-details',
  templateUrl: './employer-verification-details.component.html',
  
})
export class EmployerVerificationDetailsComponent {
  profileArr = [
    {
        Name:"Tata Consultancy Pvt.Ltd.",
        infoArr:[
           {Field:"PAN Verification",Document_Type:"PAN Card",Document:"view document",Action:"Approved",Comment:"-"},
           {Field:"Address Verification",Document_Type:"Udyog Adhar Card",Document:"view document",Action:"Reject",Comment:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"},
           {Field:"Face Verification",Document_Type:"",Document:"",Action:"",Comment:""},
        ]
    },
    {
       Name:"Hemant P.",
       infoArr:[
          {Field:"PAN Verification",Document_Type:"PAN Card",Document:"view document",Action:"Approved",Comment:"-"},
          {Field:"Address Verification",Document_Type:"Udyog Adhar Card",Document:"view document",Action:"Reject",Comment:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"},
          {Field:"Face Verification",Document_Type:"Voter Id",Document:"view document",Action:"Approved",Comment:"-"},
       ]
   }
]
actionArray = ["Approve","Reject","Reject with Reason"]
   isVisible = false;
   selectedAction = "Reject with Reason";
   selecteddetail;
   subselecteddetail;
  
   popupCreate(i,j){
       this.isVisible = true;
       this.selecteddetail = i;
       this.subselecteddetail = j;
       this.selectedAction = this.profileArr[ this.selecteddetail].infoArr[this.subselecteddetail].Action;
       
   }
   handleOk(): void {
       console.log('Button ok clicked!');
       this.isVisible = false;
       this.profileArr[ this.selecteddetail].infoArr[this.subselecteddetail].Action = this.selectedAction;
       // console.log(this.profileArr[ this.selecteddetail].infoArr[this.subselecteddetail].Action );
       
     }
   
     handleCancel(): void {
       console.log('Button cancel clicked!');
       this.isVisible = false;
     }
     
     selectAction(iObj): void{
       this.selectedAction = iObj;
       
     }

}
