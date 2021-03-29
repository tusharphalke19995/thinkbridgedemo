import { Component, OnInit,Input,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addnewfeatures',
  templateUrl: './addnewfeatures.component.html',
  
})
export class AddnewfeaturesComponent implements OnInit {
@Input() featureModalFlag = false;
@Output() confirmModalFeature = new EventEmitter();
@Output() cancelModalFeature = new EventEmitter();
checked = false;
@Input() featuresObj :any;
  constructor() { }

  ngOnInit(): void {
  }
  handleOk(){
    this.featuresObj= {Feature_name:(<HTMLInputElement>document.getElementById("Title")).value,
      Monthly_usage:(<HTMLInputElement>document.getElementById("Monthly_value")).value,
      Yearly_usage:(<HTMLInputElement>document.getElementById("Yearly_value")).value,
      Description :(<HTMLInputElement>document.getElementById("Description")).value,
      Monthly_cost :(<HTMLInputElement>document.getElementById("Monthly_cost")).value,
      Yearly_cost : (<HTMLInputElement>document.getElementById("Yearly_cost")).value}
      console.log(this.featuresObj);
    this.confirmModalFeature.emit(this.featuresObj);
  }

  handleCancel(){
    this.cancelModalFeature.emit();
  }
}
