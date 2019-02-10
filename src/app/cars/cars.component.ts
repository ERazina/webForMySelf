import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  carName: String = 'Audi';
  carYear: Number = 2017;

  getName() {
    return this.carName;
  }


}
