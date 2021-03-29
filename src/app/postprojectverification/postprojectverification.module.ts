import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntDesignModule } from '../ant-design/ant-design.module'

import { PostprojectverificationRoutingModule } from './postprojectverification-routing.module';
import { PostprojectverificationComponent } from './postprojectverification/postprojectverification.component'
import { ViewprojectdetailsComponent } from './postprojectverification/viewprojectdetails/viewprojectdetails.component'
@NgModule({
  declarations: [
    PostprojectverificationComponent,
    ViewprojectdetailsComponent
  ],
  imports: [
    CommonModule,
    PostprojectverificationRoutingModule,
    AntDesignModule
  ]
})
export class PostprojectverificationModule { }
