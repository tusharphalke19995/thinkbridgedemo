import { Component} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-postprojectverification',
  templateUrl: './postprojectverification.component.html',
})
export class PostprojectverificationComponent{
 
  constructor( private route : Router){}

  priorityProject = [{Posted_Date:"jan 01 ,2021",Employer_Name:"HemantPatil",Project_Title:"logo design for my company"},
  {Posted_Date:"jan 01 ,2021",Employer_Name:"TataCommunication",Project_Title:"Website Performance And Optimizations"},
  {Posted_Date:"jan 01 ,2021",Employer_Name:"Prasad B",Project_Title:"Need To rebrand and the create new brand history"},
  {Posted_Date:"jan 01 ,2021",Employer_Name:"Prasad B",Project_Title:"Need To rebrand and the create new brand history"},
  {Posted_Date:"jan 01 ,2021",Employer_Name:"Prasad B",Project_Title:"Need To rebrand and the create new brand history"},
  {Posted_Date:"jan 01 ,2021",Employer_Name:"Prasad B",Project_Title:"Need To rebrand and the create new brand history"}]
  
  viewProjectDetails(){
    this.route.navigate(['post-project-verification/project-details'])
  }
}
