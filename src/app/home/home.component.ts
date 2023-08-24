import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  template:`<section>
    <form>
      <input type="text" placeholder="Filter by City">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location 
    *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly baseUrl = '/assets/images' ;

  // housingLocation : HousingLocation ={
  //   id : 9999,
  //   name:"Test Home",
  //   city:"Test City",
  //   state:"ST",
  //   photo: `${this.baseUrl}/home1.jpg` ,
  //   availableUnits: 99 ,
  //   wifi:true,
  //   laundry : false,
  // };

  housingLocationList : HousingLocation[] = [
    {
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home1.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },
    {
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home2.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home3.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home4.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home5.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home6.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home7.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home8.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9999,
        name:"Test Home",
        city:"Test City",
        state:"ST",
        photo: `${this.baseUrl}/home9.webp` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },
  ]

}
