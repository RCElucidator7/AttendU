import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentDetailsPage } from '../student-details/student-details';
import { StudentAttendPage } from '../student-attend/student-attend';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Student } from '../../models/student/student.interface';
import { TimetablePage } from '../timetable/timetable';
import { DataSnapshot } from '@firebase/database';

@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHomePage {

  studentListRef$: FirebaseListObservable<Student[]>;

  student = {} as Student

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    const studentID = this.navParams.get('sid');
    console.log(studentID)

    this.studentListRef$ = this.db.list('student/'+studentID);
  }

  navigateToStudentAttend(){
    var stuID = this.navParams.get('sid')
    var stuName = this.navParams.get('name')
    var stuLast = this.navParams.get('last')
    this.navCtrl.push(StudentAttendPage, {sid: stuID, name: stuName, last: stuLast})
  }

  navToTimetable(){
    this.navCtrl.push(TimetablePage)
  }

  navToDetails(){
    var stuID = this.navParams.get('sid')
    var stuName = this.navParams.get('name')
    var stuLast = this.navParams.get('last')
    this.navCtrl.push(StudentDetailsPage, {sid: stuID, name: stuName, last: stuLast})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentHomePage');
  }

}
