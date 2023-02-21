import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  constructor() { }
  data:String = "dummy";
   setData(input:String){
    console.log(input);
      this.data = input;
  }

    getData(){
      return this.data;
    }
}
