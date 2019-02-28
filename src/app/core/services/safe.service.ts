import { Injectable } from '@angular/core';
import { Safe, SafeItem } from '../model';
import { Observable, timer, ReplaySubject, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, concatMapTo, take, shareReplay, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SafeService {
  private readonly safesUrl = '/api/safes';

  private safes: ReplaySubject<Safe[]> = new ReplaySubject<Safe[]>();
  private items: Subject<SafeItem[]> = new Subject<SafeItem[]>();

  constructor(private http: HttpClient) {
    timer(1000)
      .pipe(concatMapTo(this.loadSafes()))
      .subscribe(this.safes);
  }

  getSafe(safeId: string): Observable<Safe> {
    return this.safes.asObservable().pipe(
      map(safes1 => safes1.find(safe => safe.id === safeId)),
      filter(Boolean),
    );
  }

  loadSafes(): Observable<Safe[]> {
    return this.http.get(this.safesUrl).pipe(map((safes: Safe[]) => safes));
  }

  getSafes(): Observable<Safe[]> {
    return this.safes.asObservable().pipe(tap(safes => console.log('get', safes)));
  }

  addItem(safeId: string, item: SafeItem): Observable<SafeItem> {
    const obs = this.http.post(this.safesUrl + `/${safeId}/items`, item).pipe(
      map((response: SafeItem) => response),
      shareReplay(1),
    );

    return obs;
  }

  getItems(safeId: string): Observable<SafeItem[]> {
    const result$ = this.http.get(this.safesUrl + `/${safeId}/items`).pipe(
      map((items: SafeItem[]) => items),
      shareReplay(1),
    );
    result$.subscribe(items => {
      // console.log('items loaded ....', items);
      this.items.next(items);
    });
    return result$;
  }
}
