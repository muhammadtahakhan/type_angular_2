import {Component} from 'angular2/core';

@Component({
selector: 'contact',

template: `

<h1>details:</h1>
<div>
phone:{{contact.phone}}, Email:{{contact.email}}
</div>

`,
inputs: ["contact"]
        })
        
export class Contactcomponent{
   public contact:{};
   show:boolean=false;
  
}      