import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular</h1>
    <courses></courses><authors></authors>`,
    directives:[CoursesComponent, AuthorComponent]
})
export class AppComponent { }