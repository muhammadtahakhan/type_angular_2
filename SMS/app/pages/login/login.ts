
import {Page, Platform, NavController, Alert} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';



@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class Login {
  title="Login Page";
  email="taha@yahoo.com";
  password="123456";
  auth:boolean;
   // this tells the tabs component which Pages
  // should be each tab's root Page
//   login: any = Login;
  
  constructor(public nav:NavController) {

  }
  Login(email, password){
      console.log(email.value);
      console.log(password.value);
      if(email.value==this.email){
         this.auth=true;
      }else{
          this.auth=false;
      }
       if(password.value==this.password){
         this.auth=true;
      }else{
          this.auth=false;
      }
    //   this.nav.push(Page1);
    if(this.auth==true){
    this.nav.setRoot(TabsPage);
    }else{
        let alert = Alert.create({
    title: 'Error',
    subTitle: 'Email Or password is wrong!',
    buttons: [{
       text: 'OK',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
    }]
  });
  this.nav.present(alert);
    }
  }
}
