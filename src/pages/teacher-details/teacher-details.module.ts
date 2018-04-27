import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherDetailsPage } from './teacher-details';

@NgModule({
  declarations: [
    TeacherDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherDetailsPage),
  ],
})
export class TeacherDetailsPageModule {}
