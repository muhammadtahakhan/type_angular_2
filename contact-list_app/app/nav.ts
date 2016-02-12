import {Component} from 'angular2/core';

@Component({
selector: 'nav',
template: `<ul>
<li>{{home}}</li>
<li>{{about}}</li>
<li>{{contact}}</li>
</ul>
`})
export class NavComponent {
    
home:string="Home";
about:string="About"
contact:string="Contact Us";
}
