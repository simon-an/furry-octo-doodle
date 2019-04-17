import { AdminLoadSafeItems } from './../../../../root-store/actions/safe-item.actions';
import { Store } from '@ngrx/store';
import { State } from './../../../../root-store/reducers/safe-item.reducer';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdminLoadSafes } from 'app/root-store/actions/safe.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cool-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLandingPageComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(private store: Store<State>) {
    this.firstFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.store.dispatch(new AdminLoadSafes());
    this.store.dispatch(new AdminLoadSafeItems());
  }
}
