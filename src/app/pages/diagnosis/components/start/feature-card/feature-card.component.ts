import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  styleUrls: ['./feature-card.component.scss'],
  template: `
  <nb-card (click)="on = !on" [ngClass]="{'off': !on}">
    <div class="icon-container">
      <div class="icon status-{{ type }}">
        <div *ngIf="title === 'Rorschach'">
          <app-artificial-intelligence-svg></app-artificial-intelligence-svg>
        </div>
        <div *ngIf="title !== 'Rorschach'">
          <app-brain-gaming-svg></app-brain-gaming-svg>
        </div>
      </div>
      <!-- <img src="assets/images/artificial-intelligence.svg" width="42" class="icon status-{{ type }}" /> -->
    </div>

    <div class="details">
      <div class="title h5">{{ title }}</div>
      <div class="status paragraph-2">{{ on ? 'ON' : 'OFF' }}</div>
    </div>
  </nb-card>
`,
})
export class FeatureCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;

}
