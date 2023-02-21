import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  data:number=0;
  setdata(num1:number, num2:number){
    this.data=num1 * num2;
  }

  getdata(){
    return this.data;
  }
}
