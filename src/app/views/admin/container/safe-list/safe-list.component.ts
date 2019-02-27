import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeService } from '~core/services';
import { Observable } from 'rxjs';
import { Safe } from '~core/model';

@Component({
  selector: 'cool-safe-list',
  templateUrl: './safe-list.component.html',
  styleUrls: ['./safe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeListComponent implements OnInit {
  constructor(private safeService: SafeService) {}

  safes$: Observable<Safe[]>;

  ngOnInit() {
    this.safes$ = this.safeService.getSafes();
  }
}
