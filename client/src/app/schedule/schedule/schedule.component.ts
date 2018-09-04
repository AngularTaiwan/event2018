import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { SpeakerDialogComponent } from '../../speakers/speaker-dialog/speaker-dialog.component';
import { SpeakersService } from '../../speakers/speakers.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  sessions = this.service.getSessions();
  constructor(
    private service: ScheduleService,
    private speakerService: SpeakersService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  openDialog(speaker) {
    const _speaker = this.speakerService
      .speakers()
      .find(x => x.name === speaker);
    if (_speaker) {
      const dialogRef = this.dialog.open(SpeakerDialogComponent, {
        // width: '740px',
        data: { speaker: _speaker }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
