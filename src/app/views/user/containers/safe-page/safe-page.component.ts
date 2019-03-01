import { Observable, merge, Subject, BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SafeService } from '~core/services';
import { SafeItem, Safe } from '~core/model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, withLatestFrom, filter, exhaustMap, concatMap, mergeMap, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { AddSafeItemDialogComponent } from '../add-safe-item-dialog/add-safe-item-dialog.component';

@Component({
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafePageComponent implements OnInit {
  safe$: Observable<Safe>;
  items$: Observable<SafeItem[]>;
  trigger$: Subject<any> = new Subject<any>();
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isCustomer = true; // TODO provide through dependency injection

  constructor(private activatedRoute: ActivatedRoute, private service: SafeService, private dialogService: MatDialog) {}

  ngOnInit() {
    this.safe$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getSafe(params.get('id'))),
    );
    const fire$ = merge(this.safe$, this.trigger$);
    fire$.subscribe(() => {
      this.loading$.next(true);
    });

    this.items$ = fire$.pipe(
      withLatestFrom(this.safe$),
      switchMap(([trigger, safe]: [any, Safe]) => this.service.getItems(safe.id)),
    );

    this.items$.subscribe(() => {
      this.loading$.next(false);
    });
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
            this.trigger$.next(item.id);
          });
        }
      });
  }
}
