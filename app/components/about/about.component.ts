import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateY(100%)' })),
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  adjectives: Array<string>;
  show: boolean = true;
  finalWords: Array<string>;
  interval: any;
  constructor() {
    this.finalWords = ['a'];
    this.interval = interval(6000);
    this.interval.subscribe(x => {
      this.restartText();
    });
  }

  ngOnInit(): void {
  }

  restartText() {
    let adjectives = ['UX Design', 'mexican', 'friend'];
    this.finalWords.pop();
    let selectedWord = adjectives[Math.floor(Math.random() * adjectives.length)];
    this.finalWords.push(selectedWord);
  }



}
