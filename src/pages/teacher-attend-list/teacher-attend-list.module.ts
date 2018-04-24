import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAttendListPage } from './teacher-attend-list';

@NgModule({
  declarations: [
    TeacherAttendListPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAttendListPage),
  ],
})
export class TeacherAttendListPageModule {}
