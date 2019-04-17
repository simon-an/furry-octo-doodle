import { State } from './../../../../root-store/index';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { SafeItem } from 'app/root-store/models/safe-item.model';
import { selectOpenTasks } from 'app/root-store/selectors/safe-item.selector';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material';
import { filter } from 'rxjs/operators';
import { validateSelectionList } from '../../directives/selection-list-validator.directive';

@Component({
  selector: 'cool-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TaskListComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  subscription: Subscription;

  @Input() stepControl: FormGroup;
  tasks$: Observable<SafeItem[]>;
  constructor(private store: Store<State>, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tasks$ = this.store.pipe(select(selectOpenTasks));
    this.subscription = this.tasks$
      .pipe(
        filter(Boolean),
        filter(tasks => tasks.length > 0),
      )
      .subscribe((tasks: SafeItem[]) => {
        const config = tasks.reduce<{ [key: string]: any }>((controls, safeItem: SafeItem) => {
          controls[safeItem.id] = [false];
          return controls;
        }, {});
        this.formGroup = this._formBuilder.group(config, { validators: validateSelectionList });
        this.stepControl.addControl('step1', this.formGroup);
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSelectionChange(event: MatSelectionListChange) {
    const formControl = this.formGroup.get(event.option.value);
    if (formControl) {
      formControl.setValue(event.option.selected);
    }
  }
}
