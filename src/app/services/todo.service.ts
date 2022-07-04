import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, tap } from 'rxjs';
import TodoItem from '../todo/todo.type';

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(
    private http: HttpClient, 
    private snackbar: MatSnackBar
  ) {}

  public load(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>("assets/todos.json").pipe(
      tap(() => this.snackbar.open('todos successfully loaded', '', {duration: 2000})),
      catchError((e) => {
        this.snackbar.open('could not load todos', 'Ok');
        return [];
      })
    )
  }
}
