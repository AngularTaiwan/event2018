import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    TranslateModule.forChild()
  ],
  declarations: [ScheduleComponent],
  exports: [ScheduleComponent]
})
export class ScheduleModule {}
