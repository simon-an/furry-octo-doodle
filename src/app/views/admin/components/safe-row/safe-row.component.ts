import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Safe } from 'app/root-store/models/safe';

@Component({
  selector: 'cool-safe-row',
  templateUrl: './safe-row.component.html',
  styleUrls: ['./safe-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeRowComponent implements OnInit {
  @Input()
  safe: Safe;

  constructor() {}

  ngOnInit() {}
}
