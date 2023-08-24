import { Component , inject} from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports : [
    CommonModule,
    HousingLocationComponent
  ],
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

  housingLocationList : HousingLocation[] = []       
  housingService : HousingService = inject(HousingService)

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
