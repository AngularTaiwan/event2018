import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceComponent } from './price/price.component';
@NgModule({
  imports: [CommonModule],
  declarations: [PriceComponent],
  exports: [PriceComponent]
})
export class PriceModule {}
