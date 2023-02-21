import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
productName:string='';
quantity:number=1;
indexToDelete:number = 0;
indexToAdd:number=0;
quantityToAdd:number=0;
arr :Array<string> =[];
numberOfItem:Array<number> = [];
onKey1(event:any) {this.productName = event.target.value;console.log(this.productName);}
onKey2(event:any) {this.quantity = event.target.value;console.log(this.quantity);}
onKey3(event:any){
this.indexToDelete = event.target.value-1;
}
Add(){
  if(this.quantity < 1 ) {
    alert("Product quantity should greater than 0");   
  }
  else if(this.productName =="" || this.quantity==null){
    alert("Fields are empty !!");
  }
  else{
    /*if (this.arr.includes(this.productName)) {
      console.log('Element present');
      this.indexToAdd=this.arr.indexOf(this.productName);
      console.log(this.indexToAdd);
      this.quantityToAdd = this.numberOfItem.at(this.indexToAdd);
      this.quantityToAdd+=this.quantity;
      this.numberOfItem.splice(this.indexToAdd,1,this.quantityToAdd);
    } else {
      console.log('⛔️ two is NOT contained in array');
    }*/
    console.log(this.productName);
    this.arr.push(this.productName);
    this.numberOfItem.push(this.quantity);
    console.log(this.arr);
    
  }
}
Remove(){
if(this.indexToDelete >=0){
this.arr.splice(this.indexToDelete,1);
this.numberOfItem.splice(this.indexToDelete,1);
}else{
alert("Please enter valid input");
}
}
}







