import { Injectable } from '@angular/core';
import { SafeApi, SafeItemApi } from '../model';
import { Observable, timer, ReplaySubject, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, concatMapTo, take, shareReplay, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { State } from 'app/root-store';
import { LoadSafeSuccess, LoadSafesSuccess } from 'app/root-store/actions/safe.actions';
import { Safe } from 'app/root-store/models/safe';

@Injectable({
  providedIn: 'root',
})
export class SafeService {
  private readonly safesUrl = '/api/safes';

  private safes: ReplaySubject<SafeApi[]> = new ReplaySubject<SafeApi[]>();
  private items: Subject<SafeItemApi[]> = new Subject<SafeItemApi[]>();

  constructor(private http: HttpClient, private store: Store<State>) {
    timer(1000)
      .pipe(concatMapTo(this.loadSafes()))
      .subscribe(safes => {
        this.safes.next(safes);
        this.store.dispatch(new LoadSafesSuccess({ safes: <Safe[]>safes }));
      });
  }

  getSafe(safeId: string): Observable<SafeApi> {
    return this.safes.asObservable().pipe(
      map(safes1 => safes1.find(safe => safe.id === safeId)),
      filter(Boolean),
    );
  }

  loadSafes(): Observable<SafeApi[]> {
    return this.http.get(this.safesUrl).pipe(map((safes: SafeApi[]) => safes));
  }

  getSafes(): Observable<SafeApi[]> {
    return this.safes.asObservable().pipe(tap(safes => console.log('get', safes)));
  }

  addItem(safeId: string, item: SafeItemApi): Observable<SafeItemApi> {
    const obs = this.http.post(this.safesUrl + `/${safeId}/items`, item).pipe(
      map((response: SafeItemApi) => response),
      shareReplay(1),
    );

    return obs;
  }

  getItems(safeId: string): Observable<SafeItemApi[]> {
    const result$ = this.http.get(this.safesUrl + `/${safeId}/items`).pipe(
      map((items: SafeItemApi[]) => items),
      shareReplay(1),
    );
    result$.subscribe(items => {
      // console.log('items loaded ....', items);
      this.items.next(items);
    });
    return result$;
  }
}
