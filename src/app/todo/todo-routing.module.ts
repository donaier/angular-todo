import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoAddComponent } from './todo-add.component';
import { TodoComponent } from './todo.component';

const routes = [
  {path: '', component: TodoComponent},
  {path: 'add', component: TodoAddComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TodoRoutingModule {}
