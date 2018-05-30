import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule } from '@angular/material';

import { AnchorClickDirective } from './anchor-click.directive';
import { CountdownComponent } from './countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const materialModule = [MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule];
@NgModule({
  imports: [CommonModule, AgmCoreModule, materialModule],
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
    FooterComponent,
    materialModule
  ]
})
export class SharedModule {}
