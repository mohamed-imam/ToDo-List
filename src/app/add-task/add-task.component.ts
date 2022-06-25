import {
  Component,
  Output,
  ViewChild,
  EventEmitter,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() todoInputEmitter: any = new EventEmitter<string>();
  todoInput: any;

  constructor() {}

  ngOnInit(): void {}
  addValue() {
    this.todoInputEmitter.emit(this.todoInput);
  }
}
