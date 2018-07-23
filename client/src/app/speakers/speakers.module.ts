import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersService } from './speakers.service';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';
import { SpeakerDialogComponent } from './speaker-dialog/speaker-dialog.component';
@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule.forChild()],
  providers: [SpeakersService],
  exports: [SpeakersComponent],
  declarations: [SpeakersComponent, SpeakerDialogComponent],
  entryComponents: [
    SpeakerDialogComponent
  ]
})
export class SpeakersModule {}
