import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItem } from '../task-item/task-item';

@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule, TaskItem],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {

    tasks = [
    { id: 1, title: "Learn Angular", done: false },
    { id: 2, title: "Build App", done: true },
    { id: 3, title: "Fix Bugs", done: false }
  ];

  toggleTask(task: any) {
    console.log("Parent received:", task);
    task.done = !task.done;
  }

 newTaskTitle = "";

addTask() {
  if (!this.newTaskTitle.trim()) return;

  this.tasks.push({
    id: this.tasks.length + 1,
    title: this.newTaskTitle,
    done: false
  });

  this.newTaskTitle = "";
}


deleteTask(id: number) {
  this.tasks = this.tasks.filter(task => task.id !== id);
}


}
