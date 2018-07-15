import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule
} from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { AnchorClickDirective } from './anchor-click.directive';
import { CountdownComponent } from './countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const materialModule = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    ...materialModule,
    HttpClientModule,
    TranslateModule
  ],
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
    ...materialModule
  ]
})
export class SharedModule {}
