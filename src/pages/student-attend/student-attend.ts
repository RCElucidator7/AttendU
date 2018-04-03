import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';

@IonicPage()
@Component({
  selector: 'page-student-attend',
  templateUrl: 'student-attend.html',
})

export class StudentAttendPage {

  code$: FirebaseListObservable<{}>

  studentListRef$: FirebaseListObservable<Student[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private database: AngularFireDatabase) {
    //List for code
    this.code$ = this.database.list('code');
    this.studentListRef$ = this.database.list('student');
  }

  attend(inputcode: string, studentSelect: Student){

    var check = false;

    this.code$.forEach(generatedCode =>{
      if(generatedCode == inputcode)
      {
        check = true;
      }
    })

    /*if(check = true){
      studentSelect.grade = studentSelect.grade + "1";
    }*/

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