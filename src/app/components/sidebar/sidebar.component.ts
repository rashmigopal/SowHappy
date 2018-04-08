import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Home',  icon: 'home', class: '' },
    
   /*  { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' }, */
    { path: 'postfeed', title: 'PostFeed',  icon:'dns', class: '' },
    /* { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' }, */
   /*  { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' }, */
    { path: 'match', title: 'Matches',  icon:'directions', class: '' },
    { path: 'maps', title: 'Tips',  icon:'volume_up', class: '' },

    { path: 'icons', title: 'Help Center',  icon:'store', class: '' },
   
    /*{ path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },*/
      
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
