import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessionalPage } from './professional';

@NgModule({
  declarations: [
    ProfessionalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessionalPage),
  ],
  exports: [
    ProfessionalPage
  ]
})
export class ProfessionalModule {}
