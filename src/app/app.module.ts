import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostFeedComponent } from './postfeed/postfeed.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatchComponent } from './match/match.component';
import { AgmCoreModule } from '@agm/core';
import { MouseEvent as AGMMouseEvent}  from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    PostFeedComponent,
    IconsComponent,
    MapsComponent,
   
    LoginComponent,
    MatchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCDcsnY32T0ocv9l-p0gmsvUTgc8uoYWvU" 
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
