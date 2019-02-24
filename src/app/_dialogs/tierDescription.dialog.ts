import { Component } from '@angular/core';

@Component({
    selector: 'tier-description',
    template: `
    
    <mat-list>
    <h3 mat-subheader>Tiers</h3>
        <mat-list-item style="overflow-wrap: normal; word-wrap: normal;">
            <mat-icon mat-list-icon style="color: silver;">stars</mat-icon>
            <h4 mat-line>Platinum</h4>
            <p mat-line> - on-time percentage: 85%</p>
            <p mat-line> - worked for 180 total days</p>
        </mat-list-item>

        <mat-list-item style="overflow-wrap: normal; word-wrap: normal;">
            <mat-icon mat-list-icon style="color: gold;">stars</mat-icon>
            <h4 mat-line>Gold</h4>
            <p mat-line> - on-time percentage: 75%</p>
            <p mat-line> - worked for 90 total days</p>
        </mat-list-item>

        <mat-list-item style="overflow-wrap: normal; word-wrap: normal;">
            <mat-icon mat-list-icon style="color: grey;">stars</mat-icon>
            <h4 mat-line>Silver</h4>
            <p mat-line> - on-time percentage: 70%</p>
            <p mat-line> - worked for 45 total days</p>
        </mat-list-item>

    </mat-list>
    
    <button mat-button matDialogClose style="margin: 6px;">Okay</button>

    `
})
export class TierDescription {

}