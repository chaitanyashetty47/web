import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp2-child',
  templateUrl: './comp2-child.component.html',
  styleUrls: ['./comp2-child.component.css']
})
export class Comp2CHILDComponent {


@Input() textData :String = "";

}
