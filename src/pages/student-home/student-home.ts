import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentDetailsPage } from '../student-details/student-details';
import { StudentAttendPage } from '../student-attend/student-attend';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';
import { TimetablePage } from '../timetable/timetable';
import { StudentGradesPage } from '../student-grades/student-grades';

@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHomePage {

  //reference with student type to point at the database
  studentListRef$: FirebaseListObservable<Student[]>;

  //Custom student interface
  student = {} as Student

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {

    //Get the students id from the login page
    const studentID = this.navParams.get('sid');

    //Point at the student in the database
    this.studentListRef$ = this.db.list('student/'+studentID);
  }

  //Navigate to the student attend page
  navigateToStudentAttend(){
    var stuID = this.navParams.get('sid')
    var stuName = this.navParams.get('name')
    var stuLast = this.navParams.get('last')
    this.navCtrl.push(StudentAttendPage, {sid: stuID, name: stuName, last: stuLast})
  }

  //Navigate to the timetable page
  navToTimetable(){
    this.navCtrl.push(TimetablePage)
  }

  //Navigate to the Student details page
  navToDetails(){
    var stuID = this.navParams.get('sid')
    var stuName = this.navParams.get('name')
    var stuLast = this.navParams.get('last')
    this.navCtrl.push(StudentDetailsPage, {sid: stuID, name: stuName, last: stuLast})
  }

  navToGrades(){
    var stuID = this.navParams.get('sid')
    var stuName = this.navParams.get('name')
    var stuLast = this.navParams.get('last')
    this.navCtrl.push(StudentGradesPage, {sid: stuID, name: stuName, last: stuLast})
  }
}
