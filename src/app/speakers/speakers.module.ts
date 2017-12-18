import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersService } from './speakers.service';
@NgModule({
  imports: [CommonModule],
  providers: [SpeakersService],
  exports: [SpeakersComponent],
  declarations: [SpeakersComponent]
})
export class SpeakersModule {}
