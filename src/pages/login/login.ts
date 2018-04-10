import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AdminHomePage } from '../admin-home/admin-home';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/users/users.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { StudentHomePage } from '../student-home/student-home';
import { isTrueProperty } from 'ionic-angular/util/util';
import { TeacherHomePage } from '../teacher-home/teacher-home';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  //studentListRef: AngularFirestoreCollection<Student>;
  //student$: Observable<Student[]>;
  studentListRef$: FirebaseListObservable<Student[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, 
              private auth: AngularFireAuth, public toastCtrl: ToastController) {
    this.studentListRef$ = this.db.list('Student');
    //this.student$ = this.studentListRef.valueChanges();
  }

  async login(user: User){
    try{
      //const result = this.auth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password)
      //console.log(result)
      if(user.email == "admin@scoil.ie"){
       // this.studentListRef$.
        this.navCtrl.setRoot(AdminHomePage)
      }
      else if(user.email.endsWith("@scoil.ie")){
        this.navCtrl.setRoot(StudentHomePage)
      }
      else if(user.email.endsWith("@teacher.ie")){
        this.navCtrl.setRoot(TeacherHomePage)
      }
      else{
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
