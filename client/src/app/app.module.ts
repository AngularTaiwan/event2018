import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { IntroComponent } from './intro/intro.component';
import { LocationComponent } from './location/location.component';
import { ScheduleModule } from './schedule/schedule.module';
import { SecondComponent } from './second/second.component';
import { SharedModule } from './shared/shared.module';
import { SpeakersModule } from './speakers/speakers.module';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { TicketsComponent } from './tickets/tickets.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    TicketComponent,
    IntroComponent,
    LocationComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContactModule,
    ScheduleModule,
    SpeakersModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
