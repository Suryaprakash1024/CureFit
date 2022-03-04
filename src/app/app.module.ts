import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OldHeaderComponent } from './oldversion/header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OldHomeComponent } from './oldversion/home/home.component';
// import "bootswatch/dist/litera/bootstrap.min.css";
// import "bootswatch/dist/litera/_variables.scss";

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OldversionComponent } from './oldversion/oldversion.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OldHeaderComponent,
    OldHomeComponent,
    OldversionComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
