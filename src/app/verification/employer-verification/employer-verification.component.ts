import { Component} from '@angular/core';

@Component({
  selector: 'app-employer-verification',
  templateUrl: './employer-verification.component.html'
})
export class EmployerVerificationComponent{

  displyFlag = false;
   fieldsArr = ["NAME","PROFILE TYPE","PAN VERIFICATION","ADDRESS VERIFICATION","FACE VERIFICATION"] 
   notVerified = [{Name:"Infotech Solutions",Profile_Type:"Gigprenuer",PAN:true,Address:false,Face:true},
   {Name:"Hemant P.",Profile_Type:"Gigprenuer Agency",PAN:"pending",Address:true,Face:true},
   {Name:"Tata consultancy Pvt.Ltd.",Profile_Type:"Gigprenuer Agency",PAN:false,Address:false,Face:true},
   {Name:"Amit J.",Profile_Type:"Gigprenuer",PAN:true,Address:false,Face:false}
  ]
  verified = [{Name:"Infotech Solutions",Profile_Type:"Gigprenuer",PAN:true,Address:true,Face:true},
  {Name:"Hemant P.",Profile_Type:"Gigprenuer Agency",PAN:true,Address:true,Face:true},
  {Name:"Tata consultancy Pvt.Ltd.",Profile_Type:"Gigprenuer Agency",PAN:true,Address:true,Face:true},
  {Name:"Amit J.",Profile_Type:"Gigprenuer",PAN:true,Address:true,Face:true}
 ]
 rejected = [{Name:"Infotech Solutions",Profile_Type:"Gigprenuer",PAN:false,Address:false,Face:true},
 {Name:"Hemant P.",Profile_Type:"Gigprenuer Agency",PAN:false,Address:false,Face:true},
 {Name:"Tata consultancy Pvt.Ltd.",Profile_Type:"Gigprenuer Agency",PAN:false,Address:true,Face:true},
 {Name:"Amit J.",Profile_Type:"Gigprenuer",PAN:false,Address:false,Face:false}
 ]

 profileFieldsArr = ["Field","Document Type","Document","Action","Comment"]
 

}
