import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { SpeakersComponent } from './speakers/speakers.component';
import { AnchorClickDirective } from './anchor-click.directive';
import { ScheduleComponent } from './schedule/schedule.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  imports: [CommonModule, AgmCoreModule],
  declarations: [
    CountdownComponent,
    HeaderComponent,
    ContactComponent,
    SpeakersComponent,
    AnchorClickDirective,
    ScheduleComponent,
    PriceComponent
  ],
  exports: [
    CountdownComponent,
    HeaderComponent,
    ContactComponent,
    SpeakersComponent,
    AnchorClickDirective,
    ScheduleComponent,
    PriceComponent
  ]
})
export class SharedModule {}
