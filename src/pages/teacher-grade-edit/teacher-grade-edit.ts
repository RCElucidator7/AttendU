import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teacher-grade-edit',
  templateUrl: 'teacher-grade-edit.html',
})
export class TeacherGradeEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherGradeEditPage');
  }

}
