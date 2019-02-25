import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webForMyself';
  canAddCar = false;
  carStatus = '';
  inputText = 'Дефолтный текст';
  cars = [
    {name: 'Audi', age: 2017},
    {name: 'BMW', age: 2019},
    {name: 'Mini', age: 2019}
  ];
  // public car = '';
  carName = 'Дефолтное значение';

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }

  addCar(event) {
    this.carName = event.target.value;
    // this.cars.push(car);
    // this.cars = '';
  }

  // (keyup.enter)="onKeyUp($event)"
  // onKeyUp(event) {
  //   console.log(event);
  //   this.inputText = event.target.value;
  // }
  onKeyUp(value) {
    console.log(event);
    this.inputText = value;
  }
}
