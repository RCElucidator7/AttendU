import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentDetailsPage } from '../student-details/student-details';
import { StudentAttendPage } from '../student-attend/student-attend';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Student } from '../../models/student/student.interface';

@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHomePage {

  students: FirebaseListObservable<Student[]> = null;
  studentID: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(student => {
      if(student) this.studentID = student.uid
    })
  }

  navigateToStudentAttend(){
    this.navCtrl.push(StudentAttendPage)
  }

  getStudentList(): FirebaseListObservable<Student[]> {
    if(!this.studentID) return;
    this.students = this.db.list('student/${this.studentID}');
    return this.students;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentHomePage');
  }

  navToDetails(){
    this.navCtrl.push(StudentDetailsPage)
  }

}
