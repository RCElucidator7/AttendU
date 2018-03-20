import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-student-attend',
  templateUrl: 'student-attend.html',
})

export class StudentAttendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  attend(){

    let toast = this.toastCtrl.create({
      message: 'Attendance has been checked!',
      duration: 3000
    });
    toast.present();
    //Send user back to main page
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAttendPage');
  }
  
}