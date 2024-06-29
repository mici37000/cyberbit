import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TasksService } from 'src/app/services/tasks.service';
import { Observable, forkJoin, map, of } from 'rxjs';
import { Task } from '../../../model/task';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  public taskList$: Observable<Task[]>;
  public cats: string[] = [
    'Development',
    'Testing',
    'Design',
    'Project Management',
    'Maintenance ',
    'Research'
  ];

  constructor(private tasksService: TasksService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.taskList$ = forkJoin([this.tasksService.getTasks(), this.usersService.getUsers()]).pipe(map((res) => {
      const tasks: Task[] = res[0];
      const users: User[] = res[1];
      tasks.map((task: Task) => {
        const user = users.find((user: User) => user.id === task.userId);

        if (user) {
          task.user = user;
        }
      });
      return tasks;
    }));
  }
}
