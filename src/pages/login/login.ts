import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AdminHomePage } from '../admin-home/admin-home';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';
import { Teacher } from '../../models/teacher/teacher.interface';
import { User } from '../../models/users/users.interface';
import { StudentHomePage } from '../student-home/student-home';
import { TeacherHomePage } from '../teacher-home/teacher-home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //custom user interface
  user = {} as User;
  //references with student and teacher type to point at the database
  studentListRef$: FirebaseListObservable<Student[]>;
  teacherListRef$: FirebaseListObservable<Teacher[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase,  public toastCtrl: ToastController) {
      //List to point at the students in the database
      this.studentListRef$ = this.db.list('student');
      //List to point at the teachers in the database
      this.teacherListRef$ = this.db.list('teacher');
  }

  async login(user: User){

    //Try loop to try log the user in
    try{
      //Subscribe is used to loop through all the objects
      this.studentListRef$.subscribe(
        student => {
          //Map grants access to the values inside the objects
          student.map(email =>{
                //Check if the email and password the user has input matches any of the emails or passwords in the database
                //Else if used to log the admin in(hardcoded so the admin and access with ease if problems occur)
                if(email.email == user.email && email.password == user.password) {
                  this.navCtrl.setRoot(StudentHomePage, {sid: email.$key, name: email.studentFirstName, last: email.studentLastName})
                }
                else if(user.email == "admin@scoil.ie" && user.password == "admin"){
                  this.navCtrl.setRoot(AdminHomePage)
                }
          })
        });

        this.teacherListRef$.subscribe(
          teacher => {
            teacher.map(email =>{
                  //Check if the email and password the user has input matches any of the emails or passwords in the database
                  //Else if used to log the admin in(hardcoded so the admin and access with ease if problems occur)
                  if(email.email == user.email && email.password == user.password) {
                    this.navCtrl.setRoot(TeacherHomePage, {tid: email.$key})
                  }
                  else if(user.email == "admin@scoil.ie" && user.password == "admin"){
                    this.navCtrl.setRoot(AdminHomePage)
                  }
            })
          });
    }
    catch(e){
      //Catches any errors
      console.error(e);
    }
  }
}
