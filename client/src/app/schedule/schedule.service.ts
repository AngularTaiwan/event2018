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
    Then we'll take a more practical approach and talk about how to utilize reactive programming patterns with an abstraction like RxJS, a domain specific language for reacting to events and how using this abstraction can make your development life much easier in Angular.`,
    hide: false,
  },
  {
    periodStart: '09:50',
    periodEnd: '10:00',
    topic: '休息時間',
  },
  {
    periodStart: '10:00',
    periodEnd: '10:50',
    speaker: 'Will',
    topic: 'Angular 7 全新功能探索 ',
    description: `Angular 團隊預計在 2018 十月推出 v7.0 版，這個版本預期將帶來驚豔眾人的 Ivy 渲染引擎與全新建置基礎架構。不但大幅降低應用程式大小，提升執行速度，在開發流程上的效率改善更是顯著。本次演說將為大家帶來 Angular 7 各種全新特性與改進項目，讓你體驗 Angular 開發框架的強大魅力！`,
    hide: false,
  },
  {
    periodStart: '10:50',
    periodEnd: '11:00',
    topic: '休息時間',
  },
  {
    periodStart: '11:00',
    periodEnd: '11:50',
    speaker: 'Kevin Yang',
    topic: '改善 Angular 開發流程：你所不知道的 Schematics 程式碼產生器',
    description: `Angular CLI 團隊所開發的 Schematics 工具，讓 Angular 在開發上多了無限的可能性，目前已經有許多的套件都將 schematics 視為標準的操作流程，透過 schematics 來減少程式碼初始化的時間。那企業該如何透過 Schematics 來幫助團隊更有效的開發系統呢，透過本次的分享，能讓大家更能了解 Schematics  的奧妙之處`,
    hide: false,
  },
  {
    periodStart: '11:50',
    periodEnd: '13:00',
    topic: '午餐時間',
  },
  {
    periodStart: '13:00',
    periodEnd: '13:30',
    speaker: 'Mike',
    topic: '打造企業級應用的利器：Angular CDK 輕鬆打造高品質元件',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,
    agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    hide: false,
  },
  {
    periodStart: '13:30',
    periodEnd: '13:45',
    topic: '休息時間',
  },
  {
    periodStart: '13:45',
    periodEnd: '14:15',
    speaker: 'Jecelyn Yeen',
    topic: '以 PWA 實現 Angular 網站開發：離線、推播、Service Worker',
    description: `隨著 PWA 技術的成熟以及瀏覽器的支援度提高，2018 年可謂是 PWA 爆發的一年。本次分享將涵蓋 PWA 的一系列技術 - 離線、推播、Service Worker，以及如何使用 Angular 實現 PWA 網站開發，優化使用者體驗。
    `,
    hide: false,
  },
  {
    periodStart: '13:45',
    periodEnd: '14:15',
    topic: '休息時間',
  },
  {
    periodStart: '14:30',
    periodEnd: '15:00',
    speaker: 'Amos',
    topic: '從網頁設計師的角度看 Angular',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,
    agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    hide: false,
  },
  {
    periodStart: '15:00',
    periodEnd: '15:15',
    topic: '休息時間',
  },
  {
    periodStart: '15:15',
    periodEnd: '15:45',
    speaker: 'James Fu',
    topic: '企業產品開發導入 Angular 經驗談',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,
    agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    hide: false,
  },
  {
    periodStart: '15:45',
    periodEnd: '16:00',
    topic: '休息時間',
  },
  {
    periodStart: '16:00',
    periodEnd: '16:30',
    speaker: 'Poy',
    topic: '決戰 Angular 組態管理：你所不知道的 10 種設定檔載入方式 ',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,
    agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    hide: false,
  },
  {
    periodStart: '16:30',
    periodEnd: '16:40',
    topic: '休息時間',
  },
  {
    periodStart: '16:40',
    periodEnd: '17:20',
    speaker: 'Panels',
    topic: 'AMA 時間',
    description: `邀請所有的講者和與會者進行 AMA 時間。`,
    hide: false,
  },
] as Session[];

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  getSessions() {
    return sessions.filter(session => !session.hide);
  }
}
