import { Injectable } from '@angular/core';

export interface Session {
  periodStart: string;
  periodEnd: string;
  speaker: string;
  topic: string;
  description: string;
  hide: boolean;
}
const sessions: Session[] = [
  {
    periodStart: '09:00',
    periodEnd: '09:50',
    speaker: 'Tracy Lee',
    topic: 'How Reactive Programming makes developer lives easier. ',
    description: `Reactive programming paradigms are all around us. So why does is it awesome? We'll explore reactive programming in standards, frameworks and libraries and talk about how to think reactively.
    <br /><br />
    // tslint:disable-next-line:max-line-length
    Then we'll take a more practical approach and talk about how to utilize reactive programming patterns with an abstraction like RxJS, a domain specific language for reacting to events and how using this abstraction can make your development life much easier in Angular.`,
    hide: false
  },
  {
    periodStart: '09:50',
    periodEnd: '10:00',
    topic: '休息時間'
  },
  {
    periodStart: '10:00',
    periodEnd: '10:50',
    speaker: 'Will',
    topic: 'Angular 7 全新功能探索 ',
    // tslint:disable-next-line:max-line-length
    description: `Angular 團隊預計在 2018 十月推出 v7.0 版，這個版本預期將帶來驚豔眾人的 Ivy 渲染引擎與全新建置基礎架構。不但大幅降低應用程式大小，提升執行速度，在開發流程上的效率改善更是顯著。本次演說將為大家帶來 Angular 7 各種全新特性與改進項目，讓你體驗 Angular 開發框架的強大魅力！`,
    hide: false
  },
  {
    periodStart: '10:50',
    periodEnd: '11:00',
    topic: '休息時間'
  },
  {
    periodStart: '11:00',
    periodEnd: '11:50',
    speaker: 'Kevin Yang',
    topic: '改善 Angular 開發流程：你所不知道的 Schematics 程式碼產生器',
    // tslint:disable-next-line:max-line-length
    description: `Angular CLI 團隊所開發的 Schematics 工具，讓 Angular 在開發上多了無限的可能性，目前已經有許多的套件都將 schematics 視為標準的操作流程，透過 schematics 來減少程式碼初始化的時間。那企業該如何透過 Schematics 來幫助團隊更有效的開發系統呢，透過本次的分享，能讓大家更能了解 Schematics  的奧妙之處`,
    hide: false
  },
  {
    periodStart: '11:50',
    periodEnd: '13:00',
    topic: '午餐時間'
  },
  {
    periodStart: '13:00',
    periodEnd: '13:30',
    speaker: 'Mike',
    topic: 'Angular CDK 火力上陣',
    // tslint:disable-next-line:max-line-length
    description: `Angular CDK 是用來開發元件的工具庫，也是許多知名元件庫的核心底層；身為 Angular 開發人員，我們也許不需要使用任何現成的元件庫，但前端需求日新月異，一定會面臨到畫面互動的挑戰，Angular CDK 正是用來解決複雜互動的一帖良藥！本次分享將透過 Angular CDK 火力展示如何透過短短數行程式碼，打造出各式各樣複雜的應用功能，保證讓你愛不釋手！`,
    hide: false
  },
  {
    periodStart: '13:30',
    periodEnd: '13:45',
    topic: '休息時間'
  },
  {
    periodStart: '13:45',
    periodEnd: '14:15',
    speaker: 'Jecelyn Yeen',
    topic: '以 PWA 實現 Angular 網站開發：離線、推播、Service Worker',
    description: `隨著 PWA 技術的成熟以及瀏覽器的支援度提高，2018 年可謂是 PWA 爆發的一年。本次分享將涵蓋 PWA 的一系列技術 - 離線、推播、Service Worker，以及如何使用 Angular 實現 PWA 網站開發，優化使用者體驗。
    `,
    hide: false
  },
  {
    periodStart: '14:15',
    periodEnd: '14:30',
    topic: '休息時間'
  },
  {
    periodStart: '14:30',
    periodEnd: '15:00',
    speaker: 'Amos',
    topic: '從前端設計角度來看 Angular',
     // tslint:disable-next-line:max-line-length
    description: `在開發過程中前端設計師往往站在門外看程式設計師處理一堆看似火星文的原始碼，遇到問題往往都是鴨子聽雷，送出去的東西被改壞了被送回來說『你要負責修好 !』，這些狀況屢見不鮮，現在你可以將你要的視覺效果掌控在你自己手上，團隊開發往往因為視覺設計師缺乏組件開發技能而導致需要工程師二次加工，現在視覺專家的你其實只要利用熟悉的CSS觀念就能輕鬆改變這個過程，放開你的心結，讓我們一起開心的擁抱 Angular 吧。`,
    hide: false
  },
  {
    periodStart: '15:00',
    periodEnd: '15:15',
    topic: '休息時間'
  },
  {
    periodStart: '15:15',
    periodEnd: '15:45',
    speaker: 'James Fu',
    topic: '從 webform 走向 Angular',
    // tslint:disable-next-line:max-line-length
    description: `A1 商務應用雲是個雲端 SaaS 服務 , 在此次課程中 , 將會介紹為何 A1 開發團隊, 需要將產品從傳統的 webform , 花費一年的時間將產品整個改到 Angular , 這期間遇到那些坑洞和所得到的效益 , 將會在這次中跟大家做個分享`,
    hide: false
  },
  {
    periodStart: '15:45',
    periodEnd: '16:00',
    topic: '休息時間'
  },
  {
    periodStart: '16:00',
    periodEnd: '16:30',
    speaker: 'Poy',
    topic: '原來 Angular 可以這樣玩設定',
    description: `"設定"這個動作劃開了環境與程式碼之間的耦合，透過"設定"我們不僅僅能在開發時期更容易的切換測試環境，也可以在系統上線後，讓應用程式根據需求而改變啟動時所需要的設定值。

    不論你是在開發產品，或是開發企業需求導向的應用，掌握"設定"的技巧，能讓你的應用程式更有彈性，適應更多元的環境變化。`,
    hide: false
  },
  {
    periodStart: '16:30',
    periodEnd: '16:40',
    topic: '休息時間'
  },
  {
    periodStart: '16:40',
    periodEnd: '17:20',
    speaker: 'Panels',
    topic: 'AMA 時間',
    description: `邀請所有的講者和與會者進行 AMA 時間。`,
    hide: false
  }
] as Session[];

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor() {}

  getSessions() {
    return sessions.filter(session => !session.hide);
  }
}
