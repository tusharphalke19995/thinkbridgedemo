import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-plan-features',
  templateUrl: './plan-features.component.html',
 
})
export class PlanFeaturesComponent {
  Features = [
    {Feature_name:"Verified work history and reviews",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Received unlimited proposals",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Project posting unlimited",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Project tracking",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Filtered Searches",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Dedicated account manager",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Analytical Reports",Monthly_usage:"Restricted view",Yearly_usage:"Restricted view",Description:"", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Project management support",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Premium customer support",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Featured Project",Monthly_usage:"Yes",Yearly_usage:"Yes",Description:"Suspended users effectivey have their account put into read only mode the primary actions they are not able to perform are:", Monthly_cost:"99",Yearly_cost:"999"},
    {Feature_name:"Invites to freelancer",Monthly_usage:"10 per job pot",Yearly_usage:"100 per job post",Description:"", Monthly_cost:"99",Yearly_cost:"999"}
  ]
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
