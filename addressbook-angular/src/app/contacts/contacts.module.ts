import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { SharedModule } from '../shared/shared.module';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [ContactComponent, ContactListComponent, ContactAddComponent, ContactShowComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule
  ],
  providers: [
    /*{provide: ContactService, useClass: ContactService}*/
    // equivalent raccourci :
    ContactService,
  ]
})
export class ContactsModule { }
