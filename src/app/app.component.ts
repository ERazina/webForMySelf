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

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }

  addCar() {
    this.carStatus = 'Автомобиль добавлен';
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
