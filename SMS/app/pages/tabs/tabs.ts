import {Page, Platform, NavController} from 'ionic-angular';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/Page2';
import {Page3} from '../page3/page3';
import {Login} from '../login/login';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
//   login: any = Login;
  tab1Root: any = Page1;
  tab2Root: any = Page2;
  tab3Root: any = Page3;
  constructor(public nav:NavController){
      
  }
}
