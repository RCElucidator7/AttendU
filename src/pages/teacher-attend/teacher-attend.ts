import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { TeacherAttendListPage } from '../teacher-attend-list/teacher-attend-list';

@Component({
  selector: 'page-teacher-attend',
  templateUrl: 'teacher-attend.html',
})
export class TeacherAttendPage {

  //Creates a list observable with a type object
  code$: FirebaseListObservable<{}>

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private database: AngularFireDatabase) {
    //List for code
    this.code$ = this.database.list('code');
  }

  generateCode(){
    //Generates random 9 digit code
    var code = Math.floor(100000000 + Math.random() * 900000000)

    //Removes the original code
    this.code$.remove();

    //Push the new code to the database
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

  //Navigates to the attended list of students
  navigateToAttendedList(){
    this.navCtrl.push(TeacherAttendListPage)
  }
}
