import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule.forChild()],
  declarations: [IntroComponent],
  exports: [IntroComponent]
})
export class IntroModule {}
