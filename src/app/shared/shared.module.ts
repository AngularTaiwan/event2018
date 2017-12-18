import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { HeaderComponent } from './header/header.component';
import { AgmCoreModule } from '@agm/core';

import { AnchorClickDirective } from './anchor-click.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, AgmCoreModule],
  declarations: [CountdownComponent, HeaderComponent, AnchorClickDirective, FooterComponent],
  exports: [CountdownComponent, HeaderComponent, AnchorClickDirective, FooterComponent]
})
export class SharedModule {}
