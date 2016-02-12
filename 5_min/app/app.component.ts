import { bootstrap } from "angular2/platform/browser";
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<div>
        
        {{dt}}
        <br />
        {{name}}
        <br>
        
        <ul>
            <li *ngFor="#n of names" >
                
                Name : <b>{{n}}</b>
            
            </li>
        </ul>
        
        <ul>
            <li *ngFor="#n of persons" >{{n | json}} {{n.name}}
            </li>
        </ul>
        
        <br>
        <br>
        
        
        <input type="text" [(ngModel)]="name" />
        {{country}}
        
        <input type="text" [(ngModel)]="state" />
        {{state}}
        
        </div>`
})
export class AppComponent {
     name : string;
    dt : string;
    
    names: string[];
    persons: { name : string}[];
    
    country : string = "";
    state : number;
    
    constructor(){
        this.name = "Reha"
        this.dt = (new Date()).toString()
        
        this.names = [ ' Ari ' , ' Carlos' , ' Felipe' , ' Nate' ];
        
        this.persons = [ { name : ' Ari1 '}  ,{ name : ' Ari2 '}  ];
    }
 }
 