import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
// import {ROUTER_PROVIDERS} from 'angular2/router';
// import {provide} from 'angular2/core';
// import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(AppComponent, [ROUTER_PROVIDERS]);