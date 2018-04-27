import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';

@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {

  //Custom student interface
  student = {} as Student

  //reference with student type to point at the database
  studentDetailsRef$: FirebaseListObservable<Student[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    //Get students id from the student home page
    const StuID = this.navParams.get('sid')
   
    //Point at the student in the database
    this.studentDetailsRef$ = this.database.list('student/'+StuID);
  
  }
}
