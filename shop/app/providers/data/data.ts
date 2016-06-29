import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage, SqlStorage, Platform} from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  
 private storage;
  private data;
 
  constructor(public platform: Platform){
    // this.storage = new Storage(SqlStorage, {name:'todo'});
      this.storage = new Storage(SqlStorage);
    if(platform.is('android')){
        console.log('android');
            this.storage = new Storage(SqlStorage);
            }else{
                console.log('not android');
            }
    
  } 
 
  getData() {
    return this.storage.get('todos');  
  }
 
  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }

  
}

