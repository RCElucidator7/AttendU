import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';
import { Code } from '../../models/code/code.interface';

@IonicPage()
@Component({
  selector: 'page-student-attend',
  templateUrl: 'student-attend.html',
})

export class StudentAttendPage {

  codeRef$: FirebaseListObservable<Code[]>
  studentListRef$: FirebaseListObservable<Student[]>;
  attendedList$: FirebaseListObservable<{}>;

  student = {} as Student;
  code = {} as Code;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private db: AngularFireDatabase) {
    //List for code
    const studentID = this.navParams.get('sid');

    this.studentListRef$ = this.db.list('student/'+studentID);
    this.attendedList$ = this.db.list('attended');
    this.codeRef$ = this.db.list('code');
  }

  attend(code: Code){
    var i = 1;
    var name = this.navParams.get('name');
    var last = this.navParams.get('last');

    this.codeRef$.subscribe(codeGenerated => {
      console.log(codeGenerated[0].generateCode)
      if(codeGenerated[0].generateCode == code.generateCode){
        console.log("Success")
        i = 0
      }
    })
    
    if (i == 0){
      this.attendedList$.push({
        student: name+last,
        attended: true
      });
      let toast = this.toastCtrl.create({
        message: 'Attendance has been checked!',
        duration: 3000
      });
      toast.present();
      //Send user back to main page
      this.navCtrl.pop();
    }
    else if (i == 1){
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