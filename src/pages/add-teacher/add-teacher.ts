import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Teacher } from '../../models/teacher/teacher.interface';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'page-add-teacher',
  templateUrl: 'add-teacher.html',
})
export class AddTeacherPage {

  teacher = {} as Teacher;

  teacherRef$: FirebaseListObservable<Teacher[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private database: AngularFireDatabase) {
       //List of teachers
       this.teacherRef$ = this.database.list('teacher');
  }

  addTeacher(teacher: Teacher){
    //Creates object and pushes to firebase
    this.teacherRef$.push({
      teacherName: this.teacher.teacherName,
      teacherSubject: this.teacher.teacherSubject
    });

    this.navCtrl.pop();

  }

}
