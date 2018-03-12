import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTeacherPage } from './add-teacher';

@NgModule({
  declarations: [
    AddTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTeacherPage),
  ],
})
export class AddTeacherPageModule {}
