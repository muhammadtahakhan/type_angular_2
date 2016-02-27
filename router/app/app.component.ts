import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ShowpingComponent} from './showping/showping-list.component';
import {HomeComponent} from './home/home.component'


@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
       <a [routerLink]="['Home']">Home</a>
       <a [routerLink]="['Showping']">showping</a>
    </nav>
    <router-outlet></router-outlet>
  `,
//   providers:  [DialogService, HeroService],
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([

  { // Crisis Center child route
    path: '/showping',
    name: 'Showping',
    component: ShowpingComponent
    // useAsDefault: true
  },
  {path:'/home', name:'Home', component:HomeComponent}

])
export class AppComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/