import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherAttendPage } from '../teacher-attend/teacher-attend';


@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navToAttend(){
    this.navCtrl.push(TeacherAttendPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherHomePage');
  }

}
