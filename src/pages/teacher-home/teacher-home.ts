import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeacherAttendPage } from '../teacher-attend/teacher-attend';
import { TeacherGradesPage } from '../teacher-grades/teacher-grades';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Teacher } from '../../models/teacher/teacher.interface';
import { TimetablePage } from '../timetable/timetable';
import { TeacherDetailsPage } from '../teacher-details/teacher-details';


@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  //reference with student type to point at the database
  teacherListRef$: FirebaseListObservable<Teacher[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    //Gets the teachers id from the login page
    const teacherID = this.navParams.get('tid');

    //Points at the current teacher in the database
    this.teacherListRef$ = this.db.list('teacher/'+teacherID);
  }

  //Navigates to Attend page
  navToAttend(){
    this.navCtrl.push(TeacherAttendPage)
  }

  //Navigates to the teacher details page
  navToDetails(){
    var teacherID = this.navParams.get('tid')
    this.navCtrl.push(TeacherDetailsPage, {tid: teacherID})
  }

  //Navigates to the teacher grading page
  navToGrades(){
    this.navCtrl.push(TeacherGradesPage)
  }

  //Navigates to the timetable page
  navToTimetable(){
    this.navCtrl.push(TimetablePage)
  }
}
