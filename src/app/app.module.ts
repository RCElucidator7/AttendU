import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { FIREBASE_CREDENTIALS} from './firebase.credentials';


import { MyApp } from './app.component';
import { StudentListPage } from '../pages/student-list/student-list';
import { AddStudentPage } from '../pages/add-student/add-student';
import { EditStudentPage } from '../pages/edit-student/edit-student';

@NgModule({
  declarations: [
    MyApp,
    StudentListPage,
    AddStudentPage,
    EditStudentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Initalise afire with creds
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StudentListPage,
    AddStudentPage,
    EditStudentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
