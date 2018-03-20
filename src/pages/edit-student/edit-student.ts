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
    this.studentRef$.update(updatedStudent.studentName, updatedStudent.studentClass);
    //Update firebase data with new data
    this.studentRef$.update(updatedStudent.$uid,{
      studentName: updatedStudent.studentName,
      studentClass: updatedStudent.studentClass
    });

    //Send user back to main page
    this.navCtrl.pop();
  }

  addStudentSave(student: Student){
    this.studentRef$.push({
      $key: this.student.$uid,
      studentName: this.student.studentName,
      studentClass: this.student.studentClass
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditStudentPage');
  }

  ionViewWillLeave() {
    //Unsubscribe from the Observable when leaving the page
    this.studentSubscription.unsubscribe();
  }

}
