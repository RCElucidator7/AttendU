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

  studentSubscription: Subscription;
  studentRef$: FirebaseListObservable<Student[]>

  student = {} as Student;
  grade = {} as grade

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public database: AngularFireDatabase) {

      //Capture ID as a nav param
      const studentID = this.navParams.get('studentID');

      console.log(studentID);

      //set scope of firebase object equal to selected student
      this.studentRef$ = this.database.list('student/'+studentID);
      //this.studentRef$ = this.database.object(`/student-list/${studentID}`);

      /*/Subscribes to the object and assign result to this.student
      this.studentSubscription = this.studentRef$.subscribe(
        student => this.student = student);*/
  }

  addGradeSave(grade: grade){
    this.studentRef$.push({
      subject: this.grade.subject,
      grade: this.grade.grade
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherGradeEditPage');
  }

}
