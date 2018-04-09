import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherGradeEditPage } from './teacher-grade-edit';

@NgModule({
  declarations: [
    TeacherGradeEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherGradeEditPage),
  ],
})
export class TeacherGradeEditPageModule {}
