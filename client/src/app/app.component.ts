import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar
  ) {
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

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        const snackBarRef = this.snackBar.open(
          this.translate.instant('needUpdate'),
          '',
          {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          }
        );
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
    }
  }
}
