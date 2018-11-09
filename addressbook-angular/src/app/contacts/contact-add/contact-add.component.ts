import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  contact = new Contact();

  constructor(
    protected contactService: ContactService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  create() {
    this.contactService.create(this.contact).subscribe((contact) => {
      this.router.navigate(['contacts', contact.id]);
      this.contactService.events.emit('refresh');
    });
  }

}
