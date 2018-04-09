import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherGradesPage } from './teacher-grades';

@NgModule({
  declarations: [
    TeacherGradesPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherGradesPage),
  ],
})
export class TeacherGradesPageModule {}
