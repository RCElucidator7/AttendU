import { NgModule } from '@angular/core';
import { IonicPageModule, NavController, NavParams } from 'ionic-angular';
import { StudentHomePage } from './student-home';

@NgModule({
  declarations: [
    StudentHomePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentHomePage),
  ],
})
export class StudentHomePageModule {

}
