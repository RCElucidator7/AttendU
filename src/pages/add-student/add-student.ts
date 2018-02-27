import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Student } from '../../models/student/student.interface';

@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  student = {} as Student;

  studentRef$: FirebaseListObservable<Student[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private database: AngularFireDatabase) {
       //List of students
       this.studentRef$ = this.database.list('student');
  }

  addStudent(student: Student){
    //Creates object and pushes to firebase
    this.studentRef$.push({
      studentName: this.student.studentName,
      studentClass: this.student.studentClass
    });

    //this.student = {} as Student;

    this.navCtrl.pop();

  }


}