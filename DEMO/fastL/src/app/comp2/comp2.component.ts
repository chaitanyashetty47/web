import { Component } from '@angular/core';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  testData2:String = "";
  constructor(private passData:PassDataService){
    this.testData2 = passData.getData();
}
}
