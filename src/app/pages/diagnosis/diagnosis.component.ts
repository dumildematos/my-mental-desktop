import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  template: `
  <uno-container-layout>
    <router-outlet></router-outlet>
  </uno-container-layout>
`,
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
