import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { environment } from '../../environments/environment';
@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapAPI
    })
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}
