import { Component , ViewChild , ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


declare var google : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef:ElementRef;


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
     console.log( this.mapRef);
     this.showMap();
  }

  showMap(){

    // lat y long de la CDMX
      const location= new google.maps.LatLng(19.39085896142664,-99.14361265000002);

      // maps option
      const options={
          center:location,
          zoom:15

      }

      const map = new google.maps.Map(this.mapRef.nativeElement,options);
      this.addMarker(location,map);

    }

    addMarker(position,map){
        return new google.maps.Marker({
              position,
              map
        });
    }

}
