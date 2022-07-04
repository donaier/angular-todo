import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import TodoItem from './todo.type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  public items: Array<TodoItem> = [];

  public onAdd(newTodo: TodoItem) {
    this.items.push(newTodo);
  }

  ngOnInit(): void {
    this.todoService.load().subscribe(todos => {
      this.items = todos;
    })
  }
}
