import { Component, OnInit, Input, ViewEncapsulation, HostListener, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
 // encapsulation: ViewEncapsulation.Emulated
})
export class DropdownComponent implements OnInit {

  @Input() items: string[] = [];
  @Input() selected = '';

  @Output() selectedChange = new EventEmitter<string>();

  closed = true;

  constructor() { }

  ngOnInit() {
  }

  select(item) {
    if (this.closed) {
      return;
    }

    this.selected = item;
    this.selectedChange.emit(this.selected);
    this.closed = true;
  }

  @HostListener('document:click', ['$event'])
  documentClicked() {
    this.closed = true;
  }

  toggle(event: Event) {
    event.stopPropagation();
    this.closed = !this.closed;
  }

}
