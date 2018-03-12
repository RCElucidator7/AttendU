import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminHomePage } from '../admin-home/admin-home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToAdminHome(){
    
    this.navCtrl.setRoot(AdminHomePage)
  }

}
