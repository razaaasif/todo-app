import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: any[] = [];
  getTodos() {
    return this.todos;
  }

  addTodo(data : any) {
    return this.todos.push(data);

  }
}
