import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
    })
    export class MapsComponent implements OnInit { 
  constructor() { }
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "Your interest has been notified. You will be contacted soon. Thank you"

    },{
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
