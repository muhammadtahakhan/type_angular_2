import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {ContactListcomponent} from './contacts/contact-list.component';

@Component({
selector: 'app',
directives : [ContactListcomponent],
template: `
<contact-List></contact-List>
`
})
class AppComponent {
name: string;

constructor() {
this.name = 'Angular 2';
}

}


bootstrap(AppComponent);