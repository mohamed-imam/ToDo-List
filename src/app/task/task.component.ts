import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() todoTxt: any;
  constructor() {}

  ngOnInit(): void {}

  isDone: boolean = false;
  done() {
    this.isDone = true;
  }
  isCanceled: boolean = false;
  delete() {
    this.isCanceled = true;
  }
}
