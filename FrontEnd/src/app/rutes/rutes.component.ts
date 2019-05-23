import { Component, OnInit } from '@angular/core';
import {Ruta} from '../ruta';
import { ApirutesService } from '../apirutes.service';
import {latLng, tileLayer, Icon, icon, Marker, control} from 'leaflet';

import 'leaflet';
import 'leaflet-routing-machine';
import * as L from 'leaflet';


@Component({
  selector: 'app-rutes',
  templateUrl: './rutes.component.html',
  styleUrls: ['./rutes.component.css']
})
export class RutesComponent implements OnInit {
  constructor(private RutesService: ApirutesService) { }
  private id: number;
  private nom = '';
  private desc = '';
  private dis: number;
  private dif: number;

  private rutas: Ruta[];
  options = { zoom: 10, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};

  options2 = { zoom: 13, layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: '© OpenStreetMap contributors'})],
    center: latLng(42.2642651, 2.9477342)};


  // Override default Icons0

  getJSON() {
    this.RutesService.getJSON().subscribe(data => {
      this.rutas = data.rutas;
      console.log(data.rutas);
    },
    err => {
      alert(err);
    });
  }
  onMapReady(map) {
    L.Routing.control({
      waypoints: [
        L.latLng(42.2642651, 2.9477342),
        L.latLng(42.4268649, 3.1214067)
      ]
    }).addTo(map);
  }
  onMap(map2) {
    L.Routing.control({
      waypoints: [
        L.latLng(39.86232, -4.0694704),
        L.latLng(41.3948976, 2.0787274)
      ]
    }).addTo(map2);
  }
  ngOnInit() {
    this.getJSON();
  }
}
