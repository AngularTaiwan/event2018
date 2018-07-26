import { Injectable } from '@angular/core';
import { ISpeaker } from './speaker';

const SPEAKERS = [
  {
    img: 'assets/images/speakers/tracylee.png',
    name: 'Tracy Lee',
    company: 'This Dot, Inc.',
    title: 'Co-Founder',
    // tslint:disable-next-line:max-line-length
    about: `Tracy is a Google Developer Expert, RxJS Core Team member, a Women Techmakers Lead, and a frequent keynote speaker at conferences. She heads up Community Relations at Node Foundation, is the host of the Modern Web podcast, organizer of This.JavaScript, Contributor Days, Google Developer Group Silicon Valley and Triangle, and RxWorkshop. She is also Co-Founder of This Dot Labs, an elite consultancy helping teams build front end applications. You can find her on Twitter @ladyleet or at http://thisdot.co/labs.`,
    hide: false,
    fb: '',
    twitter: 'https://twitter.com/ladyleet',
    github: ''
  },
  {
    img: 'assets/images/speakers/will.jpg',
    name: 'Will 保哥',
    company: '多奇數位創意有限公司',
    title: '技術總監',
    // tslint:disable-next-line:max-line-length
    about: `現任多奇數位創意有限公司技術總監。連續 10 度當選微軟最有價值專家 (ASP.NET/IIS MVP)。早期專研 LAMP 相關技術，自 2005 年起轉向 Microsoft .NET Platform 開發技術，熟悉各式 Web 開發技術、網站效能調校、SQL Server、網站內容管理系統、網路系統整合。`,
    hide: false,
    fb: 'https://www.facebook.com/will.fans/',
    twitter: 'https://twitter.com/Will_Huang',
    github: ''
  },
  {
    img: 'assets/images/speakers/kevin.png',
    name: 'Kevin Yang',
    company: 'Angular Taiwan ',
    title: '技術傳教士',
    about: `本次 Angular Taiwan 2018 技術大會總召，同時也是 Angular 技術專家，2018 獲選 Google Developer Expert 殊榮。`,
    hide: false,
    fb: 'https://www.facebook.com/CKNotepad',
    twitter: 'https://twitter.com/chgc',
    github: 'http://github.com/chgc'
  },

  {
    img: 'assets/images/speakers/Jecelyn.jpg',
    name: 'Jecelyn Yeen',
    company: '任仕達',
    title: 'Software Architect',
    // tslint:disable-next-line:max-line-length
    about: `Jecelyn 是土生土長的 🇲🇾華裔，會說多種語言包括馬來語、華語、廣東話、英語、Javascript、 C# 和 Html。熱愛編碼（十年實戰經驗，但還年輕哦😎），現為任仕達（《財富》世界500強）的Software Architect。
    <br/><br/>
    Jecelyn 熟悉各式網頁開發技術（前端與後端）。空閑或壓力過大的時候，就會跳海 😱（因為是潛水發燒友啦）。
    <br/><br/>
    Jecelyn 是 Angular GDE 成員之一，她活躍於馬來西亞編碼社群，與志同道合的碼友共同經營 Women Who Code Kuala Lumpur 和 The Frontend Malaysia。
    `,
    hide: false,
    fb: 'https://www.facebook.com/jecelyn',
    twitter: 'https://twitter.com/JecelynYeen',
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
