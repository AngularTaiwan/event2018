import { Injectable } from '@angular/core';
import { ISpeaker } from './speaker';

const SPEAKERS = [
  {
    img: 'assets/img/speakers/speaker1.jpg',
    name: 'ERIC BOLDY',
    title: 'Project Manager',
    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    fb: '#',
    twitter: '#',
    github: '#'
  },
  {
    img: 'assets/img/speakers/speaker1.jpg',
    name: 'JAMES ROCK',
    title: 'VP Product @ Flopbox',
    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    fb: '#',
    twitter: '#',
    github: '#'
  },
  {
    img: 'assets/img/speakers/speaker1.jpg',
    name: 'ANDREA WARRAETY',
    title: 'Designer @ Winstagrap',
    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    fb: '#',
    twitter: '#',
    github: '#'
  },
  {
    img: 'assets/img/speakers/speaker1.jpg',
    name: 'MARTIN BRANSON',
    title: 'Evangelist @ Doogle',
    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    fb: '#',
    twitter: '#',
    github: '#'
  },
  {
    img: 'assets/img/speakers/speaker1.jpg',
    name: 'AMY WARNER',
    title: 'Graphic Designer',
    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    fb: '#',
    twitter: '#',
    github: '#'
  },
  {
    img: 'assets/img/speakers/speaker1.jpg',
    name: 'ALEC KROSOVIC',
    title: 'Project Manager',
    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    fb: '#',
    twitter: '#',
    github: '#'
  }
];

@Injectable()
export class SpeakersService {
  private _speakers = SPEAKERS;
  constructor() {}

  speakers(): ISpeaker[] {
    return this._speakers;
  }
}
