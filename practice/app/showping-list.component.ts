import {Component} from 'angular2/core';

@Component({
    selector: 'showping-list',
    template: `
    <ul *ngFor="#item of showpinglistitms ">
    <li (click)="onitemclick(item)">{{item.name}}</li>
    <button (click)="delete(item)">Delete</button>
    </ul>
    <input teype="text" [(ngModel)]="selecteditem.name" />
    <input teype="text" #aditem />
    <button (click)="additem(aditem)">Add item</button>
    `
})
export class ShowpingComponent {
    public showpinglistitms = [
        {'name': 'milk'},
        {'name': 'suger'},
        {'name': "buns"}
        ]
    public selecteditem={'name':''}
    onitemclick(item){
        // alert(item);
        this.selecteditem=item;
    }
    additem(aditem){
        this.showpinglistitms.push({name: aditem.value});
        
    }
    delete(item){
       this.showpinglistitms.splice(this.showpinglistitms.indexOf(item), 1);
        // alert(item.name)
    //   this.showpinglistitms.splice(0)
        
    }
 }
 