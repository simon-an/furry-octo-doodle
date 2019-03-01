// import { Injectable } from '@angular/core';
// import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
// import { Observable, of, EMPTY } from 'rxjs';
// import { mergeMap, take, tap } from 'rxjs/operators';

// import { SafeService } from './safe.service';
// import { Safe } from 'app/root-store/model/safe';
// import { UserLoadSafe } from 'app/root-store/actions/safe.actions';
// import { State } from 'app/root-store';
// import { Store, select } from '@ngrx/store';
// import { selectSafe } from 'app/root-store/selectors/safe.selector';

// @Injectable({
//   providedIn: 'root',
// })
// export class SafeResolverService implements Resolve<Safe> {
//   constructor(private store: Store<State>, private router: Router) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Safe> | Observable<never> {
//     const id = route.paramMap.get('id');
//     this.store.dispatch(new UserLoadSafe({ safeId: id, userId: '111' }));
//     return this.store.pipe(select(selectSafe, { safeId: id })).pipe(
//       take(1),
//       mergeMap(safe => {
//         if (safe) {
//           return of(<Safe>safe);
//         } else {
//           // id not found
//           this.router.navigate(['home']);
//           return EMPTY;
//         }
//       }),
//     );
//   }
// }
