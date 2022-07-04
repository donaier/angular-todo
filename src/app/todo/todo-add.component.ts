import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import TodoItem from './todo.type';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
})

export class TodoAddComponent {

  @Input() currentMaxId = 0;
  @Output() public added = new EventEmitter<TodoItem>();
  
  constructor() {
    this.newTodoForm = new FormGroup({
      'description': new FormControl('', [Validators.required])
    })
  }

  public newTodoForm: FormGroup;

  public onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.added.emit({
        id: this.currentMaxId + 1,
        description: this.newTodoForm.value.description,
        checked: false
      })

      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  } 
}
