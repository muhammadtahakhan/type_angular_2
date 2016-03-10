import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import 'rxjs/add/operator/map';
import {Http, Headers, HTTP_BINDINGS, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'hello-app',
    template: `
        {{quoteOfTheDay}}<br/>
        <button (click)="getQuote()">Get new quote</button>
            `
})
export class HelloApp {
    quoteOfTheDay: string = '';
    constructor(public http:Http){
        
    }
    getQuote(){
        this.http.get('http://localhost:3001/api/random-quote')
        .map(res => res.text())
        .subscribe(
            data => this.quoteOfTheDay = data,
            err => this.logError(err),
            () => console.log("Random quote log complted")
        );
    }
    
    logError(err){
        console.log("oopp some thing goes wrong" + err);
    }
}

bootstrap(HelloApp, [
  HTTP_PROVIDERS
]);