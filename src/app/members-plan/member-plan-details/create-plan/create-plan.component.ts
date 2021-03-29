import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html'
})
export class CreatePlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 Features :any = [];
displayFeatureModal = false;
   closeFeatureModal;
   
  newFeatureModal(){
    this.displayFeatureModal = true;
  }

  confirmFeatureModalFun(featuresObj){
    this.displayFeatureModal = false;
    this.Features.push(featuresObj)
  }

  cancelModalFeature(){
    this.displayFeatureModal = false;
  }
}
