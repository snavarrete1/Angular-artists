import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeachHouseComponent } from './beach-house/beach-house.component';
import { DeantrblComponent } from './deantrbl/deantrbl.component';
import { HigherBrothersComponent } from './higher-brothers/higher-brothers.component';
import { LaFemmeComponent } from './la-femme/la-femme.component';
import { TheDrumsComponent } from './the-drums/the-drums.component';
import { ArtistsHomeComponent } from './artists-home/artists-home.component';


const routes: Routes = [
  {
    path: 'artists-home', component: ArtistsHomeComponent
  },
  {
    path: 'beach-house', component: BeachHouseComponent
  },
  {
    path: 'dean-trbl', component: DeantrblComponent
  },
  {
    path: 'higher-brothers', component: HigherBrothersComponent
  },
  {
    path: 'la-femme', component: LaFemmeComponent
  },
  {
    path: 'the-drums', component: TheDrumsComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
