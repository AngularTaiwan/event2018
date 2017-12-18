import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { HeaderComponent } from './header/header.component';
import { AgmCoreModule } from '@agm/core';

import { AnchorClickDirective } from './anchor-click.directive';


@NgModule({
  imports: [CommonModule, AgmCoreModule],
  declarations: [CountdownComponent, HeaderComponent, AnchorClickDirective],
  exports: [CountdownComponent, HeaderComponent, AnchorClickDirective]
})
export class SharedModule {}
