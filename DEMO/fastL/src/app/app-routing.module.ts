import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
const routes: Routes = [
  {
    // add Path here , we set default to load comp1
    path:"",component:Comp1Component,
  },
  {
    // we add another path which will component 2,
    path:"comp2",component:Comp2Component

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
