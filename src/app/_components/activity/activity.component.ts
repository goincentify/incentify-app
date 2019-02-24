import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  panelOpenState = false;

  ngOnInit() {
  }

  logs = [
    {
      code: 'TMIN',
      description: "Clocked In",
      date: new Date('12/20/2018'),
      time: '07:57 A.M.'
    },
    {
      code: 'PDOVTIM',
      description: "Paid Overtime",
      date: new Date('12/20/2018'),
      time: '16:30 P.M.'
    },
    {
      code: 'TMOUT',
      description: "Clocked Out",
      date: new Date('12/20/2018'),
      time: '17:32 P.M.'
    },
    {
      code: 'TMIN',
      description: "Clocked In",
      date: new Date('12/21/2018'),
      time: '07:52 A.M.'
    },
    {
      code: 'TMOUT',
      description: "Clocked Out",
      date: new Date('12/21/2018'),
      time: '16:27 P.M.'
    },
    {
      code: 'PLVACA',
      description: "Planned Vacation",
      date: new Date('12/24/2018'),
      time: '---'
    },
    {
      code: 'PLVACA',
      description: "Planned Vacation",
      date: new Date('12/25/2018'),
      time: '---'
    },
    {
      code: 'TMIN',
      description: "Clocked In",
      date: new Date('12/20/2018'),
      time: '07:57 A.M.'
    },
    {
      code: 'TMOUT',
      description: "Clocked Out",
      date: new Date('12/20/2018'),
      time: '17:32 P.M.'
    },
    {
      code: 'TMIN',
      description: "Clocked In",
      date: new Date('12/21/2018'),
      time: '07:52 A.M.'
    },
    {
      code: 'TMOUT',
      description: "Clocked Out",
      date: new Date('12/21/2018'),
      time: '16:27 P.M.'
    }
  ]

}
