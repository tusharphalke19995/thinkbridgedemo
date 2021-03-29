import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntDesignModule } from '../ant-design/ant-design.module'
import { ManageUserRoutingModule } from './manage-user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    AntDesignModule
  ]
})
export class ManageUserModule { }
