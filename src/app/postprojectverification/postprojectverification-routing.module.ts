import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostprojectverificationComponent} from './postprojectverification/postprojectverification.component'
import { ViewprojectdetailsComponent } from './postprojectverification/viewprojectdetails/viewprojectdetails.component';
const routes: Routes = [
    {
      path : "post-project-verification",
      component : PostprojectverificationComponent,
      data: {
          title: 'Project Verification'
      }
    },
    {
      path : "project-details",
      component : ViewprojectdetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostprojectverificationRoutingModule { }
