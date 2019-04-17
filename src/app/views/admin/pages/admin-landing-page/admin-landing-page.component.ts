import { AdminLoadSafeItems } from './../../../../root-store/actions/safe-item.actions';
import { Store } from '@ngrx/store';
import { State } from './../../../../root-store/reducers/safe-item.reducer';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdminLoadSafes } from 'app/root-store/actions/safe.actions';

@Component({
  selector: 'cool-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLandingPageComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new AdminLoadSafes());
    this.store.dispatch(new AdminLoadSafeItems());
  }

}
