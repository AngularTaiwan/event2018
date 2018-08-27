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
    hide: true,
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
    hide: true,
    fb: 'https://www.facebook.com/will.fans/',
    twitter: 'https://twitter.com/Will_Huang',
    github: ''
  },
  {
    img: 'assets/images/speakers/kevin.jpg',
    name: 'Kevin Yang',
    company: 'Angular Taiwan ',
    title: '技術傳教士',
    about: `本次 Angular Taiwan 2018 技術大會總召，同時也是 Angular 技術專家，2018 獲選 Google Developer Expert 殊榮。`,
    hide: true,
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
  },
  {
    img: 'assets/images/speakers/mike.jpg',
    name: 'Mike Huang',
    company: '多奇數位創意有限公司',
    title: '老司機',
    // tslint:disable-next-line:max-line-length
    about: `現任多奇數位創意有限公司全端工程師，2018 年以「Angular Material 完全攻略」系列文章榮獲 2018 iT 邦幫忙鐵人賽 Modern Web 組 冠軍，熟悉 .NET 與 Angular 相關技術，熱衷各式新奇技術研究與分享學習經驗。
    `,
    hide: true,
    fb: 'https://www.facebook.com/fullstackledder/',
    twitter: '',
    github: 'https://github.com/wellwind'
  },
  {
    img: 'assets/images/speakers/poy.jpg',
    name: 'Poy Chang',
    company: '',
    title: 'Senior Enginner',
    // tslint:disable-next-line:max-line-length
    about: `目前任職於全美前 100 大私人企業，負責企業內部 IT 解決方案設計與開發，從前端開發到後端系統構建的過程中累積多元技術經驗，喜歡將經驗發表於 <a href="https://poychang.github.io" target="_blank">https://poychang.github.io</a> 個人部落格，分享各項技術實務。
    <br/><br/>
    講師經歷
    <ul>
      <li>微軟 MVP 最有價專家</li>
      <li>Angular Taiwan 核心社群成員</li>
      <li>Global Azure Bootcamp 講師</li>
    </ul>
    `,
    hide: true,
    fb: 'https://www.facebook.com/poychang',
    twitter: 'https://twitter.com/poychang',
    github: ''
  },
  {
    img: 'assets/images/speakers/james.jpg',
    name: 'James Fu',
    company: '鼎新電腦新創事業處',
    title: '經理',
    // tslint:disable-next-line:max-line-length
    about: `主要專長在系統架構設計、資料庫效能調教等實作經驗。
    在 Study4.TW 社群擔任講師，推廣 SQL Server 與 Hyper-V 相關技術，
    具 MCSE 國際認證執照，獲選為微軟最有價值專家（MVP）。
    <br/><br/>
    講師經歷
    <ul>
      <li>微軟 Data Platform MVP (2013/04~ )</li>
      <li>Study4.TW 常任講師</li>
      <li>SQL Pass 常任講師</li>
      <li>微軟 MVA 課程講師</li>
      <li>擁有 MCP , MCP+I , MCSE , MCSE+I, MCDBA, MCTS, MCSA, SCJP, OCP</li>
      <li>擁有 SQL Server 2012 MCSE</li>
      <li>微軟虛擬化戰士 第一屆 和 第三屆 金翅級 證書</li>
      <li>微軟 TechDay 講師</li>
    </ul>
    `,
    hide: true,
    fb: '',
    twitter: '',
    github: ''
  }
];

@Injectable()
export class SpeakersService {
  private _speakers = SPEAKERS;

  speakers(): ISpeaker[] {
    return this._speakers;
  }

  initEmptySpeakerArray(): ISpeaker[] {
    const speakerCount = 8;
    const emptySpeaker = {
      img: 'assets/images/speakers/speaker2.jpg',
      name: '',
      company: '',
      title: '',
      // tslint:disable-next-line:max-line-length
      about: 'Coming Soon',
      hide: false,
      fb: '',
      twitter: '',
      github: ''
    };
    return Array.from({ length: speakerCount }, (v, k) => emptySpeaker);
  }
}
