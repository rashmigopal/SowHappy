import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostFeedComponent } from './postfeed/postfeed.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';
import { MatchComponent } from './match/match.component';

const routes: Routes =[
    { path: 'home',      component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
 
    { path: 'postfeed',     component: PostFeedComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'match',  component: MatchComponent },
    { path: '',               redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
