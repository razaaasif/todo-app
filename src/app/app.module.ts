import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './app-navbar.component';
import { TodoTableComponent } from './todo-table.component';
import { AddTodoComponent } from './add-todo.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';
import { AboutComponent } from './app-about';
import { ContactComponent } from './app-contact';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TodoTableComponent,
    AddTodoComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
