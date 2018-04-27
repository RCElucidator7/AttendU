import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AddStudentPage } from '../add-student/add-student';
import { Student } from '../../models/student/student.interface';
import { EditStudentPage } from '../edit-student/edit-student'; 

@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})
export class StudentListPage {

  //reference with student type to point at the database
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
            this.navCtrl.push(EditStudentPage, {studentID: studentSelect.$key});
          }
        },
        {
          text: `Delete`,
          role: `destructive`,
          handler: () => {
            //Delete current student
            this.studentListRef$.remove(studentSelect.$key);
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

  //Navigates to the add student page
  navigateToAddStudent(){
    this.navCtrl.push(AddStudentPage)
  }

}
