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

  //references with student and code type to point at the database
  codeRef$: FirebaseListObservable<Code[]>
  studentListRef$: FirebaseListObservable<Student[]>;
  attendedList$: FirebaseListObservable<{}>;

  //custom student and code interface
  student = {} as Student;
  code = {} as Code;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private db: AngularFireDatabase) {
    //Get student id pushed through from student home page
    const studentID = this.navParams.get('sid');

    //set scope of firebase object equal to selected student
    this.studentListRef$ = this.db.list('student/'+studentID);
    this.attendedList$ = this.db.list('attended');
    this.codeRef$ = this.db.list('code');
  }

  attend(code: Code){
    //Checker used to check if the user has entered the right code
    var i = 1;
    //Gets the students first and last name from the student home page
    var name = this.navParams.get('name');
    var last = this.navParams.get('last');

    //Subscribe is used to loop through the student and get objects
    this.codeRef$.subscribe(codeGenerated => {
      //If the code matches the one the user has entered then set the checker to zero
      if(codeGenerated[0].generateCode == code.generateCode){
        console.log("Success")
        i = 0
      }
    })
    
    //If the checker is zero then push the users name to the attended database
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
      //If the code is wrong then the user will be prompted
      let toast = this.toastCtrl.create({
        message: 'Entered wrong code, try again!',
        duration: 3000
      });
      toast.present();
    }
  }
}