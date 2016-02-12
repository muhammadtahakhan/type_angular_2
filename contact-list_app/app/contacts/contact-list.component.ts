import {Component} from 'angular2/core';
import {Contactcomponent} from './contact.component';
 
@Component({
selector: 'contact-List',
template: `
<h1>Hello</h1>
<ul *ngFor="#contact of contacts">
    <li (click)="selected(contact)">First Name:{{contact.fname}} {{contact.lname}}</li>
</ul>
<contact [contact]="seldetails"></contact>
`,
directives:[Contactcomponent]
 })
 
export class ContactListcomponent{
    
seldetails:{}={fname:"Taha1", lname:"khan1", phone:090078601, email:"taha_khan198923@yahoo.com1"};

   public contacts =[
    {fname:"Taha1", lname:"khan1", phone:090078601, email:"taha_khan198923@yahoo.com1"},
    {fname:"Taha2", lname:"khan2", phone:090078601, email:"taha_khan198923@yahoo.com2"},
    {fname:"Taha3", lname:"khan3", phone:090078601, email:"taha_khan198923@yahoo.com3"},
    {fname:"Taha4", lname:"khan4", phone:090078601, email:"taha_khan198923@yahoo.com4"}
    ]
     selected(selected){
    // this.show=true;
//    alert(selected.fname);
this.seldetails=selected;
}

}      