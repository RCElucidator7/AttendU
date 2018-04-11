import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherAttendPage } from '../teacher-attend/teacher-attend';
import { TeacherGradesPage } from '../teacher-grades/teacher-grades';
import { TimetablePage } from '../timetable/timetable';


@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navToAttend(){
    this.navCtrl.push(TeacherAttendPage)
  }

  navToGrades(){
    this.navCtrl.push(TeacherGradesPage)
  }

  navToTimetable(){
    this.navCtrl.push(TimetablePage)
    console.log('Your message here');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherHomePage');
  }

}
