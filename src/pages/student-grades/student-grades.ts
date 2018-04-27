import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../models/student/student.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { grade } from '../../models/grades/grade.interface';


@IonicPage()
@Component({
  selector: 'page-student-grades',
  templateUrl: 'student-grades.html',
})
export class StudentGradesPage {

  studentListRef$: FirebaseListObservable<Student[]>;
  gradeRef$: FirebaseListObservable<grade[]>;

  student = {} as Student
  grade = {} as grade

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    
    const StuID = this.navParams.get("sid")
    this.studentListRef$ = this.db.list("student/"+StuID)

    var test

    /*this.studentListRef$.subscribe(grades => {      
      for(var i = 0; i < grades.length; i++){
        if(grades[i].grade != null){
          test = grades[i].$key
          console.log(test)
          console.log(grades[i].grade)
          this.gradeRef$ = this.db.list("student/"+StuID+"/"+test)
        }
      }
    })*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentGradesPage');
  }

}
