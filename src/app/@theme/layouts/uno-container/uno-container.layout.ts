import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'uno-container-layout',
  styleUrls: ['./uno-container.layout.scss'],
  template: `
    <nb-layout windowMode>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

    </nb-layout>
  `,
})

export class UnoContainerLayouComponent {}
