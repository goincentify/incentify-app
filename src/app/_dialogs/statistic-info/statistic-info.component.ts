import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  dialogtitle: string;
  dialoginfo: string;
  dialogsubtitle: string;
}


@Component({
  selector: 'app-statistic-info',
  templateUrl: './statistic-info.component.html',
  styleUrls: ['./statistic-info.component.scss']
})
export class StatisticInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StatisticInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}