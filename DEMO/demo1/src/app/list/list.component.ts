import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private _passData:Service1Service){

  }

  list1:number=0;
  list2:number=0;
  getInput(){
    this._passData.setdata(this.list1, this.list2)
  }
  



}
