import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cool-task-counter',
  templateUrl: './task-counter.component.html',
  styleUrls: ['./task-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
