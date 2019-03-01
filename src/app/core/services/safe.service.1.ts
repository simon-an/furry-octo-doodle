import { Injectable } from '@angular/core';
import { SafeApi, SafeItem } from '../model';
import { Observable, Subject, BehaviorSubject, AsyncSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SafeService {
  constructor(private http: HttpClient) {}
  getSafe(safeId: string): Observable<SafeApi> {
    return this.http.get(`api/safes/${safeId}`).pipe(map((safe: SafeApi) => safe));
  }

  getSafes(): Observable<SafeApi[]> {
    return this.http.get(`api/safes`).pipe(map((safes: SafeApi[]) => safes));
  }

  getItems(safeId: string): Observable<SafeItem[]> {
    return this.http.get(`api/safes/${safeId}/items`).pipe(map((items: SafeItem[]) => items));
  }

  addItem(safeId: string, item: SafeItem): Observable<SafeItem> {
    return this.http.post(`api/safes/${safeId}/items`, item).pipe(map((itemWithId: SafeItem) => itemWithId));
  }
}
