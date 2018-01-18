import { Component, OnInit } from '@angular/core';
import { SpeakersService } from '../speakers.service';
import { ISpeaker } from '../speaker';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  speakers: ISpeaker[];
  constructor(private speakerService: SpeakersService) {}

  ngOnInit() {
    this.speakers = this.speakerService.speakers();
  }
}
