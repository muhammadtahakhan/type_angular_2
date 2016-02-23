import { bootstrap } from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ShowpingComponent} from './showping-list.component';

@Component({
    selector: 'my-app',
    template: `This is my app component
    <showping-list></showping-list>
    `,
    directives: [ShowpingComponent]
})
export class AppComponent {
    
 }
 