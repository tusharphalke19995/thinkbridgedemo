import { Component } from '@angular/core';

let blogData = require('../../../../assets/data/pages/blog-data.json');
declare var require: any

@Component({
    templateUrl: './view-gigprenuer-details.component.html'
})


export class ViewGigprenuerDetailsComponent {
    fieldsArr = ["Field","Information","Action","Verified By","Verified Date"]
    profile = [
      {Field:"JOB TITLE",Information:"UI/UX Designer",Action:"Approve",Comment:"-"},
      {Field:"Summary",Information:"There are many variations of passages of lorem ipsum available.but majority have suffered altration in some form,by inject humour or randomized words by which don't look even slightly believable.If You are going to use passage of lorem ipsum,you need to be sure there isn't any thing embarrasing hidden in the middle of text",Action:"Approve",Comment:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"},
      {Field:"PORTFOLIO LINK",Information:"http://www.redit.com/r/announcements/comments/3sbrro",Action:"Action",Comment:"-"}
    ]

    education = [{Field:"DEGREE NAME",Information:"Master of Science",Action:"Reject",Comment:"Suspended users effectivey have their account put into <br>read only mode the primary actions they are not able to perform are:"},
    {Field:"DATE OF ATTENDED",Information:"2 March 2020",Action:"Approve",Comment:""},
    {Field:"UPLOADED DOCUMENT",Information:"view document",Action:"Reject",Comment:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"}]
    
    experience = [{Field:"DESIGNATION",Information:"Savitribai Phule Pune University",Action:"Approve",Comment:"-"},
    {Field:"COMPANY NAME",Information:"Savitribai Phule Pune University",Action:"Approve",Comment:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"},
    {Field:"TIME PERIOD",Information:[{Date:"Start Date:21 May,2020"},{Date:"End Date:25 May,2021"}],Action:"Approve",Comment:"-"},
    {Field:"DESCRIPTION",Information:"There are many variations of passages of lorem ipsum available.but majority have suffered altration in some form,by inject humour or randomized words by which don't look even slightly believable.If You are going to use passage of lorem ipsum,you need to be sure there isn't any thing embarrasing hidden in the middle of text",Action:"Reject",Comment:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"}
    ]
    certification = [{Field:"CERTIFICATION BANE",Information:"UI/UX Designing",Action:"Approve",Comment:"-"},
    {Field:"ORGANIZATION NAME",Information:"Seed Infotech",Action:"Reject",Comment:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"},
    {Field:"ISSUE DATE",Information:"15 May,2020",Action:"Approve",Comment:"-"},
    {Field:"UPLOADED DOCUMENTS",Information:"view document",Action:"Reject",Comment:"Suspended users effectivey have their account put into <br>read only mode the primary actions they are not able to perform are:"}
    ]
    actionArray = ["Approve","Reject"];

    rejectReason = [{Reason:"It's Off Topic",Description:"This post is not relevant to current defined topic"},
  {Reason:"Inappropriate Content",Description:"This post contains content that a reasonable person would consider offensive,abusive or violation of our guidelines"},
  {Reason:"It's Spam",Description:"This post is an advertisement or vandalism.It's not useful or relevant to the current topic."},
  {Reason:"Provided Personl Information",Description:"Personal data means any informaion related to an identified or identifiable natural person.(Name,Email,Address,Mobile number,Skype,LinkedIn or any other websites not allowed on konnecteum terms and conditons.)"},
  {Reason:"Something else",Description:"This post requires attention for other reason that not listed above."}]
  
    isVisible = false;
    selectedAction = "";
    fieldname;
    selectedReason: any = [];
    commentFlag : any = false;

    displayDoc = false;
    popupCreate(){
        this.isVisible = true;
    }
    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
        
      }
    
      handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
        this.selectedAction = ""
      }
     
      selectAction(iObj , i): void{
        this.selectedAction = iObj;
        
      }
      viewDocuments(){
        this.displayDoc = !this.displayDoc;
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