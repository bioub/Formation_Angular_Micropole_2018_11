import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    SharedModule,
    // importé une seule fois ici pour que httpClient soit un singleton
    HttpClientModule,
  ],
  exports: [
    MenuComponent,
  ]
})
export class CoreModule { }
