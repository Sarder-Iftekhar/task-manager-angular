import { Component, signal } from '@angular/core';
import { TaskList } from './features/tasks/task-list/task-list';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TaskList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('task-manager');
}
