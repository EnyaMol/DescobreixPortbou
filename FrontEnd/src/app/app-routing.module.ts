import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RutesComponent } from './rutes/rutes.component';
import { PuntsComponent } from './punts/punts.component';
import {AccesComponent} from "./acces/acces.component";

const routes: Routes = [
    {path: '', redirectTo: 'inici', pathMatch: 'full'},
    {path: 'inici', component: HomeComponent},
    {path: 'rutes', component: RutesComponent},
    {path: 'punts', component: PuntsComponent},
    {path: 'acces', component: AccesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
