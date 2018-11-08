import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ClockComponent } from './clock/clock.component';
import { ButtonIncrementComponent } from './button-increment/button-increment.component';
import { FormContactComponent } from './form-contact/form-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ClockComponent,
    ButtonIncrementComponent,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
