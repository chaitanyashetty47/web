import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//------------------------------------------------------//
//import FormsModule //
import { FormsModule } from '@angular/forms';
//------------------------------------------------------//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp2CHILDComponent } from './comp2-child/comp2-child.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp2CHILDComponent
  ],
  imports: [
    //-----------------------------------//
    //add it here//
    FormsModule,
    //------------------------------------//
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
