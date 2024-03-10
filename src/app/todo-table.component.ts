import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo-service';

@Component({
  selector: 'app-todo-table',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Complete</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let todo of todos">
          <tr>
            <td>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
            </td>
            <td>{{ todo.name }}</td>

          </tr>
        </ng-container>
      </tbody>
    </table>
  `,
})
export class TodoTableComponent implements OnInit {
  todos!: any[];
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }
}
