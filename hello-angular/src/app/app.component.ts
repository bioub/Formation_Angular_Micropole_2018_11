import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent {
  couleurs = ['Bleu', 'Blanc', 'Rouge'];
  couleurSelect = 'Blanc';
}
