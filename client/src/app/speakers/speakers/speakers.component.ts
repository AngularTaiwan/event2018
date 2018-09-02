import { Component, OnInit } from '@angular/core';
import { SpeakersService } from '../speakers.service';
import { ISpeaker } from '../speaker';
import { MatDialog } from '@angular/material';
import { SpeakerDialogComponent } from '../speaker-dialog/speaker-dialog.component';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers: ISpeaker[];
  constructor(
    private speakerService: SpeakersService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.speakers = [
      ...this.speakerService.speakers().filter(s => s.hide === false),
      ...this.speakerService.initEmptySpeakerArray()
    ].slice(0, 8);
  }

  openDialog(speker): void {
    const dialogRef = this.dialog.open(SpeakerDialogComponent, {
      // width: '740px',
      data: { speaker: speker }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
