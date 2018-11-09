import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from 'src/app/shared/models/contact.model';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];
  loading = false;

  constructor(protected contactService: ContactService) { }
  // raccourci de :
  // protected contactService: ContactService;
  // constructor(contactService: ContactService) {
  //   this.contactService = contactService;
  // }

  //ngOnInit() {
  // Callback Hell / Pyramid of Doom (aller voir callbackhell.com)
  /*
  this.contactService.getAll((contacts) => {
    let cpt = 0;
    contacts.forEach((contact) => {
      contact.prenom = 'Toto';
      this.contactService.update(contact, () => {
          cpt++;
          if (cpt === this.contacts.length) {
            console.log('DONE'))
          }
      })
    })
  });
  */
  /* API Promise (apparu en ES6, sous forme de bibliothèques avant)
  this.contactService.getAll()
   .then((contacts) => Promise.all[contacts.map((c) => this.contactService.update(c)])
   .then(() => {
     console.log('DONE');
   })
   */
  /* API Observable (Stage 1 de ESNext, sous forme de bibliothèques en attendant)
   avantage sur les Promise, ça fonctionne aussi quand le callback est appelé
   plusieurs fois
  */

  subscription: Subscription;

  ngOnInit() {
    this.getContacts();
    this.subscription = this.contactService.events.subscribe(() => {
      this.getContacts();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getContacts() {
    this.loading = true;
    this.contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
      this.loading = false;
    });
  }

}
