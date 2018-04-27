import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated'

import { Subscription } from 'rxjs/Subscription';
import { Student } from '../../models/student/student.interface';
import { grade } from '../../models/grades/grade.interface';

@Component({
  selector: 'page-teacher-grade-edit',
  templateUrl: 'teacher-grade-edit.html',
})
export class TeacherGradeEditPage {

  //reference with student type to point at the database
  studentRef$: FirebaseListObservable<Student[]>

  //Custom student and grade interface
  student = {} as Student;
  grade = {} as grade

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public database: AngularFireDatabase) {

      //Capture ID as a nav param
      const studentID = this.navParams.get('studentID');

      //set scope of firebase object equal to selected student
      this.studentRef$ = this.database.list('student/'+studentID);
  }

  addGradeSave(grade: grade){
    //Push the students grade details to the student
    this.studentRef$.push({
      subject: this.grade.subject,
      grade: this.grade.grade
    });

    this.navCtrl.pop();
  }
}
