import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated'

import { Student } from '../../models/student/student.interface';

@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  //references with student type to point at the database
  studentRef$: FirebaseListObservable<Student[]>
  tempRef$: FirebaseListObservable<Student[]>

  //Custom student interface
  student = {} as Student;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public database: AngularFireDatabase) {

      //gets the student ID pushed through from the student list page
      const studentID = this.navParams.get('studentID');

      //set scope of firebase object equal to selected student
      this.studentRef$ = this.database.list('student/'+studentID);
      this.tempRef$ = this.database.list('student');
  }

  addStudentSave(student: Student){
    //Remove value of student
    this.studentRef$.remove();

    //Push the edited values to the database
    this.tempRef$.push({
      studentFirstName: this.student.studentFirstName,
      studentLastName: this.student.studentLastName,
      studentClass: this.student.studentClass,
      email: this.student.email,
      password: this.student.password
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditStudentPage');
  }

}
