import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './inventory-list.component.html',
  
})
export class InventoryListComponent {


  constructor( private router:Router){
    
  }

  questionList = [
    {Question : "Profle Creation",Answer:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"},
    {Question : "Post Project",Answer:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:"}
  ]
  isVisible = false;
  deleteModalFlag = false;
  modifyQuestionFlag = false;
  selectedQuestion = 0;
  question;
  answer;
  
  gotToBack(){
   this.router.navigateByUrl("/manage-inventory/manage-inventory-details")
}

  handleOk(): void {
    console.log('Button ok clicked!');
    this.question = (<HTMLInputElement>document.getElementById("question")).value;
    this.answer = (<HTMLInputElement>document.getElementById("answer")).value;
    this.questionList.push({Question : this.question,Answer:this.answer});
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!')
    this.isVisible = false;
  }

  deleteModal(i){
    this.deleteModalFlag = true;
    this.selectedQuestion = i;
  }

  CancelDelete(){
    this.deleteModalFlag = false;
  }

  ConfirmDelete(){
    this.deleteModalFlag = false;
    this.questionList.splice(this.selectedQuestion,1);
  }

  modifyQuestion(i){
    this.modifyQuestionFlag = true;
    this.selectedQuestion = i;
  }
  CancelModify(){
    this.modifyQuestionFlag = false;
  }
  ConfirmModify(){
    this.modifyQuestionFlag = false;
    this.questionList[this.selectedQuestion].Question = (<HTMLInputElement>document.getElementById("modifiedquestion")).value;
    this.questionList[this.selectedQuestion].Answer = (<HTMLInputElement>document.getElementById("modifiedanswer")).value;
  }
}
