import { LoadSafeFailure } from './../../../../root-store/actions/safe.actions';
import { AdminLoadSafeItems } from './../../../../root-store/actions/safe-item.actions';
import { State } from './../../../../root-store/index';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeItem } from 'app/root-store/models/safe-item.model';
import { selectOpenTasks, selectOpenTasksCount } from 'app/root-store/selectors/safe-item.selector';

@Component({
  selector: 'cool-task-counter',
  templateUrl: './task-counter.component.html',
  styleUrls: ['./task-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCounterComponent implements OnInit {
  tasks$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new AdminLoadSafeItems());

    this.tasks$ = this.store.pipe(select(selectOpenTasksCount))
  }

}
