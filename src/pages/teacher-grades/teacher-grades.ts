import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';
import { EditStudentPage } from '../edit-student/edit-student'; 
import { TeacherGradeEditPage } from '../teacher-grade-edit/teacher-grade-edit';

@Component({
  selector: 'page-teacher-grades',
  templateUrl: 'teacher-grades.html',
})
export class TeacherGradesPage {

  studentListRef$: FirebaseListObservable<Student[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {

      //Pointing list at firebase to node
      this.studentListRef$ = this.database.list('student');

  }

  selectStudent(studentSelect: Student){
    //Display action sheet with options
    this.actionSheetCtrl.create({
      title: `${studentSelect.studentFirstName}`,
      buttons: [
        {
          text: `Edit`,
          handler: () => {
            //Send user to edit page
            this.navCtrl.push(TeacherGradeEditPage);
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

}
