import { DiagnosisComponent } from './diagnosis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {
    path: '',
    component: DiagnosisComponent,
    children: [
      {
        path: 'start',
        component: StartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisRoutingModule { }
