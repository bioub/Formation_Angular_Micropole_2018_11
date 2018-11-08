import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = ['Pain', 'Lait', 'Beurre'];

  addTodo(todo) {
    // changement muable
    // this.todos.push(todo);

    // changement immuable
    this.todos = [...this.todos, todo];
  }
}
