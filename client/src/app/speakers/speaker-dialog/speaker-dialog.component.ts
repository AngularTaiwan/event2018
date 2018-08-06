import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-speaker-dialog',
  templateUrl: './speaker-dialog.component.html',
  styleUrls: ['./speaker-dialog.component.scss']
})
export class SpeakerDialogComponent implements OnInit {
  speaker;
  constructor(
    public dialogRef: MatDialogRef<SpeakerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.speaker = data.speaker;
  }
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
