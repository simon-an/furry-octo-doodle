import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cool-task-approval',
  templateUrl: './task-approval.component.html',
  styleUrls: ['./task-approval.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskApprovalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
