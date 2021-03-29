import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-member-plan-details',
  templateUrl: './member-plan-details.component.html'
})
export class MemberPlanDetailsComponent {
  Fields = ["Plan Name","Monthly Plan","Yearly Plan","Active Subscribes"];
  
  employer = [
    {Plan_Name :"Basic",Monthly_Plan:"$99.00",Yearly_Plan:"$999.00",Active_Subscribers:124},
    {Plan_Name :"Buisness",Monthly_Plan:"$4099.00",Yearly_Plan:"$10000.00",Active_Subscribers:1209},
    {Plan_Name :"Enterprise",Monthly_Plan:"Contact us",Yearly_Plan:"Contact us",Active_Subscribers:500},

  ];
  gigprenuer = [
    {Plan_Name :"Free",Monthly_Plan:"$99.00",Yearly_Plan:"$999.00",Active_Subscribers:124},
    {Plan_Name :"Basic",Monthly_Plan:"$1099.00",Yearly_Plan:"50000.00",Active_Subscribers:1209},
    {Plan_Name :"Core",Monthly_Plan:"$4099.00",Yearly_Plan:"$10000.00",Active_Subscribers:1209},
    {Plan_Name :"Advanced",Monthly_Plan:"$4000",Yearly_Plan:"$6000",Active_Subscribers:500},

  ]

  constructor(private router : Router){}

}
