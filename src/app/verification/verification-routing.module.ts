import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerVerificationComponent } from './employer-verification/employer-verification.component';
import { GigprenuerVerificationComponent } from './gigprenuer-verification/gigprenuer-verification.component'
import { EmployerVerificationDetailsComponent } from './employer-verification/employer-verification-details/employer-verification-details.component';
import { GigprenuerVerificationDetailsComponent } from './gigprenuer-verification/gigprenuer-verification-details/gigprenuer-verification-details.component';
const routes: Routes = [
  
   
        {
            path: 'employer-verification',
            component: EmployerVerificationComponent,
            data: {
                title: 'Employer Verification'
            }
        },
        {
            path: 'gigprenuer-verification',
            component: GigprenuerVerificationComponent,
            data: {
                title: 'Gigprenuer Verification'
            }
        },
        {
            path: 'gigprenuer-verification-details',
            component: GigprenuerVerificationDetailsComponent,
        },
        {
            path: 'employer-verification-details',
            component: EmployerVerificationDetailsComponent,
        }
        
      

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationRoutingModule { }
