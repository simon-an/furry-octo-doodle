import { SafeItem } from 'app/root-store/models/safe-item.model';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cool-task-list-element',
  templateUrl: './task-list-element.component.html',
  styleUrls: ['./task-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListElementComponent implements OnInit {
  @Input()
  task: SafeItem;
  constructor() {}

  ngOnInit() {}
}
