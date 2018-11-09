import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../shared/models/contact.model';
import { delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable(/*{
  providedIn: 'root'
}*/)
export class ContactService {

  events = new EventEmitter<string>();

  constructor(protected httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Contact[]>(environment.apiBaseUrl + '/users');
  }

  // Marble graph
  // --1--------2-------6----10-|
  // delay((id === '10') ? 3000 : 0),
  // --1--------2-------6-----------10---|


  // --a---an------ang--angu-------angul---|
  // filter(value.length > 3)
  // --------------ang--angu-------angul---|
  // debounce(200)
  // --------------ang--angu-------angul---|
  // -------------------angu-------angul---|
  // switchMap(request(val))
  // ----------------------------------------res(angul)---|

  getById(id) {
    return this.httpClient
              .get<Contact>(environment.apiBaseUrl + '/users/' + id).pipe(
                delay((id === '10') ? 3000 : 0),
              );
  }

  create(contact: Contact) {
    return this.httpClient.post<Contact>(environment.apiBaseUrl + '/users', contact);
  }
}
