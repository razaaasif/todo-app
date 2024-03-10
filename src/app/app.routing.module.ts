import { Routes } from '@angular/router';
import { TodoTableComponent } from './todo-table.component';
import { AddTodoComponent } from './add-todo.component';
import { AboutComponent } from './app-about';
import { ContactComponent } from './app-contact';

export const routes: Routes = [
  {
    path: '',
    component: TodoTableComponent,
  },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo:'' },
];

