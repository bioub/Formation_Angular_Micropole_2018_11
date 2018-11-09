import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClockComponent } from './clock/clock.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    // Ne déclarer les composants qu'une seule fois
    ClockComponent,
    DropdownComponent,
  ],
  imports: [
    // Pour pouvoir se servir des exports dans ce module, il faut importer les dits modules
    // On ne peut importer que des modules
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    // Module (export tous les exports du module)
    CommonModule,
    RouterModule,
    FormsModule,

    // Component (pour y accéder dans un autre module qui importe Shared)
    ClockComponent,
    DropdownComponent,
  ],
})
export class SharedModule { }
