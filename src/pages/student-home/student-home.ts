import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentDetailsPage } from '../student-details/student-details';
import { StudentAttendPage } from '../student-attend/student-attend';


@IonicPage()
@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToStudentAttend(){
    this.navCtrl.push(StudentAttendPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentHomePage');
  }

  navToDetails(){
    this.navCtrl.push(StudentDetailsPage)
  }

}
