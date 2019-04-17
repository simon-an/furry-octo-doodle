import { AdminLoadSafeItems } from './../../../../root-store/actions/safe-item.actions';
import { Store } from '@ngrx/store';
import { State } from './../../../../root-store';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { AdminLoadSafes } from 'app/root-store/actions/safe.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { SafeItem } from 'app/root-store/models/safe-item.model';
import { MatVerticalStepper, MatStep } from '@angular/material';

@Component({
  selector: 'cool-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLandingPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  tasksArray: SafeItem[];
  stepFormGroup: FormGroup;
  @ViewChild('landingPageStepper') stepper: MatVerticalStepper;
  @ViewChildren(MatStep) set setSteps(steps: QueryList<MatStep>) {
    if (steps.length > 1) {
      this.stepper.next();
    }
  }

  constructor(private store: Store<State>) {
    this.firstFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.store.dispatch(new AdminLoadSafes());
    this.store.dispatch(new AdminLoadSafeItems());
  }

  createSteps(tasks: SafeItem[]) {
    console.log('create Steps');
    this.stepFormGroup = new FormGroup(
      tasks.reduce<{ [key: string]: any }>((controls, safeItem: SafeItem) => {
        controls[safeItem.id] = new FormGroup({ invoice: new FormControl() });
        return controls;
      }, {}),
    );
  }
}
