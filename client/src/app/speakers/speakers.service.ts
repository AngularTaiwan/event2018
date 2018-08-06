import { Injectable } from '@angular/core';
import { ISpeaker } from './speaker';

const SPEAKERS = [
  {
    img: 'assets/images/speakers/will.jpg',
    name: 'Will 保哥',
    title: '技術總監',
    // tslint:disable-next-line:max-line-length
    about: `現任多奇數位創意有限公司技術總監。連續 10 度當選微軟最有價值專家 (ASP.NET/IIS MVP)。早期專研 LAMP 相關技術，自 2005 年起轉向 Microsoft .NET Platform 開發技術，熟悉各式 Web 開發技術、網站效能調校、SQL Server、網站內容管理系統、網路系統整合。`,
    hide: true,
    fb: 'https://www.facebook.com/will.fans/',
    twitter: 'https://twitter.com/Will_Huang',
    github: ''
  },
  {
    img: 'assets/images/speakers/kevin.png',
    name: 'Kevin Yang',
    title: 'Angular Taiwan 技術傳教士',
    about: `本次 Angular Taiwan 2018 技術大會總召，同時也是 Angular 技術專家，2018 獲選 Google Developer Expert 殊榮。`,
    hide: true,
    fb: 'https://www.facebook.com/CKNotepad',
    twitter: 'https://twitter.com/chgc',
    github: 'http://github.com/chgc'
  },
  {
    img: 'assets/images/speakers/tracylee.png',
    name: 'Tracy Lee',
    title: 'This Dot, Inc. Co-Founder',
    // tslint:disable-next-line:max-line-length
    about: `Tracy is a Google Developer Expert, RxJS Core Team member, a Women Techmakers Lead, and a frequent keynote speaker at conferences. She heads up Community Relations at Node Foundation, is the host of the Modern Web podcast, organizer of This.JavaScript, Contributor Days, Google Developer Group Silicon Valley and Triangle, and RxWorkshop. She is also Co-Founder of This Dot Labs, an elite consultancy helping teams build front end applications. You can find her on Twitter @ladyleet or at http://thisdot.co/labs.`,
    hide: true,
    fb: '',
    twitter: 'https://twitter.com/ladyleet',
    github: ''
  }
];

@Injectable()
export class SpeakersService {
  private _speakers = SPEAKERS;

  speakers(): ISpeaker[] {
    return this._speakers;
  }
}
