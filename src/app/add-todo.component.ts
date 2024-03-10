import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from './todo-service';

@Component({
  selector: 'app-add-todo',
  template: `<div class="container">
    <form [formGroup]="todoform" (ngSubmit)="addItem()">
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Name"
          formControlName="name"
        />
        <div *ngIf="todoform.status === 'INVALID' && todoform.touched">
          <div class="alert alert-danger" role="alert">Name is required.</div>
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        [disabled]="todoform.status === 'INVALID'"
      >
        Submit
      </button>
    </form>
  </div> `,
})
export class AddTodoComponent {
  todoform: FormGroup;

  constructor(
    private formBuidler: FormBuilder,
    private router: Router,
    private todoService: TodoService
  ) {
    this.todoform = this.formBuidler.group({
      name: ['', Validators.required],
      completed: [false],
    });
  }

  addItem() {
    console.log(this.todoform);
    this.todoService.addTodo({
      name: this.todoform.get('name')?.value,
      completed: this.todoform.get('completed')?.value,
    });
    this.todoform.reset();
    this.router.navigate(['']);
  }
}
