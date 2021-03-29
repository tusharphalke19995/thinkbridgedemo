import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { GigprenuerProfileComponent } from './gigprenuer-profile/gigprenuer-profile.component';
import { ViewGigprenuerDetailsComponent } from './gigprenuer-profile/view-gigprenuer-details/view-gigprenuer-details.component';
import { ViewEmployerDetailsComponent } from './employer-profile/view-employer-details/view-employer-details.component';
const routes: Routes = [
  
        {
            path: 'employer-profile',
            component: EmployerProfileComponent,
            data: {
                title: 'Employer Profile'
            }
        },
        {
            path: 'gigprenuer-profile',
            component: GigprenuerProfileComponent,
            data: {
                title: 'Gigprenuer Profile'
            },
            
        },
        {
            path: 'gigprenuer-details',
            component: ViewGigprenuerDetailsComponent,
            
        },
        {
            path: 'employer-details',
            component: ViewEmployerDetailsComponent,
            
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileverificationRoutingModule { }
