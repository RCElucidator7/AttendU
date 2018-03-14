import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentListPage } from '../student-list/student-list';
import { TeacherListPage } from '../teacher-list/teacher-list';
import { StudentHomePage } from '../student-home/student-home';
import { TeacherHomePage } from '../teacher-home/teacher-home';


@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToStudentList(){
    this.navCtrl.push(StudentListPage)
  }

  navigateToTeacherList(){
    this.navCtrl.push(TeacherListPage)
  }

  navigateToStudentHome(){
    this.navCtrl.push(StudentHomePage)
  }

  navigateToTeacherHome(){
    this.navCtrl.push(TeacherHomePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
  }

}
