import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GOOGLE_MAPS_DIRECTIVES, GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {Geolocation} from 'ionic-native';

@Component({
    // moduleId: module.id,
//   selector: 'my-maps-project-app',
//   templateUrl: 'my-maps-project.component.html',
//   styleUrls: ['map-page.scss'],
//   directives: [GOOGLE_MAPS_DIRECTIVES]
  selector: 'app-component',
  templateUrl: 'build/pages/map-page/map-page.html',
   styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  directives: [GOOGLE_MAPS_DIRECTIVES],
 
})
export class MapPage {
   lat: number;
  lng: number;
  constructor(private navController: NavController) {
       Geolocation.getCurrentPosition().then((resp) => {
           this.lat=resp.coords.latitude;
           this.lng=resp.coords.longitude;
       console.log("Latitude: ", resp.coords.latitude);
       console.log("Longitude: ", resp.coords.longitude);
      });
  }
}
