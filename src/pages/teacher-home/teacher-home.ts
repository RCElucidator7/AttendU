import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherAttendPage } from '../teacher-attend/teacher-attend';
import { TeacherGradesPage } from '../teacher-grades/teacher-grades';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Teacher } from '../../models/teacher/teacher.interface';
import { TimetablePage } from '../timetable/timetable';


@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  teacherListRef$: FirebaseListObservable<Teacher[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    const teacherID = this.navParams.get('tid');

    this.teacherListRef$ = this.db.list('teacher/'+teacherID);
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
