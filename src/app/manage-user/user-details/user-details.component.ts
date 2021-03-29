import { Component} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
 
  Fields = ["Name", "Username", "Email","Profile Type","Status"]

 employer = [{Name:"Hemant P",Username:"hemantp@123",Email:"hemant@gmail.com",Profile_type:"Individual",Status:"Verified"},
 {Name:"Reliance Industries",Username:"user@123",Email:"user@gmail.com",Profile_type:"Enterprise",Status:"Rejected"},
 {Name:"Prasad j",Username:"prasadj@123",Email:"prasad@gmail.com",Profile_type:"Individual",Status:"Submitted"},
 {Name:"Tata Consultancy Pvt.Ltd.",Username:"username@123",Email:"contact@gmail.com",Profile_type:"Enterprise",Status:"Rejected"},
 {Name:"Shefali B",Username:"shefalib@1512",Email:"shefali@gmail.com",Profile_type:"Individual",Status:"Rejected"},
 {Name:"Hemant P",Username:"hemantp@123",Email:"hemant@gmail.com",Profile_type:"Individual",Status:"Verified"},
 {Name:"Hemant P",Username:"hemantp@123",Email:"hemant@gmail.com",Profile_type:"Individual",Status:"Submitted"}, 
]
gigprenuer = [{Name:"Hemant P",Username:"hemantp@123",Email:"hemant@gmail.com",Profile_type:"Gigprenuer",Status:"Verified"},
 {Name:"Reliance Industries",Username:"user@123",Email:"user@gmail.com",Profile_type:"Gigprenuer Agency",Status:"Rejected"},
 {Name:"Prasad j",Username:"prasadj@123",Email:"prasad@gmail.com",Profile_type:"Gigprenuer",Status:"Submitted"},
 {Name:"Tata Consultancy Pvt.Ltd.",Username:"username@123",Email:"contact@gmail.com",Profile_type:"Gigprenuer",Status:"Rejected"},
 {Name:"Shefali B",Username:"shefalib@1512",Email:"shefali@gmail.com",Profile_type:"Gigprenuer Agency",Status:"Rejected"},
 {Name:"Hemant P",Username:"hemantp@123",Email:"hemant@gmail.com",Profile_type:"Gigprenuer",Status:"Verified"},
 {Name:"Hemant P",Username:"hemantp@123",Email:"hemant@gmail.com",Profile_type:"Gigprenuer Agency",Status:"Submitted"}, 
]

blocked = [{Name:"Hemant P",Username:"hemantp@123",Email:"hemant@gmail.com",Profile_type:"Individual",Status:"Verified"},
 {Name:"Reliance Industries",Username:"user@123",Email:"user@gmail.com",Profile_type:"Enterprise",Status:"Rejected"},
 {Name:"Prasad j",Username:"prasadj@123",Email:"prasad@gmail.com",Profile_type:"Gigprenuer Agency",Status:"Submitted"},
 {Name:"Hemant P",Username:"hemantp@123",Email:"hemant@gmail.com",Profile_type:"Gigprenuer",Status:"Submitted"}, 
]

status = [
  {Status : "Verified",StatusId :1},
  {Status : "Submitted",StatusId :2},
  {Status : "Rejected",StatusId :3}
]
unblockUser(index){
  if(this.blocked[index].Profile_type == "Individual" || this.blocked[index].Profile_type == "Enterprise"){
    this.employer.push(this.blocked[index]);
  }
  else if(this.blocked[index].Profile_type == "Gigprenuer" || this.blocked[index].Profile_type == "Gigprenuer Agency"){
    this.gigprenuer.push(this.blocked[index]);
  }

  this.blocked.splice(index,1)
}

blockUser(index , obj){
  if(obj.Profile_type == "Individual" || obj.Profile_type == "Enterprise"){
    this.blocked.push(this.employer[index]);
    this.employer.splice(index,1)
  }

  else if(obj.Profile_type == "Gigprenuer" || obj.Profile_type == "Gigprenuer Agency"){
    this.blocked.push(this.gigprenuer[index]);
    this.gigprenuer.splice(index,1)
  }
}
myFunc(event){
 
 
}

}
