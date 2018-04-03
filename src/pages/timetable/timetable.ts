import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../models/student/student.interface';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {

  timetable$: FirebaseListObservable<Student[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase) {

      //Pointing list at firebase to node
      this.timetable$ = this.database.list('timetable');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

}
