import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntDesignModule } from '../ant-design/ant-design.module'

import { ManagerFAQRoutingModule } from './manager-faq-routing.module';
import { ManagerFAQDetailsComponent } from './manager-faq-details/manager-faq-details.component';
import { QuestionListComponent } from './manager-faq-details/question-list/question-list.component';


@NgModule({
  declarations: [ManagerFAQDetailsComponent, QuestionListComponent],
  imports: [
    CommonModule,
    ManagerFAQRoutingModule,
    AntDesignModule
  ]
})
export class ManagerFAQModule { }
