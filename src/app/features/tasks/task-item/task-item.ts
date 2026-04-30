import { Component, Input , Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrls: ['./task-item.css'],
})
export class TaskItem {

  @Input() task: any;

  @Output() toggle = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  onToggle() {
    console.log("Child emitting:", this.task);
    this.toggle.emit(this.task);
  }

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
