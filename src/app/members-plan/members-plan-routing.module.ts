import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberPlanDetailsComponent } from './member-plan-details/member-plan-details.component'
import { PlanFeaturesComponent } from './member-plan-details/plan-features/plan-features.component';
import { AddnewfeaturesComponent } from './member-plan-details/addnewfeatures/addnewfeatures.component';
import { CreatePlanComponent } from './member-plan-details/create-plan/create-plan.component';
const routes: Routes = [

  {
    path : 'members-plan-details',
    component: MemberPlanDetailsComponent
  },
  {
    path : 'plan-features',
    component: PlanFeaturesComponent
  },
  {
    path : 'new-feature',
    component : AddnewfeaturesComponent
  },
  {
    path : 'create-plan',
    component : CreatePlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersPlanRoutingModule { }
