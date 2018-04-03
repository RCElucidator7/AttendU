import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-teacher-attend',
  templateUrl: 'teacher-attend.html',
})
export class TeacherAttendPage {

  genecode: string;

  code$: FirebaseListObservable<{}>

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private database: AngularFireDatabase) {
    //List for code
    this.code$ = this.database.list('code');
  }

  generateCode(){
    var code = Math.floor(100000000 + Math.random() * 900000000)

    this.code$.remove();

    this.code$.push({
      generateCode: code
    });

    let toast = this.toastCtrl.create({
      message: 'Attendance code ' + code + ' has been Generated!',
      duration: 5000
    });
    toast.present();
    //Send user back to main page
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherAttendPage');
  }

}
