import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartchild',
  templateUrl: './cartchild.component.html',
  styleUrls: ['./cartchild.component.css']
})
export class CartchildComponent {

  @Input() childData:number = 0;

}
