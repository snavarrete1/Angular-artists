import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsHomeComponent } from './artists-home/artists-home.component';
import { HigherBrothersComponent } from './higher-brothers/higher-brothers.component';
import { DeantrblComponent } from './deantrbl/deantrbl.component';
import { LaFemmeComponent } from './la-femme/la-femme.component';
import { BeachHouseComponent } from './beach-house/beach-house.component';
import { TheDrumsComponent } from './the-drums/the-drums.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    HigherBrothersComponent,
    DeantrblComponent,
    LaFemmeComponent,
    BeachHouseComponent,
    TheDrumsComponent,
    ArtistsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
