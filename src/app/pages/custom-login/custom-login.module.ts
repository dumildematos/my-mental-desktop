/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomLoginRoutingModule } from './custom-login-routing.module';
import { CustomLoginComponent } from './custom-login.component';
import { FormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbPopoverModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbTooltipModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [
    CustomLoginComponent
  ],
  imports: [
    CommonModule,
    CustomLoginRoutingModule,
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
export class CustomLoginModule { }
