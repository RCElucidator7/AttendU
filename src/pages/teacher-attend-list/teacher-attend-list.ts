import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-teacher-attend-list',
  templateUrl: 'teacher-attend-list.html',
})
export class TeacherAttendListPage {

  //reference with student type to point at the database
  studentListRef$: FirebaseListObservable<{}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase) {

      //Pointing list at firebase to node
      this.studentListRef$ = this.database.list('attended');
  }
}