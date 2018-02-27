import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database-deprecated'

import { Subscription } from 'rxjs/Subscription';
import { Student} from '../../models/student/student.interface';

@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  studentSubscription: Subscription;
  studentRef$: FirebaseObjectObservable<Student>;

  student = {} as Student;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public database: AngularFireDatabase) {

      //Capture ID as a nav param
      const studentID = this.navParams.get('studentID');

      console.log(studentID);

      //set scope of firebase object equal to selected student
      this.studentRef$ = this.database.object(`student-list/${studentID}`);

      //Subscribes to the object and assign result to this.student
      this.studentSubscription = this.studentRef$.subscribe(
        student => this.student = student);
  }

  editStudent(updatedStudent: Student){
    //Update firebase data with new data
    this.studentRef$.update(updatedStudent);

    //Send user back to main page
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditStudentPage');
  }

  ionViewWillLeave() {
    //Unsubscribe from the Observable when leaving the page
    this.studentSubscription.unsubscribe();
  }

}
