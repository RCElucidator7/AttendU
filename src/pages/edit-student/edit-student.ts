import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated'

import { Subscription } from 'rxjs/Subscription';
import { Student } from '../../models/student/student.interface';

@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  studentRef$: FirebaseListObservable<Student[]>
  tempRef$: FirebaseListObservable<Student[]>

  student = {} as Student;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public database: AngularFireDatabase) {

      const studentID = this.navParams.get('studentID');

      //set scope of firebase object equal to selected student
      this.studentRef$ = this.database.list('student/'+studentID);
      this.tempRef$ = this.database.list('student');

      /*/Subscribes to the object and assign result to this.student
      this.studentSubscription = this.studentRef$.subscribe(
        student => this.student = student);*/
  }

  /*editStudent(updatedStudent: Student){
    //Update firebase data with new data
    this.studentRef$.update(updatedStudent.$key,{
      studentFirstName: updatedStudent.studentFirstName,
      studentLastName: updatedStudent.studentLastName,
      studentClass: updatedStudent.studentClass
    });

    //Send user back to main page
    this.navCtrl.pop();
  }*/

  addStudentSave(student: Student){
    this.studentRef$.remove();

    this.tempRef$.push({
      studentFirstName: this.student.studentFirstName,
      studentLastName: this.student.studentLastName,
      studentClass: this.student.studentClass,
      email: this.student.email,
      password: this.student.password
    });

    //Send user back to main page
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditStudentPage');
  }

}
