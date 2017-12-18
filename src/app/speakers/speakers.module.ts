import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers/speakers.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ SpeakersComponent],
  declarations: [SpeakersComponent]
})
export class SpeakersModule { }
