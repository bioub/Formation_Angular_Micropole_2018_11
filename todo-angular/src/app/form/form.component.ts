import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() todoChange = new EventEmitter<string>();
  todo = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.todoChange.emit(this.todo);
    this.todo = '';
  }

}
