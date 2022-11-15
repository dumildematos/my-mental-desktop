import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-new-diagnosis-modal',
  templateUrl: './new-diagnosis-modal.component.html',
  styleUrls: ['./new-diagnosis-modal.component.scss']
})
export class NewDiagnosisModalComponent {

  @Input() title: string;

  constructor(
    protected ref: NbDialogRef<NewDiagnosisModalComponent>,
    private router: Router) {}

  dismiss() {
    this.ref.close();
  }

  startDiagnosis() {
    this.router.navigate(['diagnosis/start']);
  }
}
