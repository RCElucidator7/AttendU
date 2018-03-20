import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAttendPage } from './student-attend';

@NgModule({
  declarations: [
    StudentAttendPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentAttendPage),
  ],
})
export class StudentAttendPageModule {}
