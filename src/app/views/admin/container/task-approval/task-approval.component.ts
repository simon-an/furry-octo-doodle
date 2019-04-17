import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { State } from './../../../../root-store';
import { selectSafeItemsBySafeId, selectSafeItemById } from 'app/root-store/selectors/safe-item.selector';
import { Observable } from 'rxjs';
import { SafeItem } from 'app/root-store/models/safe-item.model';

@Component({
  selector: 'cool-task-approval',
  templateUrl: './task-approval.component.html',
  styleUrls: ['./task-approval.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskApprovalComponent implements OnInit {
  task$: Observable<SafeItem>;

  @Input() formGroup: FormGroup;
  @Input() taskId: string;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.task$ = this.store.pipe(select(selectSafeItemById, { itemId: this.taskId }));
  }
}
