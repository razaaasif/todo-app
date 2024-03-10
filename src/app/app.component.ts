import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: any[] = [];
  addTodo(event: any) {
    this.todos.push(event);
  }
}
