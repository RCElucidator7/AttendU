import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';

@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {

  student = {} as Student

  studentDetailsRef$: FirebaseListObservable<Student[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    const StuID = this.navParams.get('sid')
   
    this.studentDetailsRef$ = this.database.list('student/'+StuID);

    console.log(this.studentDetailsRef$.forEach(email => email.map(student => console.log(this.student.email))));
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsPage');
  }

}
