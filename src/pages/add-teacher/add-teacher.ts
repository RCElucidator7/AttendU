import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Teacher } from '../../models/teacher/teacher.interface';

@Component({
  selector: 'page-add-teacher',
  templateUrl: 'add-teacher.html',
})
export class AddTeacherPage {

  //custom teacher interface
  teacher = {} as Teacher;

  //reference with teacher type to point at the database
  teacherRef$: FirebaseListObservable<Teacher[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private database: AngularFireDatabase) {
       //Point at the list of teachers and store locally
       this.teacherRef$ = this.database.list('teacher');
  }

  addTeacher(teacher: Teacher){
    //Creates object and pushes to firebase
    //Email and passwords are set by default
    this.teacherRef$.push({
      teacherFirstName: this.teacher.teacherFirstName,
      teacherLastName: this.teacher.teacherLastName,
      teacherSubject: this.teacher.teacherSubject,
      email: this.teacher.teacherFirstName + this.teacher.teacherLastName + "@teacher.ie",
      password: "teacher123"
    });
  }

}
