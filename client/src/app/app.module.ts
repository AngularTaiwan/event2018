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
import { IntroModule } from './intro/intro.module';
import { LocationModule } from './location/location.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SecondModule } from './second/second.module';
import { SharedModule } from './shared/shared.module';
import { SpeakersModule } from './speakers/speakers.module';
import { TicketsModule } from './tickets/tickets.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    ContactModule,
    ScheduleModule,
    SpeakersModule,
    TicketsModule,
    SecondModule,
    IntroModule,
    LocationModule,
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
  bootstrap: [AppComponent]
})
export class AppModule {}
