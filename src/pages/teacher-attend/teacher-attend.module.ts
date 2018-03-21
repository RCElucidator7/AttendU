import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAttendPage } from './teacher-attend';

@NgModule({
  declarations: [
    TeacherAttendPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAttendPage),
  ],
})
export class TeacherAttendPageModule {}
