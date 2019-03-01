import { Observable, merge, Subject, BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SafeService } from '~core/services';
import { SafeItem } from '~core/model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, withLatestFrom, filter, exhaustMap, concatMap, mergeMap, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { AddSafeItemDialogComponent } from '../add-safe-item-dialog/add-safe-item-dialog.component';
import { State } from 'app/root-store';
import { Store, select } from '@ngrx/store';
import { Safe } from 'app/root-store/models/safe';
import { selectSafesLoading, selectSafe } from 'app/root-store/selectors/safe.selector';
import { UserLoadSafe } from 'app/root-store/actions/safe.actions';

@Component({
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafePageComponent implements OnInit {
  safe$: Observable<Safe>;
  items$: Observable<SafeItem[]>;
  loading$: Observable<boolean>;
  userId: '111';
  isCustomer = true; // TODO provide through dependency injection

  constructor(
    private store: Store<State>,
    private activatedRoute: ActivatedRoute,
    private service: SafeService,
    private dialogService: MatDialog,
  ) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(selectSafesLoading));

    this.safe$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.store.dispatch(new UserLoadSafe({ safeId: params.get('id'), userId: this.userId }));
        return this.store.pipe(select(selectSafe, { safeId: params.get('id') }));
      }),
    );
  }

  addSafeItem() {
    const dialogRef = this.dialogService.open(AddSafeItemDialogComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef
      .afterClosed()
      .pipe(withLatestFrom(this.safe$))
      .subscribe(([result, safe]: [SafeItem, Safe]) => {
        //   console.log(`Dialog result:`, result);
        if (result) {
          result.safeId = safe.id;
          const result$ = this.service.addItem(safe.id, result);
          result$.subscribe(item => {
            // console.log('new item id: ', item.id);
          });
        }
      });
  }
}
