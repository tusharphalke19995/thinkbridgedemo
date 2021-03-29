import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerFAQDetailsComponent } from './manager-faq-details/manager-faq-details.component';
import { QuestionListComponent } from './manager-faq-details/question-list/question-list.component'
const routes: Routes = [
  {
    path : 'manager-faq-details',
    component : ManagerFAQDetailsComponent,
    data : {
      title : 'ManagerFAQ'
    }
  },
  {
    path : 'question-list',
    component :QuestionListComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerFAQRoutingModule { }
