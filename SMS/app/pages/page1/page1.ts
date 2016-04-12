import {Page, Alert, NavController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
    http:any;
    nav:any;
    results:any;
    randomQuote:any;
  constructor(httpservice:Http, nav: NavController) {
      this.http = httpservice;

  }
//   makeGetRequest() {
//         this.http.get("http://localhost:8080/users")
//         .subscribe((response)=>{
//             this.results = response.json();
//             console.log(this.results);
//         }, error => {
//             console.log(JSON.stringify(error.json()));
//         });
//     }
 makeGetRequest() {
       this.http.get('http://localhost:8080/users')
    // .map(res => res.json())
    .subscribe(
      data => {this.randomQuote = data, console.log(data) },
      err => this.logError(err),
      () => console.log('Random Quote Complete'+this.randomQuote)
    );
    }
    logError(err) {
  console.error('There was an error: ' + err);
}
    //  makePostRequest() {
    //     this.http.post("http://localhost:8080/authenticate")
    //     .subscribe((response)=>{
    //         this.results = response.json();
    //         console.log(this.results);
    //     }, error => {
    //         console.log(JSON.stringify(error.json()));
    //     });
    // }

authenticate(name, password) {
//   var username = data.credentials.username;
//   var password = data.credentials.password;

alert(name);
alert(password);
 var username = name;
  var password = password;
  var creds = "username=" + username + "&password=" + password;

//   var headers = new Headers();
//   headers.append('Content-Type', 'application/x-www-form-urlencoded');
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
  var parameter = JSON.stringify({name:username, password:password});

  this.http.post('http://localhost:8080/authenticate', parameter, options)
    // .map(res => res.json())
    .subscribe(
      data => this.saveJwt(data.id_token),
      err => this.logError(err),
      () => console.log('Authentication Complete')
    );
}

saveJwt(jwt) {
  if(jwt) {
    localStorage.setItem('id_token', jwt)
  }
}



}
