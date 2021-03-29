import { Component} from '@angular/core';
import {EmployerprofileService} from '../../shared/services/employer-profile.service'
@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html'
})
export class EmployerProfileComponent {

  i;
    profileDetails = [{Name:"Infotech Solutions",Profile_Type:"Enterprise",Profile:"Pending",Profile_Status:true},
    {Name:"Prasad B",Profile_Type:"Individual Employer",Profile:"Pending",Profile_Status:true},
    {Name:"Tata consultancy Pvt.Ltd.",Profile_Type:"Enterprise",Profile:"Pending",Profile_Status:false},
    {Name:"Madhav R.",Profile_Type:"Individual Employer",Profile:"Pending",Profile_Status:true},
    {Name:"Reliance Industrial Infrastructure Ltd.",Profile_Type:"Enterprise",Profile:"Pending",Profile_Status:false},
    {Name:"Hathway Bhavani Cabeltel And Datacom Ltd",Profile_Type:"Enterprise",Profile:"Pending",Profile_Status:true}]
    
    freelancerId = 5;
   
    employerDetails : any;

    constructor(private employerprofileService : EmployerprofileService){}
    
    ngOnInit(): void{
      this.getEmployerDetails(this.freelancerId);
    }
    
    checkProfile(index){
      for(this.i=0;this.i<this.profileDetails.length;this.i++){
          if(index == this.i){
              this.profileDetails[this.i].Profile_Status = ! this.profileDetails[this.i].Profile_Status
          }
      }
  }

  getEmployerDetails(employerId: any) {
    this.employerprofileService.getEmployerProfileData(employerId).subscribe(
        (employerRes: any) => {
            if (employerRes) {
                this.employerDetails = employerRes;
                console.log("employerRes", employerRes);
            }
        }
    );
}

}
