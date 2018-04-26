import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentGradesPage } from './student-grades';

@NgModule({
  declarations: [
    StudentGradesPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentGradesPage),
  ],
})
export class StudentGradesPageModule {}
