import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentDetailsPage } from '../student-details/student-details';
import { StudentAttendPage } from '../student-attend/student-attend';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Student } from '../../models/student/student.interface';
import { TimetablePage } from '../timetable/timetable';

@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHomePage {

  students: FirebaseListObservable<Student[]> = null;
  studentListRef$: FirebaseListObservable<Student[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    const studentID = this.navParams.get('sid');

    this.studentListRef$ = this.db.list('student/'+studentID);
  }

  navigateToStudentAttend(){
    this.navCtrl.push(StudentAttendPage)
  }

  navToTimetable(){
    this.navCtrl.push(TimetablePage)
    console.log('Opening timetable');
  }

  navToDetails(){
    this.navCtrl.push(StudentDetailsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentHomePage');
  }

}
