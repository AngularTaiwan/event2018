import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SecondComponent } from './second/second.component';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule.forChild()],
  declarations: [SecondComponent],
  exports: [SecondComponent]
})
export class SecondModule {}
