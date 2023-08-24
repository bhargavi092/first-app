import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  readonly baseUrl = '/assets/images' ;
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



  getAllHousingLocations(): HousingLocation [] {
      return this.housingLocationList;
  }

  getHousingLocationById( id: number) :HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }
}
