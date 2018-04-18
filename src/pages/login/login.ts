import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AdminHomePage } from '../admin-home/admin-home';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';
import { Teacher } from '../../models/teacher/teacher.interface';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/users/users.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { StudentHomePage } from '../student-home/student-home';
import { isTrueProperty } from 'ionic-angular/util/util';
import { TeacherHomePage } from '../teacher-home/teacher-home';
import { FirebaseDatabase } from '@firebase/database-types';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  studentListRef$: FirebaseListObservable<Student[]>;
  teacherListRef$: FirebaseListObservable<Teacher[]>;

  ref: FirebaseDatabase;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, 
              private auth: AngularFireAuth, public toastCtrl: ToastController) {
                this.studentListRef$ = this.db.list('student');

                this.teacherListRef$ = this.db.list('teacher');
  }


  

  async login(user: User){

    //this.ref.orderByChild("email").equalTo
    var i = 0;

    try{
      this.studentListRef$.subscribe(
        student => {
          student.map(email =>{
                if(email.email == user.email && email.password == user.password) {
                  this.navCtrl.setRoot(StudentHomePage, {sid: email.$key, name: email.studentFirstName, last: email.studentLastName})
                  i = 1;
                }
                else if(user.email == "admin@scoil.ie" && user.password == "admin"){
                  this.navCtrl.setRoot(AdminHomePage)
                  i = 1;
                }
          })
        });

        this.teacherListRef$.subscribe(
          teacher => {
            teacher.map(email =>{
                  if(email.email == user.email && email.password == user.password) {
                    this.navCtrl.setRoot(TeacherHomePage, {tid: email.$key})
                    i = 1;
                  }
                  else if(user.email == "admin@scoil.ie" && user.password == "admin"){
                    this.navCtrl.setRoot(AdminHomePage)
                    i = 1;
                  }
            })
          });

          if(i == 0){
            let toast = this.toastCtrl.create({
              message: 'User ID or password is incorrect',
              duration: 5000
            });
            toast.present();
          }
          
    }
    catch(e){
      console.error(e);
    }
  }

  navigateToAdminHome(){ 
    this.navCtrl.setRoot(AdminHomePage)
  }
}
