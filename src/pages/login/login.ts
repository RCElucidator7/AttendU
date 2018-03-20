import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminHomePage } from '../admin-home/admin-home';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Student } from '../../models/student/student.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/users/users.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { StudentHomePage } from '../student-home/student-home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  //studentListRef: AngularFirestoreCollection<Student>;
  //student$: Observable<Student[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore, 
              private auth: AngularFireAuth) {
   
    //this.studentListRef = this.afs.collection('Student');
    //this.student$ = this.studentListRef.valueChanges();
    
    
  
  }

  async login(user: User){
    try{
      const result = this.auth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password)
      console.log(result)
      if(user.email == "admin@scoil.ie"){
        this.navCtrl.setRoot(AdminHomePage)
      }
      if(user.email == "hughbrady@scoil.ie"){
        this.navCtrl.setRoot(StudentHomePage)
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
