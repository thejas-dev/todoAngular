import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CreateButton } from '../createbtn/create-button.component';
import { TodoAdd } from '../todoAdd/todo-add.component';
import { TodoList } from '../todolist/todo-list.component';
import { BackgroundChange } from '../setbackground.directive';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [RouterLink,NavbarComponent,CreateButton,TodoAdd,TodoList,BackgroundChange],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  title = 'my_todo';
}
