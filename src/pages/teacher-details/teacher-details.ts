import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Teacher } from '../../models/teacher/teacher.interface'

@Component({
  selector: 'page-teacher-details',
  templateUrl: 'teacher-details.html',
})
export class TeacherDetailsPage {

  //reference with student type to point at the database
  teacherListRef$: FirebaseListObservable<Teacher[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    //Gets the teachers id from the teacher home page
    const teacherID = this.navParams.get('tid');

    //Points at the current teacher in the database
    this.teacherListRef$ = this.db.list('teacher/'+teacherID);
  }
}
