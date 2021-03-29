import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ AntDesignModule } from '../ant-design/ant-design.module'
import { MembersPlanRoutingModule } from './members-plan-routing.module';
import { MemberPlanDetailsComponent } from './member-plan-details/member-plan-details.component';
import { PlanFeaturesComponent } from './member-plan-details/plan-features/plan-features.component';
import { AddnewfeaturesComponent } from './member-plan-details/addnewfeatures/addnewfeatures.component';
import { CreatePlanComponent } from './member-plan-details/create-plan/create-plan.component'


@NgModule({
  declarations: [
    MemberPlanDetailsComponent,
    PlanFeaturesComponent,
    AddnewfeaturesComponent,
    CreatePlanComponent
    ],
  imports: [
    CommonModule,
    MembersPlanRoutingModule,
    AntDesignModule
  ]
})
export class MembersPlanModule { }
