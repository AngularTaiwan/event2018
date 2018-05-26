import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { AnchorClickDirective } from './anchor-click.directive';
import { CountdownComponent } from './countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, AgmCoreModule, MatToolbarModule],
  declarations: [
    CountdownComponent,
    HeaderComponent,
    AnchorClickDirective,
    FooterComponent
  ],
  exports: [
    CountdownComponent,
    HeaderComponent,
    AnchorClickDirective,
    FooterComponent
  ]
})
export class SharedModule {}
