import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import * as moment from 'moment/moment';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { timer } from 'rxjs/observable/timer';
import { takeUntil, map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnChanges, OnDestroy {
  @Input() endDate;

  _endDate;

  destroy$ = new Subject();
  countDown$: Observable<{ dnn: string; hnn: string; mnn: string; snn: string }>;
  constructor() {}

  ngOnChanges() {
    this._endDate = moment(this.endDate);
  }
  ngOnInit() {
    console.log(this._endDate);
    this.countDown$ = timer(0, 1000).pipe(
      takeUntil(this.destroy$),
      map(() => {
        let totalSeconds = this._endDate.diff(moment(), 'seconds');
        const result = {
          dnn: Math.floor(totalSeconds / 86400),
          hnn: 0,
          mnn: 0,
          snn: 0
        };
        totalSeconds -= result.dnn * 86400;
        result.hnn = Math.floor(totalSeconds / 3600);
        totalSeconds -= result.hnn * 3600;
        result.mnn = Math.floor(totalSeconds / 60);
        totalSeconds -= result.mnn * 60;
        result.snn = totalSeconds;
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
