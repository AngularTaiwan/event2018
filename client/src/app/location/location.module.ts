import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { LocationComponent } from './location/location.component';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule.forChild()],
  declarations: [LocationComponent],
  exports: [LocationComponent]
})
export class LocationModule {}
