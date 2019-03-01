import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeService } from '~core/services';
import { Observable } from 'rxjs';
import { Safe } from 'app/root-store/models/safe';
import { State } from 'app/root-store';
import { Store, select } from '@ngrx/store';
import { selectSafes, selectSafesLoading } from 'app/root-store/selectors/safe.selector';

@Component({
  selector: 'cool-safe-list',
  templateUrl: './safe-list.component.html',
  styleUrls: ['./safe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeListComponent implements OnInit {
  constructor(private store: Store<State>) {}

  loading$: Observable<boolean>;
  safes$: Observable<Safe[]>;

  ngOnInit() {
    this.safes$ = this.store.pipe(select(selectSafes));
    this.loading$ = this.store.pipe(select(selectSafesLoading));
  }
}
