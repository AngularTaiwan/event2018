import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import * as moment from 'moment/moment';
import { Subject, Observable, combineLatest, timer } from 'rxjs';
import { takeUntil, map, shareReplay, takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  _endDate: moment.Moment;
  @Input() endDate;

  destroy$ = new Subject();
  countDown$: Observable<{
    dnn: string;
    hnn: string;
    mnn: string;
    snn: string;
  }>;

  constructor() {}

  ngOnInit() {
    this._endDate = moment.utc(this.endDate);
    this.countDown$ = timer(0, 1000).pipe(
      takeUntil(this.destroy$),
      map(t => this._endDate.diff(moment.utc(), 'seconds')),
      takeWhile(rs => rs >= 0),
      map(remainSec => {
        const result = {
          dnn: Math.floor(remainSec / 86400),
          hnn: 0,
          mnn: 0,
          snn: 0
        };
        remainSec -= result.dnn * 86400;
        result.hnn = Math.floor(remainSec / 3600);
        remainSec -= result.hnn * 3600;
        result.mnn = Math.floor(remainSec / 60);
        remainSec -= result.mnn * 60;
        result.snn = remainSec;
        return {
          ...result,
          dnn: result.dnn.toString().padStart(3, '0'),
          hnn: result.hnn.toString().padStart(2, '0'),
          mnn: result.mnn.toString().padStart(2, '0'),
          snn: result.snn.toString().padStart(2, '0')
        };
      }),
      shareReplay()
    );
  }

  ngOnDestroy() {
    this.destroy$.next('');
    this.destroy$.unsubscribe();
  }
}
