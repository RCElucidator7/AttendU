import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated'

import { Subscription } from 'rxjs/Subscription';
import { Student } from '../../models/student/student.interface';

@Component({
  selector: 'page-teacher-grade-edit',
  templateUrl: 'teacher-grade-edit.html',
})
export class TeacherGradeEditPage {

  studentSubscription: Subscription;
  studentRef$: FirebaseListObservable<Student[]>

  student = {} as Student;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public database: AngularFireDatabase) {

      //Capture ID as a nav param
      const studentID = this.navParams.get('studentID');

      console.log(studentID);

      //set scope of firebase object equal to selected student
      this.studentRef$ = this.database.list('student');
      //this.studentRef$ = this.database.object(`/student-list/${studentID}`);

      /*/Subscribes to the object and assign result to this.student
      this.studentSubscription = this.studentRef$.subscribe(
        student => this.student = student);*/
  }

  editStudent(updatedStudent: Student){
    //Update firebase data with new data
    this.studentRef$.update(updatedStudent.$key,{
      studentFirstName: updatedStudent.studentFirstName,
      studentLastName: updatedStudent.studentLastName,
      studentClass: updatedStudent.studentClass
    });

    //Send user back to main page
    this.navCtrl.pop();
  }

  addStudentSave(student: Student){
    this.studentRef$.push({
      $key: this.student.$key,
      studentFirstName: this.student.studentFirstName,
      studentLastName: this.student.studentLastName,
      studentClass: this.student.studentClass,
      email: this.student.email,
      password: this.student.password
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherGradeEditPage');
  }

}
