import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import TodoItem from './todo.type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {
  constructor() {
    this.newTodoForm = new FormGroup({
      'description': new FormControl('', [Validators.required])
    })
  }

  public newTodoForm: FormGroup;
  public items: Array<TodoItem> = [
    {id: 1, checked: false, description: 'Erste Angular Applikation erstellen'},
    {id: 2, checked: false, description: 'Todo Komponente erstellen'},
    {id: 3, checked: false, description: 'Todos anzeigen'},
    {id: 4, checked: false, description: 'Todos hinzufügen'},
    {id: 5, checked: true, description: 'Todos erledigen'}
  ];

  public onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.items.push({
        id: this.items.length + 1,
        description: this.newTodoForm.value.description,
        checked: false,
      });
    }

    form.resetForm();
    this.newTodoForm.reset();
    this.newTodoForm.markAsUntouched();
  } 
}
