import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';
Service1Service

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  listdata:number=0;
  constructor(private getService:Service1Service){
    this.listdata=this.getService.getdata();

  }

  
 

}
