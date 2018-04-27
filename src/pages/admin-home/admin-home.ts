import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentListPage } from '../student-list/student-list';
import { TeacherListPage } from '../teacher-list/teacher-list';

@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Navigates to the student list page
  navigateToStudentList(){
    this.navCtrl.push(StudentListPage)
  }

  //Navigates to the teacher list page
  navigateToTeacherList(){
    this.navCtrl.push(TeacherListPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
  }

}
