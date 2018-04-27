import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Student } from '../../models/student/student.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { grade } from '../../models/grades/grade.interface';


@Component({
  selector: 'page-student-grades',
  templateUrl: 'student-grades.html',
})
export class StudentGradesPage {

  //reference with student type to point at the database
  studentListRef$: FirebaseListObservable<Student[]>;

  //custom student and grade interface
  student = {} as Student
  grade = {} as grade

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    //Get the students id value from the student home
    const StuID = this.navParams.get("sid")
    //Point to the student in the database
    this.studentListRef$ = this.db.list("student/"+StuID)

  }
}
