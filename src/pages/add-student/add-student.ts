import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Student } from '../../models/student/student.interface';

@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  //custom student interface
  student = {} as Student;

  //reference with student type to point at the database
  studentRef$: FirebaseListObservable<Student[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private database: AngularFireDatabase) {
       //point at the list of students and store locally
       this.studentRef$ = this.database.list('student');
  }

  addStudent(student: Student){
    //Creates object and pushes to firebase
    //Email and passwords are set by default
    this.studentRef$.push({
      studentFirstName: this.student.studentFirstName,
      studentLastName: this.student.studentLastName,
      studentClass: this.student.studentClass,
      email: this.student.studentFirstName + this.student.studentLastName + "@scoil.ie",
      password: "password123"
    });
  }

}