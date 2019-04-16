import { State } from './../../../../root-store/index';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeItem } from 'app/root-store/models/safe-item.model';
import { selectOpenTasks } from 'app/root-store/selectors/safe-item.selector';

@Component({
  selector: 'cool-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<SafeItem[]>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.tasks$ = this.store.pipe(select(selectOpenTasks));
  }
}
