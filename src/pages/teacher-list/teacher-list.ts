import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

import { Teacher } from '../../models/teacher/teacher.interface';
import { AddTeacherPage } from '../add-teacher/add-teacher';


@IonicPage()
@Component({
  selector: 'page-teacher-list',
  templateUrl: 'teacher-list.html',
})
export class TeacherListPage {

  //reference with student type to point at the database
  teacherListRef$: FirebaseListObservable<Teacher[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {

      //Pointing list at firebase to node
      this.teacherListRef$ = this.database.list('teacher');

  }

  selectTeacher(teacherSelect: Teacher){
    //Display action sheet with options
    this.actionSheetCtrl.create({
      title: `${teacherSelect.teacherFirstName}`,
      buttons: [
        {
          text: `Delete`,
          role: `destructive`,
          handler: () => {
            //Delete current student
            this.teacherListRef$.remove(teacherSelect.$key);
          }
        },
        {
          text: `Cancel`,
          role: `cancel`,
          handler: () => {
            console.log("User has selected to cancel");
          }
        }
      ]
    }).present();

  }

  //Navigates to the addTeacher Page
  navigateToAddStudent(){
    this.navCtrl.push(AddTeacherPage)
  }

}
