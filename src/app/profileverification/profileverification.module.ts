import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from '../ant-design/ant-design.module';

import { ProfileverificationRoutingModule } from './profileverification-routing.module';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { GigprenuerProfileComponent } from './gigprenuer-profile/gigprenuer-profile.component';
import { ViewGigprenuerDetailsComponent  } from './gigprenuer-profile/view-gigprenuer-details/view-gigprenuer-details.component';
import { ViewEmployerDetailsComponent } from './employer-profile/view-employer-details/view-employer-details.component'
@NgModule({
  declarations: [
    EmployerProfileComponent,
    GigprenuerProfileComponent,
    ViewGigprenuerDetailsComponent,
    ViewEmployerDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileverificationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AntDesignModule
  ]
})
export class ProfileverificationModule { }
