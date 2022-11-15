import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosisRoutingModule } from './diagnosis-routing.module';
import { DiagnosisComponent } from './diagnosis.component';
// eslint-disable-next-line max-len
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbPopoverModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbTooltipModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { IotDashboardModule } from '../iot-dashboard/iot-dashboard.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { StartComponent } from './components/start/start.component';
import { FeatureCardComponent } from './components/start/feature-card/feature-card.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { IaSvgComponent } from './components/start/feature-card/assets/ia.svg/Ia-svg.component';
import { BrainGamingSvgComponent } from './components/start/feature-card/assets/brain-gaming.svg/brain-gaming-svg.component';


@NgModule({
  declarations: [
    DiagnosisComponent,
    StartComponent,
    FeatureCardComponent,
    IaSvgComponent,
    BrainGamingSvgComponent
  ],
  imports: [
    CommonModule,
    DiagnosisRoutingModule,
    ThemeModule,
    NbMenuModule,
    IotDashboardModule,
    MiscellaneousModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCheckboxModule,
    NbPopoverModule,
    NbInputModule,
    NbTooltipModule,
    NbStepperModule
  ]
})
export class DiagnosisModule { }
