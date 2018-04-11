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
    //this.code$ = this.database.list('code');
    this.studentListRef$ = this.database.list('student');
    this.code$ = this.database.list('code/generateCode');
  }

  attend(inputcode: string, studentSelect: Student){

    let check: boolean = false

    /*this.code$.map(code => {
      console.log(code.map(generatedCode => {
        generatedCode.text;
        console.log(generatedCode)
      }))
    })

    console.log(this.code$.subscribe());

    this.code$.subscribe(
      code => {
        code.map(code =>
          console.log(code)
        )
    })

    this.code$.subscribe.name; code => {
      console.log(code);
      code.forEach(element => {
        console.log(element.generatedCode);
      });
    }*/

    this.code$.forEach(generatedCode =>{
      if(generatedCode == inputcode)
      {
        check = true;
      }
    })

    /*if(check = true){
      studentSelect.grade = studentSelect.grade + "1";
    }*/
    if (check = true){
      let toast = this.toastCtrl.create({
        message: 'Attendance has been checked!',
        duration: 3000
      });
      toast.present();
      //Send user back to main page
      this.navCtrl.pop();
    }
    else if (check = false){
      let toast = this.toastCtrl.create({
        message: 'Entered wrong code, try again!',
        duration: 3000
      });
      toast.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAttendPage');
  }
  
}