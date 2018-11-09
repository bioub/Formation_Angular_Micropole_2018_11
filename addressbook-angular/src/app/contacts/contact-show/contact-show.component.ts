import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/shared/models/contact.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.scss'],
})
export class ContactShowComponent implements OnInit {

  contact: Contact;

  constructor(
    protected contactService: ContactService,
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap((params) => this.contactService.getById(params.id)),
    ).subscribe((contact) => {
      this.contact = contact;
    });
  }

}
