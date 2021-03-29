import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from '../ant-design/ant-design.module';
import { VerificationRoutingModule } from './verification-routing.module';
import { EmployerVerificationComponent } from './employer-verification/employer-verification.component';
import { GigprenuerVerificationComponent } from './gigprenuer-verification/gigprenuer-verification.component';
import { EmployerVerificationDetailsComponent } from './employer-verification/employer-verification-details/employer-verification-details.component'
import { GigprenuerVerificationDetailsComponent } from './gigprenuer-verification/gigprenuer-verification-details/gigprenuer-verification-details.component'
@NgModule({
  declarations: [
    EmployerVerificationComponent,
    GigprenuerVerificationComponent,
    EmployerVerificationDetailsComponent,
    GigprenuerVerificationDetailsComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    SharedModule,
    ReactiveFormsModule,
    VerificationRoutingModule,
    
  ]
})
export class VerificationModule { }
