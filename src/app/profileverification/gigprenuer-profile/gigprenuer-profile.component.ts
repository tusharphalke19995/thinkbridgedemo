import { Component} from '@angular/core';
import { FreelancerprofileService } from '../../shared/services/freelancer-profile.service';
@Component({
  selector: 'app-gigprenuer-profile',
  templateUrl: './gigprenuer-profile.component.html'
})
export class GigprenuerProfileComponent{

  notVerified = [{Name:"Infotech Solutions",Profile_Type:"Gigprenuer",Profile:true,Education:"Pending",Experience:"Pending",Certification:"Pending"},
  {Name:"Prasad B",Profile_Type:"Gigprenuer",Profile:false,Education:"Pending",Experience:"Pending",Certification:"Pending"},
  {Name:"Tata consultancy Pvt.Ltd.",Profile_Type:"Gigprenuer Agency",Profile:false,Education:"-",Experience:"-",Certification:"-"},
  {Name:"Madhav R.",Profile_Type:"Gigprenuer",Profile:false,Education:"Pending",Experience:"Pending",Certification:"Pending"},
  {Name:"Reliance Industrial Infrastructure Ltd.",Profile_Type:"Enterprise",Profile:false,Education:"-",Experience:"-",Certification:"-"},
  {Name:"Hathway Bhavani Cabeltel And Datacom Ltd",Profile_Type:"Gigprenuer",Profile:false,Education:"Pending",Experience:"Pending",Certification:"Pending"}]

  verified = [{Name:"Infotech Solutions",Profile_Type:"Gigprenuer",Profile:true,Education:true,Experience:true,Certification:true},
  {Name:"Prasad B",Profile_Type:"Gigprenuer",Profile:true,Education:true,Experience:true,Certification:true},
  {Name:"Tata consultancy Pvt.Ltd.",Profile_Type:"Gigprenuer Agency",Profile:true,Education:true,Experience:true,Certification:true},
  {Name:"Madhav R.",Profile_Type:"Gigprenuer",Profile:true,Education:true,Experience:true,Certification:true},
  {Name:"Reliance Industrial Infrastructure Ltd.",Profile_Type:"Gigprenuer Agency",Profile:true,Education:true,Experience:true,Certification:true},
  {Name:"Hathway Bhavani Cabeltel And Datacom Ltd",Profile_Type:"Gigprenuer",Profile:true,Education:true,Experience:true,Certification:true}]
  
  rejected = [{Name:"Infotech Solutions",Profile_Type:"Gigprenuer",Profile:true,Education:false,Experience:true,Certification:true},
  {Name:"Prasad B",Profile_Type:"Gigprenuer",Profile:true,Education:true,Experience:false,Certification:true},
  {Name:"Tata consultancy Pvt.Ltd.",Profile_Type:"Gigprenuer Agency",Profile:true,Education:false,Experience:false,Certification:true},
  {Name:"Madhav R.",Profile_Type:"Gigprenuer",Profile:true,Education:true,Experience:false,Certification:true},
  {Name:"Reliance Industrial Infrastructure Ltd.",Profile_Type:"Gigprenuer Agency",Profile:true,Education:true,Experience:false,Certification:true},
  {Name:"Hathway Bhavani Cabeltel And Datacom Ltd",Profile_Type:"Gigprenuer Agency",Profile:true,Education:false,Experience:true,Certification:false}]

  freelancerProfileDetails : any;

  freelancerId = 7;

  constructor( 
    private freelancerprofileService: FreelancerprofileService){}

    ngOnInit(): void{
      this.getFreelancerProfileByFreelancerId(this.freelancerId);
    }

    getFreelancerProfileByFreelancerId(freelancerId: any) {
      this.freelancerprofileService.getFreelancersProfileDetails(this.freelancerId).subscribe(
          (profileRes: any) => {
              this.freelancerProfileDetails = JSON.parse(profileRes);
               console.log("this.freelancerProfileDetails", this.freelancerProfileDetails);
             
              // document.getElementById("description").innerHTML= this.freelancerProfileDetails.summary;
          });
         
          
  }
}
