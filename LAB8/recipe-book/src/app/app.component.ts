import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  loadedfeature='recipe'
  onNavigate(feature:string){
    this.loadedfeature=feature;
  }
}
