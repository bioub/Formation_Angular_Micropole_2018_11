import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  now = new Date();
  private intervalId;

  constructor() { }

  ngOnInit() {
    // Zone.js relance la détection de changement
    // après chaque callback async
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
