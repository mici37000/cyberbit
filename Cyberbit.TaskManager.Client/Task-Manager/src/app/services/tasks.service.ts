import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  prefix(): string {
    return `Tasks/`;
  }

  constructor(private http: HttpClient) {
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.gw}${this.prefix()}`).pipe(
      catchError(_ => of([] as Task[]))
    )
  }
}

