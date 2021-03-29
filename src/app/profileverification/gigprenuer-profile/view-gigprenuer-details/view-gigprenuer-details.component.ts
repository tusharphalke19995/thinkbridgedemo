import { Component } from '@angular/core';

let blogData = require('../../../../assets/data/pages/blog-data.json');
declare var require: any

@Component({
    templateUrl: './view-gigprenuer-details.component.html'
})


export class ViewGigprenuerDetailsComponent {
    fieldsArr = ["Field","Information","Action","Comment"]
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
    actionArray = ["Approve","Reject","Reject with Reason"]
    isVisible = false;
    selectedAction = "Reject with Reason"
    selecteddetail;
    fieldname;
    displayDoc = false;
    popupCreate(i,arrayname){
        this.isVisible = true;
        this.selecteddetail = i;
        this.fieldname = arrayname;
        this.selectedAction = this.fieldname[this.selecteddetail].Action;
    }
    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
        this.fieldname[this.selecteddetail].Action = this.selectedAction
        console.log(this.profile[this.selecteddetail].Action)
      }
    
      handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
      }
     
      selectAction(iObj , i): void{
        this.selectedAction = iObj;
        
      }
      viewDocuments(){
        this.displayDoc = !this.displayDoc;
      }
}    