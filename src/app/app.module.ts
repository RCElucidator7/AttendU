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
import { LoginPage } from '../pages/login/login';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { TeacherListPage } from '../pages/teacher-list/teacher-list';
import { AddTeacherPage } from '../pages/add-teacher/add-teacher';
import { StudentHomePage } from '../pages/student-home/student-home';
import { TeacherHomePage } from '../pages/teacher-home/teacher-home';
import { StudentDetailsPage } from '../pages/student-details/student-details';
import { StudentAttendPage } from '../pages/student-attend/student-attend';
import { TeacherAttendPage } from '../pages/teacher-attend/teacher-attend';
import { TeacherGradesPage } from '../pages/teacher-grades/teacher-grades';
import { TeacherGradeEditPage } from '../pages/teacher-grade-edit/teacher-grade-edit';
import { TimetablePage } from '../pages/timetable/timetable';
import { TeacherAttendListPage } from '../pages/teacher-attend-list/teacher-attend-list';
import { StudentGradesPage } from '../pages/student-grades/student-grades';
import { TeacherDetailsPage } from '../pages/teacher-details/teacher-details';

@NgModule({
  declarations: [
    MyApp,
    StudentListPage,
    AddStudentPage,
    EditStudentPage,
    LoginPage,
    AdminHomePage,
    TeacherListPage,
    AddTeacherPage,
    StudentHomePage,
    TeacherHomePage,
    StudentDetailsPage,
    StudentAttendPage,
    TeacherAttendPage,
    TeacherGradesPage,
    TeacherGradeEditPage,
    TimetablePage,
    TeacherAttendListPage,
    StudentGradesPage,
    TeacherDetailsPage
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
    EditStudentPage,
    LoginPage,
    AdminHomePage,
    TeacherListPage,
    AddTeacherPage,
    StudentHomePage,
    TeacherHomePage,
    StudentDetailsPage,
    StudentAttendPage,
    TeacherAttendPage,
    TeacherGradesPage,
    TeacherGradeEditPage,
    TimetablePage,
    TeacherAttendListPage,
    StudentGradesPage,
    TeacherDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
