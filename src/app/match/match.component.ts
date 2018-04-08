import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
declare var $: any;
@Component({
    selector: 'app-match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
    landLords: any;
    producers: any;
    consumers: any;
    services: any;
    mailform: FormGroup;
    constructor(private fb: FormBuilder) {
        this.mailform = this.fb.group({
            MAIL_CONTENT: ""
        })
    }
     

lat: number = 13.073323;
lng: number = 80.123188;
label: String = "Me";
icon: String = "";
zoom: number = 12;
/* clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}

mapClicked($event: AGMMouseEvent) {
  this.markers.push({
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable : true
  });
}

markerDragEnd(m: marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);
}
*/
markers: marker[] = [
    {
        "lat": 13.073323,
        "lng": 80.123188,
        "label": "Me",
        "draggable": true,
        "icon": "",
        "postid": 1,
        "username": "Prajwal",
        "loc_add": "Taramani",
        "loc_city": "Chennai",
        "pincode": "600046",
        "posttitle": "I am looking water supply"
    },
    {
        "lat": 13.050389,
        "lng": 80.248570,
        "label": "Producer1",
        "draggable": true,
        "icon": "assets/img/icon/Producer.jpg",
        "postid": 1,
        "username": "Srikanth",
        "loc_add": "2nd phase , Teynampet",
        "loc_city": "Chennai",
        "pincode": "600067",
        "posttitle": "I have 30 kgs of Potatos.Please let me know if anybody is interested in buying"
    },
    {
        "lat": 13.050449,
        "lng": 80.248580,
        "label": "Producer2",
        "draggable": true,
        "icon": "assets/img/icon/Producer.jpg",
        "postid": 1,
        "username": "Sowrabh",
        "loc_add": "7nd phase, Pallavaram",
        "loc_city": "Chennai",
        "pincode": "600012",
        "posttitle": "I have started the harvest of wheat. Yield will be ready by end of may.Please let me know if anybody is interested in buying"
    },
    {
        "lat": 13.074354,
        "lng": 80.256518,
        "label": "service1",
        "draggable": true,
        "icon": "assets/img/icon/services.jpg",
        "postid": 1,
        "username": "Madhavi",
        "loc_add": "3rd cross, Dapet",
        "loc_city": "CHENNAI",
        "pincode": "600086",
        "posttitle": "Lorry servicess available.Please contact"
    },
    {
        "lat": 13.062072,
        "lng": 80.192374,
        "label": "Consumer1",
        "draggable": true,
        "icon": "assets/img/icon/con_icon.jpg",
        "postid": 1,
        "username": "Sumanth",
        "loc_add": "14 Sector, Taramani",
        "loc_city": "chennai",
        "pincode": "600076",
        "posttitle": "Need 30 kg tomatoes. Please let me know if anybody produced it recently."
    },
    {
        "lat": 13.000000,
        "lng": 80.123008,
        "label": "service2",
        "draggable": true,
        "icon": "assets/img/icon/insurance.jpg",
        "postid": 1,
        "username": "David",
        "loc_add": "14 Sector, Taramani",
        "loc_city": "Chennai",
        "pincode": "600015",
        "posttitle": "I can offer Insurance. Please let me know if anybody in need."
    },
    {
        "lat": 13.074354,
        "lng": 80.256518,
        "label": "Service3",
        "draggable": true,
        "icon": "assets/img/icon/manure.jpg",
        "postid": 6,
        "username": "John",
        "loc_add": "Sirusera",
        "loc_city": "Chennai",
        "pincode": "600045",
        "posttitle": "Manual available.Let me know if needed"
    },
    {
        "lat": 13.155591,
        "lng": 80.224725,
        "label": "Service4",
        "draggable": true,
        "icon": "assets/img/icon/irrigation.jpg",
        "postid": 1,
        "username": "Pawan",
        "loc_add": "Taramani",
        "loc_city": "Chennai",
        "pincode": "600077",
        "posttitle": "Water Supply available. Please let me know if needed"
    }
]

sendContactInfo(from, align) {
    const type = ['', 'info', 'success', 'warning'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "You will be contacted in next 24 hours. Thank you"

    }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
}

ngOnInit() {
}

}
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
icon: string;
postid: number;
username: string;
loc_add: string;
loc_city: string,
pincode: string,
posttitle: string,
}