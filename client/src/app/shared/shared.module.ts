import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule
} from '@angular/material';

import { AnchorClickDirective } from './anchor-click.directive';
import { CountdownComponent } from './countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

const materialModule = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule
];

@NgModule({
  imports: [CommonModule, AgmCoreModule, materialModule, HttpClientModule],
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
