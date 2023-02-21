import { Component } from '@angular/core';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})



export class Comp1Component {

  constructor( private _passData:PassDataService){

  }

  // we create variable of datatype string in here in comp1 component // 
  textData:String = "test1";
  

  getInputFromUser(){
    console.log(this.textData);
    this._passData.setData(this.textData)

  }


}
