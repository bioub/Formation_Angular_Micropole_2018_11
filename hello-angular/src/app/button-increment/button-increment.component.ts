import { Component } from '@angular/core';

@Component({
  selector: 'app-button-increment',
  templateUrl: './button-increment.component.html',
  styleUrls: ['./button-increment.component.css']
})
export class ButtonIncrementComponent {

  count = 0;

  increment() {
    this.count++;
  }
}
