import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('zh-tw');
    if (!localStorage.getItem('lang')) {
      let browserLang = (
        navigator.language || (navigator as any).browserLanguage
      ).toLowerCase();
      if (browserLang !== 'en' && browserLang !== 'zh-tw') {
        browserLang = 'en';
      }
      localStorage.setItem('lang', browserLang);
    }
    const lang = localStorage.getItem('lang');
    translate.use(lang);
  }
}
